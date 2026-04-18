import Link from "next/link";
import LastUpdated from "@/app/components/LastUpdated";

export const metadata = {
  title: "About Crown Point Auto Repair Shop | R Complete Auto Care",
  description: "R Complete Auto Care in Crown Point, IN — diagnostic-first auto repair, ASE certified since 1993, 35+ years of technician experience. (219) 262-2711.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com/about",
  },
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
        <p className="speakable" style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Crown Point&apos;s diagnostic-first auto repair shop — located at 1305 E Summit St, Crown Point, IN 46307. Lead technician Dave has been repairing cars since 1989, ASE certified since 1993. Honest communication and repairs done right.
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
        <LastUpdated date="2026-04-18" />

        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Why We Started R Complete Auto Care in Crown Point</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          R Complete Auto Care was founded with a simple mission: to give Crown Point and Northwest Indiana drivers an auto repair shop they could actually trust. A shop that finds the real problem before recommending a repair. A shop that gives you a straight answer and a fair price. A shop that treats your vehicle like it matters.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Our lead technician Dave has been working on cars since 1989 and earned his first ASE certification in 1993 — bringing over 35 years of hands-on experience to every diagnostic. Dave R brings 15 years of expertise alongside him. Together, they&apos;ve seen what happens when shops skip the diagnostic step — customers get charged for parts they didn&apos;t need, problems come back, and trust is lost. R Complete Auto Care was built to do things right.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We're located at 1305 E Summit St in Crown Point, Indiana, and we serve drivers throughout Lake County — including St. John, Schererville, Merrillville, and Cedar Lake.
        </p>

        {/* Authority Signals */}
        <div style={{ background: "#f9f9f9", border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "8px", padding: "32px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Our Credentials &amp; Experience</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
            <div>
              <div style={{ fontWeight: "bold", color: "#e63946", marginBottom: "6px" }}>ASE Certified Technicians</div>
              <div style={{ color: "#444", lineHeight: 1.7 }}>Dave (ASE certified since 1993, 35+ years experience) &amp; Dave R (15 years experience) — both certified by the National Institute for Automotive Service Excellence</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", color: "#e63946", marginBottom: "6px" }}>BBB Accredited</div>
              <div style={{ color: "#444", lineHeight: 1.7 }}>
                <a href="https://www.bbb.org/us/in/crown-point/profile/auto-repair/r-complete-auto-care-0352-90173711" target="_blank" rel="noopener noreferrer" style={{ color: "#1a1a1a" }}>Better Business Bureau member</a> — Crown Point, Indiana
              </div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", color: "#e63946", marginBottom: "6px" }}>Chamber of Commerce</div>
              <div style={{ color: "#444", lineHeight: 1.7 }}>
                <a href="https://www.chamberofcommerce.com/business-directory/indiana/crown-point/auto-repair-shop/2034231063-r-complete-auto-care" target="_blank" rel="noopener noreferrer" style={{ color: "#1a1a1a" }}>Crown Point Chamber of Commerce member</a>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", color: "#e63946", marginBottom: "6px" }}>Years in Business</div>
              <div style={{ color: "#444", lineHeight: 1.7 }}>35+ years of combined technician experience — diagnostic-first auto repair since day one</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", color: "#e63946", marginBottom: "6px" }}>Customer Rating</div>
              <div style={{ color: "#444", lineHeight: 1.7 }}>
                <a href="https://www.google.com/maps/place/R+Complete+Auto+Care/@41.4270614,-87.3410824,17z" target="_blank" rel="noopener noreferrer" style={{ color: "#1a1a1a" }}>4.8 stars on Google</a> — built on honest work and real results
              </div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", color: "#e63946", marginBottom: "6px" }}>Extended Warranty Approved</div>
              <div style={{ color: "#444", lineHeight: 1.7 }}>Licensed repair facility — accepted by CarShield, Endurance, CARS Protection, AmTrust, and all major extended warranty providers</div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", color: "#e63946", marginBottom: "6px" }}>Yelp &amp; Facebook</div>
              <div style={{ color: "#444", lineHeight: 1.7 }}>
                <a href="https://www.yelp.com/biz/r-complete-auto-care-crown-point" target="_blank" rel="noopener noreferrer" style={{ color: "#1a1a1a" }}>Find us on Yelp</a> · <a href="https://www.facebook.com/RCompleteAutoCare/" target="_blank" rel="noopener noreferrer" style={{ color: "#1a1a1a" }}>Facebook</a>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: "bold", color: "#e63946", marginBottom: "6px" }}>Service Area</div>
              <div style={{ color: "#444", lineHeight: 1.7 }}>Crown Point, St. John, Schererville, Merrillville, Cedar Lake — all of Lake County, IN</div>
            </div>
          </div>
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>35+ Years of Technician Experience</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Dave has been diagnosing and repairing vehicles since 1989. That depth of experience shapes everything about how we run our shop — it&apos;s why we diagnose before we repair, why we explain what we find in plain language, and why we don&apos;t recommend work that isn&apos;t needed.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          When you bring your vehicle to R Complete Auto Care in Crown Point, you&apos;re getting the benefit of that experience — applied honestly and directly to your specific situation.
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dave",
        "jobTitle": "Lead Technician",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "ASE Certified Technician",
            "recognizedBy": { "@type": "Organization", "name": "National Institute for Automotive Service Excellence (ASE)" }
          }
        ],
        "worksFor": {
          "@type": "AutoRepair",
          "name": "R Complete Auto Care",
          "url": "https://www.rcompleteautocare.com",
          "sameAs": [
            "https://www.google.com/maps/place/R+Complete+Auto+Care/@41.4270614,-87.3410824,17z",
            "https://www.yelp.com/biz/r-complete-auto-care-crown-point",
            "https://www.facebook.com/RCompleteAutoCare/",
            "https://www.bbb.org/us/in/crown-point/profile/auto-repair/r-complete-auto-care-0352-90173711"
          ]
        },
        "knowsAbout": [
          "Auto Diagnostics",
          "Engine Repair",
          "Transmission Repair",
          "Electrical Diagnostics",
          "Extended Warranty Repair",
          "Brake Repair",
          "Suspension Repair",
          "ASE-standard diagnostic procedures"
        ],
        "description": "ASE-certified technician since 1993 with 35+ years of hands-on experience starting in 1989. Specializes in diagnostic-first auto repair, complex diagnostics, and extended warranty claims in Crown Point, Indiana."
      }).replace(/</g, "\u003c") }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dave R",
        "jobTitle": "Lead Technician",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "ASE Certified Technician",
            "recognizedBy": { "@type": "Organization", "name": "National Institute for Automotive Service Excellence (ASE)" }
          }
        ],
        "worksFor": {
          "@type": "AutoRepair",
          "name": "R Complete Auto Care",
          "url": "https://www.rcompleteautocare.com"
        },
        "knowsAbout": ["Auto Diagnostics", "Engine Repair", "Transmission Repair", "Electrical Diagnostics", "Extended Warranty Repair"],
        "description": "ASE-certified technician with 15 years of experience at R Complete Auto Care in Crown Point, Indiana."
      }).replace(/</g, "\u003c") }} />

      {/* BreadcrumbList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
          { "@type": "ListItem", "position": 2, "name": "About" }
        ]
      }).replace(/</g, "\u003c") }} />

      {/* Speakable */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SpeakableSpecification",
        "cssSelector": [".speakable", "h1"]
      }).replace(/</g, "\u003c") }} />

    </div>
  );
}
