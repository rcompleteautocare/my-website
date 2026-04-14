import Link from 'next/link'
import FaqAccordion from '../components/FaqAccordion'
import FaqSchema from '../components/FaqSchema'
export const metadata = {
  title: "Car Won't Start Crown Point IN | Same-Day Diagnostics | R Complete Auto Care",
  description:
    "Car won't start in Crown Point, IN? We run a systematic diagnostic — no guessing, no parts-swapping. Same-day no-start diagnostics. Extended warranty accepted. Call (219) 262-2711.",
  alternates: {
    canonical: 'https://www.rcompleteautocare.com/car-wont-start-crown-point-in',
  },
}

const FAQS = [
  {
    q: "My car won't start in Crown Point — what should I do?",
    a: "Call R Complete Auto Care at (219) 262-2711. If your car won't crank at all, stay with the vehicle — don't attempt to push-start or jump without knowing the cause. We offer same-day diagnostics and can advise you over the phone on whether the vehicle is safe to attempt a jump or needs to be towed.",
  },
  {
    q: 'My car just clicks when I turn the key. What does that mean?',
    a: "One loud click almost always points to the starter solenoid engaging but the motor not turning — typically a failed starter motor. Rapid clicking usually means the battery doesn't have enough charge to hold voltage during the crank attempt.",
  },
  {
    q: "My car cranks normally but won't start. What's causing it?",
    a: 'Crank-no-start means the starting system is working — the problem is in fuel, spark, compression, or timing. Common causes include a failed crankshaft position sensor, failed fuel pump, no spark from a failed ignition module, or a timing chain that has jumped.',
  },
  {
    q: "The security light is on and my car won't start.",
    a: "This is an immobilizer fault — the security system isn't recognizing your key or key fob signal. This can be caused by a failed transponder chip in the key, a faulty body control module, or a wiring issue in the anti-theft circuit. Do not attempt repeated starts — some systems lock out after multiple failed attempts.",
  },
  {
    q: "My car sometimes starts and sometimes doesn't. What is that?",
    a: "Intermittent no-start is one of the most difficult diagnostic challenges because the fault isn't present when we test it. We look for heat-related failures, corroded connections that make intermittent contact, and failing sensors that drop out randomly. A scan of freeze frame data often captures the fault.",
  },
  {
    q: 'Do you accept extended warranties for no-start repairs?',
    a: "Yes — starters, fuel pumps, crankshaft sensors, and many other no-start components are commonly covered under extended warranty plans. Call us with your warranty provider name and we'll verify coverage before you bring the vehicle in.",
  },
  {
    q: 'How long does a no-start diagnostic take in Crown Point?',
    a: "Most no-start diagnostics are completed same-day. Simple cases — a dead battery or failed starter — are identified within an hour. Complex intermittent faults may require additional time. We'll give you a clear timeline when you call.",
  },
]

export default function CarWontStart() {
  return (
    <>
      <FaqSchema faqs={FAQS} /> 
<div className="page-content"></div>
      {/* ── HERO ── */}
      <p className="location-badge">Crown Point, Indiana</p>
      <h1>Car Won&apos;t Start in Crown Point, IN? We Find the Exact Cause.</h1>
      <p className="hero-description">
        No crank, crank-no-start, intermittent no-start — each symptom points to a completely
        different system. At R Complete Auto Care in Crown Point, Indiana we run the full
        diagnostic protocol before replacing a single part. 25+ years of family experience.
        Same-day appointments available. Extended warranty accepted.
      </p>
      <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — Same-Day Diagnostics Available</a>
      <p className="address-line">1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm</p>
      <p className="serving-line">Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake</p>

      {/* ── SYMPTOMS ── */}
      <h2>No-Start Symptoms — Which One Do You Have?</h2>
      <p>Every no-start symptom tells a different diagnostic story. Identifying the exact symptom is step one — it determines which systems we test first and eliminates guesswork from the start.</p>
      <ul>
        <li><strong>Car completely dead — nothing happens when you turn the key</strong> — dead battery, broken cable, blown main fuse, or failed ignition switch</li>
        <li><strong>One loud click, then nothing</strong> — starter solenoid fired but the motor didn&apos;t turn; failed starter motor or seized engine</li>
        <li><strong>Rapid clicking sound</strong> — battery has voltage but not enough amperage to sustain the crank; bad battery or high resistance connection</li>
        <li><strong>Engine cranks slowly and struggles</strong> — weak battery, excessive starter current draw, or resistance in the cranking circuit</li>
        <li><strong>Engine cranks normally but won&apos;t fire</strong> — starting system is fine; no fuel, no spark, no compression, or timing fault</li>
        <li><strong>Car starts then immediately stalls</strong> — idle air control fault, fuel pressure drop-off, or immobilizer cutting fuel</li>
        <li><strong>Security or anti-theft light on, won&apos;t start</strong> — immobilizer not recognizing the key; transponder, BCM, or wiring fault</li>
        <li><strong>Car won&apos;t start in cold weather</strong> — battery voltage drops in cold, thickened oil increases cranking load, gelled fuel in diesel</li>
        <li><strong>Car won&apos;t start after sitting overnight</strong> — parasitic drain killing the battery; something is drawing current when the car is off</li>
        <li><strong>Sometimes starts, sometimes doesn&apos;t — no pattern</strong> — heat-related component failure, intermittent wiring fault, or failing crankshaft sensor</li>
        <li><strong>Car won&apos;t start after running out of gas</strong> — fuel pump may have overheated running dry; air in the fuel system</li>
        <li><strong>Car won&apos;t crank in Park but cranks in Neutral</strong> — failed neutral safety switch or range sensor</li>
      </ul>

      {/* ── WHY DIAGNOSTIC APPROACH MATTERS ── */}
      <h2>Why Our Diagnostic Approach Gets It Right the First Time</h2>
      <p>
        The most common no-start misdiagnosis in Crown Point: a driver goes to the parts store,
        gets a free battery test, buys a $180 battery — and the car still won&apos;t start. A
        countertop battery test measures resting voltage. It does not replicate what the battery
        experiences under actual cranking load. A battery reading 12.6 volts at rest can drop to
        5 volts when the starter engages.
      </p>
      <p>
        We have diagnosed cars where the actual fix was a $30 corroded ground cable. The battery
        was fine. The starter was fine. A voltage drop test across the ground circuit caught the
        fault in 15 minutes. Without that test, the customer would have replaced the battery,
        then the starter, then brought the car to us anyway — after spending $400 unnecessarily.
      </p>
      <p>
        At R Complete Auto Care we run the full systematic diagnostic before recommending any part.
        We find the root cause. We call you with the answer and the cost. You approve the repair.
        We fix it. That is the only sequence we follow.
      </p>
      <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — We Diagnose Before We Replace</a>

      {/* ── PROCESS ── */}
      <h2>Our No-Start Diagnostic Process — Step by Step</h2>
      <ol>
        <li><strong>Classify the no-start type.</strong> No crank vs. crank-no-start vs. intermittent. Each requires a completely different test sequence. We start here — not with a parts swap.</li>
        <li><strong>Battery load test under cranking conditions.</strong> Not a resting voltage check — a true load test that replicates what the battery experiences when the starter engages.</li>
        <li><strong>Cranking circuit voltage drop test.</strong> Measures resistance across every connection — positive cable, negative cable, ground straps, and terminals. A reading over 0.5V on any connection means that connection is failing.</li>
        <li><strong>Starter current draw test.</strong> An inductive amp clamp on the battery cable tells us exactly what the starter is drawing. High draw = mechanical fault in the starter or engine. Low draw on a non-crank = electrical fault before the starter.</li>
        <li><strong>Fuel system verification</strong> (crank-no-start). Fuel pressure at the rail, injector pulse confirmation, and fuel trim data.</li>
        <li><strong>Spark and ignition verification</strong> (crank-no-start). Spark at the plug under cranking, ignition module output, crankshaft sensor signal.</li>
        <li><strong>Compression check</strong> (if indicated). Relative compression test or cylinder leak-down to confirm mechanical integrity.</li>
        <li><strong>Full module scan.</strong> Engine, BCM, PCM, and immobilizer/security modules scanned for stored and active faults, including freeze frame data.</li>
        <li><strong>Root cause confirmed — you approve — we fix.</strong> We call you with exactly what we found, the repair required, and the cost. No work starts until you approve.</li>
      </ol>

      {/* ── SERVICES LIST ── */}
      <h2>No-Start Repair Services We Perform in Crown Point</h2>
      <p>Once the diagnostic confirms the root cause, we perform the repair. Common no-start repairs we complete at R Complete Auto Care:</p>
      <ul>
        <li>Battery replacement — with proper load testing to confirm the battery is actually the cause</li>
        <li>Battery terminal and cable replacement — corroded or damaged cables that cause high resistance</li>
        <li>Ground strap and chassis ground repair — often the hidden cause behind apparent battery failures</li>
        <li>Starter motor replacement — confirmed with current draw testing, not assumed</li>
        <li>Starter solenoid replacement</li>
        <li>Fuel pump replacement — confirmed with fuel pressure testing before and after</li>
        <li>Fuel pump relay and fuse diagnosis and repair</li>
        <li>Crankshaft position sensor replacement</li>
        <li>Camshaft position sensor replacement</li>
        <li>Ignition switch replacement</li>
        <li>Neutral safety switch / transmission range sensor replacement</li>
        <li>Immobilizer and anti-theft system diagnosis and repair</li>
        <li>Parasitic drain diagnosis — identifying what is killing the battery overnight</li>
        <li>Timing chain diagnosis — jumped or broken chains that prevent the engine from firing</li>
      </ul>

      {/* ── WHY CHOOSE US ── */}
      <h2>Why Crown Point Drivers Trust R Complete Auto Care</h2>
      <div className="feature-grid">
        <div className="feature-item">
          <strong>Same-Day Diagnostics</strong>
          <p>Call by 10am and we will do everything possible to get your vehicle diagnosed the same day. Most no-start diagnostics are completed within 1–2 hours.</p>
        </div>
        <div className="feature-item">
          <strong>Diagnose First — Always</strong>
          <p>We never recommend a part without confirming through testing that it is the root cause. No guessing. No parts-swapping at your expense.</p>
        </div>
        <div className="feature-item">
          <strong>Honest, Upfront Pricing</strong>
          <p>You receive a clear estimate before any work begins. No surprises on the invoice. No work without your approval.</p>
        </div>
        <div className="feature-item">
          <strong>25+ Years Family Experience</strong>
          <p>R Complete Auto Care has served Crown Point and Lake County for over 25 years. We have diagnosed no-start conditions on every make and model.</p>
        </div>
      </div>

      {/* ── EXTENDED WARRANTY ── */}
      <h2>Extended Warranty Coverage for No-Start Repairs</h2>
      <p>
        Many no-start repairs are covered under third-party extended warranty plans — including
        starters, fuel pumps, crankshaft position sensors, and immobilizer components. R Complete
        Auto Care accepts most major extended warranty providers including CARS Protection Plus,
        Endurance, CarShield, CARCHEX, AmTrust/National Auto Care, and Zurich.
      </p>
      <p>
        We handle the entire warranty process: we verify your coverage before you bring the vehicle
        in, perform a documented diagnostic that meets warranty adjuster requirements, make the
        pre-authorisation call, complete the repair, and submit all documentation. You pay only
        your deductible.
      </p>
      <p>
        Call us at (219) 262-2711 with your warranty provider name before bringing the vehicle in.
        We will confirm coverage and get you scheduled.
      </p>
      <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711 — Extended Warranty Accepted</a>

      {/* ── FAQ ── */}
      <h2>Frequently Asked Questions — Car Won&apos;t Start in Crown Point, IN</h2>
      <FaqAccordion faqs={FAQS} />

      {/* ── RELATED SERVICES ── */}
      <h2>Related Services</h2>
      <ul className="related-links">
        <li><Link href="/services/electrical-diagnostics">Electrical Diagnostics Crown Point, IN →</Link></li>
        <li><Link href="/services/check-engine-light">Check Engine Light Diagnostics →</Link></li>
        <li><Link href="/services/engine-repair">Engine Repair Crown Point, IN →</Link></li>
        <li><Link href="/check-engine-light-flashing-crown-point">Check Engine Light Flashing Crown Point →</Link></li>
        <li><Link href="/extended-warranty-auto-repair-crown-point-in">Extended Warranty Auto Repair Crown Point →</Link></li>
        <li><Link href="/auto-repair-crown-point-in">Auto Repair Crown Point, IN →</Link></li>
      </ul>

      {/* ── BOTTOM CTA ── */}
      <h2>Car Won&apos;t Start in Crown Point? Call Us Now.</h2>
      <p>Same-day diagnostics available. We find the real cause — not just the most likely part. Extended warranty accepted.</p>
      <p>1305 E Summit St, Crown Point, IN 46307</p>
      <a href="tel:2192622711" className="cta-button">📞 Call (219) 262-2711</a>
    </div>
     </>
  )
}
