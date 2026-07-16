import { RATING } from "@/lib/rating";

// AI-crawler index (/llms.txt). Served as a prerendered static file at build
// time (`force-static`), so it's byte-for-byte cacheable like a public asset —
// but the Google rating is interpolated from lib/rating.js, keeping that the
// single source of truth instead of a hand-maintained literal.
export const dynamic = "force-static";

const body = `# R Complete Auto Care

> Diagnostic-first auto repair shop in Crown Point, Indiana (Lake County) — complex vehicle diagnostics, extended warranty repairs, and fixing problems other shops misdiagnose. Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake.

R Complete Auto Care is a diagnostic-first auto repair shop located in Crown Point, Indiana (Lake County). The shop specializes in complex vehicle diagnostics, extended warranty repairs, and fixing problems that other shops have misdiagnosed. Founded on 25+ years of family experience in auto repair, the business is built around a simple principle: find the root cause before recommending any repair. R Complete Auto Care serves drivers throughout Northwest Indiana including Crown Point, St. John, Schererville, Merrillville, and Cedar Lake.

- Business name: R Complete Auto Care
- Address: 1305 E Summit St, Crown Point, IN 46307
- Phone: (219) 262-2711
- Email: Owner@rcompleteautocare.com
- Website: https://www.rcompleteautocare.com
- Hours: Monday–Friday 8:00 AM–6:00 PM, Saturday 8:00 AM–2:00 PM, Sunday Closed
- Google Rating: ${RATING} stars
- Estimate process: Upfront digital estimates are provided after diagnosis and before authorized work begins
- Years in business: 25+
- Certifications: Licensed auto repair facility; extended warranty approved shop

## Pages

- [Homepage](https://www.rcompleteautocare.com): Overview of R Complete Auto Care — Crown Point's diagnostic-first auto repair shop. Covers services, how the shop works, why customers choose them, and contact info.
- [About](https://www.rcompleteautocare.com/about): Company history, mission, values, and credentials. 25+ years of family experience. Diagnostic-first philosophy. All makes and models. Extended warranty accepted.
- [Contact](https://www.rcompleteautocare.com/contact): Contact form, phone number, address, and hours for R Complete Auto Care in Crown Point, IN.
- [Book an Appointment](https://www.rcompleteautocare.com/book): Schedule auto repair and diagnostics online in Crown Point, IN — diagnostic-first, no-upsell scheduling.
- [Inspection Checklist](https://www.rcompleteautocare.com/inspection-checklist): The full 10-section digital vehicle inspection R Complete Auto Care performs, with real measurements and photos.
- [Financing](https://www.rcompleteautocare.com/financing): Pay-over-time auto repair financing in Crown Point, IN through Affirm, Klarna, and Sunbit, integrated into the Tekmetric estimate. Quick application; subject to lender approval. No rates or terms stated.
- [Check Engine Light Diagnostics](https://www.rcompleteautocare.com/services/check-engine-light): Same-day check engine light diagnosis in Crown Point, IN. Full module scan and root cause investigation — not just code clearing — with findings explained before any repair is authorized.
- [Electrical Diagnostics](https://www.rcompleteautocare.com/services/electrical-diagnostics): Electrical system diagnosis in Crown Point, IN — parasitic draw, no-start, wiring faults, sensor failures, module issues.
- [No-Start Diagnostics](https://www.rcompleteautocare.com/services/no-start-diagnostics): Car won't start diagnosis in Crown Point, IN. Battery, starter, fuel pump, crank sensor — systematic diagnosis to find the exact cause.
- [Engine Repair](https://www.rcompleteautocare.com/services/engine-repair): Engine repair in Crown Point, IN. Head gaskets, timing chains, oil leaks, overheating, oil consumption, engine replacement. Diagnostic-first.
- [Transmission Repair](https://www.rcompleteautocare.com/services/transmission-repair): Transmission repair in Crown Point, IN. Automatic, manual, CVT. Slipping, hard shifts, no movement, limp mode. Diagnose before rebuild.
- [Brake Repair](https://www.rcompleteautocare.com/services/brake-repair): Brake repair in Crown Point, IN. Honest inspections with actual measurements. Pads, rotors, calipers, ABS, brake lines. Same-day service available.
- [Suspension & Steering](https://www.rcompleteautocare.com/services/suspension-steering): Suspension and steering repair in Crown Point, IN. Struts, shocks, ball joints, tie rods, alignments. Indiana road conditions specialist.
- [Oil Change & Maintenance](https://www.rcompleteautocare.com/services/oil-change-maintenance): Oil change in Crown Point, IN. Conventional and synthetic. Every oil change includes a thorough multi-point inspection. Typical time: 30–60 minutes.
- [A/C & Heating Repair](https://www.rcompleteautocare.com/services/ac-heating-repair): A/C and heating repair in Crown Point, IN. No cold air, no heat, leak detection, recharge, compressor, heater core, blend doors.
- [Extended Warranty Repair](https://www.rcompleteautocare.com/services/extended-warranty-repair): Extended warranty auto repair in Crown Point, IN. Works with CarShield, Endurance, CARS Protection, AmTrust, and most providers. Handles coverage verification, pre-authorization, documentation, and claim paperwork.
- [General Diagnostics](https://www.rcompleteautocare.com/services/diagnostics): Diagnostic services overview for Crown Point, IN. Full vehicle scan, all modules, root-cause approach.
- [Auto Repair Crown Point, IN](https://www.rcompleteautocare.com/auto-repair-crown-point-in): Local auto repair page for Crown Point, Indiana. All services, location info, and why Crown Point drivers choose R Complete Auto Care.
- [Auto Repair St. John, IN](https://www.rcompleteautocare.com/auto-repair-st-john-in): Auto repair services for St. John, Indiana residents.
- [Auto Repair Schererville, IN](https://www.rcompleteautocare.com/auto-repair-schererville-in): Auto repair services for Schererville, Indiana residents.
- [Auto Repair Merrillville, IN](https://www.rcompleteautocare.com/auto-repair-merrillville-in): Auto repair services for Merrillville, Indiana residents.
- [Auto Repair Cedar Lake, IN](https://www.rcompleteautocare.com/auto-repair-cedar-lake-in): Auto repair services for Cedar Lake, Indiana residents.
- [Mechanic Near Me Crown Point](https://www.rcompleteautocare.com/mechanic-near-me-crown-point): Finding a mechanic near Crown Point, IN — why R Complete Auto Care is the top choice.
- [Car Won't Start Crown Point, IN](https://www.rcompleteautocare.com/car-wont-start-crown-point-in): Emergency guide for a car that won't start in Crown Point, IN. Causes, what to do, and how to reach R Complete Auto Care fast.
- [Car Overheating Crown Point, IN](https://www.rcompleteautocare.com/car-overheating-crown-point-in): What to do when your car is overheating in Crown Point, IN. Pull over, do not drive. R Complete Auto Care diagnoses the root cause.
- [Check Engine Light Flashing Crown Point](https://www.rcompleteautocare.com/check-engine-light-flashing-crown-point): A flashing check engine light means an active misfire. Do not continue driving. Call R Complete Auto Care immediately.
- [Transmission Slipping Crown Point, IN](https://www.rcompleteautocare.com/transmission-slipping-crown-point-in): Diagnose transmission slipping before authorizing a rebuild. Solenoid, fluid, torque-converter, and internal faults require different repairs and are commonly misdiagnosed. Covers symptoms, causes, damage timeline, and repair options.
- [Extended Warranty Auto Repair Crown Point, IN](https://www.rcompleteautocare.com/extended-warranty-auto-repair-crown-point-in): Complete guide to extended warranty auto repair in Crown Point, IN. Which providers are accepted, how the claims process works, what's typically covered.

## Vehicle Makes We Service

- [Honda Repair Crown Point, IN](https://www.rcompleteautocare.com/honda-repair-crown-point-in): Honda diagnostics, maintenance, and repair hub with model-specific and service-specific pages (Civic, Accord, CR-V, Pilot, Odyssey, timing belt, transmission, and more).
- [Toyota Repair Crown Point, IN](https://www.rcompleteautocare.com/toyota-repair-crown-point-in): Toyota and Lexus diagnostics — oil consumption, water pumps, VVT-i, hybrid and HV battery, and D-4S carbon.
- [Chevrolet Repair Crown Point, IN](https://www.rcompleteautocare.com/chevrolet-repair-crown-point-in): Chevrolet diagnostics — AFM/DFM lifter failure, 8-speed shudder, 3.6L timing chains, oil consumption, and turbo concerns.
- [Chevrolet Silverado Repair Crown Point, IN](https://www.rcompleteautocare.com/chevrolet-silverado-repair-crown-point-in): Chevrolet Silverado diagnostics — AFM/DFM lifters, 8-speed shudder, 5.3L/6.2L V8 oil consumption, cooling, and Duramax concerns by generation.
- [Ford Repair Crown Point, IN](https://www.rcompleteautocare.com/ford-repair-crown-point-in): Ford diagnostics — cam phaser rattle, internal water pumps, EcoBoost turbo and carbon, and PowerShift dual-clutch shudder.
- [Ford F-150 Repair Crown Point, IN](https://www.rcompleteautocare.com/ford-f-150-repair-crown-point-in): Ford F-150 diagnostics — EcoBoost cam phasers, boost-related misfires, 10-speed shifting, 3.5L internal water pump, 5.0L Coyote, and IWE 4x4 concerns by generation.
- [Nissan Repair Crown Point, IN](https://www.rcompleteautocare.com/nissan-repair-crown-point-in): Nissan diagnostics — Xtronic CVT judder and overheating, timing-chain rattle, and catalytic and emissions faults.
- [Subaru Repair Crown Point, IN](https://www.rcompleteautocare.com/subaru-repair-crown-point-in): Subaru diagnostics — EJ head gaskets, FB oil consumption, CVT, wheel bearings, and AWD driveline service.
- [Jeep Repair Crown Point, IN](https://www.rcompleteautocare.com/jeep-repair-crown-point-in): Jeep diagnostics — 3.6L Pentastar heads, death wobble, oil-filter-housing leaks, TIPM electrical, and transmission.
- [Chrysler Repair Crown Point, IN](https://www.rcompleteautocare.com/chrysler-repair-crown-point-in): Chrysler diagnostics — 3.6L Pentastar, Pacifica electrical and hybrid, Tigershark oil use, TIPM, and A/C.
- [Dodge Repair Crown Point, IN](https://www.rcompleteautocare.com/dodge-repair-crown-point-in): Dodge and Ram diagnostics — Hemi lifter tick and MDS, Pentastar, 8-speed, exhaust manifold bolts, and HVAC.
- [GMC Repair Crown Point, IN](https://www.rcompleteautocare.com/gmc-repair-crown-point-in): GMC diagnostics — AFM/DFM lifters, 8-speed shudder, 3.6L timing chains, Duramax diesel, and A/C.
- [Hyundai Repair Crown Point, IN](https://www.rcompleteautocare.com/hyundai-repair-crown-point-in): Hyundai diagnostics — Theta II engine concerns, GDI carbon, oil consumption, catalytic faults, and electrical.
- [Kia Repair Crown Point, IN](https://www.rcompleteautocare.com/kia-repair-crown-point-in): Kia diagnostics — Theta II engine concerns, GDI carbon, oil consumption, catalytic faults, and dual-clutch.
- [BMW Repair Crown Point, IN](https://www.rcompleteautocare.com/bmw-repair-crown-point-in): BMW diagnostics — oil leaks, N20/N26 timing chains, N54/N55 turbo and HPFP, cooling system, and VANOS.
- [Mercedes-Benz Repair Crown Point, IN](https://www.rcompleteautocare.com/mercedes-benz-repair-crown-point-in): Mercedes-Benz diagnostics — oil leaks, engine mounts, 722 transmission conductor plate, Airmatic suspension, and cooling.

## Honda Model & Service Pages

- [Honda Civic Repair](https://www.rcompleteautocare.com/honda-civic-repair-crown-point-in): Honda Civic diagnostics — CVT symptoms, A/C, engine-mount vibration, charging, brakes, and suspension.
- [Honda Accord Repair](https://www.rcompleteautocare.com/honda-accord-repair-crown-point-in): Honda Accord diagnostics — turbo drivability, oil leaks, VTC timing noise, transmission, and A/C.
- [Honda CR-V Repair](https://www.rcompleteautocare.com/honda-cr-v-repair-crown-point-in): Honda CR-V diagnostics — turbo/oil-dilution, CVT, AWD, catalytic efficiency, A/C, and suspension.
- [Honda Pilot Repair](https://www.rcompleteautocare.com/honda-pilot-repair-crown-point-in): Honda Pilot diagnostics — timing-belt service, misfires/VCM, transmission, oil leaks, and AWD.
- [Honda Odyssey Repair](https://www.rcompleteautocare.com/honda-odyssey-repair-crown-point-in): Honda Odyssey diagnostics — power sliding doors, timing belts, misfires, transmission, and dual-zone A/C.
- [Honda Ridgeline Repair](https://www.rcompleteautocare.com/honda-ridgeline-repair-crown-point-in): Honda Ridgeline diagnostics — AWD service, timing belts, transmission, cooling, and towing maintenance.
- [Honda HR-V Repair](https://www.rcompleteautocare.com/honda-hr-v-repair-crown-point-in): Honda HR-V diagnostics — CVT, AWD, brakes, suspension, charging, and A/C.
- [Honda Passport Repair](https://www.rcompleteautocare.com/honda-passport-repair-crown-point-in): Honda Passport diagnostics — timing-belt service, AWD, transmission, steering, suspension, and A/C.
- [Honda Timing Belt Service](https://www.rcompleteautocare.com/honda-timing-belt-service-crown-point-in): Vehicle-specific Honda timing belt inspection and service — belts, tensioners, idlers, water pumps, and seals.
- [Honda Transmission Repair](https://www.rcompleteautocare.com/honda-transmission-repair-crown-point-in): Honda automatic and CVT diagnosis — slipping, shudder, delayed engagement, overheating, and warning lights.
- [Honda Engine Repair](https://www.rcompleteautocare.com/honda-engine-repair-crown-point-in): Honda engine diagnosis — overheating, oil use, leaks, misfires, timing, compression, and turbo systems.
- [Honda Check Engine Light Diagnostics](https://www.rcompleteautocare.com/honda-check-engine-light-diagnostics-crown-point-in): Honda check-engine-light diagnosis — codes, freeze-frame and live data, circuit, smoke, and compression testing.
- [Honda A/C Repair](https://www.rcompleteautocare.com/honda-ac-repair-crown-point-in): Honda A/C diagnosis — weak or warm cooling, leaks, compressors, condensers, and blend doors.
- [Honda Brake Repair](https://www.rcompleteautocare.com/honda-brake-repair-crown-point-in): Honda brake inspection and repair — pads, rotors, calipers, hoses, fluid, ABS, vibration, and noise.

## Topics

- Auto repair in Crown Point, Indiana
- Diagnostic-first auto repair
- Extended warranty auto repair (CarShield, Endurance, CARS Protection, AmTrust, CARCHEX, Zurich, Protect My Car)
- Check engine light diagnosis Crown Point IN
- Brake repair Crown Point IN
- Engine repair Crown Point IN
- Transmission repair Crown Point IN
- Electrical diagnostics Crown Point IN
- No-start diagnosis Crown Point IN
- Oil change Crown Point IN
- A/C and heating repair Crown Point IN
- Suspension and steering repair Crown Point IN
- Car won't start Crown Point IN
- Car overheating Crown Point IN
- Mechanic near me Crown Point Indiana
- Auto repair St. John IN, Schererville IN, Merrillville IN, Cedar Lake IN
- Lake County Indiana auto repair
- Northwest Indiana auto repair shop
- Extended warranty claims process
- ASE-standard diagnostic documentation

## Contact

- Phone: (219) 262-2711
- Email: Owner@rcompleteautocare.com
- Address: 1305 E Summit St, Crown Point, IN 46307
- Hours: Mon–Fri 8:00 AM–6:00 PM | Sat 8:00 AM–2:00 PM | Sun Closed
- Website: https://www.rcompleteautocare.com
- Contact form: [Request service](https://www.rcompleteautocare.com/contact)
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
