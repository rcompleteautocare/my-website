import Link from "next/link";

export const metadata = {
  title: "Brake Repair Crown Point IN | R Complete Auto Care | (219) 262-2711",
  description: "Expert brake repair in Crown Point IN. Squeaking, grinding, or soft pedal? R Complete Auto Care fixes it fast. Foreign & domestic. Extended warranty accepted. Call (219) 262-2711.",
};

export default function BrakeRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Brake Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Squeaking, grinding, or a soft pedal? Don't wait — your brakes are your most important safety system. We fix it right, same day.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Crown Point's Trusted Brake Repair Shop</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Your brakes are the most critical safety system on your vehicle. At R Complete Auto Care in Crown Point, Indiana, we perform a thorough brake inspection before recommending any service. We only replace what needs to be replaced — no unnecessary upselling, no pressure.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We work on all foreign and domestic vehicles — Honda, Toyota, BMW, Mercedes, Ford, Chevrolet, Dodge, and more. Most brake jobs at our Crown Point location are completed the same day.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We also accept most extended warranty plans and serve drivers from Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, Indiana.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Signs Your Brakes Need Service</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Squeaking or squealing brakes",
            "Grinding when braking",
            "Soft or spongy pedal",
            "Pulling to one side",
            "Vibration when braking",
            "Brake warning light on",
            "Longer stopping distances",
            "Burning smell after braking",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Brake Services We Offer in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
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
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Trust Us With Their Brakes</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Inspect First, Always", desc: "We perform a full brake inspection before recommending any service. You only pay for what you actually need." },
            { title: "Same-Day Service", desc: "Most brake jobs at our Crown Point shop are completed the same day." },
            { title: "Honest Estimates", desc: "Clear pricing before we start. No surprises, no pressure, no upselling." },
            { title: "Extended Warranty Accepted", desc: "We work with most warranty providers and handle the paperwork for you." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Brake Repair in Crown Point, IN</h2>
        {[
          { q: "Where can I get brake repair in Crown Point, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. Open Mon–Fri 8am–6pm, Sat 8am–2pm. Most brake jobs completed same day." },
          { q: "How do I know if my brakes need service?", a: "Common signs include squeaking or grinding noises, a soft or spongy pedal, pulling to one side, vibration when braking, or a brake warning light. If you notice any of these, don't wait — call us in Crown Point today." },
          { q: "How much does brake repair cost in Crown Point?", a: "Brake repair cost depends on what needs to be replaced. We inspect your brakes first and give you a clear estimate before starting any work. We only replace what actually needs to be replaced." },
          { q: "Is it safe to drive with worn brakes?", a: "No — worn brakes are a serious safety risk for you and everyone on the road. If you're hearing grinding or your pedal feels soft, call our Crown Point shop immediately at (219) 262-2711." },
          { q: "How long does brake repair take in Crown Point?", a: "Most brake jobs at our Crown Point location are completed the same day, often within a few hours." },
          { q: "Do you serve St. John, Schererville, and Merrillville for brake repair?", a: "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." },
          { q: "Do you accept extended warranties for brake repair?", a: "Yes! We work with most extended warranty providers. Call us to verify your coverage before scheduling." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { name: "Suspension & Steering", href: "/services/suspension-steering" },
            { name: "Oil Change & Maintenance", href: "/services/oil-change-maintenance" },
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
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Brake Problems in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Don't wait — your safety depends on it.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}