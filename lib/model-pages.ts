// Single source of truth for vehicle model ("<make>-<model>-repair-crown-point-in")
// pages. Content is written per model — genuine, generation- and configuration-
// specific patterns we commonly test for, framed as "what we diagnose," never
// guaranteed defects. No customer-facing monetary specifics appear here
// (see project conventions). Honda models live in lib/honda-pages.ts.

export const MODEL_BASE_URL = "https://www.rcompleteautocare.com";

export type ModelFaq = { question: string; answer: string };
export type ModelProblem = { name: string; detail: string };
export type ModelLink = { href: string; label: string };

export type ModelPageData = {
  slug: string;
  make: string;
  makeSlug: string;
  model: string;
  shortName: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  tldr: string;
  intro: string;
  problems: ModelProblem[];
  warningSigns: string[];
  diagnostic: string;
  services: string[];
  maintenance: string;
  driving: string;
  timing: string;
  cost: string;
  warranty: string;
  faqs: ModelFaq[];
  relatedServices: ModelLink[];
  relatedModels: ModelLink[];
};

const models: ModelPageData[] = [
  {
    slug: "chevrolet-silverado-repair-crown-point-in",
    make: "Chevrolet",
    makeSlug: "chevrolet-repair-crown-point-in",
    model: "Silverado",
    shortName: "Chevrolet Silverado",
    title: "Chevrolet Silverado Repair Crown Point, IN | R Complete Auto Care",
    description:
      "Chevrolet Silverado diagnostics in Crown Point, IN — AFM/DFM lifters, 8-speed shudder, 5.3L/6.2L V8 oil consumption, cooling, and Duramax concerns. (219) 262-2711.",
    eyebrow: "Chevrolet Silverado service in Crown Point",
    heading: "Chevrolet Silverado Repair and Diagnostics in Crown Point, IN",
    tldr: "R Complete Auto Care diagnoses and repairs the Chevrolet Silverado at our Crown Point, IN shop — from GMT800 and GMT900 trucks to K2XX and T1XX 5.3L, 6.2L, and Duramax platforms. We identify the exact engine and transmission and test the system before recommending parts, handle extended-warranty claims, and serve Crown Point, St. John, Schererville, Merrillville, and Cedar Lake.",
    intro:
      "Silverado generations span very different engines, transmissions, and 4WD systems, so the right test plan for a lifter tick is not the same as for a shift shudder or a coolant smell. We confirm the exact powertrain — 4.8L, 5.3L, or 6.2L gas, or Duramax diesel — before testing what your truck is actually doing.",
    problems: [
      {
        name: "AFM/DFM lifter failure on 5.3L and 6.2L V8s",
        detail:
          "Active Fuel Management and Dynamic Fuel Management lifters can collapse on many Silverado V8s, producing a tick, misfire, or a dead cylinder. We confirm the affected cylinder with scan data and mechanical testing before recommending lifter and camshaft work, rather than assuming every tick is the same failure.",
      },
      {
        name: "8-speed (8L90/8L45) shudder or harsh shifting",
        detail:
          "The 8-speed automatic in K2XX and early T1XX trucks can shudder or shift harshly, often tied to fluid condition and valve-body wear. We road test, inspect the fluid using the correct procedure, and scan before recommending a fluid service or repair.",
      },
      {
        name: "5.3L oil consumption and PCV concerns",
        detail:
          "Some AFM-equipped 5.3L engines consume oil through the rings or a failing PCV system. We measure consumption over distance and inspect crankcase ventilation before concluding the engine needs internal work.",
      },
      {
        name: "Cooling-system and intake-gasket leaks",
        detail:
          "Water pumps, radiators, and gaskets age on higher-mileage Vortec and EcoTec3 engines. Because overheating can damage a cylinder head, we pressure-test the cooling system and pinpoint the leak instead of topping off coolant and waiting.",
      },
      {
        name: "Duramax fuel-system and emissions concerns",
        detail:
          "On Duramax diesel trucks, injector, fuel-pump, DEF, and DPF-related faults each require specific testing. We read the diesel modules and confirm the actual fault before recommending any major component.",
      },
    ],
    warningSigns: [
      "Lifter tick, misfire, or a cylinder dropping out",
      "Shudder or harsh shifts from the automatic transmission",
      "Oil level dropping between changes with no visible leak",
      "Coolant loss, a sweet smell, or rising temperature",
      "Reduced power, a flashing check-engine light, or diesel warning messages",
    ],
    diagnostic:
      "We identify the exact engine, transmission, and 4WD system, review your description and service history, and road test when it is safe. Testing may include scan and misfire data, a cooling-system pressure test, fuel-trim analysis, transmission road testing with fluid inspection, mechanical verification of a suspected lifter, or diesel module scans.",
    services: [
      "V8 lifter and camshaft diagnosis",
      "Automatic-transmission diagnosis and service",
      "Cooling-system and gasket repair",
      "Oil-consumption and PCV diagnosis",
      "Duramax diesel diagnosis",
      "Brake, suspension, and 4WD service",
    ],
    maintenance:
      "Silverado service needs vary by engine, gas or diesel, transmission, 4WD equipment, and how the truck is used for towing or hauling. We follow the owner's manual and vehicle-specific information — including the correct fluids — rather than a one-size interval.",
    driving:
      "A steady warning light with normal operation may allow a careful trip for diagnosis, but overheating, an oil-pressure light, a flashing check-engine light, or a diesel emissions warning means stop and call us.",
    timing:
      "Straightforward inspections are often same-day. Intermittent lifter, transmission, or diesel-emissions concerns can require added testing, and repair timing then depends on parts availability and access.",
    cost:
      "The engine and whether the truck is gas or diesel, the diagnostic time, parts access, and whether one failure has affected another system determine what a Silverado repair involves. Diagnosis comes first so the estimate matches the demonstrated fault.",
    warranty:
      "Many Silverado engine, transmission, and cooling repairs are commonly covered by extended service contracts. We document the diagnosis and work with administrators while your contract governs coverage.",
    faqs: [
      {
        question: "Do you repair the Chevrolet Silverado in Crown Point?",
        answer:
          "Yes. R Complete Auto Care diagnoses and repairs the Silverado — 4.8L, 5.3L, and 6.2L V8s and Duramax diesel — at our Crown Point, IN shop, and we serve St. John, Schererville, Merrillville, and Cedar Lake.",
      },
      {
        question: "My Silverado has a lifter tick — does it need a camshaft?",
        answer:
          "Not always. A tick can come from AFM/DFM lifters, but also from exhaust-manifold bolts, an accessory, or oil condition. We confirm the failed cylinder with data and mechanical testing before recommending lifter and camshaft work.",
      },
      {
        question: "Why does my Silverado shudder when it shifts?",
        answer:
          "The 8-speed automatic in these trucks can shudder from fluid condition or valve-body wear. We road test, inspect the fluid with the correct procedure, and scan before recommending a fluid service or repair.",
      },
      {
        question: "Do you work on Duramax diesel trucks?",
        answer:
          "Yes. We scan the diesel modules and test the fuel, DEF, and emissions systems to confirm the actual fault before recommending any major component.",
      },
      {
        question: "Can you handle my Silverado extended warranty claim?",
        answer:
          "Yes. We document findings, contact your warranty administrator, and respond to their requests. The contract's terms decide coverage and authorization.",
      },
    ],
    relatedServices: [
      { href: "/services/engine-repair", label: "Engine repair" },
      { href: "/services/transmission-repair", label: "Transmission repair" },
      { href: "/services/check-engine-light", label: "Check engine light diagnostics" },
      { href: "/services/diagnostics", label: "Auto diagnostics" },
    ],
    relatedModels: [
      { href: "/ford-f-150-repair-crown-point-in", label: "Ford F-150 repair" },
    ],
  },
  {
    slug: "ford-f-150-repair-crown-point-in",
    make: "Ford",
    makeSlug: "ford-repair-crown-point-in",
    model: "F-150",
    shortName: "Ford F-150",
    title: "Ford F-150 Repair Crown Point, IN | R Complete Auto Care",
    description:
      "Ford F-150 diagnostics in Crown Point, IN — EcoBoost cam phasers, boost misfires, 10-speed shifting, 3.5L water pump, and IWE 4x4 concerns. (219) 262-2711.",
    eyebrow: "Ford F-150 service in Crown Point",
    heading: "Ford F-150 Repair and Diagnostics in Crown Point, IN",
    tldr: "R Complete Auto Care diagnoses and repairs the Ford F-150 at our Crown Point, IN shop — 2.7L and 3.5L EcoBoost, 5.0L Coyote V8, and PowerBoost hybrid trucks. We confirm the exact engine and transmission and test the system before recommending parts, handle extended-warranty claims, and serve Crown Point, St. John, Schererville, Merrillville, and Cedar Lake.",
    intro:
      "F-150 generations use very different engines and transmissions, so a cold-start rattle, a boost-related misfire, and a harsh shift each point to a different investigation. We confirm whether your truck is a 2.7L or 3.5L EcoBoost, a 5.0L Coyote, or a PowerBoost hybrid before testing what it is actually doing.",
    problems: [
      {
        name: "EcoBoost cam-phaser rattle and timing wear",
        detail:
          "3.5L and 2.7L EcoBoost engines can develop a brief cold-start rattle from worn variable-cam-timing phasers. We verify the noise and review cam-correlation data before recommending phaser or timing work, rather than assuming every rattle is the same.",
      },
      {
        name: "Boost-related misfire and condensation concerns",
        detail:
          "Intercooler condensation on humid days can cause a stumble or misfire under acceleration on EcoBoost trucks. We review freeze-frame and misfire data under load before condemning coils or injectors.",
      },
      {
        name: "10-speed (10R80) harsh shifting or shudder",
        detail:
          "The 10-speed automatic can shift harshly — often a 1-2 or downshift clunk — or shudder, tied to fluid condition, valve-body wear, or software. We road test, inspect the fluid, and scan before recommending a service or repair.",
      },
      {
        name: "3.5L EcoBoost internal water pump and coolant loss",
        detail:
          "Some 3.5L EcoBoost engines use a timing-chain-driven internal water pump; a failure can allow coolant loss without an obvious external leak. We pressure-test and inspect for coolant intrusion before concluding the cause.",
      },
      {
        name: "IWE 4x4 grinding and electrical actuator faults",
        detail:
          "A grinding from the front hubs on 4WD trucks often traces to the Integrated Wheel End (IWE) vacuum system, and door-latch or SYNC concerns are common on higher-mileage trucks. We test the actual circuit or actuator rather than guessing.",
      },
    ],
    warningSigns: [
      "A brief rattle at cold start or a timing-related code",
      "Stumble, misfire, or reduced power under boost, often in humid weather",
      "Harsh or clunking shifts, or transmission shudder",
      "Coolant loss, overheating, or a sweet smell with no visible leak",
      "Grinding from the front hubs in 4WD, or door and SYNC electrical faults",
    ],
    diagnostic:
      "We identify the exact engine and transmission, review your description and service history, and road test when it is safe. Testing may include scan and misfire data under load, cam-correlation review, a cooling-system pressure test, transmission road testing with fluid inspection, and IWE or electrical circuit testing as appropriate.",
    services: [
      "EcoBoost and Coyote engine diagnosis",
      "Cam-phaser and timing diagnosis",
      "10-speed transmission diagnosis and service",
      "Cooling-system and water-pump repair",
      "4WD/IWE and electrical diagnosis",
      "Brake, suspension, and maintenance service",
    ],
    maintenance:
      "F-150 service needs vary by engine, transmission, 4WD equipment, and how the truck is used for towing or hauling. We follow the owner's manual and vehicle-specific information — including the correct oil and coolant — rather than a one-size interval.",
    driving:
      "A steady warning light with normal operation may allow a careful trip for diagnosis, but overheating, an oil-pressure light, a flashing check-engine light, or a loss of power under boost means stop and call us.",
    timing:
      "Straightforward inspections are often same-day. Intermittent phaser, boost, transmission, or cooling concerns can require added testing, and repair timing then depends on parts availability and access.",
    cost:
      "The engine, the diagnostic time, parts access, and whether one failure has affected another system determine what an F-150 repair involves. Diagnosis comes first so the estimate matches the demonstrated fault.",
    warranty:
      "Many F-150 engine, transmission, and cooling repairs are commonly covered by extended service contracts. We document the diagnosis and work with administrators while your contract governs coverage.",
    faqs: [
      {
        question: "Do you repair the Ford F-150 in Crown Point?",
        answer:
          "Yes. R Complete Auto Care diagnoses and repairs the F-150 — 2.7L and 3.5L EcoBoost, 5.0L Coyote, and PowerBoost hybrid — at our Crown Point, IN shop, and we serve St. John, Schererville, Merrillville, and Cedar Lake.",
      },
      {
        question: "My F-150 rattles at cold start — is it the cam phasers?",
        answer:
          "It can be. EcoBoost engines can develop a brief cold-start rattle from worn cam-timing phasers, but a similar noise can come from other sources. We verify the noise and review cam-correlation data before recommending phaser or timing work.",
      },
      {
        question: "My EcoBoost stumbles on humid days — what is that?",
        answer:
          "Intercooler condensation can cause a misfire under boost on EcoBoost trucks. We review misfire and freeze-frame data under load before condemning coils or injectors.",
      },
      {
        question: "Why is my F-150 grinding in 4WD?",
        answer:
          "A grinding from the front hubs often traces to the Integrated Wheel End (IWE) vacuum system. We test the IWE circuit and vacuum supply rather than replacing hubs on assumption.",
      },
      {
        question: "Can you handle my F-150 extended warranty claim?",
        answer:
          "Yes. We document findings, contact your warranty administrator, and respond to their requests. The contract's terms decide coverage and authorization.",
      },
    ],
    relatedServices: [
      { href: "/services/engine-repair", label: "Engine repair" },
      { href: "/services/transmission-repair", label: "Transmission repair" },
      { href: "/services/check-engine-light", label: "Check engine light diagnostics" },
      { href: "/services/diagnostics", label: "Auto diagnostics" },
    ],
    relatedModels: [
      { href: "/chevrolet-silverado-repair-crown-point-in", label: "Chevrolet Silverado repair" },
    ],
  },
];

export const MODEL_PAGES = models;

export function getModelPage(slug: string): ModelPageData {
  const page = models.find((entry) => entry.slug === slug);
  if (!page) throw new Error(`Unknown model page: ${slug}`);
  return page;
}
