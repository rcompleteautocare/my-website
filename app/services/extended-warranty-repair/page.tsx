export const metadata = {
  title: 'AC Repair Crown Point IN — Car Heat Not Working | R Complete Auto Care',
  description: 'AC and heating repair in Crown Point, IN. No cold air or no heat? We diagnose the real cause and fix it right. All makes and models. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/services/ac-heating-repair' },
}

import Link from "next/link";
export default function AcHeatingRepair() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>CROWN POINT, INDIANA</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          AC & Heating Repair in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          No cold air in summer or no heat in winter? We diagnose the real cause — not just recharge the system and send you on your way.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
      </section>

      {/* Serving bar */}
      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake, IN
      </section>

      {/* Intro */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Diagnose First — Not Just Recharge and Hope</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          A lot of shops will recharge your AC system without checking why it lost refrigerant in the first place. If there's a leak — and there usually is — you'll be back in the same situation within months. At R Complete Auto Care in Crown Point, we find the actual cause of the problem before recommending any repair.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          Whether your AC is blowing warm air, your heat isn't working, you're getting a musty smell from the vents, or your defrost isn't clearing the windshield — we diagnose the full HVAC system and tell you exactly what's wrong before we do any work.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Northwest Indiana summers are hot and humid, and winters are brutal. A properly functioning climate system isn't just comfort — it's safety. Defrost that doesn't work or windows that fog up in winter are genuine visibility hazards. We take HVAC seriously.
        </p>

        {/* Symptoms */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>AC & Heating Symptoms We Diagnose</h2>
        <ul style={{ lineHeight: 2.2, color: "#444", paddingLeft: "20px" }}>
          <li>AC blowing warm or hot air instead of cold</li>
          <li>AC works sometimes but not consistently</li>
          <li>Weak airflow from vents even on high fan setting</li>
          <li>Musty, moldy, or burning smell from vents</li>
          <li>Heater blowing cold air instead of warm</li>
          <li>Only one side of the cabin gets heat or AC (dual-zone issue)</li>
          <li>Defrost not clearing windshield effectively</li>
          <li>AC compressor clutch not engaging</li>
          <li>Clicking or banging noise when AC is turned on</li>
          <li>Water leaking into the cabin from HVAC system</li>
          <li>AC light flashing or climate control not responding</li>
          <li>Engine overheating when AC is running</li>
        </ul>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>No cold air or no heat? Get it diagnosed right.</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          Call (219) 262-2711 →
        </a>
      </section>

      {/* Services */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>AC & Heating Services We Perform</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {[
            "AC system diagnosis & inspection",
            "Refrigerant leak detection",
            "AC recharge (R-134a & R-1234yf)",
            "AC compressor replacement",
            "AC condenser replacement",
            "AC evaporator replacement",
            "Expansion valve replacement",
            "Cabin air filter replacement",
            "Blower motor & resistor replacement",
            "Heater core replacement",
            "Thermostat replacement",
            "Climate control module diagnosis",
            "Blend door actuator replacement",
            "Defrost system diagnosis & repair",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", padding: "12px 14px", fontSize: "14px", color: "#333" }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Our AC & Heating Diagnostic Process</h2>
          {[
            { step: "1", title: "System Pressure Test", desc: "We connect manifold gauges to the AC system to check high and low side pressures. Pressure readings tell us immediately whether the system has the right refrigerant charge, has a restriction, or has a component failure." },
            { step: "2", title: "Leak Detection", desc: "If the system is low on refrigerant, we find out why before adding more. We use UV dye and electronic leak detectors to find the exact location of any refrigerant leak — whether it's at a hose fitting, the compressor, condenser, or evaporator." },
            { step: "3", title: "Component Testing", desc: "We test the compressor clutch engagement, condenser fan operation, blower motor output, and temperature door operation. A systematic component test identifies failures that pressure testing alone won't reveal." },
            { step: "4", title: "Heater System Check", desc: "For heating problems, we check coolant level and condition, thermostat operation, heater core flow, and blend door actuator function. Many heating problems are actually cooling system problems in disguise." },
            { step: "5", title: "Clear Estimate & Repair", desc: "We explain exactly what we found and what it costs to fix. You approve the repair before we start. After the repair, we retest the system to confirm proper operation before returning the vehicle." },
          ].map(item => (
            <div key={item.step} style={{ display: "flex", gap: "16px", marginBottom: "28px", alignItems: "flex-start" }}>
              <div style={{ background: "#e63946", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>{item.step}</div>
              <div>
                <div style={{ fontWeight: "bold", marginBottom: "6px", fontSize: "17px" }}>{item.title}</div>
                <div style={{ color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — AC & Heating Repair</h2>
          {[
            { q: "Why is my AC blowing warm air?", a: "The most common causes are low refrigerant from a leak, a failed AC compressor, a clogged condenser, or a failed expansion valve. Simply recharging the system without finding the leak means you'll be in the same situation within months. We find the cause first." },
            { q: "How do I know if my AC has a refrigerant leak?", a: "Signs of a refrigerant leak include AC that works when the car is first started but gradually blows warmer, AC that works fine one day and not the next, or a visible oily residue around AC fittings or components. We use UV dye and electronic detectors to find leaks precisely." },
            { q: "Why is my heater blowing cold air?", a: "Common causes include a stuck-open thermostat (engine never reaches operating temperature), a clogged heater core, low coolant level, a failed blend door actuator, or air in the cooling system. We diagnose the heating and cooling systems together since they share components." },
            { q: "What's a heater core and how do I know if it's bad?", a: "The heater core is a small radiator inside your dashboard that circulates hot coolant to heat the cabin. Signs of a failing heater core include no heat, a sweet smell inside the cabin, foggy windows that don't clear with defrost, or coolant dripping onto the passenger floor." },
            { q: "Can I just add refrigerant myself?", a: "You can, but if there's a leak — which is why the refrigerant was low — adding more is a temporary fix. The refrigerant will leak out again. We find and fix the leak so the repair actually lasts." },
            { q: "Do you accept extended warranties for AC and heating repair?", a: "Yes — AC compressors, condensers, and some other HVAC components are frequently covered under extended warranty policies. Call us with your warranty information and we'll verify what's covered before any work begins." },
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
            <li><Link href="/services/electrical-diagnostics" style={{ color: "#e63946" }}>Electrical Diagnostics Crown Point, IN</Link></li>
            <li><Link href="/services/extended-warranty-repair" style={{ color: "#e63946" }}>Extended Warranty Repairs Crown Point, IN</Link></li>
            <li><Link href="/services/oil-change-maintenance" style={{ color: "#e63946" }}>Oil Change & Maintenance Crown Point, IN</Link></li>
            <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>AC or Heating Problem in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Honest diagnostics. Quality repairs. All makes and models.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}