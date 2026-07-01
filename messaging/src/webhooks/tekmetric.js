// Tekmetric webhook -> script mapping.
//
// ⚠️ VERIFY: event names and payload field paths. The values below are the
// documented / reasonable shapes. Trigger each event once in the sandbox, log
// the raw body (this handler logs it), and adjust EVENT_MAP + extractContext.
import { sendWithFallback, cancelFallback } from "../fallback.js";
import { formatVehicle, normalizePhone } from "../util.js";

// Tekmetric event type -> the script to send. Events not listed are ignored.
// VERIFY: exact event-type strings for your webhook subscription.
const EVENT_MAP = {
  "appointment.created": "appointmentConfirmation",
  "estimate.ready": "estimateReady",
  "repair_order.completed": "readyForPickup",
  "repair_order.closed": "thankYou",
  "appointment.no_show": "noShow",
};

// Events that should CANCEL an armed fallback call for the customer (the thing
// we were waiting on happened through another channel).
// VERIFY: exact status-change event strings.
const CANCEL_EVENTS = new Set([
  "appointment.confirmed",
  "appointment.checked_in",
  "estimate.approved",
  "repair_order.picked_up",
]);

// Some cancel events also warrant a courtesy acknowledgement SMS.
const CANCEL_ACK = {
  "estimate.approved": "estimateApprovedAck",
};

/**
 * Handle a parsed Tekmetric webhook body.
 * @param {any} body
 * @returns {Promise<{status:string, detail?:string}>}
 */
export async function handleTekmetricWebhook(body) {
  // VERIFY: event-type location. Assumed top-level `event` (or `type`).
  const eventType = body?.event || body?.type;
  if (!eventType) return { status: "ignored", detail: "no event type" };

  const ctx = extractContext(body);

  if (CANCEL_EVENTS.has(eventType)) {
    if (ctx.phone) cancelFallback(ctx.phone, eventType);
    const ackScript = CANCEL_ACK[eventType];
    if (ackScript && ctx.phone) {
      await sendWithFallback({ phone: ctx.phone, scriptId: ackScript, context: ctx });
    }
    return { status: "handled", detail: `cancel:${eventType}` };
  }

  const scriptId = EVENT_MAP[eventType];
  if (!scriptId) return { status: "ignored", detail: eventType };

  if (!ctx.phone) {
    console.warn(`[tekmetric] ${eventType}: no usable phone in payload`);
    return { status: "skipped", detail: "no phone" };
  }

  const result = await sendWithFallback({ phone: ctx.phone, scriptId, context: ctx });
  return { status: result.sent ? "sent" : "skipped", detail: result.reason || scriptId };
}

/**
 * Pull the fields the scripts need out of a Tekmetric payload.
 * VERIFY every path here against a real payload — these are best-guess shapes.
 * @param {any} body
 */
export function extractContext(body) {
  const data = body?.data ?? body ?? {};
  const customer = data.customer ?? data.customerInfo ?? {};
  const vehicle = data.vehicle ?? {};
  const ro = data.repairOrder ?? data.repair_order ?? {};

  // VERIFY: phone shape. Could be a flat string, or an array of
  // {number, type} objects. Try common shapes then normalize.
  const rawPhone =
    customer.phone ??
    customer.phoneNumber ??
    (Array.isArray(customer.phones) ? customer.phones[0]?.number : undefined) ??
    data.phone;

  const name =
    [customer.firstName, customer.lastName].filter(Boolean).join(" ") ||
    customer.name ||
    "";

  return {
    phone: normalizePhone(rawPhone),
    customerName: name,
    vehicle: {
      year: vehicle.year,
      make: vehicle.make,
      model: vehicle.model,
    },
    vehicleLabel: formatVehicle(vehicle),
    // VERIFY: appointment time field name (assumed `startTime`, ISO string).
    appointmentTime:
      data.appointment?.startTime ??
      data.startTime ??
      data.scheduledAt ??
      null,
    // VERIFY: money field. Assumed cents on the RO/estimate.
    amount:
      ro.amountDue ??
      ro.totalSales ??
      data.estimate?.total ??
      data.total ??
      null,
    roNumber: ro.repairOrderNumber ?? ro.number ?? data.repairOrderNumber ?? null,
  };
}

export default { handleTekmetricWebhook, extractContext };
