import Link from "next/link";

export const metadata = {
  title: "Auto Repair in St. John, IN | R Complete Auto Care",
  description: "Auto repair near St. John, IN — R Complete Auto Care in Crown Point. Honest diagnostics, expert repairs, extended warranty accepted. (219) 262-2711.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com/auto-repair-st-john-in",
  },

  openGraph: {
    title: "Auto Repair in St. John, IN | R Complete Auto Care",
    description: "Auto repair near St. John, IN — R Complete Auto Care in Crown Point. Honest diagnostics, expert repairs, extended warranty accepted. (219) 262-2711.",
    url: "https://www.rcompleteautocare.com/auto-repair-st-john-in",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair in St. John, IN | R Complete Auto Care",
    description: "Auto repair near St. John, IN — R Complete Auto Care in Crown Point. Honest diagnostics, expert repairs, extended warranty accepted. (219) 262-2711.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function StJohn() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Serving St. John, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Auto Repair Near St. John, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          St. John drivers trust R Complete Auto Care in Crown Point for honest diagnostics, expert repairs, and extended warranty work. Just minutes away.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · About 10 minutes from St. John · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        ✓ Diagnostic-First &nbsp;|&nbsp; ✓ Foreign & Domestic &nbsp;|&nbsp; ✓ Extended Warranty Accepted &nbsp;|&nbsp; ✓ 25+ Years Family Experience
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>The Auto Repair Shop St. John Drivers Trust</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          If you're looking for honest, expert auto repair near St. John, Indiana, R Complete Auto Care in Crown Point is just about 10 minutes away at 1305 E Summit St. We're a diagnostic-first shop — meaning we find the real problem before recommending any repair. No guesswork, no unnecessary work.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          St. John drivers come to us because we give straight answers, fair prices, and repairs that actually fix the problem. We work on all foreign and domestic vehicles and proudly accept most extended warranty plans.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Built on over 25 years of family experience in auto repair, we serve St. John, Crown Point, Dyer, Lowell, and all of Lake County, Indiana.
        </p>
<p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
  St. John sits at the crossroads of US-41 and Route 231, which means a lot of daily commuting — and a lot of miles accumulating on vehicles faster than most drivers expect. The Lake Hills and Heron Lake neighborhoods feed directly into Summit Street via US-41 North, making our Crown Point shop a straightforward 10-minute drive with no highway required. Many St. John drivers heading to work in Crown Point or Lowell pass within a mile of our shop.
</p>
<p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
  We see a regular pattern of vehicles from St. John with extended warranty coverage through dealership-sold plans from the US-41 corridor dealerships. If you purchased a vehicle from one of those dealers and have a warranty through Zurich or a similar provider, we work with those plans directly. Call us with your contract number before you bring it in.
</p>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Auto Repair Services for St. John Drivers</h2>
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
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Find Us From St. John</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📍 Address</div>
              <div style={{ lineHeight: 1.8, color: "#444" }}>1305 E Summit St<br />Crown Point, IN 46307<br /><span style={{ fontSize: "13px", color: "#666" }}>~10 min from St. John</span></div>
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

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Auto Repair Near St. John, IN</h2>
        {[
          { q: "Is there a trusted auto repair shop near St. John, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point — about 10 minutes from St. John via US-41 or 109th Ave. We're a diagnostic-first shop and accept most extended warranties. Call (219) 262-2711." },
          { q: "Do you service the Lake Hills and Heron Lake neighborhoods?", a: "Yes — Lake Hills and Heron Lake drivers are frequent customers. The drive is typically 10–12 minutes via 109th Ave or Parrish Ave." },
          { q: "I commute US-41 and Route 231 daily — what should I watch for on my vehicle?", a: "Heavy stop-and-go on US-41 accelerates brake wear and torque-converter strain. Long highway stretches on 231 show their wear in tires and front-end alignment. We check all of those on a diagnostic so you know what's next on your maintenance timeline." },
          { q: "Can I drop off in St. John and get a ride back?", a: "We schedule drop-offs to make it easy for St. John commuters. Call ahead at (219) 262-2711 and we'll coordinate the time window and keep you updated by phone while your vehicle is in." },
          { q: "Do you accept extended warranties for St. John drivers?", a: "Yes — we work with CarShield, Endurance, CARS Protection, Zurich, AmTrust and most providers. We verify coverage before you bring the vehicle in so you know exactly what's covered." },
          { q: "Do you handle dealer-sold warranty work for vehicles bought in Schererville or Merrillville?", a: "Yes — as long as the plan allows an independent shop (most do), we can submit and service the claim. Bring us the contract and we'll read the fine print with you." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>St. John Drivers — Call Us Today!</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Just 10 minutes away in Crown Point. Honest diagnostics, expert repairs.</p>
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
        "name": "Where is the best auto repair shop near St. John, IN?",
        "acceptedAnswer": { "@type": "Answer", "text": "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307 — just about 10 minutes from St. John. Call (219) 262-2711." }
      },
      {
        "@type": "Question",
        "name": "How far is R Complete Auto Care from St. John?",
        "acceptedAnswer": { "@type": "Answer", "text": "We're located about 10 minutes from St. John, Indiana at 1305 E Summit St in Crown Point, IN 46307." }
      },
      {
        "@type": "Question",
        "name": "Do you accept extended warranties for St. John drivers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We work with most extended warranty providers and handle the entire claims process. St. John drivers are welcome — just give us a call at (219) 262-2711." }
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
        "name": "Do you offer same-day service for St. John drivers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — most diagnostic appointments and many repairs are completed the same day. Call us at (219) 262-2711 to schedule." }
      }
    ]
  }).replace(/</g, "\u003c")}}
/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.rcompleteautocare.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Auto Repair St. John, IN\"}]}".replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://www.rcompleteautocare.com/auto-repair-st-john-in#webpage\",\"url\":\"https://www.rcompleteautocare.com/auto-repair-st-john-in\",\"name\":\"Auto Repair St. John, IN | R Complete Auto Care\",\"dateModified\":\"2026-04-18\",\"about\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"}}".replace(/</g, "\u003c") }} />
  </div>
  );
}