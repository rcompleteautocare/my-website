import Link from 'next/link'
import FaqAccordion from '../components/FaqAccordion'

export const metadata = {
  title: 'Car Overheating Crown Point IN | What to Do Right Now | R Complete Auto Care',
  description:
    'Car overheating in Crown Point, IN? Pull over immediately and call us. Same-day overheating diagnostics. We find the root cause before recommending a single repair. (219) 262-2711.',
  alternates: {
    canonical: 'https://www.rcompleteautocare.com/car-overheating-crown-point-in',
  },
}

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['AutoRepair', 'LocalBusiness'],
  name: 'R Complete Auto Care',
  url: 'https://www.rcompleteautocare.com',
  telephone: '(219) 262-2711',
  image: 'https://www.rcompleteautocare.com/logo.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1305 E Summit St',
    addressLocality: 'Crown Point',
    addressRegion: 'IN',
    postalCode: '46307',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 41.4175, longitude: -87.3648 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '14:00' },
  ],
  description: 'Crown Point, Indiana diagnostic-first auto repair shop. Engine overheating diagnostics and cooling system repair. Extended warranty accepted.',
  areaServed: ['Crown Point, IN', 'St. John, IN', 'Schererville, IN', 'Merrillville, IN', 'Cedar Lake, IN'],
}

const FAQS = [
  {
    q: 'My car overheated once and I pulled over fast. Do I need a new engine?',
    a: "Not necessarily. How quickly you pulled over matters enormously. If the gauge just entered the red and you stopped immediately, engine damage may be limited or absent. We run a full post-overheating inspection — cooling system pressure test, combustion leak test, cylinder leak-down test, and oil inspection — to assess the actual condition before recommending any repair.",
  },
  {
    q: 'The temperature gauge went into the red but came back down on its own. Am I okay?',
    a: "No. A gauge that spikes and recovers indicates an intermittent cooling system failure — a stuck thermostat that opened under pressure, a fan that cycled on late, or a partial blockage that temporarily cleared. The underlying cause is still present and will cause another overheating event, likely worse than the first.",
  },
  {
    q: 'My coolant level is fine. Why is my car overheating?',
    a: "Sufficient coolant volume doesn't guarantee proper cooling. Common causes despite normal coolant level include a stuck-closed thermostat preventing circulation, a failed water pump impeller not moving coolant, a failed radiator fan, air pockets in the system preventing flow, or a partially blocked radiator reducing heat exchange capacity.",
  },
  {
    q: 'Can I add water when my car overheats?',
    a: "Never add cold water to a hot engine — thermal shock from cold water hitting hot metal can crack the cylinder head or engine block. If the engine has fully cooled, plain water can serve as a temporary measure to reach a shop, but a proper coolant flush must follow.",
  },
  {
    q: 'Do extended warranties cover overheating repairs?',
    a: "Many cooling system components are covered — water pumps, thermostats, radiators, and in some cases the diagnostic fee. Call us with your warranty provider name and we'll verify coverage before you bring the vehicle in.",
  },
  {
    q: 'How long does an overheating diagnosis take?',
    a: "Initial inspection is typically same-day. The post-overheating inspection — pressure test, combustion leak test, leak-down test — takes 1–3 hours depending on findings. We give you a clear timeline when you call.",
  },
  {
    q: 'My car overheated and now it won\'t start. What happened?',
    a: "Severe overheating can cause a head gasket to fail, a cylinder head to warp, or in extreme cases engine seizure. We run the full post-overheating inspection to determine the extent of damage and give you an honest assessment — repair vs. replacement — before you spend anything.",
  },
]

export default function CarOverheating() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── HERO ── */}
      <p className="location-badge">Crown Point, Indiana</p>
      <h1>Car Overheating in Crown Point, IN — What to Do Right Now</h1>
      <p className="hero-description">
        Engine overheating turns a $400 cooling system repair into a $4,000 engine replacement
        faster than almost any other problem. If your temperature gauge is moving toward the red —
        pull over immediately, turn the engine off, and call R Complete Auto Care. We offer
        same-day overheating diagnostics in Crown Point, Indiana. Extended warranty accepted.
        Do not keep driving.
      </p>
      <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — Pull Over First, Then Call</a>
      <p className="address-line">1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
      <p className="serving-line">Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake</p>

      {/* ── DO THIS FIRST ── */}
      <h2>If Your Car Is Overheating Right Now — Do This First</h2>
      <ol>
        <li><strong>Pull over safely and immediately.</strong> Every additional minute at elevated temperature increases the risk of permanent engine damage — warped heads, blown gaskets, seized pistons.</li>
        <li><strong>Turn the engine completely off.</strong> Do not idle hoping it will cool down. Turn the ignition off.</li>
        <li><strong>Do not open the radiator cap.</strong> The cooling system is pressurised when hot. Opening the cap can cause severe steam burns.</li>
        <li><strong>Do not add cold water to a hot engine.</strong> Thermal shock from cold water contacting hot metal can crack the cylinder head or engine block — turning a manageable repair into an engine replacement.</li>
        <li><strong>Call R Complete Auto Care at (219) 262-2711.</strong> We will help you assess whether the vehicle can be driven in once fully cooled or needs to be towed.</li>
      </ol>

      {/* ── SYMPTOMS ── */}
      <h2>Overheating Symptoms Crown Point Drivers Report</h2>
      <p>Overheating presents in different ways depending on the cause and severity. These are the most common symptoms we hear from Crown Point drivers:</p>
      <ul>
        <li><strong>Temperature gauge rising into the red zone</strong> — active overheating; pull over immediately</li>
        <li><strong>Temperature gauge spiking then returning to normal</strong> — intermittent cooling failure; do not ignore it</li>
        <li><strong>Steam coming from under the hood</strong> — coolant boiling over; do not open the hood until the engine cools</li>
        <li><strong>Sweet smell inside or outside the vehicle</strong> — coolant leak; the glycol in antifreeze has a distinctive sweet odor</li>
        <li><strong>Heater blowing cold air despite engine being warm</strong> — low coolant, air pocket in system, or stuck-open thermostat</li>
        <li><strong>Coolant warning light illuminated</strong> — low coolant level detected by sensor</li>
        <li><strong>Loss of power as engine temperature rises</strong> — ECM entering limp mode to protect the engine from overheating damage</li>
        <li><strong>Engine knocking or ticking when hot</strong> — oil thinning from heat or localized hot spots causing pre-ignition</li>
        <li><strong>White smoke from the exhaust</strong> — coolant entering the combustion chamber; head gasket failure likely</li>
        <li><strong>Oil appearing milky or frothy on the dipstick</strong> — coolant mixing with engine oil; head gasket breach</li>
        <li><strong>Car overheats only in traffic or at idle</strong> — failed electric radiator fan; cooling is adequate at speed where airflow helps</li>
        <li><strong>Car overheats only at highway speed</strong> — failed mechanical fan clutch or partially blocked radiator</li>
      </ul>

      {/* ── WHY DIAGNOSTIC APPROACH ── */}
      <h2>Why We Find the Root Cause — Not Just the Failed Part</h2>
      <p>
        This is where most shops fail the overheating customer. They replace the most visibly
        failed component — the water pump or the thermostat — and return the car. It comes back
        overheating within weeks because the part that failed was a consequence of the original
        problem, not the original problem itself.
      </p>
      <p>
        Example: A water pump fails because a stuck thermostat caused a previous overheating event
        that damaged the pump seal under extreme heat. Replace the pump without fixing the
        thermostat and the new pump faces identical conditions and fails again. At R Complete Auto
        Care we trace the entire causal chain before recommending any repair.
      </p>
      <p>
        We also run a complete post-overheating assessment before recommending cooling system
        repairs. If the engine has already sustained damage — head gasket, warped head, cracked
        block — we find it before you spend money on cooling system parts that won&apos;t solve
        the underlying problem. Honest assessment first. Repair recommendation second.
      </p>
      <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — Same-Day Overheating Diagnostics</a>

      {/* ── CAUSES ── */}
      <h2>Common Overheating Causes We Find in Crown Point</h2>
      <ul>
        <li><strong>Failed water pump</strong> — Impeller wear, seal failure, or bearing failure stops coolant circulation through the engine.</li>
        <li><strong>Stuck-closed thermostat</strong> — Prevents coolant from reaching the radiator. The most common single cause of engine overheating.</li>
        <li><strong>Radiator blockage or damage</strong> — Internally blocked passages from scale buildup or external fin damage reduce heat exchange.</li>
        <li><strong>Failed electric radiator fan</strong> — Electric fan failure causes overheating at idle and low speeds where airflow is insufficient.</li>
        <li><strong>Failed mechanical fan clutch</strong> — Fan clutch slippage causes overheating at highway speeds despite normal idle temperature.</li>
        <li><strong>Blown head gasket</strong> — Combustion gases enter the cooling system, pressurize it, and force coolant out through the overflow.</li>
        <li><strong>External coolant leak</strong> — Hoses, water pump seal, radiator, heater core, or freeze plugs leaking and reducing coolant volume over time.</li>
        <li><strong>Air pocket in cooling system</strong> — Improper coolant fill or bleed procedure traps air, creating a hot spot in the system.</li>
        <li><strong>Cracked cylinder head</strong> — Result of a previous overheating event; causes coolant loss into combustion or oil system.</li>
        <li><strong>Failed coolant temperature sensor</strong> — Inaccurate temperature reading can prevent the cooling fan from activating at the right temperature.</li>
      </ul>

      {/* ── POST-OVERHEATING INSPECTION ── */}
      <h2>Our Post-Overheating Inspection Process</h2>
      <p>Before recommending any repair after an overheating event, we run a complete damage assessment:</p>
      <ol>
        <li><strong>Cooling system pressure test.</strong> Pressurizes the cooling system to spec and holds it — detects external leaks at hoses, pump, radiator, and gasket surfaces.</li>
        <li><strong>Combustion leak test (block test).</strong> A chemical test that detects combustion gases in the coolant — the definitive indicator of head gasket failure or a cracked head.</li>
        <li><strong>Cylinder leak-down test.</strong> Pressurizes each cylinder individually and measures how much pressure escapes — identifies which cylinder has compromised sealing and where the leak is going.</li>
        <li><strong>Oil condition inspection.</strong> Milky, frothy, or chocolate-colored oil on the dipstick indicates coolant contamination of the oil — a sign of head gasket failure or a cracked block.</li>
        <li><strong>Visual inspection of coolant.</strong> Oil in the coolant reservoir confirms the same breach from the other direction.</li>
      </ol>
      <p>We show you the test results directly — not just a verbal summary. You understand exactly what was found before we discuss repair options.</p>

      {/* ── SERVICES LIST ── */}
      <h2>Overheating and Cooling System Repairs We Perform in Crown Point</h2>
      <ul>
        <li>Water pump replacement — with root cause identification before installation</li>
        <li>Thermostat replacement — housing and gasket included</li>
        <li>Radiator replacement or repair</li>
        <li>Electric radiator fan motor and fan assembly replacement</li>
        <li>Mechanical fan clutch replacement</li>
        <li>Coolant hose replacement — upper, lower, and bypass hoses</li>
        <li>Cooling system flush and refill — proper bleed procedure to eliminate air pockets</li>
        <li>Head gasket replacement — after combustion leak test confirmation</li>
        <li>Cylinder head resurfacing or replacement — after leak-down and combustion leak testing</li>
        <li>Freeze plug replacement</li>
        <li>Heater core replacement</li>
        <li>Coolant temperature sensor replacement</li>
      </ul>

      {/* ── WHY CHOOSE US ── */}
      <h2>Why Crown Point Drivers Trust R Complete Auto Care</h2>
      <div className="feature-grid">
        <div className="feature-item">
          <strong>Same-Day Diagnostics Available</strong>
          <p>Call us when you pull over. We&apos;ll schedule you immediately and advise on towing versus driving in once cooled.</p>
        </div>
        <div className="feature-item">
          <strong>Root Cause First</strong>
          <p>We run the full post-overheating assessment before recommending any repair. We fix what caused the overheating — not just what failed because of it.</p>
        </div>
        <div className="feature-item">
          <strong>Honest Repair vs. Replace Guidance</strong>
          <p>If the engine has sustained damage we give you a straight answer on repair cost versus vehicle value. No pressure either way.</p>
        </div>
        <div className="feature-item">
          <strong>Extended Warranty Accepted</strong>
          <p>Water pumps, thermostats, radiators, and many cooling components are commonly covered. Call us to verify your plan.</p>
        </div>
      </div>

      {/* ── EXTENDED WARRANTY ── */}
      <h2>Extended Warranty Coverage for Overheating and Cooling System Repairs</h2>
      <p>
        Many cooling system repairs are covered under third-party extended warranty plans. Water
        pumps, thermostats, radiators, and cooling fans are commonly listed components under most
        powertrain and comprehensive coverage plans. Head gasket repairs may also be covered
        depending on your plan tier.
      </p>
      <p>
        R Complete Auto Care accepts most major extended warranty providers including CARS
        Protection Plus, Endurance, CarShield, CARCHEX, AmTrust/National Auto Care, and Zurich.
        We handle the complete warranty process: coverage verification, documented diagnostic and
        post-overheating assessment, pre-authorisation call, repair, and claim submission. You
        pay only your deductible.
      </p>
      <p>Call us at (219) 262-2711 with your warranty provider name before bringing the vehicle in. We will verify coverage and get you scheduled.</p>
      <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — Extended Warranty Accepted</a>

      {/* ── FAQ ── */}
      <h2>Frequently Asked Questions — Car Overheating in Crown Point, IN</h2>
      <FaqAccordion faqs={FAQS} />

      {/* ── RELATED ── */}
      <h2>Related Services</h2>
      <ul className="related-links">
        <li><Link href="/services/engine-repair">Engine Repair Crown Point, IN →</Link></li>
        <li><Link href="/services/check-engine-light">Check Engine Light Diagnostics →</Link></li>
        <li><Link href="/check-engine-light-flashing-crown-point">Check Engine Light Flashing Crown Point →</Link></li>
        <li><Link href="/extended-warranty-auto-repair-crown-point-in">Extended Warranty Auto Repair →</Link></li>
        <li><Link href="/car-wont-start-crown-point-in">Car Won&apos;t Start Crown Point →</Link></li>
        <li><Link href="/auto-repair-crown-point-in">Auto Repair Crown Point, IN →</Link></li>
      </ul>

      {/* ── BOTTOM CTA ── */}
      <h2>Car Overheating in Crown Point? Pull Over and Call Us.</h2>
      <p>Same-day diagnostics. We find the root cause before recommending a single repair. Extended warranty accepted.</p>
      <p>1305 E Summit St, Crown Point, IN 46307</p>
      <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711</a>
    </>
  )
}
