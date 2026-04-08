import Link from "next/link";

export const metadata = {
  title: "No-Start Diagnostics Crown Point IN | R Complete Auto Care | (219) 262-2711",
  description: "Car won't start in Crown Point IN? R Complete Auto Care finds the exact cause fast. Same-day diagnostics. Foreign & domestic. Extended warranty accepted. Call (219) 262-2711.",
};

export default function NoStartDiagnostics() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          No-Start Diagnostics in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Car won't start? We'll find out exactly why — and get you back on the road fast. Same-day diagnostics available in Crown Point.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Car Won't Start in Crown Point? We Find Out Why.</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          A no-start condition can have many different causes — a dead battery, a bad starter, a failed fuel pump, an ignition issue, a security system problem, or something more complex. At R Complete Auto Care in Crown Point, Indiana, we perform a thorough no-start diagnostic to pinpoint the exact cause before recommending any repair.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We work on all foreign and domestic vehicles and have experience diagnosing no-start conditions on Honda, Toyota, BMW, Mercedes, Ford, Chevrolet, Dodge, and more. Extended warranty work is welcome.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, Indiana. If you need help arranging a tow, give us a call.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Common No-Start Causes We Diagnose in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Dead or faulty battery",
            "Bad starter motor",
            "Failed fuel pump",
            "Ignition switch issues",
            "Crank or cam sensor failure",
            "Blown fuse or relay",
            "Security/immobilizer issue",
            "Timing belt or chain failure",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Trust Us</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Same-Day Diagnostics", desc: "Most no-start diagnostics at our Crown Point shop are completed the same day." },
            { title: "Diagnose First, Always", desc: "We find the exact cause before recommending any repair. No guesswork." },
            { title: "Honest Estimates", desc: "Clear pricing before we start. You approve everything first." },
            { title: "Extended Warranty Accepted", desc: "We work with most warranty providers and handle the paperwork." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — No-Start Diagnostics in Crown Point, IN</h2>
        {[
          { q: "My car won't start in Crown Point — what should I do?", a: "Call R Complete Auto Care at (219) 262-2711. We're located at 1305 E Summit St in Crown Point, IN. We can help arrange a tow and will diagnose the problem same day." },
          { q: "My car clicks but won't start — what does that mean?", a: "A single loud click usually points to a bad starter motor. Rapid clicking typically means a weak or dead battery. We'll diagnose it accurately at our Crown Point shop." },
          { q: "My car cranks but won't start — what's wrong?", a: "This typically points to a fuel, ignition, or sensor issue. Common causes include a failed fuel pump, bad crankshaft sensor, or ignition problem. We perform a full diagnostic to find the exact cause." },
          { q: "Can you tow my car to your Crown Point shop?", a: "We can help you arrange towing to our Crown Point location at 1305 E Summit St. Give us a call at (219) 262-2711 and we'll assist you." },
          { q: "How long does a no-start diagnostic take?", a: "Most no-start diagnostics at our Crown Point location are completed the same day. We call you with our findings before doing any repair work." },
          { q: "Do you serve St. John, Schererville, and Merrillville for no-start diagnostics?", a: "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." },
          { q: "Do you accept extended warranties for no-start repairs?", a: "Yes! We work with most extended warranty providers. Call us to verify your coverage before scheduling." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { name: "Electrical Diagnostics", href: "/services/electrical-diagnostics" },
            { name: "Check Engine Light", href: "/services/check-engine-light" },
            { name: "Engine Repair", href: "/services/engine-repair" },
            { name: "Auto Repair Crown Point", href: "/auto-repair-crown-point-in" },
          ].map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", fontWeight: "500", display: "block" }}>
              {s.name} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Car Won't Start in Crown Point? Call Us Now.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Same-day diagnostics. We find the real cause fast.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}