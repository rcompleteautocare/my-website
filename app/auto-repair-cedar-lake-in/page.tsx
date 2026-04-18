import Link from "next/link";

export const metadata = {
  title: "Auto Repair in Cedar Lake, IN | R Complete Auto Care",
  description: "Auto repair near Cedar Lake, IN — R Complete Auto Care in Crown Point. Honest diagnostics, expert repairs, extended warranty accepted. (219) 262-2711.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com/auto-repair-cedar-lake-in",
  },

  openGraph: {
    title: "Auto Repair in Cedar Lake, IN | R Complete Auto Care",
    description: "Auto repair near Cedar Lake, IN — R Complete Auto Care in Crown Point. Honest diagnostics, expert repairs, extended warranty accepted. (219) 262-2711.",
    url: "https://www.rcompleteautocare.com/auto-repair-cedar-lake-in",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair in Cedar Lake, IN | R Complete Auto Care",
    description: "Auto repair near Cedar Lake, IN — R Complete Auto Care in Crown Point. Honest diagnostics, expert repairs, extended warranty accepted. (219) 262-2711.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function CedarLake() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Serving Cedar Lake, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Auto Repair Near Cedar Lake, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Diagnostic-first repair shop 10 minutes east of Lake Dalecarlia. Honest quotes on suspension, towing and trailer systems, and the kind of rural-road wear Cedar Lake drivers actually see.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · About 10 minutes from Cedar Lake · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        ✓ Diagnostic-First &nbsp;|&nbsp; ✓ Foreign & Domestic &nbsp;|&nbsp; ✓ Extended Warranty Accepted &nbsp;|&nbsp; ✓ 25+ Years Family Experience
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>The Auto Repair Shop Cedar Lake Drivers Trust</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Cedar Lake is a different driving environment than the commuter towns to the north. A lot of unpaved driveways and gravel shoulders, seasonal towing of boats and campers out to Lake Dalecarlia or the lake itself, and plenty of older pickups and SUVs still in daily service. The repair patterns reflect that — suspension and steering issues, cooling-system stress from towing, and trailer-hitch electrical problems are what we see most from Cedar Lake vehicles.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Many of our Cedar Lake customers first came in after being quoted a steep repair estimate somewhere else. We&apos;d rather find the $180 fix than sell you the $1,800 one — and when the repair genuinely is major, we show you the diagnostic data and walk you through the options. For lake-country drivers who depend on their vehicle to tow, haul, or just get to work in Crown Point or Merrillville, straight answers matter more than glossy waiting rooms.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We service foreign and domestic vehicles with emphasis on the work that keeps Cedar Lake trucks and daily drivers on the road: cooling and A/C, suspension and steering, brakes, electrical diagnostics, and engine and transmission repair. Most extended warranty plans are accepted. We regularly see customers from Cedar Lake proper, Lowell, the Lake Dalecarlia area, and the rural corridor out toward Shelby and Schneider.
        </p>
<p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
  Cedar Lake&apos;s rural roads and the IN-2 corridor see a different kind of wear than the highway commuters to the north — more gravel road debris, more pothole damage from county roads that don&apos;t get resurfaced as frequently, and more towing and hauling from trucks and SUVs used for Lake Dalecarlia and Cedar Lake access. Suspension and steering components take a beating on those roads, and we see it regularly in the vehicles that come in from that area.
</p>
<p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
  The drive from Cedar Lake to our shop is easy — IN-2 East straight into Crown Point, about 10 minutes from the Parrish Avenue area. We serve drivers from throughout the Cedar Lake, Lowell, and Hebron corridor who want a diagnostic-first shop rather than the nearest parts-swapper.
</p>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Auto Repair Services for Cedar Lake Drivers</h2>
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
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Find Us From Cedar Lake</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📍 Address</div>
              <div style={{ lineHeight: 1.8, color: "#444" }}>1305 E Summit St<br />Crown Point, IN 46307<br /><span style={{ fontSize: "13px", color: "#666" }}>~10 min from Cedar Lake</span></div>
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

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Auto Repair Near Cedar Lake, IN</h2>
        {[
          { q: "Is there an honest auto repair shop near Cedar Lake, IN?", a: "R Complete Auto Care in Crown Point — about 12–15 minutes from Cedar Lake via IN-2 or West 133rd Ave. We're a diagnostic-first shop, accept most extended warranties, and offer same-day service. Call (219) 262-2711." },
          { q: "My vehicle runs rural Cedar Lake roads and gravel — what suffers most?", a: "Gravel and patched-pavement wear hits suspension bushings, tie rods, and wheel alignment first. We also regularly see stone-chip damage to brake lines and undercarriage plastics on Cedar Lake vehicles. A proper inspection catches it before it becomes a brake-line leak." },
          { q: "Can you tow from Lake Dalecarlia or the Cedar Lake shoreline area?", a: "We coordinate with local tow partners and can have your vehicle recovered from Lake Dalecarlia, Town Center, or the US-41 / IN-2 corridor and brought to our Crown Point shop. Call (219) 262-2711 and we'll arrange it." },
          { q: "I commute IN-2 to Crown Point every day — what should I plan for?", a: "IN-2 sees heavy truck traffic and patched asphalt through the seasons — that combination is hard on struts, tie-rod ends, and alignment. We recommend an alignment check every 15–20k miles on IN-2 commuters to preserve tire life." },
          { q: "Do you accept extended warranties for Cedar Lake residents?", a: "Yes — we work with CarShield, Endurance, CARS Protection, Zurich, AmTrust and most providers. Call us first so we can verify coverage before the tow." },
          { q: "How far am I from the shop if I'm by the lake?", a: "Most Cedar Lake neighborhoods are 12–15 minutes out via IN-2 east into Crown Point. Lake Dalecarlia is closer to 15. IN-2 is usually fastest outside rush hour." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Cedar Lake Drivers — Call Us Today!</h2>
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
        "name": "Where is the best auto repair shop near Cedar Lake, IN?",
        "acceptedAnswer": { "@type": "Answer", "text": "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307 — about 10 minutes from Cedar Lake. Call (219) 262-2711." }
      },
      {
        "@type": "Question",
        "name": "How far is R Complete Auto Care from Cedar Lake?",
        "acceptedAnswer": { "@type": "Answer", "text": "We're located about 10 minutes from Cedar Lake, Indiana at 1305 E Summit St in Crown Point, IN 46307." }
      },
      {
        "@type": "Question",
        "name": "Do you accept extended warranties for Cedar Lake drivers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We work with most extended warranty providers and handle the entire claims process. Cedar Lake drivers are welcome — call us at (219) 262-2711." }
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
        "name": "Do you offer same-day service for Cedar Lake drivers?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — most diagnostic appointments and many repairs are completed the same day. Call (219) 262-2711 to schedule." }
      }
    ]
  }).replace(/</g, "\u003c")}}
/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.rcompleteautocare.com\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Auto Repair Cedar Lake, IN\"}]}".replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://www.rcompleteautocare.com/auto-repair-cedar-lake-in#webpage\",\"url\":\"https://www.rcompleteautocare.com/auto-repair-cedar-lake-in\",\"name\":\"Auto Repair Cedar Lake, IN | R Complete Auto Care\",\"dateModified\":\"2026-04-18\",\"about\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"}}".replace(/</g, "\u003c") }} />
  </div>
  );
}