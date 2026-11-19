// Command Center business profile (Settings page). Stored as one JSON row in
// the Prisma `Setting` table under BUSINESS_PROFILE_KEY.

export const BUSINESS_PROFILE_KEY = "business-profile";

export type BusinessProfile = {
  businessName: string;
  address: string;
  phone: string;
  laborRate: string;
  taxRate: string;
  weekdayHours: string;
  saturdayHours: string;
};

// Shown until a profile has been saved. laborRate and taxRate are left blank
// rather than pre-filled with made-up figures.
export const DEFAULT_BUSINESS_PROFILE: BusinessProfile = {
  businessName: "R Complete Auto Care",
  address: "1305 E Summit St, Crown Point, IN 46307",
  phone: "(219) 262-2711",
  laborRate: "",
  taxRate: "",
  weekdayHours: "8:00 AM – 6:00 PM",
  saturdayHours: "8:00 AM – 2:00 PM",
};

/** Merge a stored JSON value over the defaults, ignoring anything unexpected. */
export function toBusinessProfile(value: unknown): BusinessProfile {
  const profile = { ...DEFAULT_BUSINESS_PROFILE };
  if (value && typeof value === "object" && !Array.isArray(value)) {
    for (const key of Object.keys(profile) as (keyof BusinessProfile)[]) {
      const stored = (value as Record<string, unknown>)[key];
      if (typeof stored === "string" || typeof stored === "number") profile[key] = String(stored);
    }
  }
  return profile;
}
