// Single source of truth for customer-facing business facts that appear on
// many pages. Follows the lib/rating.js pattern: change the value here, not
// inline in pages. Owner-confirmed values.

// Shop experience claim (not the per-technician bios on /about).
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
