export const metadata = {
  title: 'Oil Change & Maintenance Crown Point | R Complete Auto Care',
  description: 'Oil change and maintenance in Crown Point, IN. Conventional and synthetic oil with multi-point inspection. Honest service, no upsell. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/oil-change-maintenance' },
}

import Link from "next/link";
import LastUpdated from "@/app/components/LastUpdated";
export default function OilChangeMaintenance() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>CROWN POINT, INDIANA</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px" }}>
          Oil Change & Maintenance in Crown Point, IN
        </h1>
        <p style={{ fontSize: "16px", color: "#e63946", fontWeight: "600", marginBottom: "16px", fontStyle: "italic" }}>
          TL;DR: Conventional oil changes start around $40–$60; full synthetic starts around $70–$90. Service takes 30–60 minutes and includes a multi-point inspection. No appointment required — call ahead for same-day service.
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Conventional and synthetic oil changes with a thorough multi-point inspection — so you know what's coming before it becomes an emergency.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>More Than Just an Oil Change</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          At R Complete Auto Care in Crown Point, an oil change is never just an oil change. Every service includes a thorough multi-point inspection — we check fluid levels, brake pad thickness, tire condition, belt and hose condition, filters, lights, and anything else that could affect your vehicle's safety and reliability.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We give you an honest report on what we find. If something needs attention, we tell you — along with how urgent it is and what it costs. If everything looks good, we tell you that too. No invented maintenance items, no pressure, no upsell.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Regular oil changes are the single most important thing you can do to extend the life of your engine. We make it easy — fast service, honest inspection, and the same diagnostic-first approach we bring to every vehicle that comes through our doors.
        </p>

        {/* Services */}
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Oil Change & Maintenance Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Conventional oil change",
            "Synthetic oil change",
            "Synthetic blend oil change",
            "High-mileage oil change",
            "Multi-point inspection",
            "Air filter replacement",
            "Cabin air filter replacement",
            "Tire rotation",
            "Fluid top-off",
            "Coolant flush & fill",
            "Transmission fluid service",
            "Brake fluid flush",
            "Power steering fluid flush",
            "Fuel system cleaning",
            "Spark plug replacement",
            "Belt & hose inspection",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", padding: "12px 14px", fontSize: "14px", color: "#333" }}>
              {item}
            </div>
          ))}
        </div>

        {/* What's included */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>What's Included in Our Multi-Point Inspection</h2>
        <ul style={{ lineHeight: 2.2, color: "#444", paddingLeft: "20px" }}>
          <li>Engine oil level and condition check</li>
          <li>Coolant level and condition</li>
          <li>Brake fluid level and condition</li>
          <li>Power steering fluid level</li>
          <li>Transmission fluid level and condition</li>
          <li>Windshield washer fluid</li>
          <li>Brake pad thickness — all four corners</li>
          <li>Tire tread depth and condition</li>
          <li>Tire pressure check and adjustment</li>
          <li>Air filter and cabin air filter condition</li>
          <li>Belt and hose visual inspection</li>
          <li>Exterior lights — headlights, taillights, brake lights</li>
          <li>Battery terminals and visible condition</li>
          <li>Visible fluid leaks under the vehicle</li>
        </ul>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Due for an oil change? We'll have you in and out fast.</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          Call (219) 262-2711 →
        </a>
      </section>

      {/* Oil types */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Conventional vs. Synthetic Oil — Which Do You Need?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {[
            {
              title: "Conventional Oil",
              desc: "Refined from crude oil. Suitable for older vehicles, simple engine designs, and drivers with regular driving patterns. Typically changed every 3,000–5,000 miles.",
              best: "Best for: Older vehicles, high-mileage engines on a budget, vehicles with simple engine designs"
            },
            {
              title: "Synthetic Oil",
              desc: "Engineered for superior performance, better protection at extreme temperatures, and longer change intervals. Required by most modern vehicles. Typically changed every 7,500–10,000 miles.",
              best: "Best for: Modern vehicles, turbocharged engines, extreme temperature climates, extended drain intervals"
            },
            {
              title: "High-Mileage Oil",
              desc: "Formulated for vehicles over 75,000 miles. Contains seal conditioners to reduce leaks and additional additives to protect higher-mileage engine components.",
              best: "Best for: Vehicles with 75,000+ miles, engines with minor oil leaks or consumption"
            },
            {
              title: "Synthetic Blend",
              desc: "A mix of conventional and synthetic base oils. Offers better protection than conventional at a lower cost than full synthetic.",
              best: "Best for: Trucks, SUVs, and vehicles with moderate towing or load demands"
            },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", padding: "20px", borderRadius: "4px" }}>
              <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "10px" }}>{item.title}</div>
              <div style={{ color: "#444", lineHeight: 1.7, marginBottom: "10px", fontSize: "14px" }}>{item.desc}</div>
              <div style={{ color: "#e63946", fontSize: "13px", fontWeight: "500" }}>{item.best}</div>
            </div>
          ))}
        </div>
        <p style={{ lineHeight: 1.8, color: "#444", marginTop: "24px" }}>
          Not sure which oil your vehicle needs? We'll check your owner's manual specifications and recommend the correct oil type and viscosity for your specific vehicle. Using the wrong oil type can affect fuel economy, engine protection, and warranty compliance.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Oil Change & Maintenance</h2>
          {[
            { q: "How much does an oil change cost in Crown Point, IN?", a: "Conventional oil changes start around $40–$60. Full synthetic oil changes start around $70–$90 depending on your vehicle's oil capacity and type. We always check your owner's manual specs and use the correct oil for your vehicle." },
            { q: "How long does an oil change take in Crown Point?", a: "Most oil changes at our Crown Point shop are completed in 30–60 minutes. If you add a tire rotation or other services, allow a bit more time." },
            { q: "Do I need an appointment for an oil change?", a: "We recommend calling ahead at (219) 262-2711 for same-day service. Walk-ins are welcome based on availability. We're open Mon–Fri 8am–6pm and Sat 8am–2pm." },
            { q: "How often should I change my oil?", a: "It depends on your vehicle and oil type. Conventional oil typically needs changing every 3,000–5,000 miles. Full synthetic oil can last 7,500–10,000 miles or more. The best reference is your owner's manual — and we'll check it for you when you come in." },
            { q: "Can I go longer between oil changes with synthetic oil?", a: "Yes — modern full synthetic oils are engineered for extended drain intervals. Many manufacturers specify 7,500–10,000 mile intervals with synthetic oil. However, if you do a lot of short trips, tow frequently, or drive in extreme temperatures, more frequent changes are beneficial." },
            { q: "What happens if I don't change my oil regularly?", a: "Oil breaks down over time and loses its ability to lubricate and protect engine components. Old oil becomes thick and sludgy, restricts oil flow, and allows metal-on-metal contact inside the engine. Skipping oil changes is one of the most common causes of premature engine failure." },
            { q: "Do you rotate tires with an oil change?", a: "Yes — we can perform a tire rotation with your oil change service. Rotating tires every 5,000–7,500 miles ensures even wear and extends tire life significantly." },
            { q: "Will you tell me if you find something wrong during the inspection?", a: "Always — that's the point of the inspection. We give you a written report of what we found, what's urgent, and what can wait. We never do additional work without your approval. No surprises on your bill." },
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
          <li><Link href="/services/suspension-steering" style={{ color: "#e63946" }}>Suspension & Steering Crown Point, IN</Link></li>
          <li><Link href="/services/engine-repair" style={{ color: "#e63946" }}>Engine Repair Crown Point, IN</Link></li>
          <li><Link href="/services/ac-heating-repair" style={{ color: "#e63946" }}>AC & Heating Repair Crown Point, IN</Link></li>
          <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
        </ul>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Ready for an Oil Change in Crown Point?</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Fast service. Honest inspection. No pressure.</p>
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
        "name": "How much does an oil change cost in Crown Point, IN?",
        "acceptedAnswer": { "@type": "Answer", "text": "Conventional oil changes start around $40–$60. Full synthetic oil changes start around $70–$90 depending on your vehicle's oil capacity and type. We always check your owner's manual specs and use the correct oil for your vehicle." }
      },
      {
        "@type": "Question",
        "name": "How long does an oil change take in Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most oil changes at our Crown Point shop are completed in 30–60 minutes. If you add a tire rotation or other services, allow a bit more time." }
      },
      {
        "@type": "Question",
        "name": "Do I need an appointment for an oil change?",
        "acceptedAnswer": { "@type": "Answer", "text": "We recommend calling ahead at (219) 262-2711 for same-day service. Walk-ins are welcome based on availability. We're open Mon–Fri 8am–6pm and Sat 8am–2pm." }
      },
      {
        "@type": "Question",
        "name": "How often should I change my oil?",
        "acceptedAnswer": { "@type": "Answer", "text": "It depends on your vehicle and oil type. Conventional oil typically needs changing every 3,000–5,000 miles. Full synthetic oil can last 7,500–10,000 miles or more. The best reference is your owner's manual — and we'll check it for you when you come in." }
      },
      {
        "@type": "Question",
        "name": "Can I go longer between oil changes with synthetic oil?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — modern full synthetic oils are engineered for extended drain intervals. Many manufacturers specify 7,500–10,000 mile intervals with synthetic oil. However, if you do a lot of short trips, tow frequently, or drive in extreme temperatures, more frequent changes are beneficial." }
      },
      {
        "@type": "Question",
        "name": "What happens if I don't change my oil regularly?",
        "acceptedAnswer": { "@type": "Answer", "text": "Oil breaks down over time and loses its ability to lubricate and protect engine components. Old oil becomes thick and sludgy, restricts oil flow, and allows metal-on-metal contact inside the engine. Skipping oil changes is one of the most common causes of premature engine failure." }
      },
      {
        "@type": "Question",
        "name": "Do you rotate tires with an oil change?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — we can perform a tire rotation with your oil change service. Rotating tires every 5,000–7,500 miles ensures even wear and extends tire life significantly." }
      },
      {
        "@type": "Question",
        "name": "Will you tell me if you find something wrong during the inspection?",
        "acceptedAnswer": { "@type": "Answer", "text": "Always — that's the point of the inspection. We give you a written report of what we found, what's urgent, and what can wait. We never do additional work without your approval. No surprises on your bill." }
      }
    ]
  })}}
/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How an Oil Change Works at R Complete Auto Care",
  "description": "Our oil change process in Crown Point, IN — from drop-off to pick-up.",
  "totalTime": "PT1H",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Check In", "text": "Call or stop by. We confirm your vehicle's oil type and viscosity from the owner's manual specifications." },
    { "@type": "HowToStep", "position": 2, "name": "Drain Old Oil & Replace Filter", "text": "We drain the old oil, replace the oil filter, and refill with the correct oil type and quantity for your vehicle." },
    { "@type": "HowToStep", "position": 3, "name": "Multi-Point Inspection", "text": "While your vehicle is on the lift, we perform a thorough multi-point inspection — fluids, brakes, tires, belts, lights, and more." },
    { "@type": "HowToStep", "position": 4, "name": "Report & Pick Up", "text": "We report our findings, tell you what's urgent and what can wait, and return your vehicle — typically within 30–60 minutes." }
  ]
}) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.rcompleteautocare.com/services/diagnostics" },
    { "@type": "ListItem", "position": 3, "name": "Oil Change & Maintenance" }
  ]
}) }} /></div>
  );
}