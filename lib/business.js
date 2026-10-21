// Single source of truth for customer-facing business facts that appear on
// many pages. Follows the lib/rating.js pattern: change the value here, not
// inline in pages. Owner-confirmed values.

// Combined technician experience, NOT years in business: the shop opened under
// current ownership in April 2026. Never phrase this as tenure ("serving ...
// for N years", "in business N years"). Per-technician bios on /about are separate.
export const YEARS_EXPERIENCE = "35+"

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

// Towns that have a dedicated landing page. Towns missing here render as
// plain text in service-area lists.
/** @type {Record<string, string>} */
export const CITY_PAGE_HREFS = {
  "Crown Point": "/auto-repair-crown-point-in",
  "St. John": "/auto-repair-st-john-in",
  "Schererville": "/auto-repair-schererville-in",
  "Merrillville": "/auto-repair-merrillville-in",
  "Cedar Lake": "/auto-repair-cedar-lake-in",
  "Lowell": "/auto-repair-lowell-in",
  "Hobart": "/auto-repair-hobart-in",
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
