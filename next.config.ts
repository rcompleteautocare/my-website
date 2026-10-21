import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first, WebP as fallback.
    formats: ["image/avif", "image/webp"],
    // Cap the generated srcset at 1920. The default list tops out at 3840, so a
    // 2x display on a wide viewport pulled a 3840px variant of every full-width
    // shop photo — many times the bytes actually needed.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allowed `quality` values — Next 16 rejects any quality prop not listed here.
    qualities: [70, 75],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        // Everything under /images/ is content-addressed by name and only ever
        // replaced by a new filename, so it is safe to pin for a year.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/login",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      {
        source: "/command-center/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
      {
        // Long-lived immutable caching for static image/font assets in public/.
        // (_next/static is already immutable on Vercel; this covers /logo.png,
        // /badges/*, and the *.svg assets.)
        source: "/:all*(svg|png|jpg|jpeg|gif|webp|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // NOTE: Junk/malformed paths (bracket-wrapped URLs, pasted full URLs) are
      // no longer redirected here. They're handled in middleware.ts, which
      // returns 410 Gone — a cleaner deindex signal than a 308 to "/".
      {
        source: "/:path*",
        has: [{ type: "host", value: "rcompleteautocare.com" }],
        destination: "https://www.rcompleteautocare.com/:path*",
        permanent: true,
      },
      // Shop photos replaced with 1200x800 versions (Oct 2026); old paths were
      // live in the LocalBusiness JSON-LD, so keep them resolving.
      { source: "/images/shop/r-complete-auto-care-building-exterior.webp", destination: "/images/building-exterior-1200x800.webp", permanent: true },
      { source: "/images/shop/r-complete-auto-care-service-bays.webp", destination: "/images/repair-bay-1200x800.webp", permanent: true },
      { source: "/images/shop/r-complete-auto-care-waiting-room.webp", destination: "/images/waiting-room-1200x800.webp", permanent: true },
      // Old Google Ads sitelink URLs that never existed on this site (Oct 2026).
      { source: "/suspension-repair-crown-point-in", destination: "/services/suspension-steering", permanent: true },
      { source: "/check-engine-light-diagnostics-crown-point-in", destination: "/services/check-engine-light", permanent: true },
      { source: "/extended-warranty-repair", destination: "/services/extended-warranty-repair", permanent: true },
      { source: "/transmission-repair-crown-point-in", destination: "/services/transmission-repair", permanent: true },
      { source: "/electrical-diagnostics-crown-point-in", destination: "/services/electrical-diagnostics", permanent: true },
      {
        source: "/schedule-service",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/engine-repair-crown-point-in",
        destination: "/services/engine-repair",
        permanent: true,
      },
      {
        source: "/brake-repair-crown-point-in",
        destination: "/services/brake-repair",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
