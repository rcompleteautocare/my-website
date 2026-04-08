import Link from "next/link";

export default function Diagnostics() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Auto Diagnostics in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          We diagnose before we repair. Every time. No guesswork — just accurate answers.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Our Diagnostic Services</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          R Complete Auto Care is a diagnostic-first shop. Before we recommend any repair, we find the root cause of your vehicle's problem. Our technicians use professional-grade diagnostic equipment to accurately identify issues with your engine, electrical system, and more.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Check Engine Light", href: "/services/check-engine-light", desc: "Full scan to find the exact cause of your warning light." },
            { title: "Electrical Diagnostics", href: "/services/electrical-diagnostics", desc: "Battery, alternator, wiring, and electrical system issues." },
            { title: "No-Start Diagnostics", href: "/services/no-start-diagnostics", desc: "Car won't start? We find out why fast." },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "20px", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title} →</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "Why is a diagnostic important before repairs?", a: "Without a proper diagnosis, repairs are guesswork. We identify the exact problem so you only pay for what you actually need." },
          { q: "How long does a diagnostic take?", a: "Most diagnostics are completed the same day. We call you with findings before doing any repair work." },
          { q: "How much does a diagnostic cost?", a: "We charge a diagnostic fee which is applied toward your repair cost if you choose to have us fix the issue." },
          { q: "Do you work on all makes and models?", a: "Yes — foreign and domestic. Honda, Toyota, BMW, Ford, Chevrolet, and more." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Need a Diagnosis? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Crown Point's diagnostic-first auto repair shop.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}