// Tekmetric REST client: OAuth2 client-credentials auth, token caching,
// paging, and retry with backoff.
//
// ⚠️ Built to the DOCUMENTED shape but not yet confirmed against a live shop.
// Each assumption is flagged with a VERIFY comment right where you'd edit it.
// Trigger each event/endpoint once in the sandbox, log the raw response, and
// confirm the paths below.
import { config } from "./config.js";

const tm = config.tekmetric;

/** @type {{token:string, expiresAt:number}|null} */
let cachedToken = null;

async function getAccessToken() {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.token;
  }
  if (!tm.clientId || !tm.clientSecret) {
    throw new Error("Tekmetric CLIENT_ID / CLIENT_SECRET missing.");
  }

  const basic = Buffer.from(`${tm.clientId}:${tm.clientSecret}`).toString(
    "base64",
  );
  // VERIFY: OAuth token path. Documented as the OAuth2 token endpoint; confirm
  // it is `/api/v1/oauth/token` for your account (some tenants expose /oauth2).
  const res = await fetch(`${tm.baseUrl}/api/v1/oauth/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials" }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Tekmetric auth failed (${res.status}): ${detail}`);
  }
  const data = await res.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000,
  };
  return cachedToken.token;
}

/**
 * Authenticated GET with retry/backoff on 429 + 5xx.
 * @param {string} path e.g. "/api/v1/appointments"
 * @param {Record<string,string|number>} [query]
 * @returns {Promise<any>}
 */
async function apiGet(path, query = {}) {
  const url = new URL(`${tm.baseUrl}${path}`);
  for (const [k, v] of Object.entries(query)) {
    if (v != null) url.searchParams.set(k, String(v));
  }

  const maxAttempts = 4;
  let attempt = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    attempt++;
    const token = await getAccessToken();
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    });

    if (res.ok) return res.json();

    // Token might have gone stale; drop cache and retry once immediately.
    if (res.status === 401 && attempt === 1) {
      cachedToken = null;
      continue;
    }
    const retryable = res.status === 429 || res.status >= 500;
    if (retryable && attempt < maxAttempts) {
      const backoff = 2 ** attempt * 250; // 0.5s, 1s, 2s
      await sleep(backoff);
      continue;
    }
    const detail = await res.text().catch(() => "");
    throw new Error(`Tekmetric GET ${path} failed (${res.status}): ${detail}`);
  }
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Fetch all pages for a Spring-style paged endpoint.
 * VERIFY: pagination field names. Tekmetric uses Spring paging — items under
 * `content`, page count under `totalPages`. Confirm both against a raw response.
 * @param {string} path
 * @param {Record<string,string|number>} [query]
 * @returns {Promise<any[]>}
 */
async function getAllPages(path, query = {}) {
  const out = [];
  let page = 0;
  let totalPages = 1;
  do {
    const data = await apiGet(path, { ...query, page, size: 100 });
    const items = Array.isArray(data?.content) ? data.content : [];
    out.push(...items);
    totalPages = Number.isFinite(data?.totalPages) ? data.totalPages : 1;
    page++;
  } while (page < totalPages);
  return out;
}

/**
 * Appointments within a date range (inclusive), for the configured shop.
 * VERIFY: the /appointments date-filter param names. Assumed `start`/`end` as
 * ISO datetimes; some tenants use `startDate`/`endDate` or epoch millis.
 * @param {string} startISO
 * @param {string} endISO
 * @returns {Promise<any[]>}
 */
export async function getAppointmentsBetween(startISO, endISO) {
  return getAllPages("/api/v1/appointments", {
    shop: tm.shopId,
    start: startISO,
    end: endISO,
  });
}

/**
 * Look up a customer record.
 * @param {string|number} customerId
 * @returns {Promise<any>}
 */
export async function getCustomer(customerId) {
  return apiGet(`/api/v1/customers/${customerId}`);
}

/**
 * Look up a repair order (for balance/amount + vehicle on completion events).
 * @param {string|number} roId
 * @returns {Promise<any>}
 */
export async function getRepairOrder(roId) {
  return apiGet(`/api/v1/repair-orders/${roId}`);
}

export default {
  getAppointmentsBetween,
  getCustomer,
  getRepairOrder,
};
