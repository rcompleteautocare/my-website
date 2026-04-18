import Link from "next/link";
import Script from "next/script";
export const metadata = {
  title: "R Complete Auto Care | Auto Repair in Crown Point, IN",
  description: "Family-owned auto repair shop in Crown Point, IN. Diagnostic-first approach, honest estimates, and extended warranty work. Call (219) 262-2711.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com",
  },
};

export default function Home() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "80px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
          Crown Point, Indiana's Diagnostic-First Auto Repair Shop
        </p>
       <h1 style={{ fontSize: "44px", fontWeight: "bold", margin: "0 0 20px", lineHeight: 1.2, maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
          Crown Point&apos;s Diagnostic-First Auto Repair Shop — We Fix What Others Miss
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "620px", margin: "0 auto 16px", lineHeight: 1.7 }}>
          If your car is making noise, shaking, or a warning light is on, we find the problem and fix it right the first time — no guessing.
        </p>
        <p style={{ fontSize: "15px", color: "#aaa", maxWidth: "500px", margin: "0 auto 36px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville & Cedar Lake, IN
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "16px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "20px", textDecoration: "none" }}>
            📞 (219) 262-2711
          </a>
          <Link href="/contact" style={{ background: "transparent", color: "#fff", border: "2px solid #fff", padding: "16px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
            Request Service
          </Link>
        </div>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "20px" }}>
          Mon–Fri 8am–6pm · Sat 8am–2pm · 1305 E Summit St, Crown Point, IN 46307
        </p>
      </section>

      {/* Trust bar */}
      {/* Google Reviews */}
<section style={{ padding: "60px 24px", background: "#f9f9f9" }}>
  <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
    <div className="elfsight-app-10ba8f91-d08e-4d50-8d8e-3a7fb77e4247" data-elfsight-app-lazy></div>
  </div>
</section>
      <section style={{ background: "#e63946", color: "#fff", padding: "20px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", fontSize: "14px", fontWeight: "500" }}>
          <span>✓ Diagnostic-First Approach</span>
          <span>✓ Foreign & Domestic</span>
          <span>✓ Extended Warranty Accepted</span>
          <span>✓ 25+ Years Family Experience</span>
          <span>✓ Same-Day Diagnostics</span>
        </div>
      </section>

      {/* Trust intro */}
      <section style={{ padding: "70px 24px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Crown Point is Built Around a Simple Promise</h2>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          R Complete Auto Care is built around a simple idea: find the real problem before recommending a single repair. Too many shops clear codes, replace parts, and hope for the best. We don't work that way.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Every vehicle that comes through our doors gets a thorough diagnostic first. We tell you exactly what's wrong, what's urgent, and what can wait — then we let you decide. No pressure. No unnecessary work. Just honest answers from a shop that respects your time and your money.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444" }}>
          We're located at 1305 E Summit St in Crown Point, Indiana, and we serve drivers throughout Lake County — including St. John, Schererville, Merrillville, and Cedar Lake.
        </p>
      </section>

      {/* How it works */}
      <section style={{ background: "#f9f9f9", padding: "70px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "48px" }}>How It Works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px" }}>
            {[
              { step: "1", title: "Call or Stop By", desc: "Tell us what your vehicle is doing. We'll get you scheduled fast — often same day." },
              { step: "2", title: "We Diagnose First", desc: "Before we recommend anything, we find the root cause using professional diagnostic equipment." },
              { step: "3", title: "You Get a Clear Estimate", desc: "We call you with our findings and a straight price. No surprises. You approve the work." },
              { step: "4", title: "We Fix It Right", desc: "Our technicians complete your repair to the highest standard. We stand behind our work." },
            ].map(item => (
              <div key={item.step} style={{ textAlign: "center", padding: "24px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#e63946", color: "#fff", fontSize: "22px", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  {item.step}
                </div>
                <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "10px" }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "70px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "12px" }}>Auto Repair Services in Crown Point, IN</h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "48px", fontSize: "16px" }}>
            We handle everything from check engine lights to major engine and transmission repairs.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { name: "Check Engine Light Diagnostics", href: "/services/check-engine-light", desc: "We find the real cause — not just clear the code." },
              { name: "Electrical Diagnostics", href: "/services/electrical-diagnostics", desc: "Battery, alternator, wiring, sensors, and modules." },
              { name: "No-Start Diagnostics", href: "/services/no-start-diagnostics", desc: "Car won't start? We find out exactly why." },
              { name: "Engine Repair", href: "/services/engine-repair", desc: "From oil leaks to full engine replacement." },
              { name: "Transmission Repair", href: "/services/transmission-repair", desc: "Automatic, manual, and CVT transmissions." },
              { name: "Brake Repair", href: "/services/brake-repair", desc: "Pads, rotors, calipers, ABS, and brake lines." },
              { name: "Suspension & Steering", href: "/services/suspension-steering", desc: "Shocks, struts, tie rods, and alignments." },
              { name: "Oil Change & Maintenance", href: "/services/oil-change-maintenance", desc: "Conventional and synthetic oil with multi-point inspection." },
              { name: "A/C & Heating Repair", href: "/services/ac-heating-repair", desc: "No cold air or no heat? We fix it." },
              { name: "Extended Warranty Repairs", href: "/services/extended-warranty-repair", desc: "We handle the claim and the paperwork for you." },
            ].map((s) => (
              <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "20px", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
                <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "6px" }}>{s.name} →</div>
                <div style={{ fontSize: "13px", color: "#666" }}>{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section style={{ background: "#f9f9f9", padding: "70px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "48px" }}>Why Crown Point Drivers Choose Us</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
            {[
              { icon: "🔍", title: "We Diagnose Before We Repair", desc: "We never recommend a repair without first finding the exact root cause of your vehicle's problem." },
              { icon: "🤝", title: "Straight Talk, No Pressure", desc: "We tell you what's wrong, what's urgent, and what can wait. You make the call — we just give you the facts." },
              { icon: "🔧", title: "All Makes & Models", desc: "Foreign and domestic. Honda, Toyota, BMW, Mercedes, Ford, Chevy, Dodge — we do it all." },
              { icon: "📋", title: "Extended Warranty Work", desc: "We accept most extended warranty plans and handle the entire claims process so you don't have to." },
              { icon: "⚡", title: "Same-Day Diagnostics", desc: "Most diagnostic appointments in Crown Point are completed the same day, with a call before any work begins." },
              { icon: "📍", title: "Locally Owned & Operated", desc: "We're your neighbors in Crown Point. We care about our reputation because we live and work here too." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", borderRadius: "8px", padding: "28px 24px", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family story */}
      <section style={{ padding: "70px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px", textAlign: "center" }}>Built on 25+ Years of Family Experience</h2>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          R Complete Auto Care wasn't built overnight. The knowledge, work ethic, and diagnostic discipline behind this shop comes from over 25 years of family experience in the auto repair industry. We've seen what happens when shops skip the diagnostic process — customers get charged for parts they didn't need, problems come back, and trust is lost.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We opened R Complete Auto Care in Crown Point to do things differently. To be the kind of shop that our own family would trust with their vehicles. A place where you get a straight answer, a fair price, and a repair that actually fixes the problem.
        </p>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#444" }}>
          That's what we bring to every vehicle that comes through our doors — whether you're coming from Crown Point, St. John, Schererville, Merrillville, or Cedar Lake.
        </p>
      </section>

      {/* CTA banner */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "12px" }}>Ready to Get Your Car Fixed Right?</h2>
        <p style={{ fontSize: "16px", color: "#aaa", marginBottom: "8px" }}>Call us today and talk to a real person — not a call center.</p>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "32px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "16px 40px", borderRadius: "6px", fontWeight: "bold", fontSize: "20px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

      {/* Info */}
      <section style={{ background: "#f9f9f9", padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", textAlign: "center" }}>
          <div>
            <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#e63946" }}>📍 Location</div>
            <div style={{ lineHeight: 1.8, color: "#444" }}>1305 E Summit St<br />Crown Point, IN 46307</div>
          </div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#e63946" }}>🕐 Hours</div>
            <div style={{ lineHeight: 1.8, color: "#444" }}>Mon–Fri: 8:00 AM – 6:00 PM<br />Saturday: 8:00 AM – 2:00 PM<br />Sunday: Closed</div>
          </div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#e63946" }}>📞 Contact</div>
            <div style={{ lineHeight: 1.8 }}>
              <a href="tel:2192622711" style={{ color: "#1a1a1a", display: "block", fontWeight: "bold", fontSize: "18px" }}>(219) 262-2711</a>
              <a href="mailto:Owner@rcompleteautocare.com" style={{ color: "#666", fontSize: "13px" }}>Owner@rcompleteautocare.com</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#e63946" }}>🚗 We Serve</div>
            <div style={{ lineHeight: 1.8, color: "#444" }}>Crown Point · St. John<br />Schererville · Merrillville<br />Cedar Lake & all of Lake County</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "70px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "32px", marginBottom: "48px" }}>Frequently Asked Questions</h2>
          {[
            { q: "Where is R Complete Auto Care located?", a: "We're located at 1305 E Summit St, Crown Point, IN 46307 — conveniently serving all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake." },
            { q: "What are your hours?", a: "We're open Monday through Friday 8:00 AM to 6:00 PM and Saturday 8:00 AM to 2:00 PM. Closed Sunday." },
            { q: "Do you work on foreign and domestic vehicles?", a: "Yes — all makes and models. Honda, Toyota, BMW, Mercedes, Subaru, Ford, Chevrolet, Dodge, GMC and more." },
            { q: "Do you accept extended warranties?", a: "Yes! We work with most extended warranty providers and handle the entire claims process for you. Call us with your warranty information and we'll verify coverage before any work begins." },
            { q: "How does your diagnostic process work?", a: "We start every vehicle with a thorough diagnostic to find the root cause of the problem. We call you with our findings and a clear estimate before doing any repair. You approve everything first." },
            { q: "Do you offer same-day service?", a: "Yes — most diagnostic appointments are completed same day. Repair time depends on the job, but we always give you an accurate timeline upfront." },
            { q: "Why should I choose R Complete Auto Care over a dealership?", a: "We offer dealership-level expertise without dealership prices or pressure. Our diagnostic-first approach means you only pay for what your vehicle actually needs — backed by over 25 years of family experience in auto repair." },
            { q: "Do I need an appointment for auto repair in Crown Point?", a: "We recommend calling ahead at (219) 262-2711 to schedule. Same-day appointments are often available for diagnostics. Walk-ins are welcome but scheduling ensures we have a bay ready for you." },
            { q: "How much does auto repair cost in Crown Point, IN?", a: "Costs vary by service. An oil change is one of our most affordable services. Diagnostics, brake repair, and other services are priced competitively — we give you a clear estimate before any work begins. No surprises." },
            { q: "What are signs I need auto repair?", a: "Warning signs include: check engine light on, unusual noises (knocking, squealing, grinding), vehicle pulling to one side, rough idle, poor fuel economy, leaking fluids, or dashboard warning lights. If you notice any of these, call us for a diagnostic." },
          ].map((item) => (
            <div key={item.q} style={{ marginBottom: "24px", borderBottom: "1px solid #e0e0e0", paddingBottom: "24px" }}>
              <div style={{ fontWeight: "bold", fontSize: "17px", marginBottom: "10px" }}>{item.q}</div>
              <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Problems */}
<section style={{ padding: "60px 24px", background: "#f5f5f5" }}>
  <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
    <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "12px" }}>Common Problems We Fix in Crown Point</h2>
    <p style={{ color: "#555", marginBottom: "32px", fontSize: "16px" }}>Having a specific problem? We've built dedicated pages for the most common emergency situations.</p>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", textAlign: "left" }}>
      {[
        { title: "Car Won't Start", desc: "Dead battery, failed starter, fuel pump, or crank sensor — we find the exact cause.", href: "/car-wont-start-crown-point-in" },
        { title: "Check Engine Light Flashing", desc: "A flashing CEL means active misfire — serious damage risk. Call us immediately.", href: "/check-engine-light-flashing-crown-point" },
        { title: "Car Overheating", desc: "Pull over now. Overheating causes major engine damage fast. We diagnose the cause.", href: "/car-overheating-crown-point-in" },
        { title: "Extended Warranty Repair", desc: "We work with CarShield, Endurance, CARS Protection and most major providers.", href: "/extended-warranty-auto-repair-crown-point-in" },
      ].map(item => (
        <a key={item.href} href={item.href} style={{ display: "block", background: "#fff", border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "4px", padding: "20px", textDecoration: "none", color: "#1a1a1a" }}>
          <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px", color: "#e63946" }}>{item.title}</div>
          <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
        </a>
      ))}
    </div>
  </div>
</section>
{/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "70px 24px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "12px" }}>Crown Point's Auto Repair Shop You Can Actually Trust</h2>
        <p style={{ fontSize: "16px", marginBottom: "8px", opacity: 0.9 }}>Honest diagnostics. Expert repairs. No guesswork.</p>
        <p style={{ fontSize: "14px", marginBottom: "32px", opacity: 0.75 }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "16px 40px", borderRadius: "6px", fontWeight: "bold", fontSize: "20px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

    {/* FAQPage JSON-LD */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Where is R Complete Auto Care located?", "acceptedAnswer": { "@type": "Answer", "text": "We're located at 1305 E Summit St, Crown Point, IN 46307 — conveniently serving all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake." } },
        { "@type": "Question", "name": "What are your hours?", "acceptedAnswer": { "@type": "Answer", "text": "We're open Monday through Friday 8:00 AM to 6:00 PM and Saturday 8:00 AM to 2:00 PM. Closed Sunday." } },
        { "@type": "Question", "name": "Do you work on foreign and domestic vehicles?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — all makes and models. Honda, Toyota, BMW, Mercedes, Subaru, Ford, Chevrolet, Dodge, GMC and more." } },
        { "@type": "Question", "name": "Do you accept extended warranties?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We work with most extended warranty providers and handle the entire claims process for you. Call us with your warranty information and we'll verify coverage before any work begins." } },
        { "@type": "Question", "name": "How does your diagnostic process work?", "acceptedAnswer": { "@type": "Answer", "text": "We start every vehicle with a thorough diagnostic to find the root cause of the problem. We call you with our findings and a clear estimate before doing any repair. You approve everything first." } },
        { "@type": "Question", "name": "Do you offer same-day service?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — most diagnostic appointments are completed same day. Repair time depends on the job, but we always give you an accurate timeline upfront." } },
        { "@type": "Question", "name": "Why should I choose R Complete Auto Care over a dealership?", "acceptedAnswer": { "@type": "Answer", "text": "We offer dealership-level expertise without dealership prices or pressure. Our diagnostic-first approach means you only pay for what your vehicle actually needs — backed by over 25 years of family experience in auto repair." } },
        { "@type": "Question", "name": "Do I need an appointment for auto repair in Crown Point?", "acceptedAnswer": { "@type": "Answer", "text": "We recommend calling ahead at (219) 262-2711 to schedule. Same-day appointments are often available for diagnostics. Walk-ins are welcome but scheduling ensures we have a bay ready for you." } },
        { "@type": "Question", "name": "How much does auto repair cost in Crown Point, IN?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary by service. An oil change is one of our most affordable services. Diagnostics, brake repair, and other services are priced competitively — we give you a clear estimate before any work begins. No surprises." } },
        { "@type": "Question", "name": "What are signs I need auto repair?", "acceptedAnswer": { "@type": "Answer", "text": "Warning signs include: check engine light on, unusual noises (knocking, squealing, grinding), vehicle pulling to one side, rough idle, poor fuel economy, leaking fluids, or dashboard warning lights. If you notice any of these, call us for a diagnostic." } },
      ]
    }).replace(/</g, "\u003c") }} />

    {/* Speakable schema */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".speakable"]
    }).replace(/</g, "\u003c") }} />
    
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://www.rcompleteautocare.com\"}]}".replace(/</g, "\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"@id\":\"https://www.rcompleteautocare.com/#webpage\",\"url\":\"https://www.rcompleteautocare.com\",\"name\":\"R Complete Auto Care | Auto Repair in Crown Point, IN\",\"dateModified\":\"2026-04-18\",\"about\":{\"@id\":\"https://www.rcompleteautocare.com/#business\"},\"isPartOf\":{\"@id\":\"https://www.rcompleteautocare.com/#website\"}}".replace(/</g, "\u003c") }} />
  </div>
  );
}