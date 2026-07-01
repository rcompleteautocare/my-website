// SMS-first / voice-fallback orchestration.
//
// sendWithFallback(): send an SMS now; if the script expects a reply, arm a
// timer. When the timer fires (no reply within FALLBACK_DELAY_MINUTES) we place
// the RingOut fallback call. A reply — or a relevant Tekmetric status change —
// calls cancelFallback() to disarm the timer before it fires.
import { config } from "./config.js";
import { renderScript } from "./scripts.js";
import { sendSms, placeCall } from "./ringcentral.js";
import * as pendingStore from "./pendingStore.js";
import { checkSendAllowed } from "./compliance.js";
import { normalizePhone } from "./util.js";

const DELAY_MS = config.fallbackDelayMinutes * 60_000;

/**
 * Send a scripted SMS and, if it expects a reply, arm the fallback call.
 * @param {object} opts
 * @param {string} opts.phone       destination (any format)
 * @param {string} opts.scriptId    key in scripts.js
 * @param {object} [opts.context]   render context
 * @returns {Promise<{sent:boolean, reason?:string, smsId?:string, armed?:boolean}>}
 */
export async function sendWithFallback({ phone, scriptId, context = {} }) {
  const dest = normalizePhone(phone);
  if (!dest) return { sent: false, reason: "invalid_phone" };

  const gate = checkSendAllowed(dest);
  if (!gate.allowed) {
    console.log(
      `[fallback] skip ${scriptId} -> ${dest}: ${gate.reason}`,
    );
    // ⚠️ quiet_hours currently drops the message. Production: queue for later.
    return { sent: false, reason: gate.reason };
  }

  const { body, expectsReply } = renderScript(scriptId, context);

  let smsId;
  try {
    ({ id: smsId } = await sendSms(dest, body));
  } catch (err) {
    console.error(`[fallback] SMS send failed (${scriptId} -> ${dest}):`, err.message);
    return { sent: false, reason: "sms_error" };
  }

  let armed = false;
  if (expectsReply) {
    pendingStore.arm(dest, {
      scriptId,
      context,
      delayMs: DELAY_MS,
      onTimeout: (record) => fireFallbackCall(record),
    });
    armed = true;
  }

  console.log(
    `[fallback] sent ${scriptId} -> ${dest} (sms ${smsId})${armed ? " +call armed" : ""}`,
  );
  return { sent: true, smsId, armed };
}

/**
 * Cancel an armed fallback for a number (reply received or status changed).
 * @param {string} phone
 * @param {string} [reason] for logging
 * @returns {boolean} whether a timer was actually cancelled
 */
export function cancelFallback(phone, reason = "reply") {
  const cancelled = pendingStore.cancel(phone);
  if (cancelled) {
    console.log(
      `[fallback] cancelled call for ${cancelled.phone} (${reason})`,
    );
  }
  return !!cancelled;
}

/** The pending timer fired — place the fallback call (quiet-hours aware). */
async function fireFallbackCall(record) {
  const gate = checkSendAllowed(record.phone);
  if (!gate.allowed) {
    console.log(
      `[fallback] call suppressed for ${record.phone}: ${gate.reason}`,
    );
    return;
  }
  try {
    const { id } = await placeCall(record.phone);
    console.log(
      `[fallback] placed fallback call for ${record.phone} (ringout ${id}, was ${record.scriptId})`,
    );
  } catch (err) {
    console.error(
      `[fallback] fallback call failed for ${record.phone}:`,
      err.message,
    );
  }
}

export default { sendWithFallback, cancelFallback };
