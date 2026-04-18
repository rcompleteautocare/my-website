import Link from "next/link";

export const metadata = {
  title: "Auto Repair in Schererville, IN | R Complete Auto Care",
  description: "Auto repair near Schererville, IN — R Complete Auto Care in Crown Point. Honest diagnostics, expert repairs, extended warranty accepted. (219) 262-2711.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com/auto-repair-schererville-in",
  },

  openGraph: {
    title: "Auto Repair in Schererville, IN | R Complete Auto Care",
    description: "Auto repair near Schererville, IN — R Complete Auto Care in Crown Point. Honest diagnostics, expert repairs, extended warranty accepted. (219) 262-2711.",
    url: "https://www.rcompleteautocare.com/auto-repair-schererville-in",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair in Schererville, IN | R Complete Auto Care",
    description: "Auto repair near Schererville, IN — R Complete Auto Care in Crown Point. Honest diagnostics, expert repairs, extended warranty accepted. (219) 262-2711.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function Schererville() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Serving Schererville, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Auto Repair Near Schererville, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Schererville drivers trust R Complete Auto Care in Crown Point for honest diagnostics, expert repairs, and extended warranty work. Just minutes away.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · About 15 minutes from Schererville · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        ✓ Diagnostic-First &nbsp;|&nbsp; ✓ Foreign & Domestic &nbsp;|&nbsp; ✓ Extended Warranty Accepted &nbsp;|&nbsp; ✓ 25+ Years Family Experience
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>The Auto Repair Shop Schererville Drivers Trust</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          If you're looking for honest, expert auto repair near Schererville, Indiana, R Complete Auto Care in Crown Point is just about 15 minutes away at 1305 E Summit St. We're a diagnostic-first shop — meaning we find the real problem before recommending any repair. No guesswork, no unnecessary work, just honest answers.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Schererville drivers come to us because we give straight answers, fair prices, and repairs that actually fix the problem. Tired of dealership prices and upselling? We built this shop for drivers like you. We work on all foreign and domestic vehicles and proudly accept most extended warranty plans.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Built on over 25 years of family experience in auto repair, we serve Schererville, Crown Point, St. John, Merrillville, and all of Lake County, Indiana.
        </p>
<p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
  Schererville's US-30 corridor — past the Shops at Crosspoint and through the Wicker Park area — generates some of the heaviest stop-and-go traffic in Lake County. That kind of driving is particularly hard on brakes, transmissions, and cooling systems. Drivers along the US-30 and US-41 interchange frequently come to us after local quick-lube shops miss developing problems during routine oil changes.
</p>
<p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
  Getting to us from Schererville is straightforward — take US-30 East to US-231 South into Crown Point, or cut down through St. John via US-41. Either route puts you at our shop in about 15 minutes. We see a lot of vehicles from the newer subdivisions off Cline Avenue and from the commercial district near Target and Menards.
</p>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Auto Repair Services for Schererville Drivers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
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
          ].map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{s.name} →</div>
              <div style={{ fontSize: "13px", color: "#666" }}>{s.desc}</div>
            </Link>
          ))}
        </div>

        <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Find Us From Schererville</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📍 Address</div>
              <div style={{ lineHeight: 1.8, color: "#444" }}>1305 E Summit St<br />Crown Point, IN 46307<br /><span style={{ fontSize: "13px", color: "#666" }}>~15 min from Schererville</span></div>
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

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Auto Repair Near Schererville, IN</h2>
        {[
          { q: "Is there a reliable auto repair shop near Schererville, IN?", a: "R Complete Auto Care in Crown Point — about 15 minutes from Schererville via US-30 or 109th Ave. We're a diagnostic-first shop, accept most extended warranties, and offer same-day service. Call (219) 262-2711." },
          { q: "My car daily-drives the US-30 / Crosspoint corridor — what fails first?", a: "The heavy stop-and-go on US-30 past Crosspoint Mall is hard on transmissions, brakes, and cooling fans. We often see fan clutch failures, premature brake pad wear, and transmission-solenoid complaints on vehicles that live on that stretch." },
          { q: "I bought my extended warranty at the Schererville dealership — can I still use it here?", a: "Almost always yes. Most dealer-sold third-party contracts (Zurich, Endurance, AmTrust, GWC, Fidelity) allow any licensed independent shop. Bring us the contract — we'll confirm coverage and handle the claim end-to-end." },
          { q: "Do you service the Wicker Park neighborhood of Schererville?", a: "Yes — Wicker Park, Chapel Lakes, and the subdivisions off Joliet/Cline are all 12–15 minutes from our shop. We've serviced vehicles from all three for years." },
          { q: "How long is the drive from Schererville?", a: "About 15 minutes via US-30 east to US-41, then south on 109th into Crown Point. Slightly faster via 93rd / 109th during rush hour." },
          { q: "Do you offer same-day diagnostics for Schererville drivers?", a: "Yes — call before 10am and we'll do everything we can to complete the diagnostic the same day and return the vehicle ready to drive." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Schererville Drivers — Call Us Today!</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Just 15 minutes away in Crown Point. Honest diagnostics, expert repairs.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where is the best auto repair shop near Schererville, IN?",
        "acceptedAnswer": { "@type": "Answer", "text": "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307 — about 15 minutes from Schererville. Call (219) 262-2711." }
      },
      {
        "@type": "Question",
        "name": "How far is R Complete Auto Care from Schererville?",
        "acceptedAnswer": { "@type": "Answer", "text": "We're located about 15 minutes from Schererville, Indiana at 1305 E Summit St in Crown Point, IN 46307." }
      },
      {
        "@type": "Question",
        "name": "Do you accept extended warranties for Schererville drivers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We work with most extended warranty providers and handle the entire claims process. Schererville drivers are welcome — call us at (219) 262-2711." }
      },
      {
        "@type": "Question",
        "name": "Do you work on foreign and domestic vehicles?",
        "acceptedAnswer": { "@type": "Answer", "text": "Absolutely — all makes and models including Honda, Toyota, BMW, Mercedes, Ford, Chevrolet, Dodge, Subaru, and more." }
      },
      {
        "@type": "Question",
        "name": "What are your hours?",
        "acceptedAnswer": { "@type": "Answer", "text": "Monday through Friday 8:00 AM to 6:00 PM and Saturday 8:00 AM to 2:00 PM. Closed Sunday." }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day service for Schererville drivers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — most diagnostic appointments and many repairs are completed the same day. Call (219) 262-2711 to schedule." }
      }
    ]
  }).replace(/</g, "\u003c")}}
/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.rcompleteautocare.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Auto Repair Schererville, IN\"}]}".replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://www.rcompleteautocare.com/auto-repair-schererville-in#webpage\",\"url\":\"https://www.rcompleteautocare.com/auto-repair-schererville-in\",\"name\":\"Auto Repair Schererville, IN | R Complete Auto Care\",\"dateModified\":\"2026-04-18\",\"about\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"}}".replace(/</g, "\u003c") }} />
  </div>
  );
}