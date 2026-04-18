import Link from "next/link";

export const metadata = {
  title: "Auto Repair in Merrillville, IN | R Complete Auto Care",
  description: "Auto repair near Merrillville, IN — R Complete Auto Care in Crown Point. Honest diagnostics, expert repairs, extended warranty accepted. (219) 262-2711.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com/auto-repair-merrillville-in",
  },
};

export default function Merrillville() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Serving Merrillville, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Auto Repair Near Merrillville, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Crown Point repair shop 10 minutes west of Southlake Mall. Straight answers on commuter wear, extended warranty claims, and the major repairs big-box shops oversell.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · About 10 minutes from Merrillville · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        ✓ Diagnostic-First &nbsp;|&nbsp; ✓ Foreign & Domestic &nbsp;|&nbsp; ✓ Extended Warranty Accepted &nbsp;|&nbsp; ✓ 25+ Years Family Experience
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>The Auto Repair Shop Merrillville Drivers Trust</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Merrillville has some of the densest rush-hour traffic in Lake County — Broadway, US-30, and I-65 all converge here, and that kind of stop-and-go driving is hard on a car. Brake pads wear faster, transmission fluid breaks down sooner, and suspension components take more abuse than they would on open highway. R Complete Auto Care is 10 minutes west in Crown Point, and we see the specific wear patterns Merrillville commuters deal with every week.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          If you commute from Merrillville to Chicago, Gary, or elsewhere in the region, you need a shop that gets you back on the road without guessing. We diagnose first and repair second — so your money goes toward the actual problem instead of a parts-swap gamble. For a daily driver racking up 20,000+ miles a year, that difference adds up fast.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We handle check-engine diagnostics, brake work, transmission repair, engine repair, and A/C and heating service on both foreign and domestic vehicles. Extended warranty claims are welcome — we've worked with most major providers and handle the paperwork for you. A lot of our Merrillville regulars came from the office parks and retail corridor along US-30 after getting a second opinion that saved them money.
        </p>
<p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
  Merrillville's commercial strip along US-30 near Southlake Mall is one of the most heavily trafficked areas in Northwest Indiana. The constant stop-and-go past the hotels, big-box retailers, and restaurants puts real wear on brakes and transmissions. We regularly see Merrillville drivers who have been told by a national chain that they need a major repair — and find the actual fix is considerably simpler once we run a proper diagnostic.
</p>
<p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
  From Merrillville, take US-30 West directly into Crown Point — it's a straight shot with no turns until Summit Street. Most Merrillville drivers are at our shop in 10–12 minutes. We also serve drivers from the Taft area and from the neighborhoods south of US-30 near Broadway.
</p>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Auto Repair Services for Merrillville Drivers</h2>
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
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Find Us From Merrillville</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📍 Address</div>
              <div style={{ lineHeight: 1.8, color: "#444" }}>1305 E Summit St<br />Crown Point, IN 46307<br /><span style={{ fontSize: "13px", color: "#666" }}>~10 min from Merrillville</span></div>
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

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Auto Repair Near Merrillville, IN</h2>
        {[
          { q: "Is there a diagnostic-first auto repair shop near Merrillville, IN?", a: "R Complete Auto Care in Crown Point — about 10–12 minutes from Merrillville via Broadway or I-65 south to US-231. We diagnose before we repair and accept most extended warranties. Call (219) 262-2711." },
          { q: "My car takes a beating on US-30 near Southlake Mall — what wears out first?", a: "Commuter traffic around Southlake Mall and the US-30 corridor is hard on brakes, suspension bushings, and cooling systems. We see front brake pads, control-arm bushings, and radiator fan failures earliest on cars that live on that stretch." },
          { q: "Do you handle I-65 commuter wear — the Chicago / south-shore run?", a: "Yes — long-haul I-65 vehicles show up with tire wear, wheel-bearing noise, and transmission complaints. We run the full diagnostic instead of guessing from the receipt of the last shop." },
          { q: "How fast can I get from Merrillville to your shop?", a: "10–12 minutes via Broadway south, or 12–15 via I-65 to US-231 west. Light traffic both directions outside rush hour." },
          { q: "Do you accept extended warranties for Merrillville drivers?", a: "Yes — we verify coverage before you bring the vehicle in and submit the entire claim to your warranty provider. You pay only your deductible." },
          { q: "Do you work on the foreign brands common in Merrillville (Honda, Toyota, BMW, Hyundai)?", a: "Yes — all makes and models. We have the scan tools and experience for Japanese, European, and domestic vehicles alike." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Merrillville Drivers — Call Us Today!</h2>
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
        "name": "Where is the best auto repair shop near Merrillville, IN?",
        "acceptedAnswer": { "@type": "Answer", "text": "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307 — about 10 minutes from Merrillville. Call (219) 262-2711." }
      },
      {
        "@type": "Question",
        "name": "How far is R Complete Auto Care from Merrillville?",
        "acceptedAnswer": { "@type": "Answer", "text": "We're located about 10 minutes from Merrillville, Indiana at 1305 E Summit St in Crown Point, IN 46307." }
      },
      {
        "@type": "Question",
        "name": "Do you accept extended warranties for Merrillville drivers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We work with most extended warranty providers and handle the entire claims process. Merrillville drivers are welcome — call us at (219) 262-2711." }
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
        "name": "Do you offer same-day service for Merrillville drivers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — most diagnostic appointments and many repairs are completed the same day. Call (219) 262-2711 to schedule." }
      }
    ]
  }).replace(/</g, "\u003c")}}
/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.rcompleteautocare.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Auto Repair Merrillville, IN\"}]}".replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://www.rcompleteautocare.com/auto-repair-merrillville-in#webpage\",\"url\":\"https://www.rcompleteautocare.com/auto-repair-merrillville-in\",\"name\":\"Auto Repair Merrillville, IN | R Complete Auto Care\",\"dateModified\":\"2026-04-18\",\"about\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"}}".replace(/</g, "\u003c") }} />
  </div>
  );
}