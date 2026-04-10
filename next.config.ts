import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "rcompleteautocare.com" }],
        destination: "https://www.rcompleteautocare.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
