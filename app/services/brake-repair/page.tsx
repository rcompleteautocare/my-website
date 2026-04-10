export const metadata = {
  title: 'Brake Repair Crown Point IN — Honest Inspections | R Complete Auto Care',
  description: 'Brake repair in Crown Point, IN. Thorough inspections with measurements — not a 10-minute upsell. Honest pricing, quality parts. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/brake-repair' },
}

import Link from "next/link";
export default function BrakeRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>CROWN POINT, INDIANA</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Brake Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Your brakes are the most important safety system on your vehicle. We perform thorough inspections with actual measurements — not a quick visual and an upsell.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Honest Brake Inspections — No Pressure, No Upsell</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          At R Complete Auto Care in Crown Point, we take brake repair seriously. Your braking system is your most critical safety system — and it deserves a proper inspection, not a rushed visual check designed to sell you pads you don't need yet.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Every brake inspection we perform includes actual pad thickness measurements, rotor thickness and condition assessment, caliper operation check, brake fluid condition, and brake line inspection. We give you the measurements, tell you what's urgent, and what can wait — then you decide.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We service all makes and models and accept most extended warranty plans. If your brake repair is covered under your warranty, we handle the entire claims process for you.
        </p>

        {/* Symptoms */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Signs Your Brakes Need Attention</h2>
        <ul style={{ lineHeight: 2.2, color: "#444", paddingLeft: "20px" }}>
          <li>Squealing or squeaking when you apply the brakes</li>
          <li>Grinding noise when braking — metal on metal contact</li>
          <li>Brake pedal feels soft, spongy, or goes to the floor</li>
          <li>Car pulls to one side when braking</li>
          <li>Steering wheel or vehicle shaking when braking at highway speeds</li>
          <li>Brake warning light on the dashboard</li>
          <li>Longer stopping distances than usual</li>
          <li>Burning smell after driving, especially in stop-and-go traffic</li>
          <li>Visible brake dust buildup on one wheel more than others</li>
          <li>Vehicle shuddering when coming to a stop</li>
        </ul>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Hearing a squeal or grind? Don't wait on brakes.</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          Call (219) 262-2711 →
        </a>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Brake Services We Perform</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {[
            "Brake pad replacement",
            "Rotor resurfacing & replacement",
            "Brake caliper replacement",
            "Brake fluid flush & replacement",
            "Brake line repair & replacement",
            "ABS system diagnosis & repair",
            "Emergency brake repair",
            "Brake master cylinder replacement",
            "Brake booster diagnosis & repair",
            "Complete brake system inspection",
            "Rear drum brake service",
            "Electronic parking brake service",
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
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Our Brake Inspection Process</h2>
          {[
            { step: "1", title: "Pad Thickness Measurement", desc: "We measure brake pad thickness on all four corners using a proper gauge — not just a visual glance. We tell you the actual measurement and how much life is remaining so you can make an informed decision." },
            { step: "2", title: "Rotor Inspection & Measurement", desc: "We measure rotor thickness and check for warping, scoring, and heat cracks. A rotor below minimum thickness or with deep grooves needs replacement — we give you the numbers, not just our opinion." },
            { step: "3", title: "Caliper & Hardware Check", desc: "Stuck or seized calipers cause uneven wear and pulling. We check caliper operation, slide pins, and brake hardware to make sure everything moves freely." },
            { step: "4", title: "Brake Fluid Condition", desc: "Brake fluid absorbs moisture over time, which lowers its boiling point and reduces braking performance. We test fluid condition and recommend a flush only when it's actually needed." },
            { step: "5", title: "ABS & Warning Light Scan", desc: "If your brake warning light or ABS light is on, we scan the ABS module for fault codes. ABS and stability control issues require proper diagnosis — not guesswork." },
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
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Trust Us for Brake Repair</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {[
            { title: "Honest Inspections", desc: "We give you actual measurements and tell you what's urgent vs. what can wait. No pressure, no unnecessary work." },
            { title: "Quality Parts", desc: "We use quality brake pads and rotors — not the cheapest option that will have you back in 6 months." },
            { title: "ABS & Advanced Systems", desc: "We have the diagnostic equipment to properly handle ABS, stability control, and electronic parking brake systems." },
            { title: "Extended Warranty Accepted", desc: "Brake repairs may be covered under your extended warranty. We verify coverage and handle the paperwork." },
            { title: "All Makes & Models", desc: "Foreign and domestic — Honda, Toyota, Ford, GM, BMW, Mercedes, Subaru, Dodge and more." },
            { title: "Same-Day Service", desc: "Most brake repairs completed same day. We know you need your car back — we work efficiently without cutting corners." },
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
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Brake Repair</h2>
          {[
            { q: "How do I know when my brakes need to be replaced?", a: "Common signs include squealing, grinding, a soft pedal, pulling to one side, or a brake warning light. The most accurate way is a proper inspection with pad thickness and rotor measurements — which we provide at every brake service." },
            { q: "Is it safe to drive with grinding brakes?", a: "No. Grinding means your brake pads are worn through to the metal backing plate, which is metal-on-metal contact with your rotors. This reduces stopping power and damages your rotors quickly. Get it in as soon as possible." },
            { q: "How long do brake pads last?", a: "It depends heavily on driving habits and conditions. City driving with frequent stops wears pads much faster than highway driving. Most pads last between 30,000 and 70,000 miles — but the only way to know for sure is a measurement." },
            { q: "Why is my car shaking when I brake?", a: "Shaking when braking — especially at highway speeds — is almost always warped rotors. Heat and stress cause rotors to develop thickness variations that cause vibration when the pads clamp down. Rotor replacement or resurfacing resolves this." },
            { q: "My ABS light is on — is that a brake problem?", a: "The ABS (anti-lock braking system) warning light indicates a fault in the ABS system, which can include wheel speed sensors, the ABS module, or hydraulic components. Your regular brakes will still work, but ABS may not activate in an emergency. We can diagnose and repair it." },
            { q: "Do you accept extended warranties for brake repair?", a: "Yes — some brake components are covered under extended warranty policies. Call us with your warranty information and we'll verify what's covered before any work begins." },
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
          <li><Link href="/services/suspension-steering" style={{ color: "#e63946" }}>Suspension & Steering Repair Crown Point, IN</Link></li>
          <li><Link href="/services/check-engine-light" style={{ color: "#e63946" }}>Check Engine Light Diagnostics Crown Point, IN</Link></li>
          <li><Link href="/services/extended-warranty-repair" style={{ color: "#e63946" }}>Extended Warranty Repairs Crown Point, IN</Link></li>
          <li><Link href="/brake-grinding-crown-point-in" style={{ color: "#e63946" }}>Grinding Brakes in Crown Point — What It Means</Link></li>
          <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
        </ul>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Brake Problems in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Honest inspections. Quality repairs. No pressure.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}