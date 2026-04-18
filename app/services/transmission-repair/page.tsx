export const metadata = {
  title: 'Transmission Repair Crown Point, IN | R Complete Auto Care',
  description: 'Transmission slipping in Crown Point? Get a real diagnosis before spending thousands. We have saved customers from unnecessary rebuilds. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/transmission-repair' },
  other: { dateModified: "2025-04-15" },
}

import Link from "next/link";
export default function TransmissionRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>CROWN POINT, INDIANA</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px" }}>
          Transmission Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "16px", color: "#e63946", fontWeight: "600", marginBottom: "16px", fontStyle: "italic" }}>
          TL;DR: Transmission repair cost depends entirely on the actual problem — a solenoid or sensor fix is a fraction of a full rebuild. We diagnose first so you don&apos;t pay for a rebuild you don&apos;t need. Transmission repairs are among the most commonly covered items on extended warranty plans.
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Transmission problems are expensive — but the wrong diagnosis makes them even more expensive. We find the real cause before recommending a rebuild or replacement.
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
        <p style={{ color: "#888", fontSize: "13px", marginBottom: "24px" }}>Last updated: April 2025</p>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Diagnose Before You Spend</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Transmission repair is one of the most misdiagnosed — and most expensive — areas of auto repair. Many shops jump straight to a rebuild or replacement at the first sign of slipping or shifting problems. At R Complete Auto Care in Crown Point, we do it differently. We diagnose first. Every time.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We have saved customers thousands of dollars by finding a simple solenoid failure, a low fluid condition, or a sensor issue that another shop wanted to rebuild the entire transmission for. A thorough diagnostic costs a fraction of an unnecessary rebuild — and it tells you exactly what you're dealing with before you commit to anything.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We service automatic, manual, and CVT transmissions on all makes and models. We also accept most extended warranty plans and handle the entire claims process — transmission repairs are among the most commonly covered repairs on extended warranty policies.
        </p>

        {/* Symptoms */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Signs You May Have a Transmission Problem</h2>
        <ul style={{ lineHeight: 2.2, color: "#444", paddingLeft: "20px" }}>
          <li>Transmission slipping — engine revs but the car doesn't accelerate properly</li>
          <li>Rough, hard, or delayed shifting between gears</li>
          <li>Shuddering or shaking during acceleration, especially at highway speeds</li>
          <li>Torque converter shudder — feels like driving over rumble strips at 40–50mph</li>
          <li>Transmission warning light on the dashboard</li>
          <li>Burning smell, especially after highway driving</li>
          <li>Red or brown fluid leaking under the vehicle</li>
          <li>Transmission stuck in one gear or going into limp mode</li>
          <li>Clunking noise when shifting into drive or reverse</li>
          <li>Car won't move in drive or reverse at all</li>
        </ul>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Get a real diagnosis before spending thousands.</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          Call (219) 262-2711 →
        </a>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Transmission Services We Perform</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {[
            "Transmission diagnostic scan & inspection",
            "Transmission fluid service & flush",
            "Solenoid replacement",
            "Torque converter replacement",
            "Shift sensor & speed sensor replacement",
            "Transmission control module diagnosis",
            "Manual transmission clutch repair",
            "CVT transmission service & repair",
            "Transmission mount replacement",
            "Transmission fluid leak repair",
            "Transmission rebuild",
            "Transmission replacement",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", padding: "12px 14px", fontSize: "14px", color: "#333" }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Our Transmission Diagnostic Process</h2>
          {[
            { step: "1", title: "Full Transmission Scan", desc: "We scan all transmission-related modules and pull every fault code, including pending codes. We also review live data — shift timing, pressure readings, solenoid operation — to understand what the transmission is actually doing." },
            { step: "2", title: "Road Test & Drive Cycle", desc: "We drive the vehicle to reproduce the symptom. Transmission problems often only appear under specific conditions — load, temperature, speed range. We replicate the conditions so we can confirm what's happening in real time." },
            { step: "3", title: "Fluid Inspection", desc: "Transmission fluid condition tells us a lot. Dark, burnt-smelling fluid indicates heat damage. Metal particles indicate internal wear. We inspect the fluid before making any recommendation." },
            { step: "4", title: "Root Cause & Repair Recommendation", desc: "We tell you exactly what failed, why it failed, and what the repair options are — from least invasive to most. We give you honest advice on whether a repair, rebuild, or replacement makes the most sense for your specific situation." },
            { step: "5", title: "Repair & Verification", desc: "After the repair, we road test the vehicle through the complete drive cycle to confirm the problem is fully resolved. We re-scan all modules before returning the vehicle to you." },
          ].map(item => (
            <div key={item.step} style={{ display: "flex", gap: "16px", marginBottom: "28px", alignItems: "flex-start" }}>
              <div style={{ background: "#e63946", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>{item.step}</div>
              <div>
                <div style={{ fontWeight: "bold", marginBottom: "6px", fontSize: "17px" }}>{item.title}</div>
                <div style={{ color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Extended Warranty */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Extended Warranty Coverage for Transmission Repair</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
          Transmission repairs are one of the most frequently covered items on extended warranty policies. If your vehicle has a warranty through CarShield, Endurance, CARS Protection, AmTrust, or another provider, you may owe nothing out of pocket for your transmission repair.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Call us with your warranty information before you bring the vehicle in. We'll verify your coverage, communicate directly with your warranty company, and handle all the paperwork. We've helped dozens of Crown Point drivers get major transmission repairs covered — don't assume you're not covered without checking first.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          📞 Verify Your Coverage — Call (219) 262-2711
        </a>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Transmission Repair</h2>
          {[
            { q: "How do I know if my transmission is slipping?", a: "Transmission slipping feels like your engine revs up but the car doesn't accelerate the way it should — like the power isn't connecting. You may also notice the car shifting at the wrong times or feeling like it's hunting for a gear." },
            { q: "How much does transmission repair cost in Crown Point?", a: "It depends entirely on what's actually wrong. A fluid service or solenoid replacement is a fraction of the cost of a full rebuild. That's why we always diagnose first — so you're not paying for a rebuild when a sensor fix would solve it." },
            { q: "Can I drive with a slipping transmission?", a: "Short distances only, and with caution. Continuing to drive on a slipping transmission can cause additional damage and turn a smaller repair into a much larger one. Get it diagnosed as soon as possible." },
            { q: "What is torque converter shudder?", a: "Torque converter shudder feels like driving over rumble strips at 40–50mph during light acceleration. It's caused by the torque converter clutch not locking up smoothly and is often mistaken for an engine misfire. It can sometimes be resolved with a fluid service — but it requires a proper diagnosis to confirm." },
            { q: "Do you work on CVT transmissions?", a: "Yes — CVT (continuously variable transmission) transmissions require specific expertise and fluid. We have the equipment and experience to properly diagnose and service CVT transmissions found in Nissan, Subaru, Honda, Toyota, and other vehicles." },
            { q: "Do you accept extended warranties for transmission repair?", a: "Yes — transmission repairs are among the most commonly covered repairs on extended warranty policies. Call us with your warranty info and we'll verify coverage before any work begins." },
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
          <li><Link href="/services/check-engine-light" style={{ color: "#e63946" }}>Check Engine Light Diagnostics Crown Point, IN</Link></li>
          <li><Link href="/services/extended-warranty-repair" style={{ color: "#e63946" }}>Extended Warranty Repairs Crown Point, IN</Link></li>
          <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
        </ul>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Transmission Problems in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Diagnose before you spend. Honest answers. No pressure.</p>
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
        "name": "How do I know if my transmission is slipping?",
        "acceptedAnswer": { "@type": "Answer", "text": "Transmission slipping feels like your engine revs up but the car doesn't accelerate the way it should — like the power isn't connecting. You may also notice the car shifting at the wrong times or feeling like it's hunting for a gear." }
      },
      {
        "@type": "Question",
        "name": "How much does transmission repair cost in Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "It depends entirely on what's actually wrong. A fluid service or solenoid replacement is a fraction of the cost of a full rebuild. That's why we always diagnose first — so you're not paying for a rebuild when a sensor fix would solve it." }
      },
      {
        "@type": "Question",
        "name": "Can I drive with a slipping transmission?",
        "acceptedAnswer": { "@type": "Answer", "text": "Short distances only, and with caution. Continuing to drive on a slipping transmission can cause additional damage and turn a smaller repair into a much larger one. Get it diagnosed as soon as possible." }
      },
      {
        "@type": "Question",
        "name": "What is torque converter shudder?",
        "acceptedAnswer": { "@type": "Answer", "text": "Torque converter shudder feels like driving over rumble strips at 40–50mph during light acceleration. It's caused by the torque converter clutch not locking up smoothly and is often mistaken for an engine misfire. It can sometimes be resolved with a fluid service — but it requires a proper diagnosis to confirm." }
      },
      {
        "@type": "Question",
        "name": "Do you work on CVT transmissions?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — CVT transmissions require specific expertise and fluid. We have the equipment and experience to properly diagnose and service CVT transmissions found in Nissan, Subaru, Honda, Toyota, and other vehicles." }
      },
      {
        "@type": "Question",
        "name": "Do you accept extended warranties for transmission repair?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — transmission repairs are among the most commonly covered repairs on extended warranty policies. Call us with your warranty info and we'll verify coverage before any work begins." }
      }
    ]
  })}}
/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Transmission Repair Works at R Complete Auto Care",
  "description": "Our diagnostic-first transmission repair process in Crown Point, IN.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Full Transmission Scan", "text": "We scan all transmission modules, pull fault codes, and review live data including shift timing and solenoid operation." },
    { "@type": "HowToStep", "position": 2, "name": "Road Test & Drive Cycle", "text": "We drive the vehicle to reproduce the symptom under real conditions before making any recommendation." },
    { "@type": "HowToStep", "position": 3, "name": "Fluid Inspection", "text": "We inspect transmission fluid condition for signs of heat damage or internal wear." },
    { "@type": "HowToStep", "position": 4, "name": "Root Cause & Repair Options", "text": "We tell you exactly what failed, why it failed, and give honest advice on repair vs. rebuild vs. replacement." },
    { "@type": "HowToStep", "position": 5, "name": "Repair & Verification", "text": "After repair, we road test through the complete drive cycle and re-scan all modules before returning the vehicle." }
  ]
}) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.rcompleteautocare.com/services/diagnostics" },
    { "@type": "ListItem", "position": 3, "name": "Transmission Repair" }
  ]
}) }} /></div>
  );
}