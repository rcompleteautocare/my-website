// Single source of truth for customer-facing business facts that appear on
// many pages. Follows the lib/rating.js pattern: change the value here, not
// inline in pages. Owner-confirmed values.

// The one shop-level experience claim. Use these constants everywhere; never
// write a year count ("25+ years", "35+ years"), "combined experience",
// "family experience" or "decades of experience" for the shop.
//
// 1989 is when lead technician Dave started diagnosing and repairing vehicles.
// It is NOT the year the business opened (the shop opened under current
// ownership in April 2026), so never phrase this as business tenure ("in
// business since 1989", "serving Crown Point since 1989"). Per-technician bios
// on /about (Dave since 1989, ASE certified since 1993; Dave R 15 years) are
// separate and stay as written.
export const EXPERIENCE_CLAIM = "Diagnosing and repairing vehicles since 1989"
// Short form for badges, stat tiles and other tight spaces.
export const EXPERIENCE_SHORT = "Since 1989"

// Service-area towns in display order. Used for the footer, homepage cards,
// "Serving ..." strips, and JSON-LD areaServed arrays.
export const SERVICE_AREAS = [
  "Crown Point",
  "St. John",
  "Schererville",
  "Merrillville",
  "Cedar Lake",
  "Dyer",
  "Lowell",
  "Hobart",
  "Munster",
  "Valparaiso",
]

// Schema.org City objects for JSON-LD areaServed arrays.
export const AREA_SERVED_SCHEMA = SERVICE_AREAS.map((name) => ({
  "@type": "City",
  name,
  containedIn: { "@type": "State", name: "Indiana" },
}))

// Towns that have a dedicated landing page. Every town in SERVICE_AREAS has
// one; a town missing here would render as plain text in service-area lists.
/** @type {Record<string, string>} */
export const CITY_PAGE_HREFS = {
  "Crown Point": "/auto-repair-crown-point-in",
  "St. John": "/auto-repair-st-john-in",
  "Schererville": "/auto-repair-schererville-in",
  "Merrillville": "/auto-repair-merrillville-in",
  "Cedar Lake": "/auto-repair-cedar-lake-in",
  "Dyer": "/auto-repair-dyer-in",
  "Lowell": "/auto-repair-lowell-in",
  "Hobart": "/auto-repair-hobart-in",
  "Munster": "/auto-repair-munster-in",
  "Valparaiso": "/auto-repair-valparaiso-in",
}

// Canonical extended-warranty provider names (deduped, display spelling).
export const WARRANTY_PROVIDERS = [
  "CarShield",
  "Endurance",
  "CARS Protection Plus",
  "AmTrust",
  "Zurich",
  "SilverRock",
  "Fidelity Warranty Services",
  "American Auto Shield",
  "CARCHEX",
  "Protect My Car",
  "GWC",
]

// Badge/label copy for the same-day diagnostics claim.
export const SAME_DAY_COPY = "Same-day diagnostics available"

// Public contact email (lowercase everywhere: JSON-LD, footer, contact, llms.txt).
export const OWNER_EMAIL = "owner@rcompleteautocare.com"

// Repair warranty shown on the homepage trust row.
export const SHOP_WARRANTY = "12 months / 12,000 miles on parts and labor"

// Bookable service names, in display order. Drives the /book "Services you
// can schedule" list and the Contact form dropdown; keep in sync with the
// /services cards.
export const SERVICE_TYPES = [
  "Auto Diagnostics",
  "Check Engine Light Diagnostics",
  "Electrical Diagnostics",
  "No-Start Diagnostics",
  "Engine Repair",
  "Transmission Repair",
  "Brake Repair",
  "Suspension & Steering",
  "Oil Change & Maintenance",
  "A/C & Heating Repair",
  "Extended Warranty Repairs",
  "Pre-Purchase Inspection",
  "Used Car Inspection",
]
