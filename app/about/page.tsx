import Link from "next/link";

export default function About() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          About R Complete Auto Care
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Crown Point's diagnostic-first auto repair shop. Built on honesty, expertise, and doing things right.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Our Story</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          R Complete Auto Care was founded with a simple mission: to provide Crown Point and Northwest Indiana drivers with honest, accurate, and high-quality auto repair. We got tired of seeing customers overcharged for repairs they didn't need — so we built a shop around doing things the right way.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          We're a diagnostic-first shop. That means before we recommend any repair, we find the root cause of your vehicle's problem. We use professional-grade diagnostic equipment and take the time to explain exactly what's wrong and what your options are. You make the decision — we just give you the facts.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Located at 1305 E Summit St in Crown Point, Indiana, we serve drivers throughout Lake County including St. John, Schererville, Merrillville, and Cedar Lake. We work on all foreign and domestic vehicles and proudly accept most extended warranty plans.
        </p>

        {/* Values */}
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>What We Stand For</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { icon: "🔍", title: "Diagnostic First", desc: "We find the real problem before recommending any repair. Every time." },
            { icon: "🤝", title: "Honest Communication", desc: "We tell you exactly what's wrong and what's urgent. No pressure, no upselling." },
            { icon: "🔧", title: "Expert Repairs", desc: "Our technicians have the training and tools to fix it right the first time." },
            { icon: "📋", title: "Extended Warranty Work", desc: "We work with most warranty providers and handle the paperwork for you." },
          ].map(item => (
            <div key={item.title} style={{ background: "#f9f9f9", borderRadius: "8px", padding: "24px", textAlign: "center" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Location Info */}
        <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Visit Us</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📍 Address</div>
              <div style={{ lineHeight: 1.8 }}>1305 E Summit St<br />Crown Point, IN 46307</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>🕐 Hours</div>
              <div style={{ lineHeight: 1.8 }}>Mon–Fri: 8:00 AM – 6:00 PM<br />Saturday: 8:00 AM – 2:00 PM<br />Sunday: Closed</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📞 Contact</div>
              <div style={{ lineHeight: 1.8 }}>
                <a href="tel:2192622711" style={{ color: "#1a1a1a", display: "block" }}>(219) 262-2711</a>
                <a href="mailto:Owner@rcompleteautocare.com" style={{ color: "#666", fontSize: "13px" }}>Owner@rcompleteautocare.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Our Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
          {[
            { name: "Check Engine Light Diagnostics", href: "/services/check-engine-light" },
            { name: "Electrical Diagnostics", href: "/services/electrical-diagnostics" },
            { name: "No-Start Diagnostics", href: "/services/no-start-diagnostics" },
            { name: "Engine Repair", href: "/services/engine-repair" },
            { name: "Transmission Repair", href: "/services/transmission-repair" },
            { name: "Brake Repair", href: "/services/brake-repair" },
            { name: "Suspension & Steering", href: "/services/suspension-steering" },
            { name: "Oil Change & Maintenance", href: "/services/oil-change-maintenance" },
            { name: "A/C & Heating Repair", href: "/services/ac-heating-repair" },
            { name: "Extended Warranty Repairs", href: "/services/extended-warranty-repair" },
          ].map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "14px 16px", fontWeight: "500", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
              {s.name} →
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Ready to Experience the Difference?</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Honest diagnostics. Expert repairs. Crown Point, IN.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}