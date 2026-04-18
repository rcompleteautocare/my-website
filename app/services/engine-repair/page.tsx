export const metadata = {
  title: 'Engine Repair in Crown Point, IN | R Complete Auto Care',
  description: 'Engine repair in Crown Point, IN. We diagnose WHY it failed before replacing parts, so the problem stays fixed. Extended warranty accepted. (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/engine-repair' },

  openGraph: {
    title: "Engine Repair in Crown Point, IN | R Complete Auto Care",
    description: "Engine repair in Crown Point, IN. We diagnose WHY it failed before replacing parts, so the problem stays fixed. Extended warranty accepted. (219) 262-2711.",
    url: "https://www.rcompleteautocare.com/services/engine-repair",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "article",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engine Repair in Crown Point, IN | R Complete Auto Care",
    description: "Engine repair in Crown Point, IN. We diagnose WHY it failed before replacing parts, so the problem stays fixed. Extended warranty accepted. (219) 262-2711.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
}

import Link from "next/link";
import LastUpdated from "@/app/components/LastUpdated";
export default function EngineRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>CROWN POINT, INDIANA</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px" }}>
          Engine Repair in Crown Point, IN
        </h1>
        <p className="speakable" style={{ fontSize: "16px", color: "#e63946", fontWeight: "600", marginBottom: "16px", fontStyle: "italic" }}>TL;DR: Engine repair costs vary widely — minor repairs (valve cover gasket, sensors) start in the hundreds; major repairs (head gaskets, timing chains) are more significant. We give you a clear estimate after diagnosis. Extended warranties often cover engine repairs. Same-day diagnostics available.
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          From minor engine repairs to major overhauls — we diagnose the real problem first so you only pay for what your vehicle actually needs.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Crown Point&apos;s Engine Repair Specialists</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Your engine is the heart of your vehicle. At R Complete Auto Care in Crown Point, we treat engine problems with the diagnostic rigor they deserve. We don't replace parts and hope — we find the exact root cause of the failure before we recommend a single repair. That means fewer comebacks, no unnecessary expenses, and a fix that actually holds.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We work on all foreign and domestic vehicles — Honda, Toyota, BMW, Mercedes, Ford, Chevy, Dodge, Subaru, and more. Whether your engine has a minor oil leak or needs a full replacement, we have the tools, the equipment, and the experience to do it right.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We also accept most extended warranty plans and handle the entire claims process for you — so if your engine repair is covered, you may owe nothing out of pocket.
        </p>

        {/* Symptoms */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Signs Your Engine Needs Repair</h2>
        <ul style={{ lineHeight: 2.2, color: "#444", paddingLeft: "20px" }}>
          <li>Check engine light on — especially with other symptoms</li>
          <li>Knocking, ticking, or rattling noises from the engine</li>
          <li>Loss of power or sluggish acceleration</li>
          <li>Excessive oil consumption — adding oil frequently between changes</li>
          <li>Engine overheating or temperature gauge running high</li>
          <li>Blue or white smoke coming from the exhaust</li>
          <li>Oil leaks under the vehicle or visible on the engine</li>
          <li>Rough idle, misfires, or engine shaking</li>
          <li>Metal shavings or debris found in oil during an oil change</li>
          <li>Engine warning light combined with reduced fuel economy</li>
        </ul>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Hearing a knock or seeing smoke? Don't wait.</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          Call (219) 262-2711 →
        </a>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Engine Services We Perform</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {[
            "Engine diagnostics & fault code analysis",
            "Timing belt & timing chain repair",
            "Head gasket replacement",
            "Valve cover gasket repair",
            "Oil leak diagnosis & repair",
            "Overheating diagnosis & repair",
            "Engine mount replacement",
            "Intake manifold gasket repair",
            "Crankshaft & camshaft sensor replacement",
            "Engine misfire diagnosis & repair",
            "Short block & long block replacement",
            "Full engine replacement",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", padding: "12px 14px", fontSize: "14px", color: "#333" }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Our Diagnostic-First Engine Repair Process</h2>
          {[
            { step: "1", title: "Comprehensive Diagnostic Scan", desc: "We start with a full scan of all modules, not just the engine control unit. This gives us fault codes, live data, and a complete picture of what the engine management system is reporting." },
            { step: "2", title: "Physical Inspection", desc: "Codes point us in the right direction — hands-on inspection tells us the real story. We check compression, oil condition, cooling system pressure, and any visible damage before recommending anything." },
            { step: "3", title: "Root Cause Identification", desc: "We find WHY it failed — not just what failed. An overheating engine might have a bad thermostat, a blown head gasket, a clogged radiator, or a failing water pump. We find the actual cause before we pick up a tool." },
            { step: "4", title: "Clear Estimate & Your Approval", desc: "We call you with exactly what we found, what needs to be fixed, and a straight price. No surprises. You approve everything before any work begins." },
            { step: "5", title: "Quality Repair & Verification", desc: "We complete the repair using quality parts, then road test and re-scan the vehicle to confirm the problem is fully resolved before we return it to you." },
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

      {/* Why Choose Us */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Choose Us for Engine Repair</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {[
            { title: "Diagnose First, Always", desc: "We find the exact root cause before recommending any repair. No guessing, no unnecessary parts." },
            { title: "Honest Estimates", desc: "You get a clear price before we start. No hidden fees, no surprises when you pick up your car." },
            { title: "Extended Warranty Accepted", desc: "We work with most warranty providers and handle all the paperwork. You may owe nothing." },
            { title: "25+ Years Family Experience", desc: "Our shop is built on decades of engine diagnostic expertise. We've seen every failure pattern." },
            { title: "All Makes & Models", desc: "Foreign and domestic. Honda, Toyota, Ford, GM, BMW, Mercedes, Subaru, Dodge and more." },
            { title: "Same-Day Diagnostics", desc: "Most diagnostic appointments completed same day with a call before any work begins." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "4px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Extended Warranty */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Extended Warranty Coverage for Engine Repairs</h2>
          <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
            Engine repairs are often the most expensive repairs a vehicle owner faces — and one of the most commonly covered by extended warranties. If your vehicle has an extended warranty through CarShield, Endurance, CARS Protection, AmTrust, or another provider, call us before you bring the car in.
          </p>
          <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
            We'll verify your coverage, handle the claim directly with your warranty company, and keep you informed throughout the process. Many of our customers with engine problems pay little to nothing out of pocket. Don't assume you're not covered — call us first.
          </p>
          <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
            📞 Verify Your Coverage — Call (219) 262-2711
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Engine Repair</h2>
          {[
            { q: "How do I know if my engine needs repair?", a: "Common signs include a check engine light, knocking or ticking noises, loss of power, overheating, excessive oil consumption, smoke from the exhaust, or oil leaks. If you notice any of these, bring it in for a diagnostic before the problem gets worse." },
            { q: "How much does engine repair cost in Crown Point?", a: "Engine repair costs vary widely depending on what failed. A minor repair like a valve cover gasket might be a few hundred dollars. A head gasket or timing chain repair is typically more significant. We give you a clear estimate before any work begins — no surprises." },
            { q: "Is it worth repairing my engine or should I get a new car?", a: "We give you honest advice on this. In many cases — especially with extended warranty coverage — repair is significantly cheaper than a car payment. We'll tell you exactly what's wrong and what it costs so you can make the right decision for your situation." },
            { q: "My engine is overheating — what should I do?", a: "Pull over safely and turn off the engine immediately. Do not continue driving an overheating engine — it can cause catastrophic damage very quickly. Call us and we'll help you figure out next steps and get the vehicle in for diagnosis." },
            { q: "Do you accept extended warranties for engine repair?", a: "Yes — we work with most major extended warranty providers including CarShield, Endurance, CARS Protection, and AmTrust. Call us with your warranty info and we'll verify coverage before any work begins." },
            { q: "Do you serve St. John, Schererville, and Merrillville for engine repair?", a: "Yes — we serve all of Lake County including St. John, Schererville, Merrillville, Cedar Lake, and surrounding areas. We're located at 1305 E Summit St in Crown Point, easily accessible from all of Northwest Indiana." },
          ].map(item => (
            <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
              <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
          <ul style={{ lineHeight: 2, paddingLeft: "20px" }}>
            <li><Link href="/services/check-engine-light" style={{ color: "#e63946" }}>Check Engine Light Diagnostics Crown Point, IN</Link></li>
            <li><Link href="/services/transmission-repair" style={{ color: "#e63946" }}>Transmission Repair Crown Point, IN</Link></li>
            <li><Link href="/services/electrical-diagnostics" style={{ color: "#e63946" }}>Electrical Diagnostics Crown Point, IN</Link></li>
            <li><Link href="/services/extended-warranty-repair" style={{ color: "#e63946" }}>Extended Warranty Repairs Crown Point, IN</Link></li>
            <li><Link href="/car-overheating-crown-point-in" style={{ color: "#e63946" }}>Car Overheating in Crown Point — What To Do</Link></li>
            <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Engine Problems in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Honest diagnostics. Expert repairs. No guesswork.</p>
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
        "name": "How do I know if my engine needs repair?",
        "acceptedAnswer": { "@type": "Answer", "text": "Common signs include a check engine light, knocking or ticking noises, loss of power, overheating, excessive oil consumption, smoke from the exhaust, or oil leaks. If you notice any of these, bring it in for a diagnostic before the problem gets worse." }
      },
      {
        "@type": "Question",
        "name": "How much does engine repair cost in Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "Engine repair costs vary widely depending on what failed. A minor repair like a valve cover gasket might be a few hundred dollars. A head gasket or timing chain repair is typically more significant. We give you a clear estimate before any work begins — no surprises." }
      },
      {
        "@type": "Question",
        "name": "Is it worth repairing my engine or should I get a new car?",
        "acceptedAnswer": { "@type": "Answer", "text": "We give you honest advice on this. In many cases — especially with extended warranty coverage — repair is significantly cheaper than a car payment. We'll tell you exactly what's wrong and what it costs so you can make the right decision for your situation." }
      },
      {
        "@type": "Question",
        "name": "My engine is overheating — what should I do?",
        "acceptedAnswer": { "@type": "Answer", "text": "Pull over safely and turn off the engine immediately. Do not continue driving an overheating engine — it can cause catastrophic damage very quickly. Call us and we'll help you figure out next steps and get the vehicle in for diagnosis." }
      },
      {
        "@type": "Question",
        "name": "Do you accept extended warranties for engine repair?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we work with most major extended warranty providers including CarShield, Endurance, CARS Protection, and AmTrust. Call us with your warranty info and we'll verify coverage before any work begins." }
      },
      {
        "@type": "Question",
        "name": "Do you serve St. John, Schererville, and Merrillville for engine repair?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we serve all of Lake County including St. John, Schererville, Merrillville, Cedar Lake, and surrounding areas. We're located at 1305 E Summit St in Crown Point, easily accessible from all of Northwest Indiana." }
      }
    ]
  }).replace(/</g, "\u003c")}}
/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Engine Repair Works at R Complete Auto Care",
  "description": "Our diagnostic-first engine repair process in Crown Point, IN.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Comprehensive Diagnostic Scan", "text": "We scan all modules for fault codes, live data, and a complete picture of what the engine management system is reporting." },
    { "@type": "HowToStep", "position": 2, "name": "Physical Inspection", "text": "We check compression, oil condition, cooling system pressure, and any visible damage before recommending anything." },
    { "@type": "HowToStep", "position": 3, "name": "Root Cause Identification", "text": "We find WHY it failed — not just what failed — before picking up a tool." },
    { "@type": "HowToStep", "position": 4, "name": "Clear Estimate & Your Approval", "text": "We call you with exactly what we found and a straight price. You approve everything before any work begins." },
    { "@type": "HowToStep", "position": 5, "name": "Quality Repair & Verification", "text": "We complete the repair, road test, and re-scan all modules to confirm the problem is fully resolved." }
  ]
}).replace(/</g, "\u003c") }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.rcompleteautocare.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Engine Repair" }
  ]
}).replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"@id\":\"https://www.rcompleteautocare.com/services/engine-repair#service\",\"name\":\"Engine Repair\",\"serviceType\":\"Engine Repair\",\"url\":\"https://www.rcompleteautocare.com/services/engine-repair\",\"provider\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"},\"areaServed\":[{\"@type\":\"City\",\"name\":\"Crown Point\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"St. John\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"Schererville\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"Merrillville\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"Cedar Lake\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}}],\"dateModified\":\"2026-04-18\"}".replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://www.rcompleteautocare.com/services/engine-repair#webpage\",\"url\":\"https://www.rcompleteautocare.com/services/engine-repair\",\"name\":\"Engine Repair in Crown Point, IN\",\"dateModified\":\"2026-04-18\",\"about\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"}}".replace(/</g, "\u003c") }} />
  </div>
  );
}