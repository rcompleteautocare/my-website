import Link from "next/link";
import ServiceSchema from "@/app/components/ServiceSchema";

export const metadata = {
  title: "Auto Repair in Lowell, IN | R Complete Auto Care",
  description: "Auto repair near Lowell, IN — R Complete Auto Care in Crown Point, about 15 minutes north via I-65. Diagnostic-first, extended warranty accepted. (219) 262-2711.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com/auto-repair-lowell-in",
  },
  openGraph: {
    title: "Auto Repair in Lowell, IN | R Complete Auto Care",
    description: "Auto repair near Lowell, IN — R Complete Auto Care in Crown Point, about 15 minutes north via I-65. Diagnostic-first, extended warranty accepted. (219) 262-2711.",
    url: "https://www.rcompleteautocare.com/auto-repair-lowell-in",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair in Lowell, IN | R Complete Auto Care",
    description: "Auto repair near Lowell, IN — R Complete Auto Care in Crown Point, about 15 minutes north via I-65. Diagnostic-first, extended warranty accepted. (219) 262-2711.",
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
  { q: "Is there a trusted auto repair shop near Lowell, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point — about 15 minutes north of Lowell via I-65 to the US-231 exit, or up Colfax Street. We're a diagnostic-first shop and accept most extended warranties. Call (219) 262-2711." },
  { q: "How far is your shop from Lowell?", a: "About 15 minutes. Most Lowell drivers take I-65 north a few exits to US-231 and head west into Crown Point, or come straight up Colfax Street (SR-55) — no interstate required." },
  { q: "I drive a lot of I-65 and county-road miles — what should I watch for?", a: "Highway commuting on I-65 puts steady heat into tires, wheel bearings, and transmission fluid, while gravel and county roads around Lowell are hard on suspension, tie rods, and alignment. We check all of those on a diagnostic so nothing sneaks up on you." },
  { q: "Do you service trucks that tow boats and trailers near Cedar Lake?", a: "Yes. Towing to Cedar Lake and the campgrounds south of Lowell works the cooling system, brakes, and transmission hard. We inspect trailer-tow wear points and cooling capacity before the busy season, not after something overheats." },
  { q: "Do you accept extended warranties for Lowell drivers?", a: "Yes — we work with CarShield, Endurance, CARS Protection, Zurich, AmTrust and most providers. We verify coverage before you bring the vehicle in so you know what's covered before any work begins." },
  { q: "Can you handle winter no-start and heater problems?", a: "Yes. Lowell's open, rural stretches get cold and windy, which is hard on batteries, glow plugs on diesels, and heater cores. If your vehicle is slow to start or slow to warm up, we test the actual cause before replacing parts." },
];

export default function Lowell() {
  return (
    <div style={{ color: "#1a1a1a" }}>
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#f1626f", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Serving Lowell, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Auto Repair Near Lowell, IN
        </h1>
        <p className="speakable" style={{ fontSize: "18px", color: "#ccc", maxWidth: "620px", margin: "0 auto 32px" }}>
          Lowell drivers trust R Complete Auto Care in Crown Point for diagnostic-first repair — about 15 minutes north via I-65 or Colfax Street. Honest answers, extended warranty work, and repairs that actually fix the problem.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · About 15 minutes from Lowell · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        ✓ Diagnostic-First &nbsp;|&nbsp; ✓ Foreign &amp; Domestic &nbsp;|&nbsp; ✓ Extended Warranty Accepted &nbsp;|&nbsp; ✓ 25+ Years Family Experience
      </section>

      <section style={{ background: "#1a1a1a", color: "#ddd", padding: "12px 24px", textAlign: "center", fontSize: "13px" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake · Lowell · Hobart, Indiana
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>The Auto Repair Shop Lowell Drivers Trust</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          If you&apos;re looking for honest, expert auto repair near Lowell, Indiana, R Complete Auto Care is about 15 minutes north in Crown Point at 1305 E Summit St. We&apos;re a diagnostic-first shop — we find the real problem before recommending any repair, so you never pay for guesswork.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Lowell is a highway-and-county-road town. A lot of daily miles happen on I-65 and US-231, while errands and school runs down Commercial Avenue (Route 2) and out toward Buckley Homestead add up on rougher back roads. That combination wears vehicles in two very different ways — heat and highway strain on the powertrain, and impact and vibration on the suspension. We look at both when your vehicle comes in.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          The drive to our shop is simple: north on I-65 a few exits to US-231 and west into Crown Point, or straight up Colfax Street (SR-55). No interstate is required if you&apos;d rather stay on surface streets. We work on all foreign and domestic vehicles and accept most extended warranty plans.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We see a lot of Lowell trucks and SUVs that tow — boats and campers heading to Cedar Lake, trailers for work, and equipment for the farms south of town. Towing is hard on cooling systems, brakes, and transmissions, so we pay close attention to those systems and flag wear before a hot summer haul turns into a roadside problem. Built on 25+ years of family experience, we serve Lowell, Cedar Lake, Crown Point, and all of southern Lake County, Indiana.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Auto Repair Services for Lowell Drivers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {SERVICES.map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{s.name} →</div>
              <div style={{ fontSize: "13px", color: "#666" }}>{s.desc}</div>
            </Link>
          ))}
        </div>

        <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Find Us From Lowell</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📍 Address</div>
              <div style={{ lineHeight: 1.8, color: "#444" }}>1305 E Summit St<br />Crown Point, IN 46307<br /><span style={{ fontSize: "13px", color: "#666" }}>~15 min from Lowell</span></div>
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

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Auto Repair Near Lowell, IN</h2>
        {FAQS.map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Lowell Drivers — Call Us Today!</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>About 15 minutes north in Crown Point. Honest diagnostics, expert repairs.</p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.rcompleteautocare.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Auto Repair Lowell, IN\"}]}".replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://www.rcompleteautocare.com/auto-repair-lowell-in#webpage\",\"url\":\"https://www.rcompleteautocare.com/auto-repair-lowell-in\",\"name\":\"Auto Repair Lowell, IN | R Complete Auto Care\",\"dateModified\":\"2026-07-16\",\"about\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"}}".replace(/</g, "\\u003c") }} />
      <ServiceSchema name="Auto Repair Near Lowell, IN" serviceType="Auto repair" path="/auto-repair-lowell-in" />
    </div>
  );
}
