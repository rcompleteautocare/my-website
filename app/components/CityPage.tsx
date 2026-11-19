import Link from "next/link";
import BookButton from "@/components/BookButton";
import ServiceSchema from "@/app/components/ServiceSchema";
import FaqSchema from "@/app/components/FaqSchema";
import { SERVICE_AREAS } from "@/lib/business";

// Shared layout for city landing pages (Dyer, Munster, Valparaiso). Same
// sections and look as the hand-built city pages such as
// app/auto-repair-hobart-in/page.tsx. All copy comes from the page's own
// CityPageData, so every city page carries unique content; only the markup is
// shared.

const BASE = "https://www.rcompleteautocare.com";

export type CityPageData = {
  /** Town name, e.g. "Dyer". */
  city: string;
  /** Route path, e.g. "/auto-repair-dyer-in". */
  path: string;
  /** Short drive-time phrase used in labels, e.g. "About 25 minutes". */
  driveTime: string;
  /** Hero paragraph. Marked .speakable (TL;DR for voice/AI answers). */
  tldr: string;
  /** Heading above the intro paragraphs. */
  introHeading: string;
  /** Body paragraphs, in order. */
  intro: string[];
  /** Heading + step-by-step route for the directions card. */
  routeHeading: string;
  route: string[];
  /** City-specific FAQs: rendered on the page and emitted as FAQPage schema. */
  faqs: { q: string; a: string }[];
  /** Line under the closing call-to-action heading. */
  ctaLine: string;
  /** ISO date of the last content change (WebPage dateModified). */
  dateModified: string;
};

const SERVICES = [
  { name: "Check Engine Light Diagnostics", href: "/services/check-engine-light", desc: "We find the real cause — not just clear the code." },
  { name: "Electrical Diagnostics", href: "/services/electrical-diagnostics", desc: "Battery, alternator, wiring, sensors and modules." },
  { name: "No-Start Diagnostics", href: "/services/no-start-diagnostics", desc: "Car won't start? We find out exactly why." },
  { name: "Engine Repair", href: "/services/engine-repair", desc: "From minor repairs to full engine replacement." },
  { name: "Transmission Repair", href: "/services/transmission-repair", desc: "Automatic, manual, and CVT transmissions." },
  { name: "Brake Repair", href: "/services/brake-repair", desc: "Pads, rotors, calipers, ABS and brake lines." },
  { name: "Suspension & Steering", href: "/services/suspension-steering", desc: "Shocks, struts, tie rods and alignments." },
  { name: "Oil Change & Maintenance", href: "/services/oil-change-maintenance", desc: "Conventional and synthetic with multi-point inspection." },
  { name: "A/C & Heating Repair", href: "/services/ac-heating-repair", desc: "No cold air or no heat? We fix it." },
  { name: "Extended Warranty Repairs", href: "/services/extended-warranty-repair", desc: "We handle the claim and paperwork for you." },
];

const jsonLd = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });

export default function CityPage({ data }: { data: CityPageData }) {
  const { city, path, driveTime, faqs } = data;
  const url = `${BASE}${path}`;
  const driveTimeLower = driveTime[0].toLowerCase() + driveTime.slice(1);

  return (
    <div style={{ color: "#1a1a1a" }}>
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#f1626f", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Serving {city}, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Auto Repair Near {city}, IN
        </h1>
        <p className="speakable" style={{ fontSize: "18px", color: "#ccc", maxWidth: "620px", margin: "0 auto 32px" }}>
          {data.tldr}
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <BookButton style={{ display: "inline-block", marginLeft: "12px", marginTop: "12px", background: "transparent", color: "#fff", border: "2px solid #fff", padding: "12px 30px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Book Online
        </BookButton>
        <p style={{ color: "#999", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · {driveTime} from {city} · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        ✓ Diagnostic-First &nbsp;|&nbsp; ✓ Foreign &amp; Domestic &nbsp;|&nbsp; ✓ Extended Warranty Accepted
      </section>

      <section style={{ background: "#1a1a1a", color: "#ddd", padding: "12px 24px", textAlign: "center", fontSize: "13px" }}>
        📍 Serving {SERVICE_AREAS.join(" · ")}, Indiana
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>{data.introHeading}</h2>
        {data.intro.map((paragraph, i) => (
          <p key={i} style={{ lineHeight: 1.8, color: "#444", marginBottom: i === data.intro.length - 1 ? "40px" : "20px" }}>
            {paragraph}
          </p>
        ))}

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Auto Repair Services for {city} Drivers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {SERVICES.map((s) => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{s.name} →</div>
              <div style={{ fontSize: "13px", color: "#666" }}>{s.desc}</div>
            </Link>
          ))}
        </div>

        <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>{data.routeHeading}</h2>
          <ol style={{ lineHeight: 1.8, color: "#444", paddingLeft: "20px", margin: "0 0 24px" }}>
            {data.route.map((step) => (
              <li key={step} style={{ marginBottom: "6px" }}>{step}</li>
            ))}
          </ol>
          <p style={{ fontSize: "13px", color: "#666", margin: "0 0 24px" }}>
            Drive times are approximate and vary with traffic, weather and road work.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📍 Address</div>
              <div style={{ lineHeight: 1.8, color: "#444" }}>1305 E Summit St<br />Crown Point, IN 46307<br /><span style={{ fontSize: "13px", color: "#666" }}>{driveTime} from {city}</span></div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>🕐 Hours</div>
              <div style={{ lineHeight: 1.8, color: "#444" }}>Mon–Fri: 8:00 AM – 6:00 PM<br />Saturday: 8:00 AM – 2:00 PM<br />Sunday: Closed</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📞 Phone</div>
              <div><a href="tel:2192622711" style={{ color: "#1a1a1a", fontWeight: "bold", fontSize: "18px" }}>(219) 262-2711</a></div>
            </div>
          </div>
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Auto Repair Near {city}, IN</h2>
        {faqs.map((item) => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>{city} Drivers — Call Us Today</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>{data.ctaLine}</p>
        <p style={{ marginBottom: "24px", opacity: 0.85, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307 · {driveTimeLower} from {city}</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <BookButton style={{ display: "inline-block", marginLeft: "12px", marginTop: "12px", background: "transparent", color: "#fff", border: "2px solid #fff", padding: "12px 34px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Book Online
        </BookButton>
      </section>

      <FaqSchema faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: `Auto Repair ${city}, IN` },
        ],
      })} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `Auto Repair Near ${city}, IN | R Complete Auto Care`,
        dateModified: data.dateModified,
        about: { "@id": `${BASE}/#business` },
      })} />
      <ServiceSchema name={`Auto Repair Near ${city}, IN`} serviceType="Auto repair" path={path} />
    </div>
  );
}
