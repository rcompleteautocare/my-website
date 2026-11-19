import { auth } from "@/auth";
import { getPrisma } from "@/lib/prisma";

// Command Center global search over real records (customers, vehicles, repair
// orders). Requires a signed-in session. Returns an empty list when nothing
// matches; it never returns placeholder or demo records.

export const dynamic = "force-dynamic";

type SearchResult = { type: "Customer" | "Vehicle" | "Repair Order"; title: string; subtitle: string };

const MIN_QUERY_LENGTH = 2;
const MAX_QUERY_LENGTH = 80;
const PER_TYPE = 5;

const contains = (value: string) => ({ contains: value, mode: "insensitive" as const });

export async function GET(request: Request) {
  const session = await auth();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const q = new URL(request.url).searchParams.get("q")?.trim().slice(0, MAX_QUERY_LENGTH) ?? "";
  if (q.length < MIN_QUERY_LENGTH) return Response.json({ results: [] });

  const digits = q.replace(/\D/g, "");
  const year = /^\d{4}$/.test(q) ? Number(q) : null;
  // "jordan bennett" should match first + last name, so every word must match
  // one of the name fields.
  const words = q.split(/\s+/).filter(Boolean);

  try {
    const db = getPrisma();
    const [customers, vehicles, repairOrders] = await Promise.all([
      db.customer.findMany({
        where: {
          OR: [
            { AND: words.map((word) => ({ OR: [{ firstName: contains(word) }, { lastName: contains(word) }] })) },
            { email: contains(q) },
            { phone: contains(q) },
            ...(digits.length >= 3 ? [{ normalizedPhone: { contains: digits } }] : []),
          ],
        },
        select: { firstName: true, lastName: true, phone: true, city: true },
        orderBy: [{ lastName: "asc" }, { firstName: "asc" }],
        take: PER_TYPE,
      }),
      db.vehicle.findMany({
        where: {
          OR: [
            { AND: words.map((word) => ({ OR: [{ make: contains(word) }, { model: contains(word) }, ...(/^\d{4}$/.test(word) ? [{ year: Number(word) }] : [])] })) },
            { vin: contains(q) },
            { licensePlate: contains(q) },
            ...(year ? [{ year }] : []),
          ],
        },
        select: { year: true, make: true, model: true, vin: true, customer: { select: { firstName: true, lastName: true } } },
        orderBy: { updatedAt: "desc" },
        take: PER_TYPE,
      }),
      db.repairOrder.findMany({
        where: { OR: [{ number: contains(q) }, { concern: contains(q) }] },
        select: { number: true, status: true, vehicle: { select: { year: true, make: true, model: true } } },
        orderBy: { updatedAt: "desc" },
        take: PER_TYPE,
      }),
    ]);

    const results: SearchResult[] = [
      ...customers.map((c) => ({
        type: "Customer" as const,
        title: `${c.firstName} ${c.lastName}`.trim(),
        subtitle: [c.phone, c.city].filter(Boolean).join(" · "),
      })),
      ...vehicles.map((v) => ({
        type: "Vehicle" as const,
        title: `${v.year} ${v.make} ${v.model}`,
        // Only the last 6 of the VIN, matching how VINs are shown elsewhere.
        subtitle: [`${v.customer.firstName} ${v.customer.lastName}`.trim(), `VIN •••${v.vin.slice(-6)}`].filter(Boolean).join(" · "),
      })),
      ...repairOrders.map((ro) => ({
        type: "Repair Order" as const,
        title: ro.number,
        subtitle: [`${ro.vehicle.year} ${ro.vehicle.make} ${ro.vehicle.model}`, ro.status.replace(/_/g, " ").toLowerCase()].join(" · "),
      })),
    ];
    return Response.json({ results });
  } catch (error) {
    // Database unreachable or not migrated: say so instead of inventing results.
    console.error("search: query failed", error);
    return Response.json({ results: [], error: "Search is temporarily unavailable." }, { status: 503 });
  }
}
