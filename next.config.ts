import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  async headers() {
    return [
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
