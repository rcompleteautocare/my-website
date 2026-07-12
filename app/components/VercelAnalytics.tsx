"use client";

import { Analytics } from "@vercel/analytics/next";

// Junk paths that no legitimate route ever produces: bracket-wrapped URLs or a
// full URL pasted where a path belongs, e.g. `/[https://www.rcompleteautocare.com]`.
// These come from scrapers and broken outbound links. proxy.ts already returns
// 410 Gone for them server-side; this mirrors those rules so the client-side
// analytics beacon never reports them either, keeping Vercel Analytics limited
// to real pathnames (/, /contact, /book, …).
function isJunkPath(pathname: string): boolean {
  return (
    pathname.startsWith("/[") ||      // literal bracket-wrapped path
    /^\/%5[Bb]/.test(pathname) ||     // percent-encoded "[" prefix
    /^\/https?:\//i.test(pathname) || // pasted full URL (unencoded)
    pathname.includes("[http") ||
    pathname.includes("%5Bhttp")
  );
}

export default function VercelAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        // event.url is the full href; Vercel derives the recorded route from
        // its pathname. Drop the event entirely for junk paths so they never
        // pollute the dashboard; let every real pageview through untouched.
        try {
          if (isJunkPath(new URL(event.url).pathname)) return null;
        } catch {
          return null;
        }
        return event;
      }}
    />
  );
}
