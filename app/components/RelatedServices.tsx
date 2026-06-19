import Link from "next/link";

// Server-rendered (no "use client") cross-link block for service pages.
// Renders 3 contextually related service links with descriptive, location-
// qualified anchor text so the links are meaningful to crawlers and readers.

export type ServiceSlug =
  | "ac-heating-repair"
  | "brake-repair"
  | "check-engine-light"
  | "electrical-diagnostics"
  | "engine-repair"
  | "extended-warranty-repair"
  | "no-start-diagnostics"
  | "oil-change-maintenance"
  | "suspension-steering"
  | "transmission-repair";

// Descriptive anchor text + short blurb for each service.
const SERVICES: Record<ServiceSlug, { anchor: string; desc: string }> = {
  "check-engine-light": {
    anchor: "Check Engine Light Diagnostics in Crown Point, IN",
    desc: "We find the real cause — not just clear the code.",
  },
  "no-start-diagnostics": {
    anchor: "No-Start Diagnostics in Crown Point, IN",
    desc: "No crank or crank-no-start? We find out exactly why.",
  },
  "electrical-diagnostics": {
    anchor: "Electrical Diagnostics in Crown Point, IN",
    desc: "Battery, alternator, wiring, sensors, and modules.",
  },
  "engine-repair": {
    anchor: "Engine Repair in Crown Point, IN",
    desc: "From oil leaks and misfires to full engine replacement.",
  },
  "transmission-repair": {
    anchor: "Transmission Repair in Crown Point, IN",
    desc: "Automatic, manual, and CVT — service through rebuilds.",
  },
  "brake-repair": {
    anchor: "Brake Repair in Crown Point, IN",
    desc: "Pads, rotors, calipers, ABS, and brake lines.",
  },
  "suspension-steering": {
    anchor: "Suspension & Steering Repair in Crown Point, IN",
    desc: "Shocks, struts, tie rods, and alignment-related wear.",
  },
  "oil-change-maintenance": {
    anchor: "Oil Change & Maintenance in Crown Point, IN",
    desc: "Conventional and synthetic with a multi-point inspection.",
  },
  "ac-heating-repair": {
    anchor: "A/C & Heating Repair in Crown Point, IN",
    desc: "Weak cooling or no heat — refrigerant, heater cores, blend doors.",
  },
  "extended-warranty-repair": {
    anchor: "Extended Warranty Repairs in Crown Point, IN",
    desc: "We verify coverage and handle the claim for you.",
  },
};

// Static relatedness map — 3 contextually related services per page.
const RELATED: Record<ServiceSlug, ServiceSlug[]> = {
  "check-engine-light": ["engine-repair", "no-start-diagnostics", "electrical-diagnostics"],
  "no-start-diagnostics": ["electrical-diagnostics", "check-engine-light", "engine-repair"],
  "electrical-diagnostics": ["check-engine-light", "no-start-diagnostics", "engine-repair"],
  "engine-repair": ["check-engine-light", "transmission-repair", "extended-warranty-repair"],
  "transmission-repair": ["engine-repair", "check-engine-light", "extended-warranty-repair"],
  "brake-repair": ["suspension-steering", "oil-change-maintenance", "check-engine-light"],
  "suspension-steering": ["brake-repair", "oil-change-maintenance", "engine-repair"],
  "oil-change-maintenance": ["brake-repair", "suspension-steering", "ac-heating-repair"],
  "ac-heating-repair": ["electrical-diagnostics", "engine-repair", "extended-warranty-repair"],
  "extended-warranty-repair": ["engine-repair", "transmission-repair", "check-engine-light"],
};

export default function RelatedServices({ slug }: { slug: ServiceSlug }) {
  const related = RELATED[slug];
  if (!related) return null;

  return (
    <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services in Crown Point, IN</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
        {related.map((s) => (
          <Link
            key={s}
            href={`/services/${s}`}
            style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "14px 16px", textDecoration: "none", color: "#1a1a1a", display: "block" }}
          >
            <span style={{ fontWeight: "bold", fontSize: "15px", display: "block", marginBottom: "4px" }}>
              {SERVICES[s].anchor} →
            </span>
            <span style={{ fontSize: "13px", color: "#666" }}>{SERVICES[s].desc}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
