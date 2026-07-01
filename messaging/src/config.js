// Central env + shop config. Everything reads from here so there is one place
// to change a value. Load .env before anything else imports this module.
import "dotenv/config";

function required(name) {
  const v = process.env[name];
  if (!v || v === "replace-me") {
    // We don't hard-crash here: several deployments run only a subset of the
    // flow (e.g. reminders job without the inbound webhook). Callers that need
    // a given credential fail loudly at call time instead.
    return undefined;
  }
  return v;
}

function int(name, fallback) {
  const v = parseInt(process.env[name] ?? "", 10);
  return Number.isFinite(v) ? v : fallback;
}

export const config = {
  port: int("PORT", 3333),

  // Secret Tekmetric must present on its webhook (query token or header).
  tekmetricWebhookSecret: required("TEKMETRIC_WEBHOOK_SECRET"),

  ringcentral: {
    server: process.env.RINGCENTRAL_SERVER || "https://platform.ringcentral.com",
    clientId: required("RINGCENTRAL_CLIENT_ID"),
    clientSecret: required("RINGCENTRAL_CLIENT_SECRET"),
    jwt: required("RINGCENTRAL_JWT"),
    fromNumber: process.env.RINGCENTRAL_FROM_NUMBER,
  },

  tekmetric: {
    baseUrl: process.env.TEKMETRIC_BASE_URL || "https://sandbox.tekmetric.com",
    clientId: required("TEKMETRIC_CLIENT_ID"),
    clientSecret: required("TEKMETRIC_CLIENT_SECRET"),
    shopId: process.env.TEKMETRIC_SHOP_ID,
  },

  shop: {
    name: process.env.SHOP_NAME || "R Complete Auto Care",
    phone: process.env.SHOP_PHONE || "+12192622711",
    timezone: process.env.SHOP_TIMEZONE || "America/Chicago",
    bookingUrl:
      process.env.BOOKING_URL || "https://www.rcompleteautocare.com/book",
    rescheduleUrl:
      process.env.RESCHEDULE_URL || "https://www.rcompleteautocare.com/book",
  },

  fallbackDelayMinutes: int("FALLBACK_DELAY_MINUTES", 30),

  quietHours: {
    start: int("QUIET_HOURS_START", 8), // inclusive, 24h shop-local
    end: int("QUIET_HOURS_END", 20), // exclusive, 24h shop-local
  },
};

export default config;
