import Link from "next/link";

export const metadata = {
  title: "About R Complete Auto Care | Crown Point IN Auto Repair | (219) 262-2711",
  description: "Learn about R Complete Auto Care in Crown Point IN. Diagnostic-first auto repair shop built on 25+ years of family experience. Honest estimates, expert repairs. Call (219) 262-2711.",
};

export default function About() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          About R Complete Auto Care
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Crown Point's diagnostic-first auto repair shop. Built on 25+ years of family experience, honest communication, and repairs done right.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Why We Started R Complete Auto Care in Crown Point</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          R Complete Auto Care was founded with a simple mission: to give Crown Point and Northwest Indiana drivers an auto repair shop they could actually trust. A shop that finds the real problem before recommending a repair. A shop that gives you a straight answer and a fair price. A shop that treats your vehicle like it matters.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          The knowledge and discipline behind this shop comes from over 25 years of family experience in the auto repair industry. We've seen what happens when shops skip the diagnostic process — customers get charged for parts they didn't need, problems come back, and trust is lost. We opened R Complete Auto Care to do things differently.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We're located at 1305 E Summit St in Crown Point, Indiana, and we serve drivers throughout Lake County — including St. John, Schererville, Merrillville, and Cedar Lake.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Built on 25+ Years of Family Experience</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Auto repair isn't just a job for us — it's something that's been in our family for over two and a half decades. That experience shapes everything about how we run our shop. It's why we diagnose before we repair. It's why we explain what we find in plain language. It's why we don't recommend work that isn't needed.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          When you bring your vehicle to R Complete Auto Care in Crown Point, you're getting the benefit of that experience — applied honestly and directly to your specific situation.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>What We Stand For</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { icon: "🔍", title: "Diagnostic First, Always", desc: "We find the root cause of your vehicle's problem before recommending any repair. Every time, no exceptions." },
            { icon: "🤝", title: "Honest Communication", desc: "We tell you exactly what's wrong, what's urgent, and what can wait — in plain language, without pressure." },
            { icon: "🔧", title: "Expert Repairs", desc: "Our technicians have the training, tools, and experience to fix it right the first time." },
            { icon: "📋", title: "Extended Warranty Work", desc: "We accept most extended warranty plans and handle the entire claims process for you." },
            { icon: "🚗", title: "All Makes & Models", desc: "Foreign and domestic — Honda, Toyota, BMW, Ford, Chevrolet, Dodge, and everything in between." },
            { icon: "📍", title: "Proud to Serve Crown Point", desc: "We're your neighbors. We live and work in this community and we care about our reputation here." },
          ].map(item => (
            <div key={item.title} style={{ background: "#f9f9f9", borderRadius: "8px", padding: "24px" }}>
              <div style={{ fontSize: "28px", marginBottom: "10px" }}>{item.icon}</div>
              <div style={{ fontWeight: "bold", fontSize: "15px", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Visit Us in Crown Point</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📍 Address</div>
              <div style={{ lineHeight: 1.8, color: "#444" }}>1305 E Summit St<br />Crown Point, IN 46307</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>🕐 Hours</div>
              <div style={{ lineHeight: 1.8, color: "#444" }}>Mon–Fri: 8:00 AM – 6:00 PM<br />Saturday: 8:00 AM – 2:00 PM<br />Sunday: Closed</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px", color: "#e63946" }}>📞 Phone</div>
              <div style={{ lineHeight: 1.8 }}>
                <a href="tel:2192622711" style={{ color: "#1a1a1a", fontWeight: "bold" }}>(219) 262-2711</a><br />
                <a href="mailto:Owner@rcompleteautocare.com" style={{ color: "#666", fontSize: "13px" }}>Owner@rcompleteautocare.com</a>
              </div>
            </div>
          </div>
        </div>

        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Our Services in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
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
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", fontWeight: "500", display: "block" }}>
              {s.name} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Ready to Experience the Difference?</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Honest diagnostics. Expert repairs. Crown Point, IN.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}