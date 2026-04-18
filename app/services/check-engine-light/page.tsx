export const metadata = {
  title: 'Check Engine Light in Crown Point, IN | R Complete Auto Care',
  description: 'Check engine light on in Crown Point? We trace fault codes to root cause — not just clear it. Same-day diagnostics. Extended warranty accepted. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/check-engine-light' },
  other: { dateModified: "2025-04-15" },
}

import Link from "next/link";
export default function CheckEngineLight() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px" }}>
          Check Engine Light Diagnostics in Crown Point, IN
        </h1>
        <p style={{ fontSize: "16px", color: "#e63946", fontWeight: "600", marginBottom: "16px", fontStyle: "italic" }}>
          TL;DR: Check engine light diagnostics are completed same day in most cases. We charge a diagnostic fee (applied toward repair cost). A solid light = safe to drive briefly; a flashing light = pull over and call us immediately.
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Don&apos;t ignore that warning light. Our diagnostic-first approach finds the real problem — fast. We trace fault codes to their root cause, not just clear them and hope for the best.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711 — Same-Day Diagnostics
        </a>
        <p style={{ marginTop: "16px", color: "#aaa", fontSize: "14px" }}>Mon–Fri 8am–6pm · Sat 8am–2pm · 1305 E Summit St, Crown Point, IN 46307</p>
      </section>

      {/* What it means */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ color: "#888", fontSize: "13px", marginBottom: "24px" }}>Last updated: April 2025</p>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>What Does a Check Engine Light Mean?</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Your check engine light can mean dozens of different things — from a loose gas cap to a failing catalytic converter or serious engine issue. The only way to know for sure is a proper diagnostic scan combined with hands-on inspection. At R Complete Auto Care, we don't just read the code number and guess. We trace the fault to its root cause before recommending a single repair.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN — we're the area's trusted diagnostic-first auto repair shop. If your check engine light is on, flashing, or came back after another shop "fixed it," bring it to us.
        </p>

        {/* Symptoms */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px", marginTop: "40px" }}>Common Symptoms That Come With a Check Engine Light</h2>
        <ul style={{ lineHeight: 2, color: "#444", paddingLeft: "20px" }}>
          <li>Check engine light on steady (solid) — usually safe to drive short distances, but get it checked soon</li>
          <li>Check engine light flashing — serious misfire detected, pull over and call us immediately</li>
          <li>Rough idle or engine misfiring</li>
          <li>Loss of power or sluggish acceleration</li>
          <li>Poor fuel economy — suddenly filling up more often</li>
          <li>Engine stalling or hesitating when accelerating</li>
          <li>Smell of gas or rotten eggs from the exhaust</li>
          <li>Engine running rough or shaking at stops</li>
          <li>Car passed emissions last year but failing now</li>
          <li>Light came back on after another shop cleared it</li>
        </ul>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Stop guessing. Get a real diagnosis.</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          Call (219) 262-2711 →
        </a>
      </section>

      {/* Our Process */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Our Check Engine Light Diagnostic Process</h2>
        {[
          { step: "1", title: "Full Fault Code Scan", desc: "We scan all modules — not just the engine — to get a complete picture of every fault code present, including pending codes that haven't triggered the light yet." },
          { step: "2", title: "Root Cause Investigation", desc: "A fault code tells us which system has a problem, not what caused it. We perform hands-on inspection and testing to find the actual failed component — not just replace parts and hope." },
          { step: "3", title: "Clear Explanation", desc: "We call you with exactly what we found, what it means, what's urgent, and what can wait. No jargon. No pressure. You approve everything before we touch a tool." },
          { step: "4", title: "Precise Repair", desc: "We fix what's actually broken using quality parts. After the repair, we clear the code, verify the fix, and road test the vehicle before returning it to you." },
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

      {/* Why Choose Us */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Choose R Complete Auto Care</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              { title: "Full Diagnostic Scan", desc: "We read all fault codes and investigate the root cause, not just the symptom." },
              { title: "Honest Recommendations", desc: "We tell you exactly what's wrong and what's urgent — no upselling, no unnecessary repairs." },
              { title: "Same-Day Diagnostics", desc: "Most check engine light diagnostics completed the same day, with a call before any work begins." },
              { title: "All Makes & Models", desc: "Foreign and domestic vehicles welcome. Honda, Toyota, Ford, GM, BMW, Mercedes and more." },
              { title: "Extended Warranty Accepted", desc: "We work with most extended warranty providers and handle the entire claims process for you." },
              { title: "25+ Years Family Experience", desc: "Diagnostic expertise built over decades — we've seen every code, every failure, every pattern." },
            ].map(item => (
              <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "4px", padding: "16px" }}>
                <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Warranty */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Extended Warranty Coverage for Check Engine Light Repairs</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
          If your vehicle is covered by an extended warranty and your check engine light is on, you may owe nothing out of pocket for the diagnosis and repair. R Complete Auto Care works with most major extended warranty providers including CarShield, Endurance, CARS Protection, and AmTrust.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Call us with your warranty information before you bring the vehicle in and we'll verify your coverage, handle the claim paperwork, and communicate directly with your warranty company. You just approve the work and pick up your car.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          📞 Verify Your Coverage — Call (219) 262-2711
        </a>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Check Engine Light</h2>
          {[
            { q: "How much does a check engine light diagnostic cost in Crown Point?", a: "We charge a diagnostic fee to properly identify the issue. This fee is applied toward your repair cost if you choose to have us fix it. Call (219) 262-2711 for current pricing." },
            { q: "How long does a check engine light diagnostic take?", a: "Most diagnostics are completed the same day, often within a few hours. We'll call you with our findings before doing any work." },
            { q: "Do I need an appointment for check engine light diagnostics in Crown Point?", a: "We recommend calling ahead at (219) 262-2711. Same-day appointments are often available Mon–Fri 8am–6pm and Sat 8am–2pm." },
            { q: "Is it safe to drive with my check engine light on?", a: "It depends. If the light is flashing, pull over immediately — it indicates a serious misfire that can damage your catalytic converter. If it's solid, it's generally safe to drive short distances but you should get it checked within a day or two." },
            { q: "Can you just clear the code without diagnosing it?", a: "We don't recommend it and we won't do it. Clearing the code without fixing the underlying issue means the light will come back on — often within 50–100 miles. We find the root cause first." },
            { q: "What are signs I need check engine light diagnosis?", a: "Any time the check engine light comes on — solid or flashing. Also if you notice rough running, reduced power, poor fuel economy, or if the light returned after another shop 'fixed' it." },
            { q: "My check engine light came back on after another shop fixed it — what do I do?", a: "This is one of the most common reasons people come to us. Many shops clear codes and replace the most obvious part without finding the actual root cause. We dig deeper. Bring it in and we'll find what was missed." },
            { q: "Do you accept extended warranties for check engine light repairs?", a: "Yes! We work with most extended warranty providers and handle the entire claims process for you. Call us with your warranty info and we'll verify coverage before any work begins." },
          ].map(item => (
            <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
              <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <ul style={{ lineHeight: 2, paddingLeft: "20px" }}>
          <li><Link href="/services/engine-repair" style={{ color: "#e63946" }}>Engine Repair in Crown Point, IN</Link></li>
          <li><Link href="/services/electrical-diagnostics" style={{ color: "#e63946" }}>Electrical Diagnostics Crown Point, IN</Link></li>
          <li><Link href="/services/no-start-diagnostics" style={{ color: "#e63946" }}>No-Start Diagnostics Crown Point, IN</Link></li>
          <li><Link href="/services/extended-warranty-repair" style={{ color: "#e63946" }}>Extended Warranty Repairs Crown Point, IN</Link></li>
          <li><Link href="/check-engine-light-flashing-crown-point" style={{ color: "#e63946" }}>Check Engine Light Flashing — What It Means</Link></li>
          <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
        </ul>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Check Engine Light On? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Crown Point's diagnostic-first auto repair shop. We find the real problem.</p>
        <p style={{ marginBottom: "8px", fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
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
        "name": "How much does a check engine light diagnostic cost in Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "We charge a diagnostic fee to properly identify the issue. This fee is applied toward your repair cost if you choose to have us fix it. Call (219) 262-2711 for current pricing." }
      },
      {
        "@type": "Question",
        "name": "How long does a check engine light diagnostic take?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most diagnostics are completed the same day, often within a few hours. We'll call you with our findings before doing any work." }
      },
      {
        "@type": "Question",
        "name": "Do I need an appointment for check engine light diagnostics in Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "We recommend calling ahead at (219) 262-2711. Same-day appointments are often available Mon–Fri 8am–6pm and Sat 8am–2pm." }
      },
      {
        "@type": "Question",
        "name": "Is it safe to drive with my check engine light on?",
        "acceptedAnswer": { "@type": "Answer", "text": "It depends. If the light is flashing, pull over immediately — it indicates a serious misfire that can damage your catalytic converter. If it's solid, it's generally safe to drive short distances but you should get it checked within a day or two." }
      },
      {
        "@type": "Question",
        "name": "Can you just clear the code without diagnosing it?",
        "acceptedAnswer": { "@type": "Answer", "text": "We don't recommend it and we won't do it. Clearing the code without fixing the underlying issue means the light will come back on — often within 50–100 miles. We find the root cause first." }
      },
      {
        "@type": "Question",
        "name": "What are signs I need check engine light diagnosis?",
        "acceptedAnswer": { "@type": "Answer", "text": "Any time the check engine light comes on — solid or flashing. Also if you notice rough running, reduced power, poor fuel economy, or if the light returned after another shop 'fixed' it." }
      },
      {
        "@type": "Question",
        "name": "My check engine light came back on after another shop fixed it — what do I do?",
        "acceptedAnswer": { "@type": "Answer", "text": "This is one of the most common reasons people come to us. Many shops clear codes and replace the most obvious part without finding the actual root cause. We dig deeper. Bring it in and we'll find what was missed." }
      },
      {
        "@type": "Question",
        "name": "Do you accept extended warranties for check engine light repairs?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We work with most extended warranty providers and handle the entire claims process for you. Call us with your warranty info and we'll verify coverage before any work begins." }
      }
    ]
  })}}
/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Check Engine Light Diagnosis Works at R Complete Auto Care",
  "description": "Our 4-step check engine light diagnostic process in Crown Point, IN.",
  "totalTime": "PT3H",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Full Fault Code Scan", "text": "We scan all modules — not just the engine — to get a complete picture of every fault code present, including pending codes." },
    { "@type": "HowToStep", "position": 2, "name": "Root Cause Investigation", "text": "We perform hands-on inspection and testing to find the actual failed component — not just replace parts and hope." },
    { "@type": "HowToStep", "position": 3, "name": "Clear Explanation & Estimate", "text": "We call you with exactly what we found, what it means, and a straight price. You approve everything before we touch a tool." },
    { "@type": "HowToStep", "position": 4, "name": "Precise Repair & Verification", "text": "We fix what's broken, clear the code, verify the fix, and road test the vehicle before returning it to you." }
  ]
}) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.rcompleteautocare.com/services/diagnostics" },
    { "@type": "ListItem", "position": 3, "name": "Check Engine Light Diagnostics" }
  ]
}) }} /></div>
  );
}