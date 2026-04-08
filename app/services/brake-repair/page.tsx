export default function BrakeRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Brake Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Squeaking, grinding, or a soft pedal? Don't wait — your brakes are your most important safety system.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Expert Brake Repair You Can Trust</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Your brakes are the most critical safety system on your vehicle. At R Complete Auto Care, we perform a thorough brake inspection before recommending any service. We only replace what needs to be replaced — no unnecessary upselling. Our technicians work on all foreign and domestic vehicles.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Brake Services We Offer</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            "Brake pad replacement",
            "Rotor resurfacing & replacement",
            "Brake caliper repair",
            "Brake fluid flush",
            "ABS system repair",
            "Brake line repair",
            "Emergency brake repair",
            "Full brake inspection",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "14px 16px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "How do I know if my brakes need service?", a: "Common signs include squeaking or grinding noises, a soft or spongy pedal, pulling to one side when braking, or a vibration when you brake. If you notice any of these, bring it in right away." },
          { q: "How often should brakes be replaced?", a: "Brake pads typically last 30,000–70,000 miles depending on driving habits. Rotors last longer but may need resurfacing or replacement at the same time. We inspect and give you an honest recommendation." },
          { q: "Is it safe to drive with worn brakes?", a: "No — worn brakes are a serious safety risk. If you hear grinding or your pedal feels soft, stop driving and call us immediately." },
          { q: "How long does brake repair take?", a: "Most brake jobs are completed the same day, often within a few hours." },
          { q: "Do you accept extended warranties for brake repair?", a: "Yes! We work with most extended warranty providers. Call us to verify your coverage." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Brake Problems? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Don't wait — your safety depends on it.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}