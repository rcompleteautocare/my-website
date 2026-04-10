export const metadata = {
  title: 'Extended Warranty Auto Repair Crown Point IN | R Complete Auto Care',
  description: 'Extended warranty auto repair in Crown Point, IN. We work with CarShield, Endurance, CARS Protection, AmTrust and more. We handle the paperwork. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/extended-warranty-repair' },
}

import Link from "next/link";
export default function ExtendedWarrantyRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>CROWN POINT, INDIANA</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Extended Warranty Auto Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          We work with most major extended warranty providers and handle the entire claims process for you — so you can focus on getting your car fixed, not fighting with your warranty company.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711 — Verify Your Coverage
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
      </section>

      {/* Serving bar */}
      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake, IN
      </section>

      {/* Intro */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>We Handle the Warranty — You Just Approve the Work</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Extended warranty repairs are one of our specialties at R Complete Auto Care. Most auto repair shops avoid warranty work because of the paperwork and the back-and-forth with warranty companies. We embrace it — because it means our customers get major repairs done at little to no out-of-pocket cost.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          When you bring your vehicle to us with an extended warranty, we handle everything: we verify your coverage before any work begins, perform a documented diagnostic that meets warranty adjuster requirements, make the pre-authorization call, complete the repair using approved parts and procedures, and submit all documentation to your warranty provider. You pay your deductible — we handle the rest.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Don't assume a repair isn't covered without calling us first. Extended warranty policies cover more than most people realize — including engine components, transmission, electrical systems, fuel systems, cooling systems, and more. Call us with your warranty provider name and we'll tell you what we can do.
        </p>

        {/* Warranty providers */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Warranty Providers We Work With</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "40px" }}>
          {[
            "CarShield",
            "Endurance",
            "CARS Protection Plus",
            "AmTrust / National Auto Care",
            "Zurich",
            "Fidelity Warranty Services",
            "Safe-Guard",
            "Assurant",
            "Cornerstone United",
            "Old Republic",
            "Portfolio",
            "Most other providers",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", padding: "12px 14px", fontSize: "14px", color: "#333" }}>
              {item}
            </div>
          ))}
        </div>

        {/* What's covered */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Repairs Commonly Covered by Extended Warranties</h2>
        <ul style={{ lineHeight: 2.2, color: "#444", paddingLeft: "20px" }}>
          <li>Engine repairs — internal components, gaskets, seals, timing components</li>
          <li>Transmission repairs — automatic, manual, and CVT transmissions</li>
          <li>Electrical system repairs — modules, sensors, wiring</li>
          <li>Fuel system repairs — fuel pump, injectors, fuel pressure regulator</li>
          <li>Cooling system repairs — water pump, thermostat, radiator</li>
          <li>Air conditioning and heating system repairs</li>
          <li>Starter and alternator replacement</li>
          <li>Power steering system repairs</li>
          <li>Brake system components (varies by policy)</li>
          <li>Suspension components (varies by policy)</li>
          <li>Turbocharger and supercharger components</li>
          <li>Transfer case and differential components</li>
        </ul>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Call us before you assume you're not covered.</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          Call (219) 262-2711 →
        </a>
      </section>

      {/* Process */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>How Extended Warranty Repairs Work at R Complete Auto Care</h2>
        {[
          { step: "1", title: "Call Us First", desc: "Before you bring the vehicle in, call us with your warranty provider name and policy number. We'll confirm we work with your provider and let you know what information to have ready." },
          { step: "2", title: "We Verify Your Coverage", desc: "We contact your warranty company to verify your coverage and understand what's included in your policy. Different policies have different covered components — we find out exactly what you have before doing any work." },
          { step: "3", title: "Diagnostic & Pre-Authorization", desc: "We perform a documented diagnostic that meets your warranty company's requirements. We then contact the warranty adjuster, explain our findings, and obtain pre-authorization for the repair before any work begins." },
          { step: "4", title: "You Approve the Work", desc: "Once we have warranty approval, we review the repair plan with you. You confirm the work and pay your deductible amount. We handle everything else." },
          { step: "5", title: "Repair & Documentation", desc: "We complete the repair using parts and procedures that meet warranty requirements. We document everything and submit the completed claim to your warranty provider. You pick up your repaired vehicle." },
        ].map(item => (
          <div key={item.step} style={{ display: "flex", gap: "16px", marginBottom: "28px", alignItems: "flex-start" }}>
            <div style={{ background: "#e63946", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>{item.step}</div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "6px", fontSize: "17px" }}>{item.title}</div>
              <div style={{ color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Choose R Complete Auto Care for Extended Warranty Repairs</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              { title: "We Handle Everything", desc: "Verification, pre-authorization, documentation, and claim submission. You just approve the work and pay your deductible." },
              { title: "Diagnostic-First Approach", desc: "We find the real cause before recommending any repair — which means accurate claims and repairs that actually fix the problem." },
              { title: "Most Providers Accepted", desc: "We work with CarShield, Endurance, CARS Protection, AmTrust, and most other major providers." },
              { title: "No Surprises", desc: "We tell you exactly what's covered and what isn't before any work begins. Clear communication throughout." },
              { title: "Quality Repairs", desc: "We use quality parts that meet warranty requirements. No shortcuts that could void your claim." },
              { title: "25+ Years Experience", desc: "We understand how warranty claims work and how to document repairs properly to get claims approved." },
            ].map(item => (
              <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "4px", padding: "16px" }}>
                <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Extended Warranty Repairs</h2>
          {[
            { q: "Do I need to go to a dealership for extended warranty repairs?", a: "No — most extended warranty policies allow you to use any licensed repair facility, not just dealerships. R Complete Auto Care is a licensed auto repair shop and we work directly with warranty providers. You do not need to go to a dealership." },
            { q: "How do I know if my repair is covered?", a: "Call us with your warranty provider and policy number. We'll contact them to verify your coverage and tell you exactly what's covered before any work begins. Don't assume you're not covered without checking — policies cover more than most people realize." },
            { q: "What if my warranty company denies the claim?", a: "If a claim is denied, we'll explain exactly why and what your options are. Sometimes denials can be appealed with additional documentation. We'll help you understand your situation and make the best decision for your vehicle." },
            { q: "Will I owe anything out of pocket?", a: "Most extended warranty policies require a deductible — typically $100–$200 per repair visit. Beyond that, covered repairs are paid directly by the warranty company to us. You pay your deductible and we handle the rest." },
            { q: "How long does the warranty repair process take?", a: "Getting pre-authorization typically adds a day to the process — we contact the adjuster, they may want to send an inspector, and then they issue approval. Once approved, the repair timeline is the same as any other repair. We'll give you an accurate timeline once we have authorization." },
            { q: "What if I have CarShield — do you accept it?", a: "Yes — we work with CarShield and handle CarShield claims regularly. Call us with your policy number and we'll verify your specific coverage before you bring the vehicle in." },
          ].map(item => (
            <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
              <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
          <ul style={{ lineHeight: 2, paddingLeft: "20px" }}>
            <li><Link href="/services/engine-repair" style={{ color: "#e63946" }}>Engine Repair Crown Point, IN</Link></li>
            <li><Link href="/services/transmission-repair" style={{ color: "#e63946" }}>Transmission Repair Crown Point, IN</Link></li>
            <li><Link href="/services/electrical-diagnostics" style={{ color: "#e63946" }}>Electrical Diagnostics Crown Point, IN</Link></li>
            <li><Link href="/services/check-engine-light" style={{ color: "#e63946" }}>Check Engine Light Diagnostics Crown Point, IN</Link></li>
            <li><Link href="/extended-warranty-auto-repair-crown-point-in" style={{ color: "#e63946" }}>Extended Warranty Auto Repair Crown Point — Full Guide</Link></li>
            <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Have an Extended Warranty? Call Us Before You Pay Out of Pocket.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>We verify your coverage, handle the claim, and do the repair. You just pay your deductible.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}