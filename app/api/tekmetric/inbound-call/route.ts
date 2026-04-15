export const runtime = "edge";

function cleanDigits(value: unknown): string {
  return String(value ?? "").replace(/\D/g, "").slice(-10);
}

function normalizeName(input: unknown) {
  const safe = String(input ?? "").trim();
  if (!safe) return { firstName: "Unknown", lastName: "Caller" };
  const parts = safe.split(/\s+/);
  const firstName = parts.shift() || "Unknown";
  const lastName = parts.length ? parts.join(" ") : "Caller";
  return { firstName, lastName };
}

function normalizeTekmetricPhone(customer: any): string {
  return cleanDigits(customer?.mobilePhone || customer?.phone);
}

export async function POST(req: Request) {
  const INTERNAL_KEY = process.env.INTERNAL_KEY;
  if (!INTERNAL_KEY) {
    console.error("Missing INTERNAL_KEY env var");
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const authHeader = req.headers.get("authorization") ?? "";
  if (authHeader !== `Bearer ${INTERNAL_KEY}`) {
    console.warn("Unauthorized inbound-call request", {
      authHeaderLength: authHeader.length,
    });
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: any;
  try {
    body = await req.json();
  } catch (err) {
    console.error("Inbound call error: invalid JSON", err);
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { phone, name, result, duration, timestamp, source } = body || {};

  const cleanPhone = cleanDigits(phone);
  if (!cleanPhone) {
    return new Response(JSON.stringify({ error: "Phone is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const TEKMETRIC_API_KEY = process.env.TEKMETRIC_API_KEY;
  if (!TEKMETRIC_API_KEY) {
    console.error("Missing TEKMETRIC_API_KEY env var");
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const TEKMETRIC_BASE_URL =
    process.env.TEKMETRIC_BASE_URL || "https://shop.tekmetric.com/api/v1";
  const TEKMETRIC_SHOP_ID = process.env.TEKMETRIC_SHOP_ID;

  try {
    const params = new URLSearchParams();
    params.append("phone", cleanPhone);
    if (TEKMETRIC_SHOP_ID) params.append("shopId", String(TEKMETRIC_SHOP_ID));

    // Search for customer by phone (Tekmetric spec shows the response in data[])
    const searchRes = await fetch(
      `${TEKMETRIC_BASE_URL}/customers?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${TEKMETRIC_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!searchRes.ok) {
      const text = await searchRes.text();
      throw new Error(`Tekmetric search failed: ${searchRes.status} ${text}`);
    }

    const searchData = await searchRes.json();
    const customers = Array.isArray(searchData?.data)
      ? searchData.data
      : Array.isArray(searchData)
      ? searchData
      : [];

    // do client-side exact match on phone fields in case the server-side search is fuzzy
    const exactMatch = customers.find((c: any) =>
      normalizeTekmetricPhone(c) === cleanPhone
    );

    let customerId: string | number | null = exactMatch?.id ?? customers?.[0]?.id ?? null;

    // Create customer if not found
    if (!customerId) {
      const { firstName, lastName } = normalizeName(name);
      const createRes = await fetch(`${TEKMETRIC_BASE_URL}/customers`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TEKMETRIC_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone: cleanPhone,
        }),
      });

      if (!createRes.ok) {
        const text = await createRes.text();
        throw new Error(
          `Tekmetric customer create failed: ${createRes.status} ${text}`
        );
      }

      const newCustomer = await createRes.json();
      customerId = newCustomer?.id;
    }

    if (!customerId) {
      throw new Error("Customer ID missing after search/create");
    }

    let tag = "Inbound Call";
    if (Number(duration) < 15) tag = "Missed Opportunity";
    if (result === "Missed") tag = "Missed Call";

    const noteText = `${tag} | Result: ${result} | Duration: ${duration}s | Source: ${
      source || "RingCentral"
    } | Timestamp: ${timestamp}`;

    const noteRes = await fetch(`${TEKMETRIC_BASE_URL}/customers/${customerId}/notes`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TEKMETRIC_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: noteText,
        type: "internal",
      }),
    });

    if (!noteRes.ok) {
      const text = await noteRes.text();
      throw new Error(`Tekmetric note create failed: ${noteRes.status} ${text}`);
    }

    console.log("Inbound call processed", { cleanPhone, customerId, tag });

    return new Response(JSON.stringify({ success: true, customerId, tag }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Inbound call error", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
