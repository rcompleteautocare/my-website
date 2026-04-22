import FaqSchema from '../components/FaqSchema'
import FaqAccordion from '../components/FaqAccordion'
import Link from 'next/link'

export const metadata = {
  title: 'Car A/C Not Blowing Cold in Crown Point, IN | R Complete Auto Care',
  description:
    'Car A/C not blowing cold in Crown Point, IN? Do not just recharge — the leak that caused it is still there. Full A/C diagnosis. (219) 262-2711.',
  alternates: {
    canonical: 'https://www.rcompleteautocare.com/ac-not-blowing-cold-crown-point-in',
  },
  openGraph: {
    title: 'Car A/C Not Blowing Cold in Crown Point, IN | R Complete Auto Care',
    description:
      'Car A/C not blowing cold in Crown Point, IN? Do not just recharge — the leak that caused it is still there. Full A/C diagnosis. (219) 262-2711.',
    url: 'https://www.rcompleteautocare.com/ac-not-blowing-cold-crown-point-in',
    siteName: 'R Complete Auto Care',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car A/C Not Blowing Cold in Crown Point, IN | R Complete Auto Care',
    description:
      'Car A/C not blowing cold in Crown Point, IN? Do not just recharge — the leak that caused it is still there. Full A/C diagnosis. (219) 262-2711.',
    images: ['/logo.png'],
  },
  robots: { index: true, follow: true },
}

const FAQS = [
  {
    q: 'Why is my car A/C blowing warm or lukewarm air?',
    a: 'The most common cause is a refrigerant leak that has dropped the charge below the pressure the compressor needs to engage. Other common causes include a failed compressor clutch, a stuck expansion valve, a clogged cabin air filter, or a failed blend door actuator sending hot coolant heat into the vent. Root cause requires a manifold gauge set and a UV leak test — not just a recharge.',
  },
  {
    q: 'Should I just buy a recharge kit from the parts store?',
    a: 'Not if you want the A/C to work next summer. A DIY recharge temporarily restores cooling if the charge is low, but it masks the leak and adds refrigerant that will vent out within weeks or months. The sealant in most recharge kits can also damage the expansion valve and A/C service equipment — making professional repair later more difficult. Find the leak first.',
  },
  {
    q: 'My A/C worked fine last summer and now it is warm. What happened?',
    a: 'Most A/C systems lose a small amount of refrigerant every year through seal permeation — normal. After 8–12 years that loss can drop the charge below the minimum pressure threshold the compressor needs. Sometimes a seasonal stress — hot weather expanding a marginal component or a rock strike to the condenser in winter — pushes the system past the failure point.',
  },
  {
    q: 'A/C blows cold when driving but warm at idle. What is causing that?',
    a: 'Two common causes: a failing condenser fan not cooling the condenser at low airflow, or low refrigerant charge insufficient to keep up with low idle compressor speed. Both are diagnosable with a gauge set and a visual fan check in minutes.',
  },
  {
    q: 'How much does A/C repair cost in Crown Point?',
    a: 'A leak diagnosis with UV dye detection is typically $150–$250 and applies to the repair. Recharge alone (after the leak is fixed) runs $180–$300 depending on refrigerant specification. Compressor replacement on most vehicles runs $800–$1,600 depending on make and model. We quote after diagnosis — not over the phone from symptoms alone.',
  },
  {
    q: 'Do extended warranties cover A/C repair?',
    a: 'Yes — A/C compressors, condensers, evaporators, and expansion valves are commonly covered on most third-party extended warranty plans. We handle the claim directly with CarShield, Endurance, CARS Protection, CARCHEX, AmTrust, and Zurich. Call us with your provider name before you bring the vehicle in.',
  },
  {
    q: 'My A/C smells musty or moldy when I turn it on. Is that an A/C problem?',
    a: 'It is usually a clogged cabin air filter plus bacteria growth on the evaporator core. A filter replacement and evaporator coil cleaning resolves most cases for under $150. If the smell persists it may indicate a clogged evaporator drain — water pooling in the case — which requires drain clearing.',
  },
]

export default function AcNotBlowingCold() {
  return (
    <>
      <FaqSchema faqs={FAQS} />
      <div className="page-content">
        <p className="location-badge">Crown Point, Indiana</p>
        <h1>Car A/C Not Blowing Cold in Crown Point, IN? Find the Leak, Not Just a Recharge.</h1>
        <p className="hero-description">
          A recharge without a leak diagnosis is throwing money out the vent. Most A/C systems that
          lose cooling have lost refrigerant through a specific leak — at the condenser, a hose
          fitting, the compressor seal, or the evaporator. Add refrigerant without fixing the leak
          and it vents out again within weeks. At R Complete Auto Care in Crown Point we run a full
          A/C diagnostic with manifold gauges and UV leak detection before we recommend parts or
          refrigerant. Same-day A/C service. Extended warranty accepted.
        </p>
        <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — Same-Day A/C Diagnosis</a>
        <p className="address-line">1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
        <p className="serving-line">Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake</p>

        <h2>A/C Symptoms Crown Point Drivers Describe</h2>
        <p>Every A/C symptom points at a different part of the system. The exact description determines where we test first:</p>
        <ul>
          <li><strong>A/C blowing warm or room-temperature air</strong> — low refrigerant charge, failed compressor clutch, or refrigerant leak</li>
          <li><strong>A/C blowing cool at highway speed, warm at idle</strong> — weak condenser cooling; failing condenser fan or low charge</li>
          <li><strong>A/C works at first then gets warm after 10 minutes</strong> — icing at the evaporator, stuck expansion valve, or expansion tube blockage</li>
          <li><strong>Air blows but the compressor never clicks on</strong> — low-pressure cutoff protecting from low charge; pressure switch failure; compressor relay</li>
          <li><strong>A/C blows cold on driver side and warm on passenger side</strong> — dual-zone blend door actuator failure or HVAC module fault</li>
          <li><strong>Musty or moldy smell when A/C is on</strong> — bacteria growth on the evaporator core plus clogged cabin air filter</li>
          <li><strong>Water dripping onto the passenger-side floor</strong> — clogged evaporator drain; water pooling instead of draining outside</li>
          <li><strong>Hissing or bubbling sound behind the dashboard</strong> — refrigerant boiling past an expansion restriction; usually a low-charge symptom</li>
          <li><strong>Clicking sound with no cold air</strong> — compressor clutch cycling rapidly; compressor not engaging due to low pressure</li>
          <li><strong>A/C button does not illuminate when pressed</strong> — low-pressure cutoff has locked out the system; low charge or pressure switch</li>
          <li><strong>Fan works on high but not on low settings</strong> — blower motor resistor failure; not an A/C refrigerant issue</li>
          <li><strong>Hot air from one vent, cold from another</strong> — blend door or mode door actuator failure inside the HVAC case</li>
        </ul>

        <h2>Why a Recharge Alone Is the Wrong Repair</h2>
        <p>
          The A/C system is a sealed loop. Under normal operation it should not lose refrigerant. If
          your A/C charge is low enough that cooling has failed, refrigerant escaped somewhere — a
          cracked condenser, a leaking hose fitting, a seeping compressor seal, or a pinhole in the
          evaporator. The leak is still there after a recharge.
        </p>
        <p>
          The most common A/C misdiagnosis we correct in Crown Point: a driver adds a recharge kit
          from the parts store, the A/C blows cold for two weeks, then goes warm again. They come to
          us frustrated. The original leak was small — a fitting O-ring or a hairline condenser
          crack. The repair is often $180–$400. But the recharge kit also added stop-leak sealant
          that can clog the expansion valve, and the customer has now vented a second charge of
          refrigerant into the atmosphere.
        </p>
        <p>
          At R Complete Auto Care we connect manifold gauges to read high-side and low-side pressure,
          check static pressure against ambient temperature, look at pressure behavior when the
          compressor cycles, and run UV dye through the system to find the leak visually. Only after
          the leak is identified and repaired do we evacuate and properly charge the system to
          manufacturer specification by weight — not by can count.
        </p>
        <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — Full A/C Leak Diagnosis</a>

        <h2>Common Causes of A/C Not Blowing Cold in Crown Point</h2>
        <ul>
          <li><strong>Condenser leak</strong> — Rock strikes to the condenser from highway debris are common on US-41 and I-65; a small pinhole vents the charge over weeks.</li>
          <li><strong>Hose fitting or O-ring leak</strong> — Rubber O-rings at fitting connections dry out over 10+ years and begin weeping refrigerant.</li>
          <li><strong>Compressor shaft seal leak</strong> — A compressor that has sat idle over winter often develops a shaft seal leak; detectable by UV dye around the compressor front.</li>
          <li><strong>Evaporator leak</strong> — Less common but the most expensive to fix; evaporator is buried inside the dashboard and requires case disassembly.</li>
          <li><strong>Failed compressor clutch</strong> — Clutch does not engage when commanded; A/C button illuminates but the compressor never spins.</li>
          <li><strong>Failed expansion valve or orifice tube</strong> — Stuck closed causes low flow and low cooling; stuck open causes evaporator flooding.</li>
          <li><strong>Failed condenser fan</strong> — A/C cools at highway speed but fails at idle because the condenser is not being cooled.</li>
          <li><strong>Clogged cabin air filter</strong> — Reduces airflow through the evaporator; makes cooling feel weak even with a fully charged system.</li>
          <li><strong>Blend door actuator failure</strong> — Mechanical failure blending heater core output into the vent air; cold refrigerant but warm output.</li>
          <li><strong>HVAC module or control head failure</strong> — Electrical fault preventing proper command of fan, blend doors, and compressor.</li>
          <li><strong>Low refrigerant from slow seal permeation</strong> — Normal 1–2% loss per year; after 10+ years the charge is below the threshold for proper operation.</li>
        </ul>

        <h2>Our A/C Diagnostic Process</h2>
        <ol>
          <li><strong>Static pressure check.</strong> System pressure compared to ambient temperature. A deviation tells us immediately whether the charge is low, high, or within spec.</li>
          <li><strong>Operating pressure analysis.</strong> Manifold gauges on high and low side with the A/C running. Pressure behavior reveals compressor, expansion, or charge issues.</li>
          <li><strong>Electrical verification.</strong> Compressor clutch coil resistance, pressure switch continuity, relay function, and blower motor operation confirmed.</li>
          <li><strong>Visual leak inspection.</strong> Obvious oil traces around fittings, the compressor, and the condenser are identified before dye is introduced.</li>
          <li><strong>UV dye leak detection.</strong> Dye is added to the system and the technician inspects under UV light for leak points invisible in normal light.</li>
          <li><strong>Airflow and temperature measurement.</strong> Temperature at the center vent measured against ambient and compressor engagement cycles.</li>
          <li><strong>Repair recommendation with cause and cost.</strong> You get a clear written quote with the specific leak or failure identified before work begins.</li>
        </ol>

        <h2>A/C Repairs We Perform in Crown Point</h2>
        <ul>
          <li>A/C leak diagnosis with UV dye and manifold gauge analysis</li>
          <li>Refrigerant evacuation and recharge to manufacturer specification by weight</li>
          <li>Compressor replacement — with system flush to remove contamination</li>
          <li>Compressor clutch replacement — where supported by manufacturer</li>
          <li>Condenser replacement — including cooling module and transmission cooler where integrated</li>
          <li>Expansion valve and orifice tube replacement</li>
          <li>A/C hose and fitting O-ring replacement</li>
          <li>Evaporator replacement — case-out repair where leak is confirmed</li>
          <li>Condenser fan motor replacement</li>
          <li>Cabin air filter replacement</li>
          <li>Blend door actuator replacement — dual-zone and single-zone systems</li>
          <li>Evaporator drain clearing and coil cleaning — musty-smell resolution</li>
          <li>HVAC control head and module diagnosis</li>
          <li>Blower motor and resistor replacement</li>
          <li>Heater core replacement — often combined with A/C evaporator work</li>
        </ul>

        <h2>Why Crown Point Drivers Trust R Complete Auto Care for A/C</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <strong>Leak Diagnosis Before Recharge</strong>
            <p>We find the cause of the low charge before adding refrigerant. No repeat failures. No wasted money on recharges that do not last.</p>
          </div>
          <div className="feature-item">
            <strong>Same-Day A/C Service</strong>
            <p>Call by 10am and we will get your A/C diagnosed the same day. Most A/C diagnoses complete within 1–2 hours.</p>
          </div>
          <div className="feature-item">
            <strong>Proper Refrigerant Specification</strong>
            <p>R-134a, R-1234yf, or the specific refrigerant your vehicle requires — charged to manufacturer weight specification.</p>
          </div>
          <div className="feature-item">
            <strong>Extended Warranty Accepted</strong>
            <p>A/C compressors, condensers, and evaporators are commonly covered. We handle the warranty claim on your behalf.</p>
          </div>
        </div>

        <h2>Extended Warranty Coverage for A/C Repair</h2>
        <p>
          A/C compressors, condensers, evaporators, and expansion valves are commonly covered under
          third-party extended warranty plans — especially on comprehensive tiers. R Complete Auto
          Care accepts most major providers including CARS Protection Plus, Endurance, CarShield,
          CARCHEX, AmTrust/National Auto Care, and Zurich. We handle coverage verification,
          documented diagnostic, pre-authorisation, repair, and claim submission. You pay only your
          deductible.
        </p>
        <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — Extended Warranty Accepted</a>

        <h2>Frequently Asked Questions — A/C Not Blowing Cold in Crown Point, IN</h2>
        <FaqAccordion faqs={FAQS} />

        <h2>Related Services</h2>
        <ul className="related-links">
          <li><Link href="/services/ac-heating-repair">A/C &amp; Heating Repair Services →</Link></li>
          <li><Link href="/services/electrical-diagnostics">Electrical Diagnostics →</Link></li>
          <li><Link href="/services/extended-warranty-repair">Extended Warranty Repairs →</Link></li>
          <li><Link href="/extended-warranty-auto-repair-crown-point-in">Warranty Claim Help — Denied or Stuck Claims →</Link></li>
          <li><Link href="/auto-repair-crown-point-in">Auto Repair Crown Point, IN →</Link></li>
        </ul>

        <h2>Car A/C Not Cold in Crown Point? Find the Leak Today.</h2>
        <p>Same-day A/C diagnosis. UV leak detection. Extended warranty accepted.</p>
        <p>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711</a>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
          { "@type": "ListItem", "position": 2, "name": "Car A/C Not Blowing Cold in Crown Point, IN" }
        ]
      }).replace(/</g, "<") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Diagnose A/C Not Blowing Cold",
        "description": "Systematic A/C diagnostic process in Crown Point, IN.",
        "totalTime": "PT1H30M",
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Static pressure check", "text": "System pressure compared to ambient temperature to identify charge state." },
          { "@type": "HowToStep", "position": 2, "name": "Operating pressure analysis", "text": "Manifold gauges on high and low side reveal compressor, expansion, and charge issues." },
          { "@type": "HowToStep", "position": 3, "name": "Electrical verification", "text": "Compressor clutch coil, pressure switches, relays, and blower motor tested." },
          { "@type": "HowToStep", "position": 4, "name": "Visual leak inspection", "text": "Oil traces around fittings, compressor, and condenser identified before dye." },
          { "@type": "HowToStep", "position": 5, "name": "UV dye leak detection", "text": "Dye traces to the leak point under UV light." },
          { "@type": "HowToStep", "position": 6, "name": "Airflow and temperature measurement", "text": "Vent temperature verified against ambient and cycle behavior." },
          { "@type": "HowToStep", "position": 7, "name": "Repair with cause and cost quoted up front", "text": "Leak repaired, system evacuated and recharged to manufacturer weight spec." }
        ]
      }).replace(/</g, "<") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.rcompleteautocare.com/ac-not-blowing-cold-crown-point-in#webpage",
        "url": "https://www.rcompleteautocare.com/ac-not-blowing-cold-crown-point-in",
        "name": "Car A/C Not Blowing Cold in Crown Point, IN",
        "dateModified": "2026-04-22",
        "about": { "@id": "https://www.rcompleteautocare.com/#business" }
      }).replace(/</g, "<") }} />
    </>
  )
}
