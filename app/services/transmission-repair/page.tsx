export default function TransmissionRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Transmission Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Slipping, shaking, or won't shift? We diagnose transmission problems accurately before any repair.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Expert Transmission Repair</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Transmission problems can be serious and expensive if ignored. At R Complete Auto Care, we start with a thorough diagnostic to identify the exact issue — whether it's a simple fluid service or a major transmission repair. We work on both automatic and manual transmissions on all foreign and domestic vehicles.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Transmission Services We Offer</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            "Transmission diagnostics",
            "Transmission fluid service",
            "Solenoid replacement",
            "Torque converter repair",
            "Transmission rebuilds",
            "Transmission replacement",
            "Manual transmission repair",
            "CVT transmission service",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "14px 16px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "What are signs of transmission problems?", a: "Common signs include slipping gears, delayed or rough shifting, shaking, burning smell, transmission warning light, or fluid leaks. Don't wait — transmission problems get worse over time." },
          { q: "How long does transmission repair take?", a: "It depends on the repair. A fluid service can be done same-day. A rebuild or replacement takes longer. We'll give you an accurate timeline after diagnosis." },
          { q: "Is it worth repairing my transmission?", a: "We'll give you an honest assessment. In many cases repair or rebuild is more cost-effective than replacement. We'll help you make the best decision." },
          { q: "Do you work on both automatic and manual transmissions?", a: "Yes — we service both automatic and manual transmissions on all makes and models." },
          { q: "Do you accept extended warranties for transmission repair?", a: "Yes! We work with most extended warranty providers and handle the claims process for you." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Transmission Problems? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Honest diagnostics. Expert transmission repair. Crown Point, IN.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}