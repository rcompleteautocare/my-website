// Daily sweep: text a day-before reminder for every appointment scheduled
// tomorrow (shop local time). Run from cron/scheduler once a day, e.g. 5pm:
//
//   node src/jobs/dayBeforeReminders.js
//
// Each reminder expects a "C" reply and arms the SMS-first / call-fallback flow.
import { config } from "../config.js";
import { getAppointmentsBetween } from "../tekmetricClient.js";
import { sendWithFallback } from "../fallback.js";
import { extractContext } from "../webhooks/tekmetric.js";

/**
 * Return [startISO, endISO] spanning the whole of "tomorrow" in shop tz.
 * @param {Date} [now]
 */
function tomorrowRange(now = new Date()) {
  // Compute the shop-local Y-M-D for tomorrow, then bound the day in UTC-ish
  // ISO. This is intentionally simple; a DST-exact bound would use a tz lib.
  const tz = config.shop.timezone;
  const fmt = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const ymd = fmt.format(tomorrow); // "YYYY-MM-DD"
  return [`${ymd}T00:00:00`, `${ymd}T23:59:59`];
}

export async function runDayBeforeReminders(now = new Date()) {
  const [startISO, endISO] = tomorrowRange(now);
  console.log(`[reminders] sweeping appointments ${startISO} .. ${endISO}`);

  let appointments;
  try {
    appointments = await getAppointmentsBetween(startISO, endISO);
  } catch (err) {
    console.error("[reminders] failed to fetch appointments:", err.message);
    process.exitCode = 1;
    return { sent: 0, failed: 0, total: 0 };
  }

  console.log(`[reminders] ${appointments.length} appointment(s) tomorrow`);

  let sent = 0;
  let failed = 0;
  for (const appt of appointments) {
    // The reminder reuses the same context extractor as the webhook so field
    // handling stays in one place. VERIFY the appointment payload shape.
    const ctx = extractContext({ event: "appointment.reminder", data: appt });
    if (!ctx.phone) {
      console.warn(`[reminders] skipping appointment ${appt?.id}: no phone`);
      continue;
    }
    const result = await sendWithFallback({
      phone: ctx.phone,
      scriptId: "dayBeforeReminder",
      context: ctx,
    });
    if (result.sent) sent++;
    else failed++;
  }

  console.log(`[reminders] done: ${sent} sent, ${failed} skipped/failed`);
  return { sent, failed, total: appointments.length };
}

// Run when invoked directly (node src/jobs/dayBeforeReminders.js).
const invokedDirectly =
  process.argv[1] && process.argv[1].endsWith("dayBeforeReminders.js");
if (invokedDirectly) {
  runDayBeforeReminders()
    .then(() => {
      // Give any in-flight fallback timers a chance? No — reminders only *arm*
      // timers that live in this short-lived process; the process should exit
      // after sending. Fallback calls for reminders therefore require the
      // long-running server, or a durable queue (see README hardening notes).
      process.exit(process.exitCode ?? 0);
    })
    .catch((err) => {
      console.error("[reminders] fatal:", err);
      process.exit(1);
    });
}

export default { runDayBeforeReminders };
