import Link from "next/link";

export const metadata = {
  title: 'AC Repair Crown Point IN | Car Heat Not Working | R Complete Auto Care',
  description: 'AC and heating repair in Crown Point, IN. Car AC not blowing cold or heat not working? Same-day diagnostics available. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/ac-heating-repair' },
  other: { dateModified: "2025-04-15" },
}

export default function AcHeatingRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px", lineHeight: 1.2 }}>
          A/C &amp; Heating Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "16px", color: "#e63946", fontWeight: "600", marginBottom: "16px", fontStyle: "italic" }}>
          TL;DR: A refrigerant recharge starts around $100–$150. Compressor replacement is a larger repair. Heater core replacement varies significantly by vehicle. We diagnose before we recommend — same-day appointments available for Crown Point and surrounding areas.
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          No cold air in summer? No heat in an Indiana winter? We diagnose and repair all A/C and heating problems — fast and right.
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
        <p style={{ color: "#888", fontSize: "13px", marginBottom: "24px" }}>Last updated: April 2025</p>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Expert A/C &amp; Heating Repair in Crown Point</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Crown Point summers are hot and Indiana winters are brutal. When your A/C or heat stops working, you need it fixed fast. At R Complete Auto Care, we perform a thorough diagnostic of your entire climate control system before recommending any repair — so you only pay for what you actually need.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          We work on all foreign and domestic vehicles and accept most extended warranty plans. Our technicians in Crown Point have the equipment and expertise to handle everything from a simple refrigerant recharge to a full compressor or heater core replacement.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, Indiana.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>A/C & Heating Services in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "A/C system diagnostics",
            "Refrigerant recharge",
            "Compressor replacement",
            "Condenser repair",
            "Evaporator repair",
            "Heater core repair",
            "Blend door actuator",
            "Climate control repair",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", fontSize: "14px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Crown Point Drivers Trust Us</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Diagnose First, Always", desc: "We find the exact cause before recommending any A/C or heating repair." },
            { title: "Honest Estimates", desc: "Clear pricing before we start. No surprises, no pressure." },
            { title: "Extended Warranty Accepted", desc: "We work with most warranty providers and handle the paperwork." },
            { title: "All Makes & Models", desc: "Foreign and domestic vehicles — Honda, Toyota, BMW, Ford, Chevy, and more." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — A/C & Heating Repair in Crown Point, IN</h2>
        {[
          { q: "Where can I get A/C repair in Crown Point, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. Open Mon–Fri 8am–6pm, Sat 8am–2pm." },
          { q: "Why is my A/C blowing warm air in Crown Point?", a: "Common causes include low refrigerant, a faulty compressor, a leaking condenser, or a failing expansion valve. We perform a full diagnostic to find the exact cause before recommending any repair." },
          { q: "Why is my heater not working in my car?", a: "Common causes include a clogged heater core, low coolant, a faulty thermostat, or a blend door actuator failure. Crown Point winters make this a critical repair — call us today." },
          { q: "How much does A/C repair cost in Crown Point?", a: "Cost depends on the specific repair needed. A refrigerant recharge is less expensive than a compressor replacement. We diagnose first and give you a clear estimate before any work begins." },
          { q: "How long does A/C repair take?", a: "A refrigerant recharge can be done same-day. More complex repairs like a compressor or heater core replacement take longer. We give you an accurate timeline after diagnosis." },
          { q: "Do you serve St. John, Schererville, and Merrillville for A/C repair?", a: "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." },
          { q: "Do you accept extended warranties for A/C and heating repair?", a: "Yes! We work with most extended warranty providers. Call us to verify your coverage before scheduling." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { name: "Engine Repair", href: "/services/engine-repair" },
            { name: "Electrical Diagnostics", href: "/services/electrical-diagnostics" },
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
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>A/C or Heat Not Working in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Honest diagnostics. Expert repairs. No guesswork.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Where can I get A/C repair in Crown Point, IN?", "acceptedAnswer": { "@type": "Answer", "text": "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. Open Mon–Fri 8am–6pm, Sat 8am–2pm." } },
            { "@type": "Question", "name": "Why is my A/C blowing warm air in Crown Point?", "acceptedAnswer": { "@type": "Answer", "text": "Common causes include low refrigerant, a faulty compressor, a leaking condenser, or a failing expansion valve. We perform a full diagnostic to find the exact cause before recommending any repair." } },
            { "@type": "Question", "name": "Why is my heater not working in my car?", "acceptedAnswer": { "@type": "Answer", "text": "Common causes include a clogged heater core, low coolant, a faulty thermostat, or a blend door actuator failure. Crown Point winters make this a critical repair — call us today." } },
            { "@type": "Question", "name": "How much does A/C repair cost in Crown Point?", "acceptedAnswer": { "@type": "Answer", "text": "Cost depends on the specific repair needed. A refrigerant recharge is less expensive than a compressor replacement. We diagnose first and give you a clear estimate before any work begins." } },
            { "@type": "Question", "name": "How long does A/C repair take?", "acceptedAnswer": { "@type": "Answer", "text": "A refrigerant recharge can be done same-day. More complex repairs like a compressor or heater core replacement take longer. We give you an accurate timeline after diagnosis." } },
            { "@type": "Question", "name": "Do you serve St. John, Schererville, and Merrillville for A/C repair?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." } },
            { "@type": "Question", "name": "Do you accept extended warranties for A/C and heating repair?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We work with most extended warranty providers. Call us to verify your coverage before scheduling." } }
          ]
        })}}
      />

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How A/C & Heating Repair Works at R Complete Auto Care",
      "description": "Our A/C and heating diagnostic and repair process in Crown Point, IN.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "System Diagnosis", "text": "We perform a full A/C or heating system diagnostic — checking refrigerant pressure, component operation, and temperature output." },
        { "@type": "HowToStep", "position": 2, "name": "Leak Detection if Needed", "text": "If refrigerant is low, we perform a leak detection test to find the source before recharging — otherwise the problem returns." },
        { "@type": "HowToStep", "position": 3, "name": "Clear Estimate", "text": "We explain exactly what failed and give you a clear price before starting any repair." },
        { "@type": "HowToStep", "position": 4, "name": "Repair & Verification", "text": "We complete the repair and verify correct system operation — checking vent temperatures to confirm the fix." }
      ]
    }) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.rcompleteautocare.com/services/diagnostics" },
        { "@type": "ListItem", "position": 3, "name": "A/C & Heating Repair" }
      ]
    }) }} /></div>
  );
}