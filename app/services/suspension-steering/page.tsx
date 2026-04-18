export const metadata = {
  title: 'Suspension Repair Crown Point, IN | R Complete Auto Care',
  description: 'Suspension repair in Crown Point, IN. Struts, shocks, tie rods, alignments. Indiana roads are rough — we keep your ride safe and controlled. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/suspension-steering' },

  openGraph: {
    title: "Suspension Repair Crown Point, IN | R Complete Auto Care",
    description: "Suspension repair in Crown Point, IN. Struts, shocks, tie rods, alignments. Indiana roads are rough — we keep your ride safe and controlled. Call (219) 262-2711.",
    url: "https://www.rcompleteautocare.com/services/suspension-steering",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "article",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suspension Repair Crown Point, IN | R Complete Auto Care",
    description: "Suspension repair in Crown Point, IN. Struts, shocks, tie rods, alignments. Indiana roads are rough — we keep your ride safe and controlled. Call (219) 262-2711.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
}

import Link from "next/link";
import LastUpdated from "@/app/components/LastUpdated";
export default function SuspensionSteering() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>CROWN POINT, INDIANA</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px" }}>
          Suspension &amp; Steering Repair in Crown Point, IN
        </h1>
        <p className="speakable" style={{ fontSize: "16px", color: "#e63946", fontWeight: "600", marginBottom: "16px", fontStyle: "italic" }}>TL;DR: Strut replacement typically runs $200–$400 per strut (parts + labor). Alignments are $80–$120. Ball joints, tie rod ends, and wheel bearings vary by vehicle. We inspect before recommending — and Indiana pothole damage is often more extensive than it first appears.
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Indiana roads are hard on suspension. Potholes, frost heaves, and rough pavement wear out struts, shocks, and steering components faster than anywhere else. We keep your ride safe, stable, and in control.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Crown Point Suspension &amp; Steering Specialists</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Your suspension system does more than just absorb bumps — it controls how your vehicle handles, steers, and stops. Worn struts and shocks don't just make the ride uncomfortable — they increase stopping distances, cause uneven tire wear, and reduce your ability to control the vehicle in emergency situations.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          At R Complete Auto Care in Crown Point, we perform thorough suspension inspections before recommending any repair. We check every component — struts, shocks, control arms, ball joints, tie rods, sway bar links, and steering components — and tell you what's worn, what's safe, and what can wait.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Northwest Indiana roads are some of the toughest on suspension in the country. We understand what the local conditions do to these components and we see the failure patterns that result. If you're hearing clunks, feeling shimmy at highway speeds, or noticing your car pulling to one side, bring it in.
        </p>

        {/* Symptoms */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Signs Your Suspension or Steering Needs Attention</h2>
        <ul style={{ lineHeight: 2.2, color: "#444", paddingLeft: "20px" }}>
          <li>Clunking or knocking noises over bumps or when turning</li>
          <li>Car pulling to one side while driving on a straight road</li>
          <li>Steering wheel vibration or shimmy at highway speeds</li>
          <li>Excessive bouncing after going over a bump</li>
          <li>Vehicle nose-diving when braking or squatting when accelerating</li>
          <li>Uneven or accelerated tire wear — cupping, feathering, or edge wear</li>
          <li>Loose, wandering, or vague steering feel</li>
          <li>Squeaking or creaking from the suspension when going over bumps</li>
          <li>Visible fluid leaks on struts or shock absorbers</li>
          <li>Car sitting noticeably lower on one corner</li>
        </ul>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Hearing clunks or feeling shimmy? Get it inspected.</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          Call (219) 262-2711 →
        </a>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Suspension & Steering Services We Perform</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {[
            "Strut replacement",
            "Shock absorber replacement",
            "Control arm replacement",
            "Ball joint replacement",
            "Tie rod end replacement",
            "Sway bar link replacement",
            "Sway bar bushing replacement",
            "Wheel alignment",
            "Power steering diagnosis & repair",
            "Electric power steering repair",
            "Steering rack replacement",
            "Wheel bearing replacement",
            "Hub assembly replacement",
            "Coil spring replacement",
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
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Our Suspension Inspection Process</h2>
          {[
            { step: "1", title: "Visual Inspection", desc: "We start with a thorough visual inspection of all suspension and steering components — looking for obvious damage, leaking struts, broken springs, cracked boots, and loose components." },
            { step: "2", title: "Component Testing", desc: "We physically check ball joints, tie rod ends, wheel bearings, and sway bar links for play and wear. Many suspension problems only reveal themselves under load — we check them the right way." },
            { step: "3", title: "Tire Wear Analysis", desc: "Tire wear patterns tell us a lot about suspension health. Cupped tires indicate worn shocks or struts. Edge wear points to alignment issues. Feathering suggests worn tie rod ends or control arm bushings." },
            { step: "4", title: "Alignment Check", desc: "After suspension repairs, proper wheel alignment is critical. Misaligned wheels accelerate tire wear, cause pulling, and put stress on suspension components. We check alignment after any steering or suspension repair." },
            { step: "5", title: "Road Test", desc: "We road test the vehicle before and after the repair to confirm the problem is resolved. We check for returning noises, pulling, vibration, and handling characteristics to make sure everything is right." },
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

      {/* Indiana roads angle */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Indiana Roads & Your Suspension</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
          Northwest Indiana winters are brutal on suspension components. The freeze-thaw cycle creates potholes that can destroy struts and bend control arms in a single hit. Salt and moisture accelerate corrosion on bushings, ball joints, and tie rod ends. And the sheer number of rough roads in Lake County means your suspension is working harder than it would in most parts of the country.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444" }}>
          We recommend having your suspension inspected at least once a year — and immediately after any significant pothole impact. Catching a bent control arm or cracked strut mount early is far less expensive than the alignment damage, tire wear, and handling problems that develop when you drive on worn suspension components for months.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Suspension & Steering</h2>
          {[
            { q: "How do I know if my struts are bad?", a: "Common signs include excessive bouncing after bumps, nose-diving when braking, a rough or uncomfortable ride, clunking noises, or visible fluid leaking from the strut body. A bounce test — pushing down on each corner of the car — can reveal worn struts, but a proper inspection is the only definitive way to assess their condition." },
            { q: "Can I drive with bad struts or shocks?", a: "Technically yes, but it's not safe. Worn struts increase stopping distances, reduce your ability to control the vehicle in emergency maneuvers, and cause accelerated tire wear. The longer you drive on them, the more secondary damage accumulates." },
            { q: "Why is my steering wheel shaking at highway speeds?", a: "Steering wheel vibration at highway speeds is usually caused by wheel imbalance, worn tie rod ends, worn ball joints, or loose wheel bearings. Less commonly it can be a bent wheel or tire with a flat spot. A proper inspection will identify the exact cause." },
            { q: "How often should I get an alignment?", a: "We recommend an alignment check once a year and any time you replace steering or suspension components. In Northwest Indiana, we also recommend checking alignment after any significant pothole impact — hitting a deep pothole at speed can knock your alignment out noticeably." },
            { q: "Why are my tires wearing unevenly?", a: "Uneven tire wear almost always points to a suspension or alignment issue. Edge wear suggests misalignment. Cupping or scalloping indicates worn shocks or struts. Feathering suggests worn tie rod ends. We can diagnose the cause from the wear pattern." },
            { q: "Do you accept extended warranties for suspension repairs?", a: "Some suspension components are covered under extended warranty policies. Call us with your warranty information and we'll verify what's covered before any work begins." },
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
          <li><Link href="/services/brake-repair" style={{ color: "#e63946" }}>Brake Repair Crown Point, IN</Link></li>
          <li><Link href="/services/engine-repair" style={{ color: "#e63946" }}>Engine Repair Crown Point, IN</Link></li>
          <li><Link href="/services/extended-warranty-repair" style={{ color: "#e63946" }}>Extended Warranty Repairs Crown Point, IN</Link></li>
          <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
        </ul>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Suspension Problems in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Thorough inspections. Honest recommendations. Quality repairs.</p>
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
        "name": "How do I know if my struts are bad?",
        "acceptedAnswer": { "@type": "Answer", "text": "Common signs include excessive bouncing after bumps, nose-diving when braking, a rough or uncomfortable ride, clunking noises, or visible fluid leaking from the strut body. A bounce test can reveal worn struts, but a proper inspection is the only definitive way to assess their condition." }
      },
      {
        "@type": "Question",
        "name": "Can I drive with bad struts or shocks?",
        "acceptedAnswer": { "@type": "Answer", "text": "Technically yes, but it's not safe. Worn struts increase stopping distances, reduce your ability to control the vehicle in emergency maneuvers, and cause accelerated tire wear. The longer you drive on them, the more secondary damage accumulates." }
      },
      {
        "@type": "Question",
        "name": "Why is my steering wheel shaking at highway speeds?",
        "acceptedAnswer": { "@type": "Answer", "text": "Steering wheel vibration at highway speeds is usually caused by wheel imbalance, worn tie rod ends, worn ball joints, or loose wheel bearings. Less commonly it can be a bent wheel or tire with a flat spot. A proper inspection will identify the exact cause." }
      },
      {
        "@type": "Question",
        "name": "How often should I get an alignment?",
        "acceptedAnswer": { "@type": "Answer", "text": "We recommend an alignment check once a year and any time you replace steering or suspension components. In Northwest Indiana, we also recommend checking alignment after any significant pothole impact — hitting a deep pothole at speed can knock your alignment out noticeably." }
      },
      {
        "@type": "Question",
        "name": "Why are my tires wearing unevenly?",
        "acceptedAnswer": { "@type": "Answer", "text": "Uneven tire wear almost always points to a suspension or alignment issue. Edge wear suggests misalignment. Cupping or scalloping indicates worn shocks or struts. Feathering suggests worn tie rod ends. We can diagnose the cause from the wear pattern." }
      },
      {
        "@type": "Question",
        "name": "Do you accept extended warranties for suspension repairs?",
        "acceptedAnswer": { "@type": "Answer", "text": "Some suspension components are covered under extended warranty policies. Call us with your warranty information and we'll verify what's covered before any work begins." }
      }
    ]
  }).replace(/</g, "\u003c")}}
/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Suspension Inspection Works at R Complete Auto Care",
  "description": "Our 5-step suspension and steering inspection process in Crown Point, IN.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Visual Inspection", "text": "We thoroughly inspect all suspension and steering components for obvious damage, leaking struts, broken springs, and loose components." },
    { "@type": "HowToStep", "position": 2, "name": "Component Testing", "text": "We physically check ball joints, tie rod ends, wheel bearings, and sway bar links for play and wear under load." },
    { "@type": "HowToStep", "position": 3, "name": "Tire Wear Analysis", "text": "We analyze tire wear patterns — cupping, edge wear, feathering — to identify suspension root causes." },
    { "@type": "HowToStep", "position": 4, "name": "Alignment Check", "text": "After any suspension repair, we check alignment to prevent accelerated tire wear and handling issues." },
    { "@type": "HowToStep", "position": 5, "name": "Road Test", "text": "We road test before and after repair to confirm noises, pulling, and vibration are fully resolved." }
  ]
}).replace(/</g, "\u003c") }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.rcompleteautocare.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Suspension & Steering Repair" }
  ]
}).replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"@id\":\"https://www.rcompleteautocare.com/services/suspension-steering#service\",\"name\":\"Suspension & Steering Repair\",\"serviceType\":\"Suspension and Steering Repair\",\"url\":\"https://www.rcompleteautocare.com/services/suspension-steering\",\"provider\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"},\"areaServed\":[{\"@type\":\"City\",\"name\":\"Crown Point\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"St. John\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"Schererville\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"Merrillville\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}},{\"@type\":\"City\",\"name\":\"Cedar Lake\",\"containedIn\":{\"@type\":\"State\",\"name\":\"Indiana\"}}],\"dateModified\":\"2026-04-18\"}".replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://www.rcompleteautocare.com/services/suspension-steering#webpage\",\"url\":\"https://www.rcompleteautocare.com/services/suspension-steering\",\"name\":\"Suspension & Steering Repair in Crown Point, IN\",\"dateModified\":\"2026-04-18\",\"about\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"}}".replace(/</g, "\u003c") }} />
  </div>
  );
}