import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  async headers() {
    return [
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
      {
        // Kill the 404s from a malformed bracketed URL being resolved as a
        // relative path. Catches every encoding of a path that begins with a
        // literal or percent-encoded "[" — covering all reported variants:
        //   /[https://www.rcompleteautocare.com]
        //   /%5Bhttps://www.rcompleteautocare.com%5D
        //   /%5Bhttps%3A%2F%2Fwww.rcompleteautocare.com%5D
        // No legitimate route starts with "[" or "%5B", so this is safe.
        // (permanent: true -> 308, Next's method-preserving permanent redirect.)
        source: "/:malformed((?:\\[|%5[Bb]).*)",
        destination: "/",
        permanent: true,
      },
      {
        // Kill the soft-404s from a broken external citation that embeds an
        // absolute URL in the path, e.g. a link written as
        //   rcompleteautocare.com/https://www.rcompleteautocare.com
        // The browser/server collapses the "//" so the request arrives as a
        // path that *begins with a protocol*:
        //   /https:/www.rcompleteautocare.com
        //   /http://example.com
        //   /https%3A%2F%2Fwww.rcompleteautocare.com   (percent-encoded ":")
        // Match http/https immediately followed by a literal ":" or its
        // percent-encoded form "%3A". No legitimate route starts with a
        // protocol, so this is safe. (permanent: true -> 308.)
        source: "/:embeddedProtocol(https?(?::|%3[Aa]).*)",
        destination: "/",
        permanent: true,
      },
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