// Inbound SMS reply handling.
//
// Keywords (case-insensitive, first word wins):
//   C     -> confirm: cancel fallback + send confirmation ack
//   R     -> reschedule: send reschedule link
//   YES   -> approve/book: cancel fallback + send booking link
//   STOP  -> opt out: add to suppression list + send opt-out confirmation
// Any inbound message cancels an armed fallback call for that number (the
// customer engaged), even if it isn't a recognized keyword.
import { renderScript } from "../scripts.js";
import { sendSms } from "../ringcentral.js";
import { cancelFallback } from "../fallback.js";
import { optOut, checkSendAllowed } from "../compliance.js";
import * as pendingStore from "../pendingStore.js";
import { normalizePhone } from "../util.js";

/**
 * @param {string} from  sender phone
 * @param {string} text  message body
 * @returns {Promise<{status:string, action?:string}>}
 */
export async function handleInboundSms(from, text) {
  const phone = normalizePhone(from);
  if (!phone) return { status: "ignored", action: "bad_phone" };

  const keyword = (text || "").trim().split(/\s+/)[0]?.toUpperCase() || "";

  // Preserve any context from the outreach we were waiting on (name/vehicle),
  // then cancel the armed fallback — the customer replied.
  const pending = pendingStore.get(phone);
  const context = pending?.context ?? {};
  cancelFallback(phone, `reply:${keyword || "text"}`);

  // STOP always wins and bypasses the opt-out gate for its own confirmation.
  if (keyword === "STOP") {
    optOut(phone);
    await reply(phone, "optOutConfirmation", context, { ignoreQuietHours: true });
    return { status: "handled", action: "opt_out" };
  }

  switch (keyword) {
    case "C":
      await reply(phone, "confirmationAck", context);
      return { status: "handled", action: "confirm" };
    case "R":
      await reply(phone, "rescheduleLink", context);
      return { status: "handled", action: "reschedule" };
    case "YES":
      // If the reply resolved an estimate, an approval ack fits better; without
      // that context, treat YES as a booking intent.
      await reply(phone, "bookingLink", context);
      return { status: "handled", action: "book" };
    default:
      // Unrecognized text: fallback already cancelled; a human should follow up.
      console.log(`[inboundSms] unhandled reply from ${phone}: "${text}"`);
      return { status: "noop", action: "unrecognized" };
  }
}

async function reply(phone, scriptId, context, opts = {}) {
  const gate = checkSendAllowed(phone, opts);
  if (!gate.allowed) {
    console.log(`[inboundSms] reply ${scriptId} suppressed: ${gate.reason}`);
    return;
  }
  const { body } = renderScript(scriptId, context);
  try {
    await sendSms(phone, body);
  } catch (err) {
    console.error(`[inboundSms] reply send failed (${scriptId}):`, err.message);
  }
}

export default { handleInboundSms };
