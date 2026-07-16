import Link from "next/link";
import ServiceSchema from "@/app/components/ServiceSchema";

export const metadata = {
  title: "Auto Repair in Hobart, IN | R Complete Auto Care",
  description: "Auto repair near Hobart, IN — R Complete Auto Care in Crown Point, about 15 minutes south via SR-51 or I-65. Diagnostic-first, extended warranty accepted. (219) 262-2711.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com/auto-repair-hobart-in",
  },
  openGraph: {
    title: "Auto Repair in Hobart, IN | R Complete Auto Care",
    description: "Auto repair near Hobart, IN — R Complete Auto Care in Crown Point, about 15 minutes south via SR-51 or I-65. Diagnostic-first, extended warranty accepted. (219) 262-2711.",
    url: "https://www.rcompleteautocare.com/auto-repair-hobart-in",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair in Hobart, IN | R Complete Auto Care",
    description: "Auto repair near Hobart, IN — R Complete Auto Care in Crown Point, about 15 minutes south via SR-51 or I-65. Diagnostic-first, extended warranty accepted. (219) 262-2711.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
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

const FAQS = [
  { q: "Is there a trusted auto repair shop near Hobart, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point — about 15 minutes south of Hobart via SR-51 to US-30, or down I-65. We're a diagnostic-first shop and accept most extended warranties. Call (219) 262-2711." },
  { q: "How far is your shop from Hobart?", a: "About 15 minutes. Most Hobart drivers head south on SR-51 (Colorado Street) to US-30 and into Crown Point, or take I-65 south a couple of exits — either way avoids the worst of the retail traffic." },
  { q: "I do a lot of stop-and-go on US-30 near Southlake Mall — what wears out first?", a: "Constant stop-and-go along the US-30 retail corridor and around Southlake Mall is hard on brakes, transmission torque converters, and cooling systems that sit idling in traffic. We measure brake and fluid condition on a diagnostic so you can plan ahead instead of reacting to a warning light." },
  { q: "Hobart winters get rough near the lake — can you help with cold-start problems?", a: "Yes. Lake-effect cold off Lake Michigan is hard on batteries, starters, and heater cores. If your vehicle cranks slowly, won't start, or is slow to blow warm air, we test the actual cause before replacing parts so the fix holds through the season." },
  { q: "Do you accept extended warranties for Hobart drivers?", a: "Yes — we work with CarShield, Endurance, CARS Protection, Zurich, AmTrust and most providers. We verify coverage before you bring the vehicle in so you know what's covered before any work begins." },
  { q: "Do you service vehicles from the Deep River and downtown Lake George areas?", a: "Yes. Whether you're near Deep River County Park, downtown Hobart on Lake George, or out by US-6, the drive to our Crown Point shop is a straightforward 15 minutes. Call (219) 262-2711 and we'll coordinate a drop-off that fits your day." },
];

export default function Hobart() {
  return (
    <div style={{ color: "#1a1a1a" }}>
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#f1626f", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Serving Hobart, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Auto Repair Near Hobart, IN
        </h1>
        <p className="speakable" style={{ fontSize: "18px", color: "#ccc", maxWidth: "620px", margin: "0 auto 32px" }}>
          Hobart drivers trust R Complete Auto Care in Crown Point for diagnostic-first repair — about 15 minutes south via SR-51 or I-65. Honest answers, extended warranty work, and repairs that actually fix the problem.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · About 15 minutes from Hobart · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        ✓ Diagnostic-First &nbsp;|&nbsp; ✓ Foreign &amp; Domestic &nbsp;|&nbsp; ✓ Extended Warranty Accepted &nbsp;|&nbsp; ✓ 25+ Years Family Experience
      </section>

      <section style={{ background: "#1a1a1a", color: "#ddd", padding: "12px 24px", textAlign: "center", fontSize: "13px" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake · Lowell · Hobart, Indiana
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>The Auto Repair Shop Hobart Drivers Trust</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          If you&apos;re looking for honest, expert auto repair near Hobart, Indiana, R Complete Auto Care is about 15 minutes south in Crown Point at 1305 E Summit St. We&apos;re a diagnostic-first shop — we find the real problem before recommending any repair, so there&apos;s no guesswork and no unnecessary work.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Hobart drivers put a lot of miles on the US-30 retail corridor and around Southlake Mall, where constant stop-and-go quietly wears out brakes, torque converters, and cooling systems that sit and idle in traffic. Add the downtown routes around Lake George and the commute down SR-51, and you get a mix of low-speed stress and open-road heat that shows up in very different repairs. We look at both when your vehicle comes in.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Getting to us is easy: south on SR-51 (Colorado Street) to US-30 and west into Crown Point, or a couple of exits down I-65. We work on all foreign and domestic vehicles and accept most extended warranty plans.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Hobart&apos;s spot near Lake Michigan means real lake-effect winters, and that&apos;s hard on batteries, starters, and heater cores. Every fall we see cold-start and no-heat complaints from Hobart, Lake Station, and the Deep River area — and we test the actual cause instead of throwing a battery at it and hoping. Built on 25+ years of family experience, we serve Hobart, Merrillville, Crown Point, and all of northern Lake County, Indiana.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Auto Repair Services for Hobart Drivers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {SERVICES.map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{s.name} →</div>
              <div style={{ fontSize: "13px", color: "#666" }}>{s.desc}</div>
            </Link>
          ))}
        </div>

        <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Find Us From Hobart</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📍 Address</div>
              <div style={{ lineHeight: 1.8, color: "#444" }}>1305 E Summit St<br />Crown Point, IN 46307<br /><span style={{ fontSize: "13px", color: "#666" }}>~15 min from Hobart</span></div>
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

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Auto Repair Near Hobart, IN</h2>
        {FAQS.map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Hobart Drivers — Call Us Today!</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>About 15 minutes south in Crown Point. Honest diagnostics, expert repairs.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      }).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.rcompleteautocare.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Auto Repair Hobart, IN\"}]}".replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://www.rcompleteautocare.com/auto-repair-hobart-in#webpage\",\"url\":\"https://www.rcompleteautocare.com/auto-repair-hobart-in\",\"name\":\"Auto Repair Hobart, IN | R Complete Auto Care\",\"dateModified\":\"2026-07-16\",\"about\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"}}".replace(/</g, "\\u003c") }} />
      <ServiceSchema name="Auto Repair Near Hobart, IN" serviceType="Auto repair" path="/auto-repair-hobart-in" />
    </div>
  );
}
