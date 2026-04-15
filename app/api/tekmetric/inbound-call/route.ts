export const runtime = "edge";

export async function POST(req: Request) {
  const INTERNAL_KEY = process.env.INTERNAL_KEY;
  if (!INTERNAL_KEY) {
    console.error("Missing INTERNAL_KEY env var");
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const authHeader = req.headers.get("authorization") || "";
  if (authHeader !== `Bearer ${INTERNAL_KEY}`) {
    console.warn("Unauthorized inbound-call request", { authHeaderLength: authHeader.length });
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { phone, name, result, duration, timestamp, source } = await req.json();
    const cleanPhone = String(phone || "").replace(/\D/g, "").slice(-10);

    const TEKMETRIC_API_KEY = process.env.TEKMETRIC_API_KEY;
    if (!TEKMETRIC_API_KEY) {
      console.error("Missing TEKMETRIC_API_KEY env var");
      return new Response(JSON.stringify({ error: "Server misconfigured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const TEKMETRIC_BASE_URL = process.env.TEKMETRIC_BASE_URL || "https://api.tekmetric.com/v1";

    // Search for customer by phone
    const searchRes = await fetch(`${TEKMETRIC_BASE_URL}/customers?phone=${cleanPhone}`, {
      headers: {
        Authorization: `Bearer ${TEKMETRIC_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    if (!searchRes.ok) {
      const text = await searchRes.text();
      throw new Error(`Tekmetric search failed: ${searchRes.status} ${text}`);
    }

    const searchData = await searchRes.json();

    let customerId: string | null = null;
    if (Array.isArray(searchData) && searchData.length > 0) {
      customerId = searchData[0]?.id || null;
    }

    // Create customer if not found
    if (!customerId) {
      const createRes = await fetch(`${TEKMETRIC_BASE_URL}/customers`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TEKMETRIC_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: name || "Unknown",
          lastName: "Caller",
          phone: cleanPhone,
          source: "Inbound Call - RingCentral",
        }),
      });

      if (!createRes.ok) {
        const text = await createRes.text();
        throw new Error(`Tekmetric customer create failed: ${createRes.status} ${text}`);
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

    const noteText = `${tag} | Result: ${result} | Duration: ${duration}s | Source: ${source || "RingCentral"} | Timestamp: ${timestamp}`;

    const noteRes = await fetch(`${TEKMETRIC_BASE_URL}/notes`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TEKMETRIC_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerId,
        note: noteText,
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
