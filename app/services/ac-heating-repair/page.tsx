export default function AcHeatingRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          A/C & Heating Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          No cold air? No heat? We diagnose and repair all A/C and heating system problems.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Expert A/C & Heating Repair</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Whether your A/C is blowing warm air or your heater is not keeping you warm on cold Indiana winters, R Complete Auto Care has you covered. We perform a thorough diagnostic before recommending any repair.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>A/C & Heating Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {["A/C system diagnostics", "Refrigerant recharge", "Compressor replacement", "Condenser repair", "Evaporator repair", "Heater core repair", "Blend door actuator", "Climate control repair"].map((item) => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "14px 16px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "Why is my A/C blowing warm air?", a: "Common causes include low refrigerant, a faulty compressor, a leaking condenser, or a failing expansion valve. We perform a full diagnostic to find the exact cause." },
          { q: "Why is my heater not working?", a: "Common causes include a clogged heater core, low coolant, a faulty thermostat, or a blend door actuator failure." },
          { q: "How long does A/C repair take?", a: "A refrigerant recharge can be done same-day. More complex repairs take longer. We give you an accurate timeline after diagnosis." },
          { q: "Do you work on all makes and models?", a: "Yes — all foreign and domestic vehicles including Honda, Toyota, BMW, Ford, Chevrolet, and more." },
          { q: "Do you accept extended warranties for A/C repair?", a: "Yes! We work with most extended warranty providers. Call us to verify your coverage." },
        ].map((item) => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>A/C or Heat Not Working? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Honest diagnostics. Expert repairs. Crown Point, IN.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>
    </div>
  );
}