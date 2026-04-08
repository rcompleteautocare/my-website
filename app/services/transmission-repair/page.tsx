import Link from "next/link";

export const metadata = {
  title: "Transmission Repair Crown Point IN | R Complete Auto Care | (219) 262-2711",
  description: "Transmission slipping, shaking, or won't shift in Crown Point IN? R Complete Auto Care diagnoses and repairs all transmission problems. Foreign & domestic. Extended warranty accepted. Call (219) 262-2711.",
};

export default function TransmissionRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Transmission Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Slipping, shaking, or won't shift? We diagnose the real cause before recommending any repair — saving you time and money.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Crown Point's Trusted Transmission Repair Shop</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Transmission problems are serious — and expensive when ignored. At R Complete Auto Care in Crown Point, Indiana, we start every transmission concern with a thorough diagnostic before recommending any repair. That means you only pay for what your vehicle actually needs.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We work on automatic, manual, and CVT transmissions on all foreign and domestic vehicles. Whether you're driving a Honda, Toyota, BMW, Ford, Chevrolet, or Dodge — we have the expertise to diagnose and fix it right.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We also accept most extended warranty plans and handle the entire claims process for you. Drivers from Crown Point, St. John, Schererville, Merrillville, and Cedar Lake trust us with their most complex repairs.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Signs Your Transmission Needs Attention</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Slipping between gears",
            "Delayed or rough shifting",
            "Shaking or shuddering",
            "Transmission warning light",
            "Burning smell",
            "Fluid leak under vehicle",
            "Grinding or clunking noises",
            "Won't go into gear",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Transmission Services We Offer in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
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
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Trust Us With Their Transmission</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Diagnose First, Always", desc: "We never recommend a transmission repair without first identifying the exact cause of the problem." },
            { title: "Honest Estimates", desc: "You get a clear price before we touch your vehicle. No surprises, no pressure." },
            { title: "Extended Warranty Accepted", desc: "We work with most warranty providers and handle all the paperwork for you." },
            { title: "All Makes & Models", desc: "Foreign and domestic transmissions on all vehicles — automatic, manual, and CVT." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Transmission Repair in Crown Point, IN</h2>
        {[
          { q: "Where can I get transmission repair in Crown Point, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. Open Mon–Fri 8am–6pm, Sat 8am–2pm." },
          { q: "How do I know if my transmission is failing?", a: "Common signs include slipping gears, delayed shifting, shaking, a burning smell, fluid leaks, or a transmission warning light. If you notice any of these in Crown Point or nearby, bring it in right away." },
          { q: "How much does transmission repair cost in Crown Point?", a: "Cost depends on the repair needed. We start with a diagnostic to identify the exact issue and give you a clear estimate before any work begins. We never surprise you with extra charges." },
          { q: "Do you accept extended warranties for transmission repair?", a: "Yes — we work with most extended warranty providers and handle the entire claims process. Call us with your warranty info and we'll verify coverage before scheduling." },
          { q: "Do you serve St. John, Schererville, and Merrillville for transmission repair?", a: "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." },
          { q: "Is it worth repairing my transmission or should I get a new car?", a: "We'll give you an honest assessment. In many cases, a transmission repair or rebuild is far more cost-effective than a new vehicle. We'll help you make the best decision for your situation — no pressure." },
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
            { name: "Diagnostics", href: "/services/diagnostics" },
            { name: "Extended Warranty Repairs", href: "/services/extended-warranty-repair" },
            { name: "Auto Repair Crown Point", href: "/auto-repair-crown-point-in" },
          ].map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", fontWeight: "500", display: "block" }}>
              {s.name} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Transmission Problems in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Honest diagnostics. Expert transmission repair. No guesswork.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}