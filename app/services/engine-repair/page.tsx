export const metadata = {
  title: 'Engine Repair Crown Point IN — Complex Diagnosis Specialists | R Complete Auto Care',
  description: 'Engine repair in Crown Point, IN. We find WHY it failed before recommending parts. Head gaskets, timing, overheating. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/engine-repair' },
}
  

import Link from "next/link";

export default function EngineRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Engine Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          From minor engine repairs to major overhauls — we diagnose the real problem first and fix it right the first time.
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
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Crown Point's Engine Repair Experts</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Your engine is the heart of your vehicle. At R Complete Auto Care in Crown Point, Indiana, we take engine problems seriously — and we start with a thorough diagnostic before recommending any repair. That means you only pay for what your vehicle actually needs, and you get a clear explanation before we touch anything.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We work on all foreign and domestic vehicles — Honda, Toyota, BMW, Mercedes, Subaru, Ford, Chevrolet, Dodge, and more. Whether it's a minor oil leak or a major engine replacement, our technicians have the expertise and equipment to get it done right.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We also accept most extended warranty plans and handle the entire claims process for drivers throughout Crown Point, St. John, Schererville, Merrillville, and Cedar Lake.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Signs Your Engine Needs Attention</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Check engine light on",
            "Knocking or ticking noises",
            "Loss of power or performance",
            "Excessive oil consumption",
            "Overheating",
            "Blue or white smoke from exhaust",
            "Oil leaks under vehicle",
            "Rough idle or misfires",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Engine Services We Offer in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "Engine diagnostics",
            "Timing belt & chain repair",
            "Head gasket replacement",
            "Valve cover gasket repair",
            "Oil leak repair",
            "Overheating diagnosis & repair",
            "Engine mount replacement",
            "Full engine replacement",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Trust Us With Their Engine</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Diagnose First, Always", desc: "We find the exact root cause before recommending any engine repair. No guesswork." },
            { title: "Honest Estimates", desc: "You get a clear price before we start. No surprises, no hidden charges." },
            { title: "Extended Warranty Accepted", desc: "We work with most warranty providers and handle all the paperwork." },
            { title: "25+ Years Family Experience", desc: "Our shop is built on decades of engine expertise passed down through family." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Engine Repair in Crown Point, IN</h2>
        {[
          { q: "Where can I get engine repair in Crown Point, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. Open Mon–Fri 8am–6pm, Sat 8am–2pm." },
          { q: "How do I know if my engine needs repair?", a: "Common signs include knocking or ticking noises, loss of power, excessive oil consumption, overheating, blue or white smoke from the exhaust, or a check engine light. Bring it to our Crown Point shop and we'll diagnose it accurately." },
          { q: "How much does engine repair cost in Crown Point?", a: "Engine repair cost depends on the specific issue. We perform a diagnostic first and give you a clear, itemized estimate before any work begins. We never start a repair without your approval." },
          { q: "Is it worth repairing my engine or should I get a new car?", a: "We'll give you an honest assessment. In many cases, engine repair is far more cost-effective than purchasing a new vehicle. We'll lay out your options clearly and let you decide — no pressure." },
          { q: "Do you accept extended warranties for engine repair?", a: "Yes! We work with most extended warranty providers and handle the entire claims process for you at our Crown Point location." },
          { q: "Do you serve St. John, Schererville, and Merrillville for engine repair?", a: "Absolutely. We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { name: "Transmission Repair", href: "/services/transmission-repair" },
            { name: "Check Engine Light", href: "/services/check-engine-light" },
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
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Engine Problems in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Honest diagnostics. Expert engine repair. No guesswork.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}
