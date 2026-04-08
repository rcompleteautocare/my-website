import Link from "next/link";

export default function Schererville() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Auto Repair Near Schererville, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Schererville drivers trust R Complete Auto Care in Crown Point for honest diagnostics and expert auto repair.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Serving Schererville, IN Drivers</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          R Complete Auto Care is located just minutes from Schererville, Indiana at 1305 E Summit St in Crown Point. We're a diagnostic-first auto repair shop serving drivers throughout Lake County and Northwest Indiana. We work on all foreign and domestic vehicles and accept most extended warranty plans.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Tired of dealership prices and upselling? Come to R Complete Auto Care for honest answers, accurate diagnostics, and repairs done right the first time.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Services for Schererville Drivers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", marginBottom: "40px" }}>
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

        <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Find Us From Schererville</h2>
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
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📞 Phone</div>
              <div><a href="tel:2192622711" style={{ color: "#1a1a1a" }}>(219) 262-2711</a></div>
            </div>
          </div>
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "How far is R Complete Auto Care from Schererville?", a: "We're located about 15 minutes from Schererville at 1305 E Summit St in Crown Point, IN." },
          { q: "Do you accept extended warranties?", a: "Yes! We work with most extended warranty providers and handle the claims process for you." },
          { q: "Do you work on foreign and domestic vehicles?", a: "Absolutely — all makes and models including Honda, Toyota, BMW, Ford, Chevrolet, and more." },
          { q: "What are your hours?", a: "Monday through Friday 8:00 AM to 6:00 PM and Saturday 8:00 AM to 2:00 PM. Closed Sunday." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Schererville Drivers Welcome!</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Just minutes away in Crown Point. Call us today.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}