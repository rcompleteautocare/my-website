import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rcompleteautocare.com";

  return [
    { url: baseUrl, lastModified: "2026-04-15", changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: "2026-04-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/diagnostics`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/check-engine-light`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/electrical-diagnostics`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/no-start-diagnostics`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/engine-repair`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/transmission-repair`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/brake-repair`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/suspension-steering`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/oil-change-maintenance`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/ac-heating-repair`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/extended-warranty-repair`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/auto-repair-crown-point-in`, lastModified: "2026-04-14", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-st-john-in`, lastModified: "2026-04-14", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-schererville-in`, lastModified: "2026-04-14", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-merrillville-in`, lastModified: "2026-04-14", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-cedar-lake-in`, lastModified: "2026-04-14", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/car-overheating-crown-point-in`, lastModified: "2026-04-14", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/car-wont-start-crown-point-in`, lastModified: "2026-04-14", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/check-engine-light-flashing-crown-point`, lastModified: "2026-04-14", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/extended-warranty-auto-repair-crown-point-in`, lastModified: "2026-04-14", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/mechanic-near-me-crown-point`, lastModified: "2026-04-14", changeFrequency: "weekly", priority: 0.8 },
  ];
}
