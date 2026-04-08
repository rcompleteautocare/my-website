export default function EngineRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Engine Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          From minor engine repairs to major overhauls — we diagnose first and fix it right.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Expert Engine Repair You Can Trust</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Your engine is the heart of your vehicle. At R Complete Auto Care, we take engine problems seriously. We start with a thorough diagnostic to identify the exact issue before recommending any repair — saving you time and money. Whether it's a minor fix or a major engine repair, our technicians have the expertise to get it done right.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Engine Services We Offer</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            "Engine diagnostics",
            "Timing belt & chain repair",
            "Head gasket replacement",
            "Valve cover gasket repair",
            "Oil leak repair",
            "Overheating issues",
            "Engine mounts",
            "Full engine replacement",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "14px 16px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "How do I know if my engine needs repair?", a: "Common signs include knocking or ticking noises, loss of power, excessive oil consumption, overheating, or a check engine light. Bring it in and we'll diagnose it." },
          { q: "How long does engine repair take?", a: "It depends on the repair. Minor repairs can be done same-day. Major repairs like head gaskets or engine replacement take longer. We'll give you an accurate timeline after diagnosis." },
          { q: "Do you work on foreign and domestic vehicles?", a: "Yes — all makes and models including Honda, Toyota, BMW, Mercedes, Ford, Chevrolet, and more." },
          { q: "Do you accept extended warranties for engine repair?", a: "Yes! We work with most extended warranty providers and handle the claims process for you." },
          { q: "Is it worth repairing my engine or should I get a new car?", a: "We'll give you an honest assessment. In many cases, engine repair is far more cost-effective than a new vehicle. We'll help you make the best decision for your situation." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Engine Problems? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Honest diagnostics. Expert engine repair. Crown Point, IN.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}