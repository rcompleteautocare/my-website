// Single source of truth for classifying junk/malformed request paths.
//
// Two distinct concerns share these predicates:
//   1. proxy.ts uses `isMalformedUrlPath` to return 410 Gone for bracket-wrapped
//      or pasted-full-URL paths, so crawlers permanently deindex them.
//   2. The Vercel Analytics `beforeSend` hook (components/SiteTracking.tsx) uses
//      both predicates to drop these events, so bogus paths never inflate the
//      visitor/pageview counts.
//
// No legitimate route in this app ever contains a URL, a protocol, or a bracket
// in its path, so these checks are safe. Real examples seen in the wild:
//   /[https://www.rcompleteautocare.com]        (bracket-wrapped, from a broken
//                                                 outbound/citation link)
//   /%5Bhttps%3A%2F%2Fwww.rcompleteautocare.com%5D   (percent-encoded variant)
//   /https://www.rcompleteautocare.com          (pasted full URL as a path)
//   /{ignore}  /%7Bignore%7D                     (template-injection scanner probes)

/**
 * A bracket-wrapped URL, a percent-encoded bracket, or a pasted full URL used
 * where a path belongs. These are handled at the edge (410 Gone) *and* filtered
 * from analytics.
 *
 * @param {string} pathname - The request pathname (e.g. `req.nextUrl.pathname`).
 * @returns {boolean}
 */
export function isMalformedUrlPath(pathname) {
  if (typeof pathname !== "string") return false;
  return (
    pathname.startsWith("/[") || // literal bracket-wrapped path
    /^\/%5[Bb]/.test(pathname) || // percent-encoded "[" prefix
    /^\/https?:\//i.test(pathname) || // pasted full URL (unencoded)
    pathname.includes("[http") ||
    pathname.includes("%5Bhttp")
  );
}

/**
 * Template-injection / fuzzing probes such as `/{ignore}` or its encoded form
 * `/%7Bignore%7D`. These are automated scanner noise — no real route contains a
 * curly brace. We deliberately do *not* 410 these (a plain 404 is the right HTTP
 * answer for a scanner), but we do keep them out of analytics.
 *
 * @param {string} pathname
 * @returns {boolean}
 */
export function isProbePath(pathname) {
  if (typeof pathname !== "string") return false;
  return /[{}]/.test(pathname) || /%7[BbDd]/.test(pathname);
}

/**
 * True when a pathname should never be counted as an analytics pageview because
 * it is a malformed-URL path or an automated scanner probe. Callers filter
 * private/admin routes separately.
 *
 * @param {string} pathname
 * @returns {boolean}
 */
export function isUntrackablePath(pathname) {
  return isMalformedUrlPath(pathname) || isProbePath(pathname);
}
