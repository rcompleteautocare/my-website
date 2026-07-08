import { NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Junk paths that no legitimate route ever produces: a bracket-wrapped URL,
  // or a full URL pasted where a path belongs. These come from scrapers and
  // broken outbound links, e.g.:
  //   /[https://www.rcompleteautocare.com]
  //   /%5Bhttps%3A%2F%2Fwww.rcompleteautocare.com%5D
  //   /https://www.rcompleteautocare.com
  // Return 410 Gone so crawlers permanently deindex them, rather than
  // 308-redirecting to "/" (which reads as a soft 404 and can bloat the index
  // with junk-URL → homepage duplicates). No real route starts with "[" or a
  // protocol, so this is safe.
  if (
    path.startsWith('/[') ||      // literal bracket-wrapped path
    /^\/%5[Bb]/.test(path) ||     // percent-encoded "[" prefix
    /^\/https?:\//i.test(path) || // pasted full URL (unencoded)
    path.includes('[http') ||
    path.includes('%5Bhttp')
  ) {
    return new NextResponse(null, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals, API routes, the well-known metadata files, and any
  // static asset in public/ (images/fonts) — junk paths never end in these
  // extensions, so there's no reason to invoke the edge function for them.
  matcher: [
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|llms.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2)$).*)',
  ],
};
