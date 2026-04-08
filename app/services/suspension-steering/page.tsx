export default function SuspensionSteering() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Suspension & Steering Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Rough ride, pulling, or wandering? We diagnose and fix suspension and steering problems right.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Expert Suspension & Steering Repair</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          A worn suspension or steering system affects your safety, comfort, and tire wear. At R Complete Auto Care, we inspect your entire suspension and steering system to identify worn or damaged components — and only recommend what actually needs to be fixed. We work on all foreign and domestic vehicles.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Suspension & Steering Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            "Shocks & struts replacement",
            "Control arm repair",
            "Ball joint replacement",
            "Tie rod replacement",
            "Power steering repair",
            "Rack & pinion repair",
            "Wheel alignment",
            "Sway bar & links",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "14px 16px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "How do I know if my suspension needs repair?", a: "Common signs include a rough or bouncy ride, pulling to one side, uneven tire wear, clunking noises over bumps, or a loose or wandering steering wheel." },
          { q: "Is a bad suspension dangerous?", a: "Yes — worn shocks and struts increase your stopping distance and make your vehicle harder to control, especially in emergency situations." },
          { q: "How long does suspension repair take?", a: "Most suspension repairs are completed the same day. We'll give you an accurate timeline after inspection." },
          { q: "Do you do wheel alignments?", a: "Yes — proper alignment is critical after any suspension repair to ensure even tire wear and proper handling." },
          { q: "Do you accept extended warranties for suspension repair?", a: "Yes! We work with most extended warranty providers. Call us to verify your coverage." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Suspension or Steering Issues? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Honest diagnostics. Expert repairs. Crown Point, IN.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}