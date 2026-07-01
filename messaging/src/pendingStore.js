// Tracks outbound messages that are awaiting a customer reply, keyed by phone.
//
// ⚠️ Scaffold shortcut: this uses in-memory setTimeout timers. They die on
// process restart and don't scale past one instance. For production, replace
// with a durable queue (BullMQ/Redis, Cloud Tasks) or a scheduled DB sweep that
// checks "sent > delay ago AND no reply".
import { normalizePhone } from "./util.js";

/**
 * @typedef {Object} Pending
 * @property {string} phone      normalized E.164
 * @property {string} scriptId   which script was sent
 * @property {object} context    render context (name, vehicle, RO, etc.)
 * @property {NodeJS.Timeout} timer
 * @property {number} sentAt      epoch ms
 */

/** @type {Map<string, Pending>} phone -> pending record */
const pending = new Map();

/**
 * Arm a pending record. If one already exists for this phone it is replaced
 * (its timer cleared) so the newest outreach wins.
 * @param {string} phone
 * @param {{scriptId:string, context?:object, delayMs:number, onTimeout:(p:Pending)=>void}} opts
 * @returns {Pending|null}
 */
export function arm(phone, { scriptId, context = {}, delayMs, onTimeout }) {
  const e164 = normalizePhone(phone);
  if (!e164) return null;

  cancel(e164); // clear any existing timer for this number

  const record = {
    phone: e164,
    scriptId,
    context,
    sentAt: Date.now(),
    timer: null,
  };

  record.timer = setTimeout(() => {
    pending.delete(e164);
    try {
      onTimeout(record);
    } catch (err) {
      console.error(`[pendingStore] onTimeout for ${e164} threw:`, err.message);
    }
  }, delayMs);
  // Don't keep the event loop alive solely for a pending fallback.
  if (record.timer.unref) record.timer.unref();

  pending.set(e164, record);
  return record;
}

/**
 * Cancel + remove a pending record (customer replied, or status changed).
 * @param {string} phone
 * @returns {Pending|null} the cancelled record, if any
 */
export function cancel(phone) {
  const e164 = normalizePhone(phone);
  if (!e164) return null;
  const record = pending.get(e164);
  if (!record) return null;
  clearTimeout(record.timer);
  pending.delete(e164);
  return record;
}

/** @returns {Pending|undefined} */
export function get(phone) {
  const e164 = normalizePhone(phone);
  return e164 ? pending.get(e164) : undefined;
}

/** @returns {boolean} */
export function has(phone) {
  return !!get(phone);
}

/** Testing/introspection helper. */
export function size() {
  return pending.size;
}
