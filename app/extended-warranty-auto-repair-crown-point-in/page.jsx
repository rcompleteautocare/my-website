import FaqSchema from '../components/FaqSchema'
import Link from 'next/link'
import FaqAccordion from '../components/FaqAccordion'

export const metadata = {
  title: 'Extended Warranty Auto Repair Crown Point IN | R Complete Auto Care',
  description:
    'Extended warranty auto repair in Crown Point, IN. We handle pre-authorisation, documentation, and the entire claims process. You pay only your deductible. Call (219) 262-2711.',
  alternates: {
    canonical: 'https://www.rcompleteautocare.com/extended-warranty-auto-repair-crown-point-in',
  },
}

const FAQS = [
  {
    q: 'Do I need to call my warranty company first, or do you handle that?',
    a: "Just call us first at (219) 262-2711 with your warranty contract information. We verify your coverage directly with the provider and handle the pre-authorisation call before any work begins. You don't need to navigate the warranty company process yourself.",
  },
  {
    q: 'What extended warranty companies do you work with?',
    a: "We work with most third-party extended warranty providers including CARS Protection Plus, Endurance, CarShield, CARCHEX, AmTrust/National Auto Care, Zurich, and Protect My Car. Call us with your provider name to confirm before bringing the vehicle in.",
  },
  {
    q: 'My warranty company wants to send an inspector to the shop. Is that okay?',
    a: "Yes — inspector visits are standard for larger claims and we're fully prepared for them. Our diagnostic documentation is detailed enough to support the inspection process. We have successfully passed every warranty inspector visit.",
  },
  {
    q: 'What if my warranty company denies the claim?',
    a: "We'll advise you on the denial reason and whether it's worth appealing. Some denials are based on insufficient documentation from a previous shop — our detailed diagnostic records are often sufficient to support a successful reconsideration. We'll walk you through your options clearly.",
  },
  {
    q: 'Is the diagnostic fee covered by my extended warranty?',
    a: "Many extended warranty plans cover the diagnostic fee when the diagnosed failure is a covered component. We check your specific plan terms when we verify coverage. Even when it's not covered, our diagnostic fee is applied toward the repair cost.",
  },
  {
    q: 'Can I bring my car in without calling first?',
    a: "You can — but calling ahead lets us verify your coverage before you arrive, confirm we can handle your specific provider, and schedule time for a documented warranty diagnostic. Calling first typically gets your repair completed faster.",
  },
  {
    q: 'Why do so many shops refuse extended warranty work?',
    a: "Extended warranty repairs require detailed documentation, pre-authorisation calls, specific labor operation codes, and post-repair paperwork that most shops aren't set up to handle efficiently. We built our entire process around this — warranty work is a significant part of our business and we do it well.",
  },
]

export default function ExtendedWarrantyRepair() {
  return (
    <>
      <FaqSchema faqs={FAQS} />
      <div className="page-content">
        <p className="location-badge">Crown Point, Indiana</p>
        <h1>Extended Warranty Auto Repair in Crown Point, IN — We Handle the Entire Process</h1>
        <p className="hero-description">
          Bring your contract. We verify your coverage, perform the documented diagnostic, make the
          pre-authorisation call, complete the repair, and submit all paperwork. You pick up a fixed
          vehicle and pay only your deductible. Extended warranty repairs are welcome at R Complete
          Auto Care — Crown Point&apos;s diagnostic-first auto repair shop at 1305 E Summit St.
        </p>
        <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — Verify Your Coverage Today</a>
        <p className="address-line">1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
        <p className="serving-line">Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake</p>

        <h2>Situations Where Crown Point Drivers Call Us for Extended Warranty Help</h2>
        <p>You may have an extended warranty and not be sure what it covers or how to use it. These are the most common situations we help Crown Point drivers navigate:</p>
        <ul>
          <li><strong>Check engine light on and a covered component has failed</strong> — we perform the documented diagnostic and handle the claim</li>
          <li><strong>Transmission slipping, shifting hard, or not engaging</strong> — transmission components are commonly covered; we verify before disassembly</li>
          <li><strong>Engine noise, oil consumption, or loss of power</strong> — internal engine components are covered under most comprehensive plans</li>
          <li><strong>Car won&apos;t start — starter, fuel pump, or sensor failure</strong> — commonly covered no-start components with documented diagnosis</li>
          <li><strong>Car overheating — water pump, thermostat, or cooling system</strong> — cooling system components covered under most powertrain plans</li>
          <li><strong>Electrical failure — alternator, BCM, instrument cluster</strong> — electrical components covered under comprehensive and premium plans</li>
          <li><strong>AC not working — compressor or related components</strong> — AC coverage varies by plan; we verify before recommending repair</li>
          <li><strong>Suspension noise or handling problems</strong> — struts, shocks, and control arms covered under some plans</li>
          <li><strong>Previous warranty claim denied at another shop</strong> — we provide properly documented diagnostics that meet adjuster requirements</li>
          <li><strong>Warranty company requires pre-authorisation before repair</strong> — we make that call on your behalf with the documentation to get it approved</li>
        </ul>

        <h2>Why Most Crown Point Shops Refuse Extended Warranty Work — And Why We Don&apos;t</h2>
        <p>
          Extended warranty repairs involve a level of documentation that most auto repair shops are
          not set up to produce: precise failure mode descriptions, step-by-step diagnostic records
          with test data, specific part numbers, labor operation codes, and in most cases a
          pre-authorisation call before any repair begins. Adjusters are trained to look for gaps
          in this documentation and deny claims that lack it.
        </p>
        <p>
          Most shops find this process more work than it is worth. They either decline warranty
          customers outright or handle the process poorly — submitting insufficient documentation
          that gets denied, leaving the customer to fight the warranty company on their own.
        </p>
        <p>
          At R Complete Auto Care we built our diagnostic process specifically to produce the
          documentation extended warranty adjusters require. We know what format they need, how to
          present failure mode analysis for maximum approval probability, and how to advocate for
          your claim when coverage is questioned. Extended warranty work is a meaningful part of
          our business — and our customers come back because we get it done right.
        </p>
        <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — We&apos;ll Verify Your Coverage First</a>

        <h2>Extended Warranty Providers We Work With in Crown Point</h2>
        <ul>
          <li>CARS Protection Plus</li>
          <li>Endurance Warranty Services</li>
          <li>CarShield</li>
          <li>CARCHEX</li>
          <li>AmTrust Financial / National Auto Care</li>
          <li>Zurich / Dealer-sold extended warranties</li>
          <li>Protect My Car</li>
          <li>Most other third-party providers — call (219) 262-2711 to confirm yours</li>
        </ul>

        <h2>Repairs Commonly Covered by Extended Warranties</h2>
        <p>Coverage varies by plan tier. The most common warranty repair types we process at R Complete Auto Care:</p>
        <ul>
          <li><strong>Engine repairs</strong> — Head gaskets, timing chains, oil consumption issues, crankshaft and camshaft components, valve train</li>
          <li><strong>Transmission repairs</strong> — Shift solenoids, valve body, torque converter, internal clutch packs and bands</li>
          <li><strong>Electrical system repairs</strong> — Alternators, starters, body control modules, instrument clusters, window regulators</li>
          <li><strong>Suspension and steering</strong> — Struts, shock absorbers, control arms, ball joints, tie rods, power steering pump and rack</li>
          <li><strong>Fuel system repairs</strong> — Fuel pumps, fuel injectors, fuel pressure regulators</li>
          <li><strong>Cooling system</strong> — Water pumps, thermostats, radiators, cooling fans</li>
          <li><strong>Air conditioning system</strong> — Compressors, condensers, evaporators, expansion valves</li>
          <li><strong>No-start conditions</strong> — Starters, crankshaft position sensors, fuel pumps, ignition modules</li>
          <li><strong>Brake system</strong> — ABS modules, master cylinders (mechanical brake components often covered; friction items usually excluded)</li>
        </ul>

        <h2>How Our Extended Warranty Process Works — Start to Finish</h2>
        <ol>
          <li><strong>Call us before bringing the vehicle in.</strong> Call (219) 262-2711 with your warranty provider name and contract number. We verify coverage and confirm we can handle your specific plan — before you drive or tow the vehicle in.</li>
          <li><strong>Diagnostic documented to warranty standards.</strong> We perform a thorough diagnostic with fault codes, test results, and precise failure mode descriptions formatted specifically for warranty adjuster review. This documentation is what separates approved claims from denied ones.</li>
          <li><strong>We make the pre-authorisation call.</strong> We contact your warranty company, present the diagnostic findings in the format their adjusters require, and obtain repair authorisation before any parts are ordered or work begins.</li>
          <li><strong>Repair using approved parts and procedures.</strong> Once pre-authorised, we complete the repair using parts that meet your warranty company&apos;s requirements and document all labor operations to specification.</li>
          <li><strong>You pay only your deductible.</strong> The warranty company pays us directly for the covered amount. You pick up your vehicle and pay your deductible only — often $100–$200 on a repair that would have cost $800–$2,500 out of pocket.</li>
        </ol>

        <h2>Why Documentation Is the Difference Between Approval and Denial</h2>
        <p>
          Extended warranty companies deny claims that lack sufficient diagnostic documentation
          every day. A repair order that says &quot;transmission needs replacement&quot; is not
          sufficient. A documented failure analysis with specific fault codes, fluid condition
          assessment, solenoid resistance measurements, pressure test results, and a clear causal
          narrative — that is what gets claims approved on the first submission.
        </p>
        <p>
          Our diagnostic-first approach means every repair we recommend has documented test data
          behind it. This protects your claim from denial, eliminates back-and-forth with adjusters,
          and speeds up the approval process so your vehicle gets repaired faster.
        </p>

        <h2>Why Crown Point Drivers Trust R Complete Auto Care for Extended Warranty Work</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <strong>We Handle the Entire Process</strong>
            <p>Coverage verification, pre-authorisation call, documented repair, claim submission — we manage every step. You pay only your deductible.</p>
          </div>
          <div className="feature-item">
            <strong>Diagnostic-First Documentation</strong>
            <p>Our diagnostic records are formatted to meet warranty adjuster requirements. This is what prevents claim denials at the first submission.</p>
          </div>
          <div className="feature-item">
            <strong>We Advocate for Your Claim</strong>
            <p>If an adjuster pushes back or questions coverage, we push back with test data and documentation. We do not accept unjustified denials without advocating for you.</p>
          </div>
          <div className="feature-item">
            <strong>All Makes and Models</strong>
            <p>Foreign and domestic. We service every make and model covered under third-party extended warranty plans — passenger vehicles, trucks, and SUVs.</p>
          </div>
        </div>

        <h2>Frequently Asked Questions — Extended Warranty Auto Repair in Crown Point, IN</h2>
        <FaqAccordion faqs={FAQS} />

        <h2>Related Services</h2>
        <ul className="related-links">
          <li><Link href="/services/engine-repair">Engine Repair Crown Point, IN →</Link></li>
          <li><Link href="/services/transmission-repair">Transmission Repair Crown Point, IN →</Link></li>
          <li><Link href="/services/electrical-diagnostics">Electrical Diagnostics Crown Point, IN →</Link></li>
          <li><Link href="/services/no-start-diagnostics">No-Start Diagnostics Crown Point, IN →</Link></li>
          <li><Link href="/car-wont-start-crown-point-in">Car Won&apos;t Start Crown Point →</Link></li>
          <li><Link href="/car-overheating-crown-point-in">Car Overheating Crown Point →</Link></li>
          <li><Link href="/auto-repair-crown-point-in">Auto Repair Crown Point, IN →</Link></li>
        </ul>

        <h2>Extended Warranty Repair in Crown Point? Call Us First.</h2>
        <p>We verify your coverage before you bring the vehicle in. We handle everything from pre-authorisation to final documentation. You pay only your deductible.</p>
        <p>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711</a>
      </div>
    </>
  )
}