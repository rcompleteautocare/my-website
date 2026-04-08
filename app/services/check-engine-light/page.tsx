import Link from "next/link";

export default function CheckEngineLight() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Check Engine Light Diagnostics in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Don't ignore that warning light. Our diagnostic-first approach finds the real problem — fast.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>What Does a Check Engine Light Mean?</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Your check engine light can mean dozens of different things — from a loose gas cap to a failing catalytic converter or serious engine issue. At R Complete Auto Care, we don't just clear the code and send you on your way. We perform a full diagnostic scan to identify the exact cause and give you honest, straightforward answers.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN — we're the area's trusted diagnostic-first auto repair shop.
        </p>

        {/* Why Choose Us */}
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Choose R Complete Auto Care?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Full Diagnostic Scan", desc: "We read all fault codes and investigate the root cause, not just the symptom." },
            { title: "Honest Recommendations", desc: "We tell you exactly what's wrong and what's urgent — no upselling." },
            { title: "Same-Day Diagnostics", desc: "Most check engine light diagnostics completed the same day." },
            { title: "All Makes & Models", desc: "Foreign and domestic vehicles welcome. Honda, Toyota, Ford, GM, BMW and more." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "Is it safe to drive with my check engine light on?", a: "It depends. If the light is flashing, pull over immediately — it indicates a serious misfire that can damage your catalytic converter. If it's solid, it's generally safe to drive short distances but you should get it checked soon." },
          { q: "Can you just clear the code without diagnosing it?", a: "We don't recommend it. Clearing the code without fixing the underlying issue means the light will come back on. We find the root cause first." },
          { q: "How much does a check engine light diagnostic cost?", a: "We charge a diagnostic fee to properly identify the issue. This fee is applied toward your repair cost if you choose to have us fix it." },
          { q: "How long does the diagnostic take?", a: "Most diagnostics are completed the same day, often within a few hours. We'll call you with our findings before doing any work." },
          { q: "Do you work on foreign and domestic vehicles?", a: "Yes — all makes and models including Honda, Toyota, BMW, Mercedes, Ford, Chevrolet, and more." },
          { q: "Do you accept extended warranties for this repair?", a: "Yes! We work with most extended warranty providers. Call us and we'll verify your coverage." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Check Engine Light On? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Crown Point's diagnostic-first auto repair shop. We find the real problem.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}