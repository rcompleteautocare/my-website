# R Complete Auto Care — Messaging Automation

A small Node service that sends the customer-communication scripts over **RingCentral SMS**,
triggered by **Tekmetric webhooks**, with an **SMS-first / voice-fallback** flow and basic
compliance (opt-out + quiet hours). This is the custom-code alternative to building the same
thing as no-code Zaps in Zapier.

## What it does

1. Tekmetric fires a webhook (appointment created, estimate ready, RO completed, no-show, etc.).
2. The service maps that event to the matching script and sends the SMS via RingCentral.
3. For scripts that expect a reply (day-before confirmation, estimate approval, ready-for-pickup,
   no-show), it arms a **fallback call**. If the customer hasn't replied within
   `FALLBACK_DELAY_MINUTES`, it places the call. A reply — or the relevant Tekmetric status
   change — cancels the call automatically.
4. Inbound texts are handled: `C` confirms, `R` sends a reschedule link, `YES` sends a booking
   link, `STOP` opts the number out.

## Setup

```bash
cd messaging
npm install
cp .env.example .env      # fill in RingCentral + Tekmetric credentials
npm start                 # starts the webhook server (default :3333)
```

Run the daily day-before reminders (cron / scheduler):

```bash
npm run reminders         # == node src/jobs/dayBeforeReminders.js
```

## Wiring the webhooks

- **Tekmetric** → point its webhooks at `POST https://your-host/webhooks/tekmetric`.
  Send the shared secret as the `X-Webhook-Token` header (or `?token=`) matching
  `TEKMETRIC_WEBHOOK_SECRET`.
- **RingCentral inbound SMS** → create a subscription pointed at
  `POST https://your-host/webhooks/ringcentral/inbound-sms` (the service auto-handles the
  `Validation-Token` handshake).

For local testing, expose your port with a tunnel (ngrok/Cloudflare Tunnel) and use that URL.

## File map

| File | Purpose |
|---|---|
| `src/server.js` | Express app + webhook routes |
| `src/config.js` | Env + shop config |
| `src/scripts.js` | The 11 message templates + renderer |
| `src/fallback.js` | SMS-first-then-call orchestration |
| `src/ringcentral.js` | RingCentral SMS + voice calls |
| `src/tekmetricClient.js` | Tekmetric OAuth2 + REST client (auth, paging, retry) |
| `src/util.js` | Money/time/phone/vehicle formatters |
| `src/compliance.js` | Quiet hours + opt-out |
| `src/pendingStore.js` | Tracks messages awaiting a reply |
| `src/webhooks/tekmetric.js` | Event → script mapping |
| `src/webhooks/inboundSms.js` | Reply handling (C / R / YES / STOP) |
| `src/jobs/dayBeforeReminders.js` | Daily reminder sweep (calls the Tekmetric API) |

## ⚠️ Before this goes live — verify these

This is a scaffold. Three things use **reasonable assumptions, not confirmed values**, because
they depend on your accounts and the live API docs:

1. **Tekmetric event names, payload fields, and a few API specifics**
   (`src/webhooks/tekmetric.js`, `src/tekmetricClient.js`, `src/util.js`). The
   client is built to the documented shape — OAuth2 client-credentials, `/api/v1`,
   cents for money, Spring-style paging — but trigger each event/endpoint once in
   the **sandbox**, log the raw response, and confirm: the OAuth token path, the
   `/appointments` date-filter param names, the pagination field names
   (`content`/`totalPages`), the appointment time field, and the customer phone
   shape. Each of these is flagged with a `VERIFY` comment right where you'd edit it.
2. **Automated voice delivery** (`src/ringcentral.js`). RingCentral has no one-line "call and read
   this text" API. The scaffold uses **RingOut** (rings your shop line, then bridges the customer)
   so it runs end-to-end. For a true unattended recorded/TTS message you need RingCentral's
   Programmable Voice + an audio/TTS source, or a TTS-capable voice provider alongside RingCentral
   SMS. Comments in that file spell out the options.
3. **RingCentral inbound SMS payload path** (`src/server.js`). Confirm SMS text arrives in
   `body.body.subject` for your event type.

## ⚠️ Compliance — not optional

- **A2P 10DLC**: register your RingCentral number/brand/campaign or automated SMS will be filtered.
- **Opt-out**: `STOP` handling is built in; the opt-out list is persisted to `optout.json` so it
  survives restarts. Move it to a database before running more than one instance.
- **Quiet hours**: no SMS/calls outside `QUIET_HOURS_START`–`QUIET_HOURS_END` (shop local time).
  Right now messages outside that window are **dropped**; for production you'd want to *queue* them
  to send at the next allowed time instead.

## Production hardening (scaffold shortcuts to replace)

- `pendingStore.js` uses in-memory `setTimeout` timers — they die on restart and don't scale.
  Replace with a durable queue (BullMQ/Redis, Cloud Tasks, or a scheduled DB sweep).
- The opt-out list in `compliance.js` is a local JSON file — move it to a database.
- Add retry/backoff around RingCentral calls and dead-letter logging for failed sends.
- Keep secrets in a secrets manager, not a committed `.env`.
