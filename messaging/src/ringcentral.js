// RingCentral: SMS send + voice fallback call.
//
// Auth uses the JWT auth flow (server-only app): exchange the app's JWT
// credential for a short-lived access token, cache it, and refresh on expiry.
//
// ⚠️ Automated voice delivery. RingCentral has no one-line "call this number
// and read this text" endpoint. This scaffold uses **RingOut**: it rings the
// shop line first, then bridges the customer — so a human at the shop delivers
// the message. That runs end-to-end today. For a TRUE unattended recorded/TTS
// call you need one of:
//   (a) RingCentral Programmable Voice (call control) + an audio/TTS source, or
//   (b) a TTS-capable voice provider (Twilio/Telnyx <Say>) alongside RC SMS.
// The RingOut call below is the drop-in that works without extra infra.
import { config } from "./config.js";
import { normalizePhone } from "./util.js";

const rc = config.ringcentral;

/** @type {{token:string, expiresAt:number}|null} */
let cachedToken = null;

async function getAccessToken() {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.token;
  }
  if (!rc.clientId || !rc.clientSecret || !rc.jwt) {
    throw new Error(
      "RingCentral credentials missing (CLIENT_ID / CLIENT_SECRET / JWT).",
    );
  }

  const basic = Buffer.from(`${rc.clientId}:${rc.clientSecret}`).toString(
    "base64",
  );
  const res = await fetch(`${rc.server}/restapi/oauth/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: rc.jwt,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`RingCentral auth failed (${res.status}): ${detail}`);
  }
  const data = await res.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000,
  };
  return cachedToken.token;
}

async function rcFetch(path, body) {
  const token = await getAccessToken();
  const res = await fetch(`${rc.server}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  let json;
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(
      `RingCentral ${path} failed (${res.status}): ${json?.message || text}`,
    );
    err.status = res.status;
    throw err;
  }
  return json;
}

/**
 * Send an SMS from the shop number.
 * @param {string} to  destination phone (any format; normalized to E.164)
 * @param {string} text
 * @returns {Promise<{id:string}>}
 */
export async function sendSms(to, text) {
  const dest = normalizePhone(to);
  if (!dest) throw new Error(`Invalid destination phone: ${to}`);
  if (!rc.fromNumber) throw new Error("RINGCENTRAL_FROM_NUMBER is not set.");

  const result = await rcFetch(
    "/restapi/v1.0/account/~/extension/~/sms",
    {
      from: { phoneNumber: rc.fromNumber },
      to: [{ phoneNumber: dest }],
      text,
    },
  );
  return { id: String(result.id ?? "") };
}

/**
 * Place the fallback voice call via RingOut (shop line bridges to customer).
 * @param {string} to  customer phone
 * @returns {Promise<{id:string}>}
 */
export async function placeCall(to) {
  const dest = normalizePhone(to);
  if (!dest) throw new Error(`Invalid destination phone: ${to}`);
  if (!rc.fromNumber) throw new Error("RINGCENTRAL_FROM_NUMBER is not set.");

  const result = await rcFetch(
    "/restapi/v1.0/account/~/extension/~/ring-out",
    {
      from: { phoneNumber: rc.fromNumber },
      to: { phoneNumber: dest },
      // Ring the shop line first so a person is on the line before the
      // customer picks up.
      playPrompt: true,
    },
  );
  return { id: String(result.id ?? "") };
}

export default { sendSms, placeCall };
