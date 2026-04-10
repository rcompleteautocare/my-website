import Link from "next/link";

export const metadata = {
  title: 'Extended Warranty Auto Repair Crown Point IN | R Complete Auto Care',
  description: 'Extended warranty auto repair in Crown Point, IN. We handle pre-authorisation, documentation, and the entire claims process. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/extended-warranty-repair' },
}

export default function ExtendedWarrantyRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Extended Warranty Repairs in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          We work with most extended warranty providers and handle the entire claims process for you. Just drop off your car — we do the rest.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake, Indiana
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Extended Warranty Work Welcome in Crown Point</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          R Complete Auto Care proudly accepts most extended warranty plans at our Crown Point, Indiana location. Whether you purchased your warranty from a dealership or a third-party provider, we work directly with your warranty company to get your vehicle repaired — with as little hassle as possible for you.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We start with a thorough diagnostic to properly document the issue for your warranty claim, then communicate directly with your provider to get approval. You don't have to fight with your warranty company — we handle it for you.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, Indiana.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>How Our Warranty Repair Process Works</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { step: "1", title: "Call Us First", desc: "Tell us about your vehicle issue and your warranty provider. We'll verify coverage before scheduling." },
            { step: "2", title: "We Diagnose It", desc: "We perform a full diagnostic and document the issue properly for your warranty claim." },
            { step: "3", title: "We File the Claim", desc: "We contact your warranty company directly and work to get repair approval as fast as possible." },
            { step: "4", title: "We Fix It Right", desc: "We complete the repair to the highest standard and get you back on the road." },
          ].map(item => (
            <div key={item.step} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "20px" }}>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#e63946", marginBottom: "8px" }}>{item.step}</div>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Warranty Repairs We Handle in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Engine repair & replacement",
            "Transmission repair",
            "Electrical diagnostics",
            "A/C & heating repair",
            "Suspension & steering",
            "Brake system repair",
            "No-start diagnostics",
            "Check engine light diagnosis",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Extended Warranty Repair in Crown Point, IN</h2>
        {[
          { q: "Where can I get extended warranty repairs done in Crown Point, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. We accept most extended warranty plans and handle the claims process for you." },
          { q: "Do you accept my extended warranty?", a: "We work with most major extended warranty providers. Call us with your warranty information and we'll verify your coverage before any work begins." },
          { q: "Do I have to pay anything out of pocket?", a: "That depends on your warranty plan. Some plans have deductibles. We'll be completely upfront about any out-of-pocket costs before we begin any repairs." },
          { q: "Do you handle the warranty claim paperwork?", a: "Yes — we contact your warranty company, document the repair properly, and get approval. You don't have to deal with the hassle or spend hours on the phone with your warranty provider." },
          { q: "What types of repairs are covered by extended warranties?", a: "Coverage varies by plan but typically includes engine, transmission, drivetrain, electrical, and A/C components. We'll work with your provider to maximize your coverage." },
          { q: "Do you serve St. John, Schererville, and Merrillville for warranty repairs?", a: "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." },
          { q: "What if my warranty company denies the claim?", a: "We'll advocate on your behalf and explain our diagnostic findings clearly to your provider. If the claim is denied, we'll give you honest options for moving forward — no pressure." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { name: "Engine Repair", href: "/services/engine-repair" },
            { name: "Transmission Repair", href: "/services/transmission-repair" },
            { name: "Diagnostics", href: "/services/diagnostics" },
            { name: "Auto Repair Crown Point", href: "/auto-repair-crown-point-in" },
          ].map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", fontWeight: "500", display: "block" }}>
              {s.name} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Have an Extended Warranty? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>We handle the claim. You just drop off your car.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}
