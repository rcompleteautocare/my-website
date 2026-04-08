import Link from "next/link";

export const metadata = {
  title: "Oil Change Crown Point IN | R Complete Auto Care | (219) 262-2711",
  description: "Fast, honest oil changes and vehicle maintenance in Crown Point IN. Conventional and synthetic oil. Multi-point inspection included. Call (219) 262-2711.",
};

export default function OilChangeMaintenance() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Oil Change & Maintenance in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Keep your vehicle running its best with regular oil changes and honest maintenance from a shop you can trust in Crown Point.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Crown Point's Honest Oil Change Shop</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Regular oil changes are the single most important thing you can do to protect your engine and avoid costly repairs. At R Complete Auto Care in Crown Point, Indiana, we use quality oils and filters and perform a multi-point inspection with every service — so you always know the true condition of your vehicle.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Unlike quick-lube chains, we're a full-service diagnostic shop. That means if we notice something during your oil change — a brake issue, a leaking seal, or a worn belt — we'll tell you about it honestly, without pressure to fix it on the spot.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We work on all foreign and domestic vehicles and serve drivers from Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, Indiana.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Oil Change & Maintenance Services in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Conventional oil change",
            "Synthetic oil change",
            "Oil filter replacement",
            "Tire rotation",
            "Multi-point inspection",
            "Air filter replacement",
            "Cabin air filter replacement",
            "Fluid top-off & check",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Choose Us for Oil Changes</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Multi-Point Inspection Included", desc: "Every oil change includes a thorough inspection so you always know the true condition of your vehicle." },
            { title: "No Pressure Upselling", desc: "If we find something during your service, we tell you honestly — without pressure to fix it on the spot." },
            { title: "Fast & Convenient", desc: "Most oil changes at our Crown Point location are completed in 30–45 minutes." },
            { title: "All Makes & Models", desc: "Foreign and domestic vehicles. We use the right oil for your specific vehicle." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Oil Change in Crown Point, IN</h2>
        {[
          { q: "Where can I get an oil change in Crown Point, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. Open Mon–Fri 8am–6pm, Sat 8am–2pm. Most oil changes completed in 30–45 minutes." },
          { q: "How often should I change my oil in Crown Point?", a: "Most modern vehicles with synthetic oil need an oil change every 5,000–7,500 miles. Older vehicles or those using conventional oil may need it every 3,000 miles. We'll let you know what's right for your specific vehicle." },
          { q: "Do you do synthetic oil changes in Crown Point?", a: "Yes — we stock both conventional and full synthetic oils and use whichever your vehicle manufacturer recommends." },
          { q: "What's included with your oil change in Crown Point?", a: "Every oil change at R Complete Auto Care includes an oil and filter change plus a multi-point inspection. We check your brakes, tires, fluids, belts, and more — and report what we find honestly." },
          { q: "How long does an oil change take?", a: "Most oil changes at our Crown Point location are completed in 30–45 minutes." },
          { q: "Do you rotate tires with an oil change?", a: "Yes — we can perform a tire rotation at the same time to maximize tire life and ensure even wear." },
          { q: "Do you serve St. John, Schererville, and Merrillville for oil changes?", a: "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { name: "Brake Repair", href: "/services/brake-repair" },
            { name: "Suspension & Steering", href: "/services/suspension-steering" },
            { name: "Check Engine Light", href: "/services/check-engine-light" },
            { name: "Auto Repair Crown Point", href: "/auto-repair-crown-point-in" },
          ].map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", fontWeight: "500", display: "block" }}>
              {s.name} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Due for an Oil Change in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Quick, honest, and done right. No pressure, no upselling.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}