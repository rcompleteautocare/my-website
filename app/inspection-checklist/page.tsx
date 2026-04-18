export const metadata = {
  title: 'What We Check on Every Inspection — R Complete Auto Care Crown Point, IN',
  description: 'See the full 10-section vehicle inspection we perform in Crown Point, IN. Real measurements, color-coded results, and photos on every red item. Honest, documented, no pressure. Call (219) 262-2711.',
  alternates: { canonical: 'https://www.rcompleteautocare.com/inspection-checklist' },
}

import Link from "next/link";
import LastUpdated from "@/app/components/LastUpdated";

const sections = [
  {
    title: "1. Vehicle Basics",
    items: [
      "VIN verified against the record",
      "Odometer mileage logged",
      "Dashboard warning lights (any active lights documented)",
      "Road test performed if symptoms warrant it",
    ],
  },
  {
    title: "2. Under the Hood",
    items: [
      "Engine oil level and condition",
      "Coolant level and condition",
      "Brake fluid condition",
      "Power steering fluid",
      "Transmission fluid (where applicable)",
      "Battery condition and CCA / voltage test result",
      "Belts — cracks, glazing, wear",
      "Hoses — leaks, swelling, soft spots",
    ],
  },
  {
    title: "3. Tires & Wheels",
    items: [
      "Tread depth measured at LF / RF / LR / RR",
      "Tire pressure on all four tires",
      "Uneven wear patterns noted with cause",
      "Wheel condition — bent rims, curb damage",
      "Lug nuts checked for proper torque",
    ],
  },
  {
    title: "4. Brakes",
    items: [
      "Pad thickness measured in mm at LF / RF / LR / RR",
      "Rotor condition — smooth, scored, or warped",
      "Brake fluid leaks at calipers and lines",
      "Parking brake operation verified",
    ],
  },
  {
    title: "5. Suspension & Steering",
    items: [
      "Shocks and struts — leaking or worn",
      "Ball joints — checked for play",
      "Tie rods — inner and outer",
      "Control arm bushings",
      "Steering rack condition",
    ],
  },
  {
    title: "6. Under the Vehicle",
    items: [
      "Engine oil leaks",
      "Transmission leaks",
      "Exhaust — rust, leaks, hanger condition",
      "Driveshaft, CV axles, and boot integrity",
      "Differential condition (where applicable)",
    ],
  },
  {
    title: "7. Electrical & Lighting",
    items: [
      "Headlights — high and low beam",
      "Brake lights (including third brake light)",
      "Turn signals — front, rear, side markers",
      "Interior lights",
      "Horn operation",
      "Wiper blades — chatter, streaking, tearing",
    ],
  },
  {
    title: "8. Cabin & Interior",
    items: [
      "HVAC — heat and A/C output verified",
      "Cabin air filter condition",
      "Dashboard warning lights double-checked",
      "Seat belt condition and retractor function",
    ],
  },
  {
    title: "9. Road Test (when performed)",
    items: [
      "Engine performance under load",
      "Transmission shifting — up, down, and lockup",
      "Brake feel and pedal travel",
      "Steering feel and centering",
      "Any noises or vibrations documented with speed and condition",
    ],
  },
  {
    title: "10. Summary & Recommendations",
    items: [
      "Every line item marked Green, Yellow, or Red",
      "Plain-language tech notes on anything not Green",
      "Photo or video attached to every Red item and every safety concern",
      "Prioritized estimate so you know what's urgent and what can wait",
    ],
  },
];

const faqs = [
  { q: "How long does a full inspection take?", a: "A thorough inspection with measurements typically runs 45 to 75 minutes depending on vehicle and access. We don't rush it — a 15-minute 'inspection' is a visual check, not a real one." },
  { q: "Do I have to approve every recommendation?", a: "No. The inspection is diagnostic, not a sales event. You see the measurements and photos, we tell you what's urgent vs. what can wait, and you decide what (if anything) to authorize." },
  { q: "What do the green, yellow, and red labels mean?", a: "Green means no issue found. Yellow means monitor or address at next service — worn but safe. Red means immediate attention — the item is out of spec, unsafe, or will cause damage if driven." },
  { q: "Do you include photos with the inspection?", a: "Yes. Every Red item and any safety-related concern gets a photo or short video so you can see exactly what we saw. You'll get the report in a format you can share with a family member, fleet manager, or warranty adjuster." },
  { q: "Can I get a copy of the inspection to share with another shop?", a: "Absolutely. The report is yours. We encourage second opinions — that's part of what makes a documented inspection valuable." },
  { q: "Will an inspection hurt my extended warranty?", a: "No. A documented inspection with measurements actually helps warranty claims. If we find something covered, we handle the claim paperwork for you." },
  { q: "Do you charge for the inspection?", a: "Call us at (219) 262-2711 for current inspection pricing. Inspection fees are typically applied toward any repair work you authorize." },
  { q: "What if my car already has a red item I know about?", a: "Tell us upfront. We'll still document the full vehicle so you have a complete picture, but we won't waste your time quoting things you've already decided to defer." },
];

export default function InspectionChecklist() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>CROWN POINT, INDIANA</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px" }}>
          What We Check on Every Inspection
        </h1>
        <p style={{ fontSize: "16px", color: "#e63946", fontWeight: "600", marginBottom: "16px", fontStyle: "italic" }}>
          TL;DR: A full inspection covers 10 sections with real measurements, color-coded results, and a photo on every Red item. No guesswork, no upsell — you see what we see.
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "640px", margin: "0 auto 32px" }}>
          Below is the exact checklist our techs work through on a full vehicle inspection. Every item is documented so you can make informed decisions about your car.
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
        <LastUpdated date="2026-04-18" />

        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Measurements, Not Guesses</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          A real inspection is documented. Pad thickness gets measured in millimeters, not eyeballed through the wheel. Battery gets load-tested, not just &ldquo;looked at.&rdquo; Fluids get checked for condition, not just level. Every finding gets written down with a color code and — for anything urgent — a photo.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          The 10 sections below are what we work through on a full vehicle inspection. The same checklist runs whether you&apos;re in for a pre-purchase inspection, a peace-of-mind check before a road trip, or a scheduled maintenance visit.
        </p>

        {/* Color code */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>How We Grade Each Item</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          <div style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #2a9d4a", borderRadius: "4px", padding: "16px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "6px", color: "#2a9d4a" }}>✅ Green — No issues</div>
            <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>In spec, functioning as designed. Nothing to do.</div>
          </div>
          <div style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #d9a209", borderRadius: "4px", padding: "16px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "6px", color: "#b38700" }}>⚠️ Yellow — Monitor</div>
            <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>Worn but safe. Plan for future service — not an emergency.</div>
          </div>
          <div style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "4px", padding: "16px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "6px", color: "#e63946" }}>❌ Red — Immediate attention</div>
            <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>Out of spec, unsafe, or will cause damage. Photo or video attached.</div>
          </div>
        </div>
      </section>

      {/* CTA 2 */}
      <section style={{ background: "#f5f5f5", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Want a documented inspection on your vehicle?</p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "12px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
          Call (219) 262-2711 →
        </a>
      </section>

      {/* The 10 sections */}
      <section style={{ padding: "60px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>The 10-Section Inspection Checklist</h2>
        <p style={{ color: "#666", marginBottom: "32px", fontSize: "15px" }}>Every item below gets checked, graded, and documented.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {sections.map(section => (
            <div key={section.title} style={{ border: "1px solid #e0e0e0", borderTop: "4px solid #e63946", borderRadius: "4px", padding: "20px", background: "#fff" }}>
              <div style={{ fontWeight: "bold", fontSize: "17px", marginBottom: "12px", color: "#1a1a1a" }}>{section.title}</div>
              <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: 1.7, color: "#444", fontSize: "14px" }}>
                {section.items.map(item => (
                  <li key={item} style={{ marginBottom: "6px" }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tech notes + photos */}
      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>What You Get With the Report</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { title: "Plain-language tech notes", desc: "Every Yellow or Red item comes with a short explanation you don't need a repair manual to understand." },
              { title: "Photos on every Red", desc: "If we flag something urgent, you see a photo or short video of the actual part on your car — not a stock image." },
              { title: "Measurements where they matter", desc: "Pad thickness in mm, rotor thickness, battery CCA, tire tread in 32nds. Numbers you can compare at the next inspection." },
              { title: "Prioritized estimate", desc: "The report tells you what's urgent, what can wait, and what's purely preventive — so you can budget repairs instead of being surprised by them." },
            ].map(item => (
              <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "4px", padding: "16px", background: "#fff" }}>
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
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Vehicle Inspections</h2>
          {faqs.map(item => (
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
            <li><Link href="/services/diagnostics" style={{ color: "#e63946" }}>Vehicle Diagnostics Crown Point, IN</Link></li>
            <li><Link href="/services/brake-repair" style={{ color: "#e63946" }}>Brake Repair Crown Point, IN</Link></li>
            <li><Link href="/services/check-engine-light" style={{ color: "#e63946" }}>Check Engine Light Diagnostics Crown Point, IN</Link></li>
            <li><Link href="/services/extended-warranty-repair" style={{ color: "#e63946" }}>Extended Warranty Repairs Crown Point, IN</Link></li>
            <li><Link href="/auto-repair-crown-point-in" style={{ color: "#e63946" }}>Auto Repair Crown Point, IN</Link></li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Ready for a Real Inspection?</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Honest findings. Clear measurements. No pressure.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
          { "@type": "ListItem", "position": 2, "name": "Inspection Checklist", "item": "https://www.rcompleteautocare.com/inspection-checklist" }
        ]
      }) }} />
    </div>
  );
}
