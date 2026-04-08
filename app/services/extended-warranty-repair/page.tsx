export default function ExtendedWarrantyRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Extended Warranty Repairs in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          We work with most extended warranty providers. Let us handle the repair and the paperwork.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Extended Warranty Work Welcome</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          R Complete Auto Care is proud to accept most extended warranty plans. Whether you purchased your warranty from a dealership or a third-party provider, we'll work directly with your warranty company to get your vehicle repaired and get you back on the road — with as little hassle as possible for you.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          We start with a thorough diagnostic to properly document the issue for your warranty claim, then communicate directly with your provider to get approval for the repair. You won't have to fight with your warranty company — we handle it for you.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>How It Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { step: "1", title: "Call Us", desc: "Tell us about your vehicle issue and your warranty provider." },
            { step: "2", title: "We Diagnose", desc: "We perform a full diagnostic and document everything properly." },
            { step: "3", title: "We File the Claim", desc: "We contact your warranty company and get repair approval." },
            { step: "4", title: "We Fix It", desc: "We complete the repair to the highest standard and get you back on the road." },
          ].map(item => (
            <div key={item.step} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "20px" }}>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#e63946", marginBottom: "8px" }}>{item.step}</div>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "Do you accept my extended warranty?", a: "We work with most major extended warranty providers. Call us with your warranty information and we'll verify your coverage before any work begins." },
          { q: "Do I have to pay anything out of pocket?", a: "That depends on your warranty plan. Some plans have deductibles. We'll be upfront about any out-of-pocket costs before we begin repairs." },
          { q: "What types of repairs are covered by extended warranties?", a: "Coverage varies by plan but typically includes engine, transmission, drivetrain, electrical, and A/C components. We'll work with your provider to maximize your coverage." },
          { q: "Do you handle the warranty claim paperwork?", a: "Yes — we contact your warranty company, document the repair, and get approval. You don't have to deal with the hassle." },
          { q: "What if my warranty company denies the claim?", a: "We'll advocate on your behalf and explain our diagnostic findings. If the claim is denied, we'll give you honest options for moving forward." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Have an Extended Warranty? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>We handle the claim. You just drop off your car.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}