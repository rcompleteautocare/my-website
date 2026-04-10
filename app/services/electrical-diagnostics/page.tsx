import Link from "next/link";

export const metadata = {
  title: 'Electrical Diagnostics Crown Point IN — Parasitic Draw, No-Start, Shorts | R Complete Auto Care',
  description: 'Auto electrical diagnostics in Crown Point, IN. Parasitic drain, no-start, shorts, and warning lights. Same-day diagnostics. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/electrical-diagnostics' },
}

export default function ElectricalDiagnostics() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Electrical Diagnostics in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Electrical problems are complex. We have the tools, equipment, and expertise to find the exact cause — and fix it right.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Expert Auto Electrical Diagnostics in Crown Point</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Modern vehicles have incredibly complex electrical systems. A single faulty sensor, bad ground, or failing module can cause symptoms that seem unrelated and are difficult to diagnose without the right equipment and expertise. At R Complete Auto Care in Crown Point, Indiana, we use professional-grade diagnostic tools to pinpoint electrical problems accurately — the first time.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We work on all foreign and domestic vehicles and have experience with everything from simple battery issues to complex wiring and module problems. Extended warranty work is welcome.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, Indiana.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Common Electrical Problems We Diagnose in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Dead or weak battery",
            "Faulty alternator",
            "Starter problems",
            "Wiring & short circuits",
            "Sensor failures",
            "Module & computer issues",
            "Power window & door locks",
            "Lighting problems",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Trust Us for Electrical Diagnostics</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Professional Equipment", desc: "We use the same diagnostic tools as dealerships to accurately identify electrical issues." },
            { title: "Diagnose First", desc: "We find the exact cause before recommending any repair. No parts-swapping guesswork." },
            { title: "Honest Estimates", desc: "Clear pricing before we start. You approve everything before we touch your vehicle." },
            { title: "Extended Warranty Accepted", desc: "We work with most warranty providers and handle the paperwork for you." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Electrical Diagnostics in Crown Point, IN</h2>
        {[
          { q: "Where can I get auto electrical diagnostics in Crown Point, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. Open Mon–Fri 8am–6pm, Sat 8am–2pm." },
          { q: "How do I know if I have an electrical problem?", a: "Common signs include dim or flickering lights, a car that won't start, warning lights on the dashboard, blown fuses, power windows or locks not working, or a battery that keeps dying." },
          { q: "Can electrical problems cause my check engine light to come on?", a: "Yes — faulty sensors, bad wiring, and module issues can all trigger warning lights. We perform a full diagnostic scan to identify the exact cause at our Crown Point shop." },
          { q: "How much does an electrical diagnostic cost in Crown Point?", a: "We charge a diagnostic fee to properly identify the electrical issue. This fee is applied toward your repair cost if you choose to have us fix it." },
          { q: "Do you work on all makes and models for electrical issues?", a: "Yes — all foreign and domestic vehicles including Honda, Toyota, BMW, Mercedes, Ford, Chevrolet, Dodge, and more." },
          { q: "Do you serve St. John, Schererville, and Merrillville for electrical diagnostics?", a: "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." },
          { q: "Do you accept extended warranties for electrical repairs?", a: "Yes! We work with most extended warranty providers. Call us to verify your coverage before scheduling." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { name: "Check Engine Light", href: "/services/check-engine-light" },
            { name: "No-Start Diagnostics", href: "/services/no-start-diagnostics" },
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
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Electrical Problem in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>We find the real cause — not just the symptom.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}
