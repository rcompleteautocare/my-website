// The customer-communication scripts. Each script has:
//   id            stable key used for logging + pending-store bookkeeping
//   expectsReply  whether a fallback call should be armed after sending
//   render(ctx)   returns the SMS body string
//
// Keep every message under ~320 chars (2 SMS segments) and always identify the
// shop + provide an opt-out affordance on the first touch. Reply keywords the
// inbound handler understands: C (confirm), R (reschedule), YES (book), STOP.
import { config } from "./config.js";
import {
  formatMoney,
  formatTime,
  formatVehicle,
  firstName,
} from "./util.js";

const shop = config.shop;

/**
 * ctx fields (all optional, scripts degrade gracefully):
 *   customerName, vehicle {year,make,model}, appointmentTime (ISO/Date),
 *   amount (cents), roNumber, estimateUrl
 */
export const scripts = {
  // 1 — Tekmetric: appointment created. Informational, no reply needed.
  appointmentConfirmation: {
    id: "appointmentConfirmation",
    expectsReply: false,
    render: (ctx) =>
      `Hi ${firstName(ctx.customerName)}, this is ${shop.name}. ` +
      `You're booked for ${formatVehicle(ctx.vehicle)} on ` +
      `${formatTime(ctx.appointmentTime, shop.timezone)}. ` +
      `Reply R to reschedule. Reply STOP to opt out.`,
  },

  // 2 — Cron: day-before reminder. Expects "C" to confirm.
  dayBeforeReminder: {
    id: "dayBeforeReminder",
    expectsReply: true,
    render: (ctx) =>
      `Reminder from ${shop.name}: ${formatVehicle(ctx.vehicle)} is scheduled ` +
      `for ${formatTime(ctx.appointmentTime, shop.timezone)}. ` +
      `Reply C to confirm or R to reschedule. Reply STOP to opt out.`,
  },

  // 3 — Tekmetric: estimate ready. Expects an approval reply.
  estimateReady: {
    id: "estimateReady",
    expectsReply: true,
    render: (ctx) =>
      `${shop.name}: your estimate for ${formatVehicle(ctx.vehicle)} is ready` +
      (ctx.amount != null ? ` — total ${formatMoney(ctx.amount)}` : "") +
      `. Reply YES to approve the work, or call us at ${shop.phone}. ` +
      `Reply STOP to opt out.`,
  },

  // 4 — Tekmetric: estimate approved (status change). Acknowledgement.
  estimateApprovedAck: {
    id: "estimateApprovedAck",
    expectsReply: false,
    render: (ctx) =>
      `Thanks ${firstName(ctx.customerName)}! We've got your approval and are ` +
      `getting started on ${formatVehicle(ctx.vehicle)}. We'll text when it's ready.`,
  },

  // 5 — Tekmetric: repair order completed / vehicle ready. Expects a reply.
  readyForPickup: {
    id: "readyForPickup",
    expectsReply: true,
    render: (ctx) =>
      `Good news from ${shop.name} — ${formatVehicle(ctx.vehicle)} is ready ` +
      `for pickup` +
      (ctx.amount != null ? `. Balance due: ${formatMoney(ctx.amount)}` : "") +
      `. We're open ${shopHoursHint()}. Reply C when you're on the way.`,
  },

  // 6 — Tekmetric: RO closed / picked up. Thank-you + review nudge. No reply.
  thankYou: {
    id: "thankYou",
    expectsReply: false,
    render: (ctx) =>
      `Thank you for choosing ${shop.name}, ${firstName(ctx.customerName)}! ` +
      `We hope ${formatVehicle(ctx.vehicle)} is running great. ` +
      `Questions? Call ${shop.phone}.`,
  },

  // 7 — Tekmetric: no-show. Expects a reply to rebook.
  noShow: {
    id: "noShow",
    expectsReply: true,
    render: (ctx) =>
      `Hi ${firstName(ctx.customerName)}, we missed you at ${shop.name} today ` +
      `for ${formatVehicle(ctx.vehicle)}. Reply YES to rebook or R for a ` +
      `reschedule link. Reply STOP to opt out.`,
  },

  // 8 — Inbound reply "R": send reschedule link.
  rescheduleLink: {
    id: "rescheduleLink",
    expectsReply: false,
    render: () =>
      `No problem — reschedule ${shop.name} here: ${shop.rescheduleUrl}`,
  },

  // 9 — Inbound reply "YES" (no active estimate): send booking link.
  bookingLink: {
    id: "bookingLink",
    expectsReply: false,
    render: () => `Great! Book your visit with ${shop.name}: ${shop.bookingUrl}`,
  },

  // 10 — Inbound reply "STOP": opt-out confirmation (last message we send).
  optOutConfirmation: {
    id: "optOutConfirmation",
    expectsReply: false,
    render: () =>
      `You're unsubscribed from ${shop.name} texts and won't receive more. ` +
      `Call ${shop.phone} anytime.`,
  },

  // 11 — Inbound reply "C": confirmation acknowledgement.
  confirmationAck: {
    id: "confirmationAck",
    expectsReply: false,
    render: (ctx) =>
      `You're all set, ${firstName(ctx.customerName)} — see you at ${shop.name}! ` +
      `Reply R if you need to reschedule.`,
  },
};

function shopHoursHint() {
  return "Mon–Fri 8a–6p, Sat 8a–2p";
}

/**
 * Render a script by id with context. Throws on unknown id so mapping bugs
 * surface immediately rather than sending an empty text.
 * @param {string} id
 * @param {object} ctx
 * @returns {{id:string, body:string, expectsReply:boolean}}
 */
export function renderScript(id, ctx = {}) {
  const script = scripts[id];
  if (!script) throw new Error(`Unknown script id: ${id}`);
  return {
    id: script.id,
    body: script.render(ctx),
    expectsReply: script.expectsReply,
  };
}

export default scripts;
