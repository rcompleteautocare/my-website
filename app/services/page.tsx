import Link from "next/link";
import LastUpdated from "@/app/components/LastUpdated";

export const metadata = {
  title: "Auto Repair Services in Crown Point, IN | R Complete Auto Care",
  description: "Full list of auto repair services at R Complete Auto Care in Crown Point, IN — diagnostics, engine, transmission, brakes, electrical, A/C, extended warranty. (219) 262-2711.",
  alternates: { canonical: "https://www.rcompleteautocare.com/services" },
  openGraph: {
    title: "Auto Repair Services — R Complete Auto Care",
    description: "Full list of auto repair services at R Complete Auto Care in Crown Point, IN.",
    url: "https://www.rcompleteautocare.com/services",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair Services — R Complete Auto Care",
    description: "Full list of auto repair services at R Complete Auto Care in Crown Point, IN.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

const services = [
  { name: "Auto Diagnostics", href: "/services/diagnostics", desc: "Full-vehicle diagnostic scan and root-cause analysis — the starting point for every repair we do." },
  { name: "Check Engine Light Diagnostics", href: "/services/check-engine-light", desc: "We find the real cause — not just clear the code. OBD-II scan plus live data and system testing." },
  { name: "Electrical Diagnostics", href: "/services/electrical-diagnostics", desc: "Battery, alternator, wiring, sensors and modules. Voltage-drop and load testing, not guesswork." },
  { name: "No-Start Diagnostics", href: "/services/no-start-diagnostics", desc: "No crank, crank-no-start, or intermittent — a different test sequence for each symptom." },
  { name: "Engine Repair", href: "/services/engine-repair", desc: "Oil leaks, misfires, timing, cooling-system failures through full engine replacement." },
  { name: "Transmission Repair", href: "/services/transmission-repair", desc: "Automatic, manual, and CVT — fluid service, solenoid work, rebuilds and replacements." },
  { name: "Brake Repair", href: "/services/brake-repair", desc: "Pads, rotors, calipers, ABS, brake lines. Measurements-based inspections with honest recommendations." },
  { name: "Suspension & Steering", href: "/services/suspension-steering", desc: "Shocks, struts, tie rods, control arms, and alignment-related wear." },
  { name: "Oil Change & Maintenance", href: "/services/oil-change-maintenance", desc: "Conventional and full synthetic oil service with a multi-point inspection on every visit." },
  { name: "A/C & Heating Repair", href: "/services/ac-heating-repair", desc: "Weak cooling, no heat, strange smells — refrigerant service, heater cores, blend doors." },
  { name: "Extended Warranty Repairs", href: "/services/extended-warranty-repair", desc: "CarShield, Endurance, CARS, Zurich and more. We verify coverage and handle the claim." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.rcompleteautocare.com/services#page",
  "url": "https://www.rcompleteautocare.com/services",
  "name": "Auto Repair Services in Crown Point, IN",
  "description": "All services offered by R Complete Auto Care in Crown Point, Indiana.",
  "dateModified": "2026-04-18",
  "about": { "@id": "https://www.rcompleteautocare.com/#business" },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": services.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": s.name,
      "url": `https://www.rcompleteautocare.com${s.href}`,
    })),
  },
};

const BREADCRUMBS = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.rcompleteautocare.com/services" },
  ],
};

export default function ServicesIndex() {
  return (
    <div style={{ color: "#1a1a1a" }}>
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px", lineHeight: 1.2 }}>
          Auto Repair Services in Crown Point, IN
        </h1>
        <p className="speakable" style={{ fontSize: "16px", color: "#e63946", fontWeight: "600", marginBottom: "16px", fontStyle: "italic" }}>
          TL;DR: A diagnostic-first shop offering 11 services — from check-engine-light diagnostics and brake repair to full engine/transmission work and extended-warranty claims — all under one roof at 1305 E Summit St, Crown Point, IN.
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Every repair starts with a proper diagnostic. We find the real problem, give you a clear estimate, and fix it right the first time.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake, Indiana
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "960px", margin: "0 auto" }}>
        <LastUpdated date="2026-04-18" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
          {services.map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "20px", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
              <div style={{ fontWeight: "bold", fontSize: "17px", marginBottom: "6px" }}>{s.name} →</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{s.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Not Sure Which Service You Need?</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Call us with the symptom. We&apos;ll start with a diagnostic and tell you exactly what your vehicle needs.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMBS).replace(/</g, "\\u003c") }} />
    </div>
  );
}
