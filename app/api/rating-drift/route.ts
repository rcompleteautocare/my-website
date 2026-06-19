import { RATING, REVIEW_COUNT } from "@/lib/rating";
import { PLACE_ID } from "@/lib/place";

// Never cache: this is an on-demand, weekly drift check.
export const dynamic = "force-dynamic";
export const revalidate = 0;

const PLACES_ENDPOINT = "https://places.googleapis.com/v1/places";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// POSTs the drift alert to a webhook (e.g. Zapier/Make) when configured. If
// DRIFT_WEBHOOK_URL is not set, the drift is still logged (visible in Vercel
// cron logs) and returned in the response — it just isn't pushed anywhere.
async function notifyOwner(message: string, payload: Record<string, unknown>) {
  const webhookUrl = process.env.DRIFT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("rating-drift: DRIFT_WEBHOOK_URL not set; drift not pushed.", message);
    return { sent: false, reason: "notify_not_configured" };
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, ...payload }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("rating-drift: webhook POST failed", res.status, text);
    return { sent: false, reason: `webhook_failed_${res.status}` };
  }

  return { sent: true };
}

export async function GET(req: Request) {
  // When CRON_SECRET is set, require the Bearer token Vercel Cron attaches.
  // This keeps the endpoint (and our Places API quota) from public abuse.
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const auth = req.headers.get("authorization") ?? "";
    if (auth !== `Bearer ${cronSecret}`) {
      return json({ error: "Unauthorized" }, 401);
    }
  }

  const apiKey = process.env.PLACES_API_KEY;
  if (!apiKey) {
    console.error("rating-drift: missing PLACES_API_KEY env var");
    return json({ error: "Server misconfigured: PLACES_API_KEY missing" }, 500);
  }

  const placeId = process.env.PLACES_PLACE_ID || PLACE_ID;
  if (!placeId || placeId === "REPLACE_WITH_PLACE_ID") {
    console.warn("rating-drift: PLACE_ID not configured; skipping check.");
    return json({ ok: true, skipped: "place_id_not_configured" });
  }

  let live: { rating?: number; userRatingCount?: number };
  try {
    const res = await fetch(`${PLACES_ENDPOINT}/${encodeURIComponent(placeId)}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Places API ${res.status}: ${text}`);
    }

    live = await res.json();
  } catch (err) {
    console.error("rating-drift: Places API request failed", err);
    return json({ error: "Places API request failed" }, 502);
  }

  const liveRating = typeof live?.rating === "number" ? live.rating : null;
  const liveCount = typeof live?.userRatingCount === "number" ? live.userRatingCount : null;

  // Ratings carry one decimal; treat a >= 0.05 gap as a real change.
  const ratingDrift = liveRating === null || Math.abs(liveRating - RATING) >= 0.05;
  const countDrift = liveCount === null || liveCount !== REVIEW_COUNT;
  const drift = ratingDrift || countDrift;

  const site = { rating: RATING, reviewCount: REVIEW_COUNT };
  const liveValues = { rating: liveRating, userRatingCount: liveCount };

  if (!drift) {
    return json({ ok: true, drift: false, live: liveValues, site });
  }

  const message =
    `Live Google: ${liveRating ?? "?"} / ${liveCount ?? "?"} reviews; ` +
    `site shows ${RATING} / ${REVIEW_COUNT} — update lib/rating.js.`;
  const notify = await notifyOwner(message, { live: liveValues, site });

  // Intentionally NOT writing or caching the live values anywhere — the public
  // number stays the owner-confirmed constant in lib/rating.js until a human
  // updates it. This route is an internal drift alert only.
  return json({ ok: true, drift: true, message, notify, live: liveValues, site });
}
