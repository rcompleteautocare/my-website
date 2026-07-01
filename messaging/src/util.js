// Small pure formatters shared across scripts and webhooks.

/**
 * Format a money amount for display. Tekmetric returns money in **cents**
 * (integer). Guard against already-decimal values just in case.
 * VERIFY: confirm the money fields on your Tekmetric payloads are cents.
 * @param {number|null|undefined} cents
 * @returns {string} e.g. "$1,234.50"
 */
export function formatMoney(cents) {
  if (cents == null || Number.isNaN(Number(cents))) return "$0.00";
  const dollars = Number(cents) / 100;
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

/**
 * Normalize a phone number to E.164 (+1XXXXXXXXXX) for US numbers.
 * Returns null if it can't be made into a plausible 10/11-digit US number.
 * VERIFY: confirm the phone shape Tekmetric sends (some payloads nest it under
 * customer.phone[].number, others send a flat string).
 * @param {string|number|null|undefined} raw
 * @returns {string|null}
 */
export function normalizePhone(raw) {
  if (raw == null) return null;
  const digits = String(raw).replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

/**
 * Format an appointment time for a text message in the shop's timezone.
 * @param {string|number|Date} when ISO string, epoch ms, or Date
 * @param {string} timezone IANA tz
 * @returns {string} e.g. "Tue, Jul 2 at 9:00 AM"
 */
export function formatTime(when, timezone) {
  const d = when instanceof Date ? when : new Date(when);
  if (Number.isNaN(d.getTime())) return "your scheduled time";
  return d.toLocaleString("en-US", {
    timeZone: timezone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

/**
 * Build a human vehicle label from Tekmetric vehicle fields.
 * @param {{year?:number|string, make?:string, model?:string}|null|undefined} v
 * @returns {string} e.g. "2018 Honda Civic" or "your vehicle"
 */
export function formatVehicle(v) {
  if (!v) return "your vehicle";
  const parts = [v.year, v.make, v.model].filter(Boolean);
  return parts.length ? parts.join(" ") : "your vehicle";
}

/** First name only, for a friendlier greeting. */
export function firstName(name) {
  if (!name) return "there";
  return String(name).trim().split(/\s+/)[0] || "there";
}
