import Link from "next/link";

export default function Home() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", textAlign: "center", padding: "80px 24px" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "bold", margin: "0 0 16px", lineHeight: 1.2 }}>
          Crown Point's Diagnostic-First<br />Auto Repair Shop
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Honest answers. Accurate diagnostics. High-quality repairs for foreign and domestic vehicles. Extended warranty work welcome.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
            Call Now — (219) 262-2711
          </a>
          <Link href="/contact" style={{ background: "transparent", color: "#fff", border: "2px solid #fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
            Request Service
          </Link>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ background: "#f9f9f9", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "40px" }}>Why Crown Point Drivers Choose Us</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { icon: "🔍", title: "Diagnostic First", desc: "We find the real problem before recommending any repair. No guesswork, ever." },
              { icon: "🤝", title: "Honest Estimates", desc: "Clear communication and straightforward pricing. No surprises on your bill." },
              { icon: "🔧", title: "Foreign & Domestic", desc: "All makes and models. Honda, Toyota, BMW, Ford, Chevy — we do it all." },
              { icon: "📋", title: "Warranty Work", desc: "Extended warranty repairs accepted. We handle the claims process for you." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", borderRadius: "8px", padding: "28px 24px", textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{item.icon}</div>
                <div style={{ fontWeight: "bold", fontSize: "17px", marginBottom: "8px" }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "8px" }}>Our Services</h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "40px" }}>Serving Crown Point, St. John, Schererville, Merrillville & Cedar Lake</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { name: "Check Engine Light Diagnostics", href: "/services/check-engine-light" },
              { name: "Electrical Diagnostics", href: "/services/electrical-diagnostics" },
              { name: "No-Start Diagnostics", href: "/services/no-start-diagnostics" },
              { name: "Engine Repair", href: "/services/engine-repair" },
              { name: "Transmission Repair", href: "/services/transmission-repair" },
              { name: "Brake Repair", href: "/services/brake-repair" },
              { name: "Suspension & Steering Repair", href: "/services/suspension-steering" },
              { name: "Oil Change & Maintenance", href: "/services/oil-change-maintenance" },
              { name: "A/C & Heating Repair", href: "/services/ac-heating-repair" },
              { name: "Extended Warranty Repairs", href: "/services/extended-warranty-repair" },
            ].map((s) => (
              <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px 20px", fontWeight: "500", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
                {s.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#f9f9f9", padding: "60px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "40px" }}>Frequently Asked Questions</h2>
          {[
            { q: "Do you accept extended warranties?", a: "Yes! We work with most extended warranty providers and handle the claims process for you." },
            { q: "Do you work on foreign and domestic vehicles?", a: "Absolutely. We service all makes and models including Honda, Toyota, BMW, Ford, Chevrolet, and more." },
            { q: "What if my check engine light is on?", a: "Bring it in. We perform a full diagnostic scan to find the root cause — not just clear the code." },
            { q: "How long does a diagnostic take?", a: "Most diagnostics are completed the same day. We call you with findings before doing any repair." },
            { q: "Do you offer free estimates?", a: "We charge a diagnostic fee to properly identify the issue, which is applied toward your repair cost." },
            { q: "What areas do you serve?", a: "We primarily serve Crown Point, IN and surrounding areas including St. John, Schererville, Merrillville, and Cedar Lake." },
          ].map((item) => (
            <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
              <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", textAlign: "center" }}>
          <div>
            <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#e63946" }}>📍 Location</div>
            <div style={{ lineHeight: 1.8 }}>1305 E Summit St<br />Crown Point, IN 46307</div>
          </div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#e63946" }}>🕐 Hours</div>
            <div style={{ lineHeight: 1.8 }}>Mon–Fri: 8:00 AM – 6:00 PM<br />Saturday: 8:00 AM – 2:00 PM<br />Sunday: Closed</div>
          </div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#e63946" }}>📞 Contact</div>
            <div style={{ lineHeight: 1.8 }}>
              <a href="tel:2192622711" style={{ color: "#fff", display: "block" }}>(219) 262-2711</a>
              <a href="mailto:Owner@rcompleteautocare.com" style={{ color: "#aaa", fontSize: "13px" }}>Owner@rcompleteautocare.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "12px" }}>Ready to Get Your Car Fixed Right?</h2>
        <p style={{ fontSize: "16px", marginBottom: "28px", opacity: 0.9 }}>Call us today. Honest diagnostics, expert repairs — no guesswork.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}