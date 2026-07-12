import { MetadataRoute } from "next";
import { repairGuides } from "@/lib/repair-guides";
import { warrantyProviders } from "@/lib/warranty-providers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rcompleteautocare.com";

  const core: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: "2026-04-15", changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: "2026-04-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: "2026-04-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/book`, lastModified: "2026-06-19", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/inspection-checklist`, lastModified: "2026-04-16", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/diagnostics`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.9 },
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
    { url: `${baseUrl}/transmission-slipping-crown-point-in`, lastModified: "2026-04-22", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/extended-warranty-auto-repair-crown-point-in`, lastModified: "2026-04-14", changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/mechanic-near-me-crown-point`, lastModified: "2026-04-14", changeFrequency: "weekly", priority: 0.8 },
  ];
  const resources: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/repair-guides`, lastModified: "2026-07-10", changeFrequency: "monthly", priority: 0.8 },
    ...Object.keys(repairGuides).map(slug => ({ url: `${baseUrl}/repair-guides/${slug}`, lastModified: "2026-07-10", changeFrequency: "monthly" as const, priority: 0.75 })),
    { url: `${baseUrl}/warranty-resources`, lastModified: "2026-07-10", changeFrequency: "monthly", priority: 0.8 },
    ...Object.keys(warrantyProviders).map(slug => ({ url: `${baseUrl}/warranty-resources/${slug}`, lastModified: "2026-07-10", changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
  return [...core, ...resources];
}
