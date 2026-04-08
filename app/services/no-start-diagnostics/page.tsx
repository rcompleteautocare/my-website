export default function NoStartDiagnostics() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          No-Start Diagnostics in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Car won't start? We'll find out exactly why and get you back on the road fast.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Car Won't Start? Here's What We Check.</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          A no-start condition can have many causes — a dead battery, bad starter, failed fuel pump, ignition issue, or something more complex. At R Complete Auto Care, we perform a thorough no-start diagnostic to pinpoint the exact cause before recommending any repair.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Common No-Start Causes</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            "Dead or faulty battery",
            "Bad starter motor",
            "Failed fuel pump",
            "Ignition switch issues",
            "Crank or cam sensor failure",
            "Blown fuse or relay",
            "Security/immobilizer issue",
            "Timing belt failure",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "14px 16px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "My car clicks but won't start — what does that mean?", a: "A single click usually points to a bad starter. Rapid clicking often means a weak or dead battery. We'll diagnose it accurately." },
          { q: "My car cranks but won't start — what's wrong?", a: "This usually points to a fuel, ignition, or sensor issue. We perform a full diagnostic to find the exact cause." },
          { q: "Can you tow my car to your shop?", a: "Yes — call us and we can help arrange towing to our Crown Point location." },
          { q: "How long does a no-start diagnostic take?", a: "Most no-start diagnostics are completed the same day. We call you with findings before doing any repair." },
          { q: "Do you accept extended warranties?", a: "Yes! We work with most extended warranty providers. Call us to verify your coverage." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Car Won't Start? Call Us Now.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Same-day diagnostics in Crown Point, IN.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}