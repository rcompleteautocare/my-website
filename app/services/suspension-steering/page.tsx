import Link from "next/link";

export const metadata = {
  title: 'Suspension Repair Crown Point IN — Struts, Shocks, Alignment | R Complete Auto Care',
  description: 'Suspension and steering repair in Crown Point, IN. Struts, shocks, alignments, control arms. Indiana road damage specialists. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/suspension-steering' },
}

export default function SuspensionSteering() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Suspension & Steering Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Rough ride, pulling, wandering, or clunking over bumps? We diagnose and fix suspension and steering problems right the first time.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake, Indiana
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Expert Suspension & Steering Repair in Crown Point</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          A worn suspension or steering system affects your safety, your comfort, and the life of your tires. At R Complete Auto Care in Crown Point, Indiana, we inspect your entire suspension and steering system to identify exactly what's worn or damaged — and we only recommend what actually needs to be fixed.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Indiana roads are tough on suspension components. Potholes, harsh winters, and heavy use all take a toll. Whether you're hearing clunks, feeling a rough ride, or noticing uneven tire wear, our technicians in Crown Point have the expertise to diagnose and repair it correctly.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We work on all foreign and domestic vehicles and accept most extended warranty plans. Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, Indiana.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Signs Your Suspension or Steering Needs Repair</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Rough or bouncy ride",
            "Pulling to one side",
            "Wandering or loose steering",
            "Clunking over bumps",
            "Uneven tire wear",
            "Vehicle nose-dives when braking",
            "Squeaking over bumps",
            "Difficulty steering",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Suspension & Steering Services in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Shocks & struts replacement",
            "Control arm repair",
            "Ball joint replacement",
            "Tie rod replacement",
            "Power steering repair",
            "Rack & pinion repair",
            "Wheel alignment",
            "Sway bar & end links",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Trust Us</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Full Inspection First", desc: "We inspect the entire suspension and steering system before recommending any repair." },
            { title: "Honest Estimates", desc: "Clear pricing before we start. We only replace what actually needs to be replaced." },
            { title: "Extended Warranty Accepted", desc: "We work with most warranty providers and handle the paperwork for you." },
            { title: "All Makes & Models", desc: "Foreign and domestic vehicles — Honda, Toyota, BMW, Ford, Chevy, and more." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Suspension & Steering Repair in Crown Point, IN</h2>
        {[
          { q: "Where can I get suspension repair in Crown Point, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. Open Mon–Fri 8am–6pm, Sat 8am–2pm." },
          { q: "How do I know if my suspension needs repair?", a: "Common signs include a rough or bouncy ride, pulling to one side, clunking over bumps, uneven tire wear, or a loose steering wheel. If you're experiencing any of these in Crown Point, bring it in for an inspection." },
          { q: "Is a bad suspension dangerous?", a: "Yes — worn shocks and struts increase your stopping distance and make your vehicle harder to control, especially in emergency situations on Crown Point roads." },
          { q: "How much does suspension repair cost in Crown Point?", a: "Cost depends on what needs to be repaired. We inspect everything first and give you a clear estimate before starting any work." },
          { q: "Do you do wheel alignments in Crown Point?", a: "Yes — proper alignment is critical after any suspension repair to ensure even tire wear and proper handling. We perform alignments at our Crown Point location." },
          { q: "Do you serve St. John, Schererville, and Merrillville for suspension repair?", a: "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." },
          { q: "Do you accept extended warranties for suspension repair?", a: "Yes! We work with most extended warranty providers. Call us to verify your coverage before scheduling." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { name: "Brake Repair", href: "/services/brake-repair" },
            { name: "Oil Change & Maintenance", href: "/services/oil-change-maintenance" },
            { name: "Extended Warranty Repairs", href: "/services/extended-warranty-repair" },
            { name: "Auto Repair Crown Point", href: "/auto-repair-crown-point-in" },
          ].map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", fontWeight: "500", display: "block" }}>
              {s.name} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Suspension or Steering Issues in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Honest diagnostics. Expert repairs. No guesswork.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}
