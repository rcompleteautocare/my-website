// Compliance gate: quiet hours + opt-out list.
//
// ⚠️ Scaffold shortcuts (replace for production):
//   - The opt-out list is persisted to a local JSON file so it survives a
//     restart, but a single-file store won't scale across instances. Move it to
//     a database (indexed by E.164 phone).
//   - Messages sent during quiet hours are currently DROPPED. For production,
//     queue them to send at the next allowed time instead.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "./config.js";
import { normalizePhone } from "./util.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OPT_OUT_FILE = path.join(__dirname, "..", "optout.json");

/** @type {Set<string>} normalized E.164 numbers */
const optedOut = new Set(loadOptOut());

function loadOptOut() {
  try {
    const raw = fs.readFileSync(OPT_OUT_FILE, "utf8");
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function persistOptOut() {
  try {
    fs.writeFileSync(OPT_OUT_FILE, JSON.stringify([...optedOut], null, 2));
  } catch (err) {
    console.error("[compliance] failed to persist opt-out list:", err.message);
  }
}

/** @returns {boolean} true if this number has opted out. */
export function isOptedOut(phone) {
  const e164 = normalizePhone(phone);
  return e164 ? optedOut.has(e164) : false;
}

/** Add a number to the opt-out list (idempotent). */
export function optOut(phone) {
  const e164 = normalizePhone(phone);
  if (!e164) return;
  if (!optedOut.has(e164)) {
    optedOut.add(e164);
    persistOptOut();
  }
}

/** Remove a number from the opt-out list (e.g. explicit re-subscribe). */
export function optIn(phone) {
  const e164 = normalizePhone(phone);
  if (!e164) return;
  if (optedOut.delete(e164)) persistOptOut();
}

/**
 * Is it currently inside the allowed sending window in the shop's timezone?
 * @param {Date} [now] override for testing
 * @returns {boolean}
 */
export function withinQuietHours(now = new Date()) {
  const hour = shopHour(now);
  const { start, end } = config.quietHours;
  // Allowed when start <= hour < end. (Both are shop-local 24h.)
  return hour >= start && hour < end;
}

/** Current hour (0–23) in the shop timezone. */
function shopHour(now) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: config.shop.timezone,
    hour: "numeric",
    hour12: false,
  }).formatToParts(now);
  const h = parts.find((p) => p.type === "hour")?.value;
  // Intl can emit "24" for midnight in hour12:false — normalize to 0.
  const n = parseInt(h ?? "0", 10);
  return n === 24 ? 0 : n;
}

/**
 * Single gate used before any outbound SMS/call.
 * @param {string} phone
 * @param {{ignoreQuietHours?:boolean}} [opts]
 * @returns {{allowed:boolean, reason?:string}}
 */
export function checkSendAllowed(phone, opts = {}) {
  if (isOptedOut(phone)) return { allowed: false, reason: "opted_out" };
  if (!opts.ignoreQuietHours && !withinQuietHours()) {
    return { allowed: false, reason: "quiet_hours" };
  }
  return { allowed: true };
}
