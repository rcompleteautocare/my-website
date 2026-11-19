// Content for /repair-guides and /repair-guides/[guide].
//
// Each guide carries its own full set of sections (background, symptoms,
// causes, diagnosis, driving guidance, repair options, prevention, FAQs), so
// the pages are no longer one shared template with a few words swapped.
//
// EDITORIAL RULES for this file:
//   - General, verifiable repair knowledge only. No prices, no repair-time
//     promises, no claims about how many of these jobs the shop has done.
//   - Where a manufacturer has published bulletins, recalls or extended
//     coverage, say so in general terms and send the reader to a dealer or
//     NHTSA.gov to check by VIN. Do not quote bulletin numbers, model-year
//     cut-offs or coverage limits here; they change and must be checked per VIN.

export type GuideFaq = { q: string; a: string };

export type RepairGuide = {
  /** Page H1 and card title. */
  title: string;
  vehicle: string;
  system: string;
  /** Related service page. */
  service: string;
  serviceLabel: string;
  /** One line shown on the /repair-guides hub card. */
  summary: string;
  /** TL;DR under the H1 (marked .speakable). */
  intro: string;
  /** How the system works and why this problem matters. */
  background: string[];
  symptoms: { sign: string; detail: string }[];
  causes: { cause: string; detail: string }[];
  diagnosis: { step: string; detail: string }[];
  /** "Can I keep driving?" paragraphs. */
  driving: string[];
  repairOptions: { option: string; detail: string }[];
  prevention: string[];
  faqs: GuideFaq[];
};

export const repairGuides = {
  "honda-cr-v-turbocharger-problems": {
    title: "Honda CR-V Turbocharger Problems",
    vehicle: "Honda CR-V",
    system: "turbocharger",
    service: "/services/engine-repair",
    serviceLabel: "Engine repair in Crown Point",
    summary: "Low power, a siren-like whine or an underboost code on the 1.5L turbo CR-V: boost leaks, wastegate faults and oil problems, and how they are told apart.",
    intro: "Most turbocharger complaints on a Honda CR-V turn out to be a boost leak, a wastegate control fault or an oil problem rather than a failed turbo. The turbocharger itself should be condemned only after the air path, the controls and the oil supply have been tested.",
    background: [
      "Most 2017 and newer CR-Vs use a 1.5-liter turbocharged four-cylinder. The turbocharger uses exhaust gas to spin a turbine at well over 100,000 rpm, which drives a compressor that packs more air into the engine. That pressurized air passes through an intercooler and a set of hoses before it reaches the intake, and an electronically controlled wastegate limits how much boost the turbo makes.",
      "Two things follow from that design. First, any leak between the compressor and the engine lets boost escape, so a loose clamp can feel exactly like a weak turbo. Second, the turbo's shaft rides on a film of engine oil, so oil level and oil quality matter more than on a non-turbo engine. This engine has also been the subject of widely reported fuel-in-oil (oil dilution) concerns, mostly with short trips in cold weather. Honda addressed that with software updates and extended coverage on certain model years, and a Honda dealer can check by VIN whether your vehicle is included.",
    ],
    symptoms: [
      { sign: "Noticeable loss of power, especially merging or climbing", detail: "The engine is not receiving the boost it is asking for. Often stored as an underboost code such as P0299." },
      { sign: "A whine or siren-like sound that rises with engine speed", detail: "Can be a boost leak whistling under pressure, or wear in the turbocharger's bearings. The two are separated by testing, not by ear alone." },
      { sign: "A hissing sound under acceleration", detail: "Typical of a split hose or loose connection in the pressurized intake tract." },
      { sign: "Blue-gray smoke from the exhaust", detail: "Oil is being burned. Worn turbo seals are one possible source, but not the only one." },
      { sign: "Oil level that rises, or oil that smells of fuel", detail: "Suggests fuel is diluting the oil, which thins it and reduces protection for the turbo bearings." },
      { sign: "Check engine light with reduced power", detail: "The engine computer may limit boost to protect the engine when it sees a fault." },
    ],
    causes: [
      { cause: "Boost leaks", detail: "Loose clamps, split intercooler hoses, a leaking intercooler or a poorly seated charge pipe. The most common and usually the simplest fix." },
      { cause: "Wastegate control faults", detail: "An electronic wastegate actuator that sticks, loses calibration or fails electrically will hold boost too low or too high." },
      { cause: "Oil supply and oil quality", detail: "Low oil, overdue oil, fuel-diluted oil or a restricted oil feed line starves the turbo bearings and causes rapid wear." },
      { cause: "Sensor and data errors", detail: "A boost pressure or airflow sensor that reads wrong can make a healthy turbo look faulty to the engine computer." },
      { cause: "Exhaust leaks ahead of the turbo", detail: "Exhaust that escapes before the turbine is energy the turbo never receives." },
      { cause: "Internal turbocharger wear", detail: "Worn bearings, shaft play or a damaged compressor wheel. Usually the result of one of the causes above, which is why the cause has to be found too." },
    ],
    diagnosis: [
      { step: "Scan and record", detail: "Read codes from all modules and save the freeze-frame data showing the conditions when the fault set." },
      { step: "Compare requested and actual boost", detail: "On a road test, live data shows whether the turbo is failing to make boost, making it late, or overshooting." },
      { step: "Test the intake tract for leaks", detail: "The pressurized side is smoke-tested or pressure-tested from the turbo outlet to the throttle body." },
      { step: "Check wastegate operation", detail: "The actuator is commanded with a scan tool and its movement and position feedback are verified." },
      { step: "Inspect the oil", detail: "Level, condition and any fuel smell are checked, along with service history." },
      { step: "Inspect the turbocharger", detail: "Only then is the turbo checked directly for shaft play, wheel damage and oil in the intake piping. A light oil film in the piping is normal; pooled oil is not." },
    ],
    driving: [
      "Mild power loss with no unusual noise or smoke usually allows a gentle drive to a shop. Keep engine speed low and avoid hard acceleration.",
      "Stop driving and have the vehicle towed if you see heavy smoke, hear grinding or a loud siren sound, get an oil pressure warning, or find the oil level changing quickly. A turbocharger that is coming apart can send debris and oil into the engine and damage the catalytic converter.",
    ],
    repairOptions: [
      { option: "Repair the leak", detail: "Replacing or reseating the failed hose, clamp or intercooler restores boost without touching the turbo." },
      { option: "Correct the control fault", detail: "Depending on the design, a wastegate actuator or sensor may be replaced or recalibrated on its own, or may be serviced only as part of the turbocharger." },
      { option: "Software update", detail: "Where the manufacturer has released updated engine software, it is applied before parts are replaced." },
      { option: "Replace the turbocharger", detail: "When internal wear is confirmed. The oil feed and return lines are inspected or replaced and the oil is changed, and the reason the original failed is corrected so the new unit is not damaged the same way." },
    ],
    prevention: [
      "Change the oil on time with the viscosity Honda specifies, and do not stretch intervals on a turbocharged engine.",
      "Check the oil level monthly. A level that climbs, or oil that smells of gasoline, is worth reporting.",
      "Take a longer drive now and then if most of your trips are short, so the engine reaches full temperature.",
      "Let the engine idle briefly after hard driving or a long highway climb before shutting it off.",
      "Replace the air filter on schedule. A dirty or damaged filter lets abrasive dust reach the compressor.",
    ],
    faqs: [
      { q: "Does an underboost code mean my CR-V needs a new turbocharger?", a: "No. An underboost code only says the engine did not reach the boost it requested. Leaking hoses, a wastegate fault and sensor errors all set the same code, and they are checked before the turbocharger itself." },
      { q: "Is a whistling sound from a turbo engine normal?", a: "A faint whistle under acceleration is normal for a turbocharged engine. A sound that is new, louder than before, or siren-like and rising with engine speed should be checked." },
      { q: "Can oil dilution damage the turbocharger?", a: "It can. Fuel thins the oil, and the turbocharger's bearings depend on a full-strength oil film. Keeping up with oil changes and reporting a rising oil level or fuel smell reduces that risk." },
    ],
  },

  "ford-escape-coolant-intrusion": {
    title: "Ford Escape Coolant Intrusion",
    vehicle: "Ford Escape",
    system: "engine cooling and sealing",
    service: "/services/engine-repair",
    serviceLabel: "Engine repair in Crown Point",
    summary: "Coolant that disappears with no visible leak, plus a rough cold start: how internal coolant intrusion on EcoBoost engines is confirmed and what the repair choices are.",
    intro: "Coolant intrusion means coolant is getting into a cylinder instead of staying in the cooling system. On a Ford Escape it has to be separated from an ordinary external leak with a pressure test and a look inside the cylinders, because the two lead to very different repairs.",
    background: [
      "Many 2013 and newer Escapes use turbocharged EcoBoost engines. In a healthy engine, coolant circulates through passages in the block and cylinder head and never enters the combustion chamber. When the seal between a coolant passage and a cylinder fails, a small amount of coolant seeps into that cylinder, usually while the hot engine sits after being shut off.",
      "Ford has published technical service bulletins describing coolant intrusion into the cylinders on certain EcoBoost engines, and for some of those engines the documented repair involves replacing the engine block assembly rather than a head gasket alone. Some model years were also subject to safety recalls related to coolant loss and overheating. Bulletins, recalls and any extended coverage apply by engine and build date, so the first step is to have the VIN checked by a Ford dealer and at NHTSA.gov.",
    ],
    symptoms: [
      { sign: "Coolant level drops with no puddle or visible leak", detail: "The classic sign. Coolant is leaving the system somewhere you cannot see." },
      { sign: "Rough running or a misfire for the first seconds after a cold start", detail: "Coolant that seeped into a cylinder overnight fouls combustion until it is cleared." },
      { sign: "White exhaust with a sweet smell", detail: "Coolant being burned off, most noticeable at start-up." },
      { sign: "Check engine light with a misfire code", detail: "Often a single-cylinder misfire code in the P0300 series, pointing at the affected cylinder." },
      { sign: "Low coolant warning or rising temperature gauge", detail: "The system has lost enough coolant to affect cooling. This needs attention immediately." },
    ],
    causes: [
      { cause: "External leaks", detail: "Hoses, the water pump, the coolant reservoir or its cap, turbocharger coolant lines and the radiator. These are ruled in or out first because they are far more common and far less serious." },
      { cause: "Sealing failure between a coolant passage and a cylinder", detail: "The head gasket or the block surface it seals against no longer keeps coolant out of the cylinder. This is the failure the manufacturer bulletins describe." },
      { cause: "Cracked cylinder head or block", detail: "Less common, and usually follows an overheating event." },
      { cause: "Damage from overheating", detail: "Running the engine low on coolant can warp sealing surfaces and turn a small problem into a large one." },
    ],
    diagnosis: [
      { step: "Check for open recalls and bulletins", detail: "The VIN is checked so that any manufacturer coverage is identified before money is spent." },
      { step: "Pressure-test the cooling system", detail: "The system is pressurized cold and left to hold. An external leak shows itself; a pressure drop with nothing visible points inside the engine." },
      { step: "Inspect the spark plugs", detail: "A plug from a cylinder taking in coolant often looks noticeably cleaner or wetter than the others." },
      { step: "Look inside the cylinders", detail: "With the system still under pressure, a borescope through the spark plug holes can show coolant on a piston or a piston crown that has been steam-cleaned." },
      { step: "Test the coolant for combustion gas", detail: "A chemical test detects exhaust gas entering the cooling system." },
      { step: "Review misfire data", detail: "Per-cylinder misfire counts on a cold start are compared with the physical findings." },
    ],
    driving: [
      "Do not drive with a low coolant warning or a climbing temperature gauge. Overheating damages the engine quickly and can turn a repairable problem into an engine replacement.",
      "If the only symptom is slow coolant loss, top up with the correct coolant, keep trips short and have it tested promptly. Coolant in a cylinder fouls the spark plug and can damage the catalytic converter. In larger amounts it can cause hydrolock, where liquid in the cylinder stops the piston and can bend a connecting rod.",
    ],
    repairOptions: [
      { option: "External leak repair", detail: "If testing finds a hose, pump, cap or reservoir at fault, that is the whole repair." },
      { option: "Head gasket replacement", detail: "Appropriate when testing shows the gasket failed and the head and block sealing surfaces measure within specification." },
      { option: "Engine block assembly replacement", detail: "The repair called for by the manufacturer's service information on certain engines, where the block design is the root of the problem." },
      { option: "Replacement engine", detail: "A remanufactured or used engine can be the practical choice when damage is extensive. The right option depends on the vehicle's condition and value." },
    ],
    prevention: [
      "Check the coolant level in the reservoir once a month with the engine cold.",
      "Use only the coolant type Ford specifies and do not mix types.",
      "Treat a low coolant warning or a temperature gauge above normal as a reason to stop, not something to watch.",
      "Keep a note of every coolant top-off with the date and mileage. That record helps diagnosis and supports a warranty or coverage claim.",
    ],
    faqs: [
      { q: "My Escape is losing coolant but I see no leak. Is it coolant intrusion?", a: "Not necessarily. Small external leaks can evaporate on hot parts before they drip. A cooling-system pressure test and a cylinder inspection are what separate an external leak from coolant entering a cylinder." },
      { q: "Will a head gasket fix coolant intrusion on an EcoBoost engine?", a: "Sometimes. On certain engines the manufacturer's documented repair is a replacement block assembly, because a new gasket on the same block may not hold. The right repair depends on which engine you have and what the inspection finds." },
      { q: "Is coolant intrusion covered by a recall or warranty?", a: "It depends on the engine, model year and build date. Have a Ford dealer check the VIN for recalls, bulletins and any extended coverage, and check NHTSA.gov. If you have an extended service contract, a documented diagnosis is the starting point for a claim." },
    ],
  },

  "chevrolet-equinox-timing-chain-problems": {
    title: "Chevrolet Equinox Timing Chain Problems",
    vehicle: "Chevrolet Equinox",
    system: "engine timing",
    service: "/services/engine-repair",
    serviceLabel: "Engine repair in Crown Point",
    summary: "Start-up rattle and P0016 or P0017 codes on the Equinox: why low oil is usually behind timing chain wear and how the chain is checked before it is replaced.",
    intro: "A rattle at start-up and a cam-to-crank correlation code on a Chevrolet Equinox often point to a worn timing chain, but a clogged oil control solenoid or low oil can set the same codes. Oil level is checked first, and the chain is condemned only after the control side has been tested.",
    background: [
      "The timing chain keeps the crankshaft and camshafts turning in step so the valves open at the right moment. It is kept tight by a tensioner that relies on engine oil pressure and runs along plastic-faced guides. A chain does not really stretch. Its pins and links wear, which makes it longer, and a longer chain lets valve timing drift.",
      "The 2.4-liter four-cylinder used in many 2010 to 2017 Equinox models is the engine most often associated with this problem. That engine is also known for using oil between changes, and GM provided special coverage for oil consumption on certain model years. The two issues are connected: an engine that runs low on oil cannot keep the tensioner supplied or the chain lubricated, so the chain wears much faster. This is an interference engine, which means a chain that jumps or breaks can let the valves hit the pistons.",
    ],
    symptoms: [
      { sign: "Rattle for a few seconds on a cold start", detail: "The tensioner has not built oil pressure yet and a worn chain slaps against its guides." },
      { sign: "Check engine light with P0016 or P0017", detail: "These generic codes mean the camshaft and crankshaft positions no longer agree. P0011 and P0014, which concern cam timing control, often appear with them." },
      { sign: "Rough idle, hesitation or reduced power", detail: "Valve timing that has drifted hurts combustion." },
      { sign: "Hard starting or a long crank", detail: "Timing may be far enough off to affect starting." },
      { sign: "Oil level low between oil changes", detail: "Not a chain symptom in itself, but the condition that most often leads to chain wear on this engine." },
    ],
    causes: [
      { cause: "Running low on oil", detail: "Oil consumption between changes leaves the tensioner and chain short of lubrication. The most important factor on this engine." },
      { cause: "Overdue or degraded oil", detail: "Sludge and varnish restrict the small passages that feed the tensioner and cam actuators." },
      { cause: "Worn chain, guides or tensioner", detail: "The parts themselves wear out. Broken guide pieces can end up in the oil pan." },
      { cause: "Camshaft actuator or oil control solenoid faults", detail: "A sticking solenoid or a clogged screen changes cam timing and sets the same correlation codes as a worn chain." },
      { cause: "Incorrect oil", detail: "Oil that does not meet the specification for the engine can affect how the tensioner and actuators work." },
    ],
    diagnosis: [
      { step: "Check oil level and condition", detail: "Done before anything else. A low level explains a lot and changes the repair plan." },
      { step: "Scan for codes and freeze-frame data", detail: "Which codes are stored, and under what conditions they set, narrows the search." },
      { step: "Review cam and crank correlation in live data", detail: "The scan tool shows how far actual cam position is from where the computer commands it." },
      { step: "Test the oil control solenoids", detail: "The solenoids and their screens are inspected and tested, since they are quicker and cheaper to deal with than the chain." },
      { step: "Verify the noise", detail: "The cold-start rattle is confirmed and located with a stethoscope." },
      { step: "Inspect the chain directly", detail: "If the evidence points to the chain, tensioner extension and guide condition are checked through the access available before the full job is quoted." },
    ],
    driving: [
      "A correlation code together with a start-up rattle means the chain may already be loose. Keep driving to a minimum and get it tested soon.",
      "If the engine runs very rough, will not start, or the rattle becomes constant, stop and have it towed. On this engine a chain that jumps teeth or breaks can bend valves, and at that point the repair is no longer just a timing chain.",
    ],
    repairOptions: [
      { option: "Oil service and solenoid repair", detail: "When the fault is on the control side, cleaning or replacing the oil control solenoids and restoring the correct oil level can resolve the codes." },
      { option: "Complete timing set", detail: "When the chain is worn, the chain, guides, tensioner and sprockets are replaced together. Replacing only the chain leaves worn parts to damage the new one." },
      { option: "Address the oil consumption", detail: "If the engine uses oil, that has to be dealt with or managed, or the new chain will wear the same way." },
      { option: "Engine repair or replacement", detail: "Needed when a jumped chain has damaged valves or pistons. The choice depends on the extent of the damage and the vehicle's value." },
    ],
    prevention: [
      "Check the oil level every few fill-ups, not just at oil changes. Top up as soon as it is below full.",
      "Change the oil on time with a dexos-approved oil of the viscosity GM specifies.",
      "Do not rely only on the oil life monitor if your engine uses oil. It estimates oil condition, not oil level.",
      "Have a new start-up rattle checked early. Caught early, the repair is a timing set rather than an engine.",
    ],
    faqs: [
      { q: "Does a P0016 code always mean the timing chain is bad?", a: "No. P0016 means the crankshaft and camshaft signals do not line up. A worn chain is one cause, but a sticking oil control solenoid, low oil level and sensor faults can set it too. Testing separates them." },
      { q: "How long can I drive my Equinox with a timing chain rattle?", a: "There is no safe number. A loose chain can jump at any time, and on this engine that can bend valves. Limit driving and have it tested as soon as you can." },
      { q: "Why does low oil wear out a timing chain?", a: "The tensioner needs oil pressure to keep the chain tight, and the chain needs oil for lubrication. When the level is low, the chain runs slack and under-lubricated, and wear accelerates." },
    ],
  },

  "nissan-rogue-cvt-transmission-problems": {
    title: "Nissan Rogue CVT Transmission Problems",
    vehicle: "Nissan Rogue",
    system: "continuously variable transmission",
    service: "/services/transmission-repair",
    serviceLabel: "Transmission repair in Crown Point",
    summary: "Judder, whine or a sudden loss of power on the Rogue's CVT: what is normal for this transmission, what is not, and what is checked before a replacement is quoted.",
    intro: "A Nissan Rogue's continuously variable transmission behaves differently from a conventional automatic, so some things that feel odd are normal. Judder, whining, delayed engagement and overheating warnings are not. Software level, fluid condition and stored data are checked before anyone recommends replacing the transmission.",
    background: [
      "Instead of fixed gears, a CVT uses a steel belt running between two pulleys that change diameter. That lets the engine hold a steady speed while the vehicle accelerates, which is why a healthy CVT can feel like a rubber band and why engine rpm does not rise and fall the way it does with a geared automatic. That part is normal.",
      "The design depends on precise hydraulic pressure and on a fluid made specifically for it. Nissan CVTs use Nissan-specified CVT fluid, not ordinary automatic transmission fluid, and the two are not interchangeable. Heat is the main enemy: when the fluid gets too hot the transmission control module can limit power to protect the unit. Nissan has released control-module software updates for judder concerns and extended CVT warranty coverage on certain model years, so a Nissan dealer should check the VIN before any major repair.",
    ],
    symptoms: [
      { sign: "Judder or shudder at low speed under light throttle", detail: "Feels like driving over rumble strips. The most commonly reported CVT complaint." },
      { sign: "Whine or drone that grows with road speed", detail: "Some CVT noise is normal. A sound that is new or getting louder can indicate bearing or belt and pulley wear." },
      { sign: "Delay when shifting into Drive or Reverse", detail: "The transmission is slow to build the pressure it needs to engage." },
      { sign: "Engine revs climb without matching acceleration", detail: "The belt may be slipping on the pulleys, which causes damage quickly." },
      { sign: "Sudden loss of power after highway or uphill driving", detail: "Often the fail-safe mode triggered by high fluid temperature. Power usually returns after the transmission cools." },
      { sign: "Check engine light or transmission warning", detail: "The control module has stored a fault that a scan can read." },
    ],
    causes: [
      { cause: "Fluid condition or the wrong fluid", detail: "Worn fluid, or anything other than the specified CVT fluid, changes how the belt grips the pulleys." },
      { cause: "Overheating", detail: "A restricted cooler, heavy loads, long grades or towing push fluid temperature beyond what the unit tolerates." },
      { cause: "Outdated control software", detail: "Updated transmission software has resolved judder on some vehicles without mechanical repair." },
      { cause: "Valve body and pressure control faults", detail: "Solenoids and valves that no longer control pressure accurately cause engagement and ratio problems." },
      { cause: "Belt and pulley wear", detail: "Scored pulleys or a worn belt cause slip and noise, and generally cannot be corrected with a fluid service." },
      { cause: "Sensor or wiring faults", detail: "Speed and pressure sensor errors can make the transmission behave badly even when it is mechanically sound." },
    ],
    diagnosis: [
      { step: "Scan the transmission control module", detail: "Codes are read and the installed software version is compared with the latest release." },
      { step: "Check for extended coverage and bulletins", detail: "The VIN is checked so that manufacturer coverage is used where it applies." },
      { step: "Review stored fluid data", detail: "The module tracks fluid temperature history and fluid deterioration, which shows how hard the transmission has been working." },
      { step: "Inspect fluid level and condition", detail: "Done by the manufacturer's procedure, at the specified temperature. Burnt fluid or debris changes the plan." },
      { step: "Road test with live data", detail: "Pulley ratio, line pressure and temperature are watched while the symptom is reproduced, when it is safe to do so." },
      { step: "Check cooling", detail: "The transmission cooler and its airflow are inspected if overheating is part of the complaint." },
    ],
    driving: [
      "If the vehicle suddenly loses power or shows a transmission temperature warning, pull over safely and let it cool. Do not keep pushing it. Repeated overheating shortens the life of the transmission.",
      "Have it towed if it will not engage reliably, slips badly, or cannot keep up with traffic. Avoid towing a trailer or carrying heavy loads until the cause is found.",
    ],
    repairOptions: [
      { option: "Software update", detail: "Applied first where a newer calibration exists, since it costs the least and sometimes resolves the complaint." },
      { option: "Fluid service with the correct fluid", detail: "Worthwhile when the fluid is worn. It will not reverse mechanical wear, so it is not sold as a cure for a slipping belt." },
      { option: "Valve body or cooler repair", detail: "When testing isolates the fault to pressure control or to cooling." },
      { option: "Transmission replacement", detail: "CVTs are generally replaced as an assembly, usually with a remanufactured unit, rather than rebuilt in the shop. Manufacturer coverage is checked before this is quoted." },
    ],
    prevention: [
      "Have the CVT fluid serviced at the interval in Nissan's maintenance schedule, and sooner under severe use such as towing, hills or heavy stop-and-go.",
      "Use only the Nissan-specified CVT fluid.",
      "Stay within the vehicle's towing and load ratings and avoid hard launches.",
      "Keep the engine cooling system in good order, since the two systems share heat.",
      "Report judder or a new noise early. Software or fluid can only help before parts are damaged.",
    ],
    faqs: [
      { q: "Is it normal for my Rogue's engine speed to stay high while accelerating?", a: "Yes. A CVT holds the engine at an efficient speed while the vehicle speed catches up, so you do not feel distinct shifts. Rpm that climbs with no increase in road speed is different, and that should be checked." },
      { q: "Will a fluid change fix CVT judder?", a: "It can help if worn fluid is the cause, and a software update sometimes resolves judder as well. Neither will repair a worn belt or scored pulleys. The diagnosis determines which situation you have." },
      { q: "Is my Rogue's CVT covered by an extended warranty from Nissan?", a: "Nissan extended CVT coverage on certain model years, with time and mileage limits. A Nissan dealer can check by VIN whether your vehicle qualifies and whether it is still within those limits." },
    ],
  },

  "bmw-oil-leak-repair": {
    title: "BMW Oil Leak Repair",
    vehicle: "BMW",
    system: "engine lubrication and sealing",
    service: "/services/engine-repair",
    serviceLabel: "Engine repair in Crown Point",
    summary: "Burning-oil smell, smoke or spots under a BMW: the gaskets that usually leak, why the location of the leak matters more than its size, and how the source is traced.",
    intro: "Oil leaks are common on higher-mileage BMWs because gaskets and plastic parts harden with heat and age. Where the oil ends up matters more than how much is leaking: a small leak onto the exhaust or the drive belt is more urgent than a larger one that only drips on the ground.",
    background: [
      "BMW engines seal many joints with rubber gaskets and use plastic for parts such as the valve cover. Years of heat cycles make the rubber hard and the plastic brittle, and seepage begins. Oil then travels. It runs down the engine and is blown rearward by airflow, so the wet spot you see is often well below and behind the place it started.",
      "Two locations deserve particular respect. Oil from a valve cover gasket can drip onto the hot exhaust, which causes smoke and a burning smell and is a fire risk. On certain six-cylinder engines, oil from the oil filter housing gasket drips onto the drive belt. An oil-soaked belt can slip off its pulleys, and on some engines it has been drawn past the front crankshaft seal into the engine. Many newer BMWs also have no dipstick, so oil level is read electronically from the dash or infotainment screen.",
    ],
    symptoms: [
      { sign: "Burning-oil smell, strongest when stopped after a drive", detail: "Oil is reaching the exhaust. Commonly from the valve cover gasket." },
      { sign: "Smoke from under the hood", detail: "A larger amount of oil on hot parts. Stop and have it checked." },
      { sign: "Oil spots on the driveway", detail: "Position under the car gives a rough idea of the area, but not the source." },
      { sign: "Low oil level warning between services", detail: "The leak is large enough to affect the level, or the engine is also burning oil." },
      { sign: "Oil on the plastic undertray", detail: "The tray catches leaks before they reach the ground, so a leak can be well established before you see a drip." },
      { sign: "Misfire with oil in the spark plug wells", detail: "The valve cover gasket's inner seals let oil reach the plugs and coils." },
    ],
    causes: [
      { cause: "Valve cover gasket or valve cover", detail: "The gasket hardens, and the plastic cover itself can crack or warp. On many engines the crankcase ventilation valve is built into the cover." },
      { cause: "Oil filter housing gasket", detail: "A frequent leak on many BMW engines, and the one that puts oil on the drive belt." },
      { cause: "Oil pan gasket", detail: "Leaks at the bottom of the engine. Labor-intensive on many models because of what has to be moved to reach it." },
      { cause: "Crankcase ventilation faults", detail: "A failed ventilation system raises pressure inside the engine and pushes oil past seals that are otherwise sound." },
      { cause: "Turbocharger oil lines, vacuum pump and sensor seals", detail: "Smaller seals that are easy to mistake for a larger leak nearby." },
      { cause: "Rear main seal", detail: "Leaks between the engine and transmission. It is diagnosed carefully, because oil from higher up often collects in the same place." },
    ],
    diagnosis: [
      { step: "Remove the undertray and clean the engine", detail: "Old oil is washed off so that fresh oil can be traced to where it starts." },
      { step: "Inspect from above and below", detail: "Common leak points are examined directly, working from the highest wet point down." },
      { step: "Use UV dye when the source is unclear", detail: "Dye is added to the oil, the engine is run, and the leak is followed with a UV lamp." },
      { step: "Check crankcase ventilation", detail: "Crankcase pressure is measured so that a ventilation fault is not missed. Replacing a gasket will not last if pressure is pushing the oil out." },
      { step: "Check for collateral damage", detail: "The drive belt, coils, spark plug wells and nearby rubber parts are inspected for oil contamination." },
      { step: "Verify after the repair", detail: "The area is rechecked after the engine has been run to confirm the leak is gone." },
    ],
    driving: [
      "A light seep that does not reach the exhaust or belt can usually be driven while you plan the repair. Check the oil level regularly and top up with the correct oil.",
      "Stop driving if you see smoke, find oil on the drive belt, get a red oil pressure warning, or the level is dropping quickly. Oil on a hot exhaust can ignite, and a belt that comes off stops driving the alternator and the other belt-driven accessories.",
    ],
    repairOptions: [
      { option: "Valve cover gasket, with the cover if needed", detail: "The cover is replaced along with the gasket when it is cracked or warped or its ventilation valve has failed." },
      { option: "Oil filter housing gasket", detail: "On many engines the housing also carries coolant, so the job includes a coolant top-up or service. A contaminated belt is replaced at the same time." },
      { option: "Oil pan gasket", detail: "Done when confirmed as the source, since the labor involved is significant." },
      { option: "Crankcase ventilation repair", detail: "Corrected first when it is the reason seals are leaking." },
      { option: "Prioritized plan", detail: "With several leaks, the ones that threaten the exhaust, the belt or the oil level are repaired first and the rest are monitored." },
    ],
    prevention: [
      "Use oil that meets the BMW Longlife specification for your engine.",
      "Check the oil level regularly using the electronic display, and learn how to do it on your model.",
      "Have the underside inspected with the undertray removed at service time, so small leaks are found early.",
      "Repair a leak before it reaches the drive belt or the exhaust. That is when a gasket job turns into something larger.",
    ],
    faqs: [
      { q: "Is a small oil leak on a BMW worth fixing?", a: "It depends on where it is. A seep at the oil pan can often be monitored. A leak onto the exhaust or the drive belt should be repaired promptly even if it is small, because of the fire risk and the damage a contaminated belt can cause." },
      { q: "Why does my BMW smell like burning oil but not leave spots?", a: "The oil is probably landing on the exhaust and burning off, or collecting on the undertray, before it reaches the ground. A valve cover gasket leak is a common cause." },
      { q: "Why would you check crankcase ventilation for an oil leak?", a: "If the ventilation system fails, pressure builds inside the engine and forces oil past gaskets and seals. Replacing a gasket without fixing that pressure often leads to the leak coming back." },
    ],
  },

  "jeep-36-pentastar-tick": {
    title: "Jeep 3.6 Pentastar Tick",
    vehicle: "Jeep with the 3.6L Pentastar engine",
    system: "valvetrain or exhaust",
    service: "/services/engine-repair",
    serviceLabel: "Engine repair in Crown Point",
    summary: "A rhythmic tick from the 3.6L Pentastar V6: telling normal injector noise from a failing rocker arm or an exhaust leak, and why a misfire code changes the urgency.",
    intro: "A ticking 3.6L Pentastar is not always a problem. Injectors and the purge valve tick normally. A tick that is new, getting louder, or accompanied by a misfire code often points to a failing rocker arm, and that should be confirmed before it damages the camshaft.",
    background: [
      "The 3.6-liter Pentastar V6 is used across the Jeep line, including the Wrangler, Grand Cherokee and Gladiator. It has two overhead camshafts per cylinder bank. Each cam lobe presses on a rocker arm that rides on a small roller bearing and pivots on a hydraulic lash adjuster, which uses oil pressure to take up clearance.",
      "The known weak point is the roller bearing in the rocker arm. When it fails, the rocker starts to tick, and if the engine keeps running the damaged roller wears the cam lobe it rides on. Certain early model years also had a cylinder head concern for which the manufacturer extended warranty coverage, so the VIN is worth checking with a dealer. Because several harmless parts on this engine tick as well, the job is to find where the sound comes from before deciding what it means.",
    ],
    symptoms: [
      { sign: "Rhythmic tick from the top of the engine that follows engine speed", detail: "Valvetrain noise runs at half crankshaft speed and is usually loudest at one valve cover." },
      { sign: "Tick with a misfire code", detail: "A code in the P0300 to P0306 range for one cylinder, on the same bank as the noise, strongly suggests a rocker arm that is no longer opening its valve fully." },
      { sign: "Tick that is loudest cold and fades as the engine warms", detail: "More typical of an exhaust leak, which closes up as the metal expands." },
      { sign: "Light, even ticking at idle with no codes", detail: "Often normal injector or purge valve operation." },
      { sign: "Rough idle or reduced power", detail: "A valve is not operating correctly, or there is an active misfire." },
    ],
    causes: [
      { cause: "Rocker arm roller bearing failure", detail: "The most common cause of a true Pentastar tick." },
      { cause: "Hydraulic lash adjuster problems", detail: "An adjuster that bleeds down or sticks leaves clearance in the valvetrain." },
      { cause: "Camshaft lobe wear", detail: "Usually the result of running with a failed rocker arm, not a starting point." },
      { cause: "Exhaust leak", detail: "A leaking manifold gasket, a cracked manifold or a broken fastener makes a sharp tick that is easily mistaken for valvetrain noise." },
      { cause: "Low oil level or oil pressure", detail: "The lash adjusters need oil pressure to work. A leak at the oil filter housing in the valley of the engine is a known source of oil loss on this engine." },
      { cause: "Normal component noise", detail: "Fuel injectors and the evaporative purge valve click in normal operation." },
    ],
    diagnosis: [
      { step: "Check oil level and condition", detail: "Low or degraded oil is corrected first, since it can cause the noise on its own." },
      { step: "Locate the noise", detail: "A stethoscope is used at each valve cover, the exhaust manifolds and the fuel rail to find where the tick is loudest." },
      { step: "Scan for misfire data", detail: "Per-cylinder misfire counts are compared with the location of the noise." },
      { step: "Inspect the exhaust manifolds", detail: "Soot tracks, cracks and broken fasteners identify an exhaust leak." },
      { step: "Inspect the valvetrain", detail: "If the evidence points there, the valve cover on that bank is removed and the rocker rollers and cam lobes are examined directly." },
      { step: "Test oil pressure if needed", detail: "Done when several adjusters are noisy or the oil warning has come on." },
    ],
    driving: [
      "A light tick with no warning light and normal running can usually be driven a short distance to have it checked.",
      "If the check engine light is flashing, stop driving. A flashing light means an active misfire that can overheat and damage the catalytic converter. Driving on a failed rocker arm also wears the camshaft, which turns a rocker arm repair into a camshaft replacement.",
    ],
    repairOptions: [
      { option: "Rocker arms and lash adjusters", detail: "The failed parts are replaced, commonly as a full set on the affected bank, since the others have the same age and wear." },
      { option: "Camshaft replacement", detail: "Added when a lobe has been damaged by a failed roller." },
      { option: "Exhaust manifold repair", detail: "A gasket, manifold or fastener repair when the tick turns out to be an exhaust leak." },
      { option: "Oil leak repair and oil service", detail: "Fixing the source of oil loss and restoring the correct oil when low oil is behind the noise." },
    ],
    prevention: [
      "Check the oil level regularly and top up when it is below full.",
      "Change the oil on time with the viscosity specified for your model year.",
      "Have oil leaks repaired, particularly oil collecting in the valley under the intake manifold.",
      "Have a new tick checked early. A rocker arm caught early usually has not damaged the camshaft yet.",
    ],
    faqs: [
      { q: "Is ticking normal on a 3.6 Pentastar?", a: "Some is. Fuel injectors and the purge valve make a light, even ticking that is normal. A tick that is new, louder on one side of the engine, or comes with a misfire code is not normal and should be diagnosed." },
      { q: "Can I keep driving my Jeep with the Pentastar tick?", a: "If it is a failing rocker arm, continued driving wears the camshaft lobe and raises the cost of the repair. If the check engine light is flashing, stop driving. Have it located and identified before deciding." },
      { q: "How do you tell a rocker arm tick from an exhaust leak?", a: "By location and behavior. A stethoscope shows whether the sound is loudest at a valve cover or at an exhaust manifold. Exhaust leaks are often loudest cold and quiet down warm, and misfire data helps confirm a valvetrain fault." },
    ],
  },
} as const satisfies Record<string, RepairGuide>;

export type RepairGuideSlug = keyof typeof repairGuides;
