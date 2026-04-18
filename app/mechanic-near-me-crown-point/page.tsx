export const metadata = {
  title: 'Mechanic Near Me Crown Point, IN | R Complete Auto Care',
  description: 'Looking for a mechanic in Crown Point, IN? R Complete Auto Care is a top-rated diagnostic-first auto repair shop. 4.8 stars. (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/mechanic-near-me-crown-point' },
}

import Link from "next/link";

export default function MechanicNearMe() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>CROWN POINT, INDIANA</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Mechanic Near Me — Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "640px", margin: "0 auto 16px" }}>
          R Complete Auto Care is the closest diagnostic-first mechanic to Crown Point, St. John, Schererville, Merrillville, and Cedar Lake. 4.8 stars on Google. Same-day diagnostics available.
        </p>
        <p style={{ fontSize: "15px", color: "#aaa", maxWidth: "560px", margin: "0 auto 32px" }}>
          1305 E Summit St, Crown Point, IN 46307 — minutes from downtown Crown Point and easily accessible from all of Lake County.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711 — Same-Day Available
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>Mon–Fri 8am–6pm · Sat 8am–2pm · Extended Warranty Accepted</p>
      </section>

      {/* Serving bar */}
      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px" }}>
        📍 Crown Point · St. John · Schererville · Merrillville · Cedar Lake · All of Lake County IN
      </section>

      {/* Trust signals */}
      <section style={{ background: "#f5f5f5", padding: "32px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px", textAlign: "center" }}>
          {[
            { icon: "⭐", stat: "4.8 Stars", label: "Google Rating" },
            { icon: "🔍", stat: "Diagnostic-First", label: "Always find root cause" },
            { icon: "📋", stat: "Warranty Accepted", label: "CarShield, Endurance & more" },
            { icon: "⚡", stat: "Same-Day", label: "Diagnostics available" },
            { icon: "🔧", stat: "25+ Years", label: "Family experience" },
            { icon: "🚗", stat: "All Makes", label: "Foreign & domestic" },
          ].map(item => (
            <div key={item.stat} style={{ background: "#fff", border: "1px solid #e0e0e0", borderTop: "3px solid #e63946", borderRadius: "4px", padding: "16px" }}>
              <div style={{ fontSize: "28px", marginBottom: "6px" }}>{item.icon}</div>
              <div style={{ fontWeight: "bold", fontSize: "15px" }}>{item.stat}</div>
              <div style={{ fontSize: "13px", color: "#666" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>The Mechanic Near Crown Point That Actually Fixes the Problem</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          When you search "mechanic near me" in Crown Point, Indiana, you want a shop that's close, trustworthy, and capable of actually diagnosing and fixing your vehicle — not just the nearest place that will clear a code and send you on your way. R Complete Auto Care is Crown Point's diagnostic-first auto repair shop, and we're built for exactly that.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We're located at 1305 E Summit St in Crown Point — minutes from downtown Crown Point and easily accessible from St. John, Schererville, Merrillville, and Cedar Lake. We specialize in complex diagnostics, extended warranty repairs, and fixing problems that other nearby mechanics have misdiagnosed or couldn't figure out.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Every vehicle that comes to our shop gets a full diagnostic before we recommend any repair. We tell you exactly what's wrong, what it costs to fix, and what's urgent vs. what can wait — then you decide. No pressure. No guessing. No unnecessary repairs.
        </p>

        {/* Distance */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>How Far Is R Complete Auto Care From You?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { city: "Crown Point, IN", distance: "0–5 min", note: "We're right here on Summit St" },
            { city: "St. John, IN", distance: "~10 min", note: "Via US-41 North" },
            { city: "Schererville, IN", distance: "~12 min", note: "Via US-30 East" },
            { city: "Merrillville, IN", distance: "~15 min", note: "Via US-30 West" },
            { city: "Cedar Lake, IN", distance: "~15 min", note: "Via IN-2 West" },
            { city: "Lowell, IN", distance: "~20 min", note: "Via IN-2 South" },
            { city: "Dyer, IN", distance: "~20 min", note: "Via US-41 North" },
            { city: "Munster, IN", distance: "~25 min", note: "Via US-41 North" },
          ].map(item => (
            <div key={item.city} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", padding: "16px", borderRadius: "4px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{item.city}</div>
              <div style={{ color: "#e63946", fontWeight: "bold", fontSize: "18px", marginBottom: "4px" }}>{item.distance}</div>
              <div style={{ fontSize: "13px", color: "#666" }}>{item.note}</div>
            </div>
          ))}
        </div>

        {/* What to look for */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>What to Look for in a Mechanic Near You in Crown Point</h2>
        <ul style={{ lineHeight: 2.2, color: "#444", paddingLeft: "20px", marginBottom: "40px" }}>
          <li><strong>Diagnostic-first approach</strong> — A good mechanic finds the root cause before recommending parts.</li>
          <li><strong>Transparent pricing</strong> — You get a clear written estimate before any work begins.</li>
          <li><strong>Extended warranty acceptance</strong> — We work with CarShield, Endurance, CARS Protection, AmTrust, and most major providers.</li>
          <li><strong>All makes and models</strong> — Honda, Toyota, BMW, Mercedes, Ford, Chevy, Subaru, Dodge — we handle all of them.</li>
          <li><strong>Strong local reviews</strong> — 4.8 stars on Google from real Crown Point area drivers.</li>
          <li><strong>Same-day diagnostics</strong> — Most vehicles diagnosed the same day.</li>
          <li><strong>Specializes in complex repairs</strong> — If another mechanic near you couldn't figure it out, we probably can.</li>
        </ul>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>Need a mechanic near Crown Point today?</p>
        <p style={{ color: "#555", marginBottom: "20px" }}>Same-day diagnostics available. Call before 10am for best availability.</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "16px" }}>
          📞 Call (219) 262-2711 →
        </a>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>What Our Mechanics Fix Near Crown Point</h2>
        <p style={{ color: "#555", marginBottom: "24px" }}>We handle everything from routine maintenance to complex engine and transmission repairs.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { name: "Check Engine Light Diagnostics", href: "/services/check-engine-light", desc: "Root cause diagnosis — not just code clearing" },
            { name: "Engine Repair", href: "/services/engine-repair", desc: "From oil leaks to full engine replacement" },
            { name: "Transmission Repair", href: "/services/transmission-repair", desc: "Automatic, manual, and CVT transmissions" },
            { name: "Brake Repair", href: "/services/brake-repair", desc: "Honest inspections with actual measurements" },
            { name: "Electrical Diagnostics", href: "/services/electrical-diagnostics", desc: "Parasitic draw, no-start, modules, sensors" },
            { name: "Suspension & Steering", href: "/services/suspension-steering", desc: "Struts, shocks, tie rods, alignments" },
            { name: "No-Start Diagnostics", href: "/services/no-start-diagnostics", desc: "We find the exact cause — no guessing" },
            { name: "Extended Warranty Repair", href: "/services/extended-warranty-repair", desc: "Most providers accepted, we handle paperwork" },
            { name: "AC & Heating Repair", href: "/services/ac-heating-repair", desc: "Leak detection, recharge, heater core" },
            { name: "Oil Change & Maintenance", href: "/services/oil-change-maintenance", desc: "Synthetic and conventional with inspection" },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{ display: "block", border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", padding: "16px", textDecoration: "none", color: "#1a1a1a", borderRadius: "4px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "6px", fontSize: "15px" }}>{item.name} →</div>
              <div style={{ fontSize: "13px", color: "#666" }}>{item.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Extended warranty */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Extended Warranty? Your Mechanic Near Crown Point Handles Everything</h2>
          <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
            One of the biggest reasons Crown Point and Lake County drivers choose R Complete Auto Care over other mechanics nearby is our extended warranty specialization. We accept CarShield, Endurance, CARS Protection, AmTrust, and most major providers — and we handle the entire claims process for you.
          </p>
          <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
            We verify your coverage before you bring the car in, get pre-authorization, complete the repair with proper documentation, and submit everything directly to your provider. You pay your deductible. We handle the rest.
          </p>
          <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", display: "inline-block" }}>
            📞 Verify Your Coverage — (219) 262-2711
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Mechanic Near Crown Point IN</h2>
          {[
            { q: "What is the best mechanic near Crown Point, IN?", a: "R Complete Auto Care at 1305 E Summit St in Crown Point is rated 4.8 stars on Google and specializes in diagnostic-first auto repair. We fix complex problems other shops can't figure out, accept most extended warranties, and offer same-day diagnostics. We serve Crown Point, St. John, Schererville, Merrillville, and Cedar Lake." },
            { q: "What mechanic near me accepts extended warranties in Crown Point?", a: "R Complete Auto Care accepts most major extended warranty providers including CarShield, Endurance, CARS Protection, and AmTrust. We handle the verification, pre-authorization, and claim submission so you just pay your deductible. Call (219) 262-2711 with your warranty info before you bring the car in." },
            { q: "Is there a mechanic near me open on Saturday in Crown Point?", a: "Yes — R Complete Auto Care is open Saturday 8am to 2pm at 1305 E Summit St, Crown Point IN. Monday through Friday we're open 8am to 6pm. Call (219) 262-2711 to schedule." },
            { q: "How do I find a trustworthy mechanic near me in Crown Point?", a: "Look for 4.5+ Google stars with detailed reviews, transparent pricing, a diagnostic-first approach, and extended warranty acceptance. R Complete Auto Care has all of these and has been serving Lake County Indiana for over 25 years." },
            { q: "What mechanic near Crown Point can diagnose complex car problems?", a: "R Complete Auto Care specializes in complex diagnostics — electrical faults, intermittent no-start conditions, check engine lights that other shops couldn't fix, and extended warranty repairs. If another mechanic near you couldn't figure it out, call us." },
            { q: "How far does R Complete Auto Care serve from Crown Point?", a: "We serve all of Lake County Indiana — Crown Point, St. John (10 min), Schererville (12 min), Merrillville (15 min), Cedar Lake (15 min), Lowell, Dyer, Munster, and surrounding areas." },
            { q: "Do you offer same-day mechanic service near Crown Point?", a: "Yes — most diagnostic appointments are completed the same day. Call before 10am for best availability. We'll contact you with our findings before doing any work." },
            { q: "What is the phone number for R Complete Auto Care near Crown Point?", a: "Call R Complete Auto Care at (219) 262-2711. We're located at 1305 E Summit St, Crown Point IN 46307, open Mon–Fri 8am–6pm and Saturday 8am–2pm." },
          ].map(item => (
            <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
              <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: "0 24px 60px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Find Your Mechanic Near Crown Point</h2>
        <p style={{ color: "#555", marginBottom: "16px" }}>1305 E Summit St, Crown Point, IN 46307 — easily accessible from US-30, US-41, and IN-2.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.0!2d-87.3648!3d41.4175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811b0e1e1e1e1e1%3A0x1!2s1305+E+Summit+St%2C+Crown+Point%2C+IN+46307!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Related */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>More From Your Mechanic Near Crown Point</h2>
          <ul style={{ lineHeight: 2, paddingLeft: "20px" }}>
            <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
            <li><Link href="/auto-repair-st-john-in" style={{ color: "#e63946" }}>Auto Repair St. John, IN</Link></li>
            <li><Link href="/auto-repair-schererville-in" style={{ color: "#e63946" }}>Auto Repair Schererville, IN</Link></li>
            <li><Link href="/auto-repair-merrillville-in" style={{ color: "#e63946" }}>Auto Repair Merrillville, IN</Link></li>
            <li><Link href="/auto-repair-cedar-lake-in" style={{ color: "#e63946" }}>Auto Repair Cedar Lake, IN</Link></li>
            <li><Link href="/services/extended-warranty-repair" style={{ color: "#e63946" }}>Extended Warranty Repair Crown Point, IN</Link></li>
            <li><Link href="/services/check-engine-light" style={{ color: "#e63946" }}>Check Engine Light Diagnostics Crown Point, IN</Link></li>
            <li><Link href="/car-wont-start-crown-point-in" style={{ color: "#e63946" }}>Car Won't Start in Crown Point</Link></li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Your Mechanic Near Crown Point — Call Now</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>4.8 Stars · Diagnostic-First · Extended Warranty Accepted · Same-Day Available</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best mechanic near Crown Point, IN?",
        "acceptedAnswer": { "@type": "Answer", "text": "R Complete Auto Care at 1305 E Summit St in Crown Point is rated 4.8 stars on Google and specializes in diagnostic-first auto repair. We fix complex problems other shops can't figure out, accept most extended warranties, and offer same-day diagnostics. We serve Crown Point, St. John, Schererville, Merrillville, and Cedar Lake." }
      },
      {
        "@type": "Question",
        "name": "What mechanic near me accepts extended warranties in Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "R Complete Auto Care accepts most major extended warranty providers including CarShield, Endurance, CARS Protection, and AmTrust. We handle the verification, pre-authorization, and claim submission so you just pay your deductible. Call (219) 262-2711 with your warranty info before you bring the car in." }
      },
      {
        "@type": "Question",
        "name": "Is there a mechanic near me open on Saturday in Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — R Complete Auto Care is open Saturday 8am to 2pm at 1305 E Summit St, Crown Point IN. Monday through Friday we're open 8am to 6pm. Call (219) 262-2711 to schedule." }
      },
      {
        "@type": "Question",
        "name": "How do I find a trustworthy mechanic near me in Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "Look for 4.5+ Google stars with detailed reviews, transparent pricing, a diagnostic-first approach, and extended warranty acceptance. R Complete Auto Care has all of these and has been serving Lake County Indiana for over 25 years." }
      },
      {
        "@type": "Question",
        "name": "What mechanic near Crown Point can diagnose complex car problems?",
        "acceptedAnswer": { "@type": "Answer", "text": "R Complete Auto Care specializes in complex diagnostics — electrical faults, intermittent no-start conditions, check engine lights that other shops couldn't fix, and extended warranty repairs. If another mechanic near you couldn't figure it out, call us." }
      },
      {
        "@type": "Question",
        "name": "How far does R Complete Auto Care serve from Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "We serve all of Lake County Indiana — Crown Point, St. John (10 min), Schererville (12 min), Merrillville (15 min), Cedar Lake (15 min), Lowell, Dyer, Munster, and surrounding areas." }
      },
      {
        "@type": "Question",
        "name": "Do you offer same-day mechanic service near Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — most diagnostic appointments are completed the same day. Call before 10am for best availability. We'll contact you with our findings before doing any work." }
      },
      {
        "@type": "Question",
        "name": "What is the phone number for R Complete Auto Care near Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "Call R Complete Auto Care at (219) 262-2711. We're located at 1305 E Summit St, Crown Point IN 46307, open Mon–Fri 8am–6pm and Saturday 8am–2pm." }
      }
    ]
  })}}
/></div>
  );
}