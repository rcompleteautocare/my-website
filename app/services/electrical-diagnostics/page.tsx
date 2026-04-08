export default function ElectricalDiagnostics() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Electrical Diagnostics in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Electrical problems are complex. We have the tools and expertise to find the issue fast.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Expert Electrical Diagnostics</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Modern vehicles have complex electrical systems that require specialized diagnostic equipment and expertise. From dead batteries and faulty alternators to wiring issues, sensor failures, and module problems — R Complete Auto Care has the tools and experience to accurately diagnose and repair any electrical issue.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Common Electrical Problems We Fix</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
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
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "14px 16px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "How do I know if I have an electrical problem?", a: "Common signs include dim lights, a car that won't start, flickering dashboard lights, blown fuses, or a battery that keeps dying. Bring it in and we'll find the cause." },
          { q: "Can electrical problems cause my check engine light to come on?", a: "Yes — faulty sensors, bad wiring, and module issues can all trigger warning lights. We perform a full scan to identify the exact cause." },
          { q: "Do you work on all makes and models?", a: "Yes — all foreign and domestic vehicles including Honda, Toyota, BMW, Ford, Chevrolet, and more." },
          { q: "Do you accept extended warranties for electrical repairs?", a: "Yes! We work with most extended warranty providers. Call us to verify your coverage." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Electrical Problem? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>We find the real cause — not just the symptom.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}