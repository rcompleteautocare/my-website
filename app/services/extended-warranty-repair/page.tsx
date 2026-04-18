export const metadata = {
  title: 'Extended Warranty Repairs | R Complete Auto Care',
  description: 'Extended warranty auto repair in Crown Point, IN. We verify coverage, handle pre-authorisation and paperwork — you pay only your deductible. (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/extended-warranty-repair' },
}

import Link from "next/link";
import LastUpdated from "@/app/components/LastUpdated";
export default function ExtendedWarrantyRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>CROWN POINT, INDIANA</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px" }}>
          Extended Warranty Auto Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "16px", color: "#e63946", fontWeight: "600", marginBottom: "16px", fontStyle: "italic" }}>
          TL;DR: We work with CarShield, Endurance, CARS Protection, AmTrust, and most providers. Call us first with your contract info — we verify coverage, handle pre-authorization, complete the repair, and submit all paperwork. You pay only your deductible (typically $100–$200).
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Bring your contract. We verify coverage, handle pre-authorisation, complete the repair, and submit all paperwork. You pay only your deductible.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
      </section>

      {/* Serving bar */}
      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake, IN
      </section>

      {/* Intro */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <LastUpdated date="2026-04-18" />
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Crown Point&apos;s Extended Warranty Repair Specialists</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Most auto repair shops in Crown Point and Northwest Indiana refuse extended warranty work. The documentation requirements are too demanding, the pre-authorisation calls take too long, and the adjusters push back on claims that lack detailed diagnostic evidence. Those shops tell you to go somewhere else.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          At R Complete Auto Care, extended warranty repairs are a significant part of our business — and we built our entire diagnostic process around producing the documentation that gets claims approved. We know what format adjusters need, how to present failure mode analysis, and how to advocate for your claim when coverage is questioned.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Call us before you bring the vehicle in. We verify your coverage directly with your provider, confirm the repair is eligible, and schedule you in — often the same day. You pay your deductible. We handle everything else.
        </p>

        {/* Providers */}
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Extended Warranty Providers We Work With</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "CARS Protection Plus",
            "Endurance Warranty",
            "CarShield",
            "CARCHEX",
            "AmTrust / National Auto Care",
            "Zurich / Dealer-Sold Plans",
            "Protect My Car",
            "Most Other Providers — Call to Confirm",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", padding: "12px 14px", fontSize: "14px", color: "#333", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        {/* Symptoms / situations */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Common Extended Warranty Repair Situations</h2>
        <ul style={{ lineHeight: 2.2, color: "#444", paddingLeft: "20px" }}>
          <li>Check engine light on with a failed sensor, solenoid, or internal component</li>
          <li>Transmission slipping, shifting hard, or stuck in limp mode</li>
          <li>Engine noise, oil consumption, overheating, or loss of power</li>
          <li>Car won&apos;t start — failed starter, fuel pump, or crankshaft sensor</li>
          <li>Electrical failure — alternator, body control module, instrument cluster</li>
          <li>A/C compressor failure or no cold air</li>
          <li>Suspension components — struts, control arms, ball joints</li>
          <li>Previous warranty claim denied at another shop due to insufficient documentation</li>
          <li>Warranty company requires pre-authorisation before repair can begin</li>
        </ul>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Have an extended warranty? Call us before you bring it in.</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          Call (219) 262-2711 →
        </a>
      </section>

      {/* Process */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>How Our Extended Warranty Process Works</h2>
        {[
          { step: "1", title: "Call Us With Your Warranty Info", desc: "Call (219) 262-2711 with your warranty provider name and contract number. We verify your coverage directly with the provider and confirm the repair is eligible — before you drive or tow the vehicle in." },
          { step: "2", title: "Diagnostic Documented to Warranty Standards", desc: "We perform a thorough diagnostic with fault codes, test results, and precise failure mode descriptions formatted specifically for warranty adjuster review. This documentation is what separates approved claims from denied ones." },
          { step: "3", title: "We Make the Pre-Authorisation Call", desc: "We contact your warranty company, present the diagnostic findings in the format their adjusters require, and obtain repair authorisation before any parts are ordered or work begins." },
          { step: "4", title: "Repair With Approved Parts", desc: "Once pre-authorised, we complete the repair using parts that meet your warranty company's requirements and document all labor operations to specification." },
          { step: "5", title: "You Pay Only Your Deductible", desc: "The warranty company pays us directly for the covered amount. You pick up your vehicle and pay your deductible only — often $100–$200 on a repair that would have cost $800–$2,500 out of pocket." },
        ].map(item => (
          <div key={item.step} style={{ display: "flex", gap: "16px", marginBottom: "28px", alignItems: "flex-start" }}>
            <div style={{ background: "#e63946", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>{item.step}</div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "6px", fontSize: "17px" }}>{item.title}</div>
              <div style={{ color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Covered repairs */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Repairs Commonly Covered by Extended Warranties</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {[
              "Engine — head gaskets, timing chains, oil consumption, valve train",
              "Transmission — solenoids, valve body, torque converter, clutch packs",
              "Electrical — alternators, starters, body control modules, sensors",
              "Fuel system — fuel pumps, injectors, pressure regulators",
              "Cooling — water pumps, thermostats, radiators, fans",
              "A/C — compressors, condensers, evaporators",
              "Suspension — struts, shocks, control arms, ball joints",
              "No-start — starters, crank sensors, fuel pumps, ignition modules",
              "Brakes — ABS modules, master cylinders (friction items usually excluded)",
              "Steering — power steering pumps, racks, tie rods",
            ].map(item => (
              <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", padding: "12px 14px", fontSize: "14px", color: "#333" }}>
                {item}
              </div>
            ))}
          </div>
          <p style={{ lineHeight: 1.8, color: "#444", marginTop: "24px" }}>
            Coverage varies by plan tier. We verify exactly what your specific plan covers before recommending any repair.
          </p>
        </div>
      </section>

      {/* Why shops refuse */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Why Most Shops Refuse Extended Warranty Work</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Extended warranty repairs require precise failure mode descriptions, step-by-step diagnostic records with test data, specific part numbers, labor operation codes, and in most cases a pre-authorisation call before any repair begins. Adjusters are trained to look for gaps in this documentation and deny claims that lack it.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Most shops find this process more work than it&apos;s worth. They either decline warranty customers outright or handle the process poorly — submitting insufficient documentation that gets denied, leaving you to fight the warranty company on your own.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We built our diagnostic process specifically to produce the documentation extended warranty adjusters require. Our approval rate reflects that — and our customers come back because we get it done right.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Choose Us for Warranty Work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "We Handle the Entire Process", desc: "Coverage verification, pre-authorisation call, documented repair, claim submission — you pay only your deductible." },
            { title: "Diagnostic-First Documentation", desc: "Our diagnostic records are formatted to meet warranty adjuster requirements. This is what prevents claim denials." },
            { title: "We Advocate for Your Claim", desc: "If an adjuster pushes back, we push back with test data and documentation. We don't accept unjustified denials." },
            { title: "All Makes and Models", desc: "Foreign and domestic — Honda, Toyota, BMW, Ford, Chevy, Dodge, Subaru, and everything else." },
            { title: "Same-Day Diagnostics", desc: "Most warranty diagnostics completed same day. We know you need your car back." },
            { title: "Inspector-Ready Shop", desc: "When warranty companies send inspectors, our documentation and diagnostic process passes every time." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "4px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Extended Warranty Repair</h2>
          {[
            { q: "Do I need to call my warranty company first, or do you handle that?", a: "Just call us first at (219) 262-2711 with your warranty contract information. We verify your coverage directly with the provider and handle the pre-authorisation call before any work begins. You don't need to navigate the warranty process yourself." },
            { q: "What extended warranty companies do you work with?", a: "We work with most third-party providers including CARS Protection Plus, Endurance, CarShield, CARCHEX, AmTrust/National Auto Care, Zurich, and Protect My Car. Call us with your provider name to confirm." },
            { q: "What if my warranty company denies the claim?", a: "We advise you on the denial reason and whether it's worth appealing. Some denials are based on insufficient documentation from a previous shop — our detailed diagnostic records are often sufficient to support a successful reconsideration." },
            { q: "Is the diagnostic fee covered by my extended warranty?", a: "Many plans cover the diagnostic fee when the diagnosed failure is a covered component. We check your specific plan terms when we verify coverage. Even when it's not covered, our diagnostic fee is applied toward the repair cost." },
            { q: "My warranty company wants to send an inspector. Is that okay?", a: "Yes — inspector visits are standard for larger claims and we're fully prepared. Our diagnostic documentation supports the inspection process. We have successfully passed every warranty inspector visit." },
            { q: "Why do so many shops refuse extended warranty work?", a: "Extended warranty repairs require detailed documentation, pre-authorisation calls, specific labor operation codes, and post-repair paperwork that most shops aren't set up to handle. We built our process around this — warranty work is a significant part of our business." },
            { q: "Do you accept extended warranties for all types of repairs?", a: "We handle warranty claims for engine, transmission, electrical, suspension, A/C, fuel system, cooling system, and most other covered components. Call us with your provider name and we'll tell you exactly what's covered." },
          ].map(item => (
            <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
              <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <ul style={{ lineHeight: 2, paddingLeft: "20px" }}>
          <li><Link href="/services/engine-repair" style={{ color: "#e63946" }}>Engine Repair Crown Point, IN</Link></li>
          <li><Link href="/services/transmission-repair" style={{ color: "#e63946" }}>Transmission Repair Crown Point, IN</Link></li>
          <li><Link href="/services/electrical-diagnostics" style={{ color: "#e63946" }}>Electrical Diagnostics Crown Point, IN</Link></li>
          <li><Link href="/services/no-start-diagnostics" style={{ color: "#e63946" }}>No-Start Diagnostics Crown Point, IN</Link></li>
          <li><Link href="/services/ac-heating-repair" style={{ color: "#e63946" }}>AC &amp; Heating Repair Crown Point, IN</Link></li>
          <li><Link href="/extended-warranty-auto-repair-crown-point-in" style={{ color: "#e63946" }}>Extended Warranty Auto Repair — Full Guide</Link></li>
          <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
        </ul>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Extended Warranty Repair in Crown Point? Call Us First.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>We verify coverage before you bring it in. You pay only your deductible.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
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
        "name": "Do I need to call my warranty company first, or do you handle that?",
        "acceptedAnswer": { "@type": "Answer", "text": "Just call us first at (219) 262-2711 with your warranty contract information. We verify your coverage directly with the provider and handle the pre-authorisation call before any work begins. You don't need to navigate the warranty process yourself." }
      },
      {
        "@type": "Question",
        "name": "What extended warranty companies do you work with?",
        "acceptedAnswer": { "@type": "Answer", "text": "We work with most third-party providers including CARS Protection Plus, Endurance, CarShield, CARCHEX, AmTrust/National Auto Care, Zurich, and Protect My Car. Call us with your provider name to confirm." }
      },
      {
        "@type": "Question",
        "name": "What if my warranty company denies the claim?",
        "acceptedAnswer": { "@type": "Answer", "text": "We advise you on the denial reason and whether it's worth appealing. Some denials are based on insufficient documentation from a previous shop — our detailed diagnostic records are often sufficient to support a successful reconsideration." }
      },
      {
        "@type": "Question",
        "name": "Is the diagnostic fee covered by my extended warranty?",
        "acceptedAnswer": { "@type": "Answer", "text": "Many plans cover the diagnostic fee when the diagnosed failure is a covered component. We check your specific plan terms when we verify coverage. Even when it's not covered, our diagnostic fee is applied toward the repair cost." }
      },
      {
        "@type": "Question",
        "name": "My warranty company wants to send an inspector. Is that okay?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — inspector visits are standard for larger claims and we're fully prepared. Our diagnostic documentation supports the inspection process. We have successfully passed every warranty inspector visit." }
      },
      {
        "@type": "Question",
        "name": "Why do so many shops refuse extended warranty work?",
        "acceptedAnswer": { "@type": "Answer", "text": "Extended warranty repairs require detailed documentation, pre-authorisation calls, specific labor operation codes, and post-repair paperwork that most shops aren't set up to handle. We built our process around this — warranty work is a significant part of our business." }
      },
      {
        "@type": "Question",
        "name": "Do you accept extended warranties for all types of repairs?",
        "acceptedAnswer": { "@type": "Answer", "text": "We handle warranty claims for engine, transmission, electrical, suspension, A/C, fuel system, cooling system, and most other covered components. Call us with your provider name and we'll tell you exactly what's covered." }
      }
    ]
  }).replace(/</g, "\u003c")}}
/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Extended Warranty Repair Works at R Complete Auto Care",
  "description": "Our 5-step extended warranty repair process — from coverage verification to pick-up.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Call Us With Your Warranty Info", "text": "Call (219) 262-2711 with your warranty provider name and contract number. We verify your coverage before you bring the vehicle in." },
    { "@type": "HowToStep", "position": 2, "name": "Diagnostic Documented to Warranty Standards", "text": "We perform a thorough diagnostic with fault codes, test results, and precise failure mode descriptions formatted for warranty adjuster review." },
    { "@type": "HowToStep", "position": 3, "name": "Pre-Authorization Call", "text": "We contact your warranty company, present our findings, and obtain repair authorization before any parts are ordered." },
    { "@type": "HowToStep", "position": 4, "name": "Repair With Approved Parts", "text": "We complete the repair using parts that meet your warranty company's requirements and document all labor operations." },
    { "@type": "HowToStep", "position": 5, "name": "You Pay Only Your Deductible", "text": "The warranty company pays us directly for the covered amount. You pick up your vehicle and pay your deductible only — typically $100–$200." }
  ]
}).replace(/</g, "\u003c") }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.rcompleteautocare.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Extended Warranty Repairs" }
  ]
}).replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"@id\":\"https://www.rcompleteautocare.com/services/extended-warranty-repair#service\",\"name\":\"Extended Warranty Repairs\",\"serviceType\":\"Extended Warranty Auto Repair\",\"url\":\"https://www.rcompleteautocare.com/services/extended-warranty-repair\",\"provider\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"},\"areaServed\":[{\"@type\":\"City\",\"name\":\"Crown Point\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"St. John\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"Schererville\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"Merrillville\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"Cedar Lake\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}}],\"dateModified\":\"2026-04-18\"}".replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://www.rcompleteautocare.com/services/extended-warranty-repair#webpage\",\"url\":\"https://www.rcompleteautocare.com/services/extended-warranty-repair\",\"name\":\"Extended Warranty Repairs in Crown Point, IN\",\"dateModified\":\"2026-04-18\",\"about\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"}}".replace(/</g, "\u003c") }} />
  </div>
  );
}
