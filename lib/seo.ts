import type { Metadata } from "next";

// Shared Open Graph / Twitter card values.
//
// Next.js does NOT deep-merge `openGraph` or `twitter` between a layout and a
// page: a page that sets `openGraph` replaces the layout's object wholesale.
// So the root layout uses SITE_OPEN_GRAPH / SITE_TWITTER as the fallback for
// pages that set nothing, and pages that want their own og:title / og:url build
// the full objects with socialMetadata() so the site-wide values come along.

export const SITE_URL = "https://www.rcompleteautocare.com";
export const SITE_NAME = "R Complete Auto Care";

// 1200x630 share image in public/. Keep the filename: it is referenced by
// already-shared links.
export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "R Complete Auto Care — diagnostic-first auto repair in Crown Point, IN",
};

export const SITE_OPEN_GRAPH: NonNullable<Metadata["openGraph"]> = {
  siteName: SITE_NAME,
  locale: "en_US",
  type: "website",
  images: [OG_IMAGE],
};

export const SITE_TWITTER: NonNullable<Metadata["twitter"]> = {
  card: "summary_large_image",
  images: [OG_IMAGE.url],
};

/**
 * Page-specific Open Graph + Twitter metadata with the site defaults filled in.
 * `path` is the route path ("/repair-guides"); it becomes an absolute og:url.
 */
export function socialMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: { ...SITE_OPEN_GRAPH, type, title, description, url: `${SITE_URL}${path}` },
    twitter: { ...SITE_TWITTER, title, description },
  };
}
