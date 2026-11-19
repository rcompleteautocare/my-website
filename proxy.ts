import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';
import { auth } from '@/auth';
import { isMalformedUrlPath } from '@/lib/junk-paths';

// Auth.js only runs for the private Command Center. Wrapping *every* request in
// auth() made it issue authjs.csrf-token / authjs.callback-url cookies to
// anonymous visitors and crawlers on public marketing pages — which also makes
// those responses uncacheable. /login needs no proxy auth: the page itself is
// public and its sign-in calls go to /api/auth/*, which the matcher excludes.
// The explicit (req, event) signature makes TypeScript pick the middleware
// overload of auth() rather than the route-handler one.
const guardCommandCenter: NextMiddleware = auth((req, event: NextFetchEvent) => {
  void event;
  if (!req.auth) {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
});

function isCommandCenterPath(path: string) {
  return path === '/command-center' || path.startsWith('/command-center/');
}

export function proxy(req: NextRequest, event: NextFetchEvent) {
  const path = req.nextUrl.pathname;

  // Junk paths that no legitimate route ever produces: a bracket-wrapped URL,
  // or a full URL pasted where a path belongs. These come from scrapers and
  // broken outbound links, e.g.:
  //   /[https://www.rcompleteautocare.com]
  //   /%5Bhttps%3A%2F%2Fwww.rcompleteautocare.com%5D
  //   /https://www.rcompleteautocare.com
  // Return 410 Gone so crawlers permanently deindex them, rather than
  // 308-redirecting to "/" (which reads as a soft 404 and can bloat the index
  // with junk-URL → homepage duplicates). The same classifier keeps these out
  // of analytics (see components/SiteTracking.tsx). Applies to ALL paths.
  if (isMalformedUrlPath(path)) {
    return new NextResponse(null, { status: 410 });
  }

  if (isCommandCenterPath(path)) {
    return guardCommandCenter(req, event);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals, API routes, the well-known metadata files, and any
  // static asset in public/ (images/fonts) — junk paths never end in these
  // extensions, so there's no reason to invoke the edge function for them.
  matcher: [
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|llms.txt|.*\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2)$).*)',
  ],
};
