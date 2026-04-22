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
      {
        source: "/transmission-repair-crown-point-in",
        destination: "/services/transmission-repair",
        permanent: true,
      },
      {
        source: "/oil-change-crown-point-in",
        destination: "/services/oil-change-maintenance",
        permanent: true,
      },
      {
        source: "/oil-change-crown-point",
        destination: "/services/oil-change-maintenance",
        permanent: true,
      },
      {
        source: "/ac-repair-crown-point-in",
        destination: "/ac-not-blowing-cold-crown-point-in",
        permanent: true,
      },
      {
        source: "/ac-heating-repair-crown-point-in",
        destination: "/services/ac-heating-repair",
        permanent: true,
      },
      {
        source: "/suspension-repair-crown-point-in",
        destination: "/services/suspension-steering",
        permanent: true,
      },
      {
        source: "/electrical-diagnostics-crown-point-in",
        destination: "/services/electrical-diagnostics",
        permanent: true,
      },
      {
        source: "/check-engine-light-crown-point-in",
        destination: "/services/check-engine-light",
        permanent: true,
      },
      {
        source: "/check-engine-light-crown-point",
        destination: "/services/check-engine-light",
        permanent: true,
      },
      {
        source: "/no-start-diagnostics-crown-point-in",
        destination: "/services/no-start-diagnostics",
        permanent: true,
      },
      {
        source: "/diagnostics-crown-point-in",
        destination: "/services/diagnostics",
        permanent: true,
      },
      {
        source: "/extended-warranty-repair-crown-point-in",
        destination: "/extended-warranty-auto-repair-crown-point-in",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;