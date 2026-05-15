import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rcompleteautocare.com";
  const lastModified = "2026-05-15";

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/inspection-checklist`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/diagnostics`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/check-engine-light`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/electrical-diagnostics`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/no-start-diagnostics`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/engine-repair`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/transmission-repair`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/brake-repair`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/suspension-steering`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/oil-change-maintenance`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/ac-heating-repair`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/extended-warranty-repair`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/auto-repair-crown-point-in`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-st-john-in`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-schererville-in`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-merrillville-in`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-cedar-lake-in`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/car-overheating-crown-point-in`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/car-wont-start-crown-point-in`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/check-engine-light-flashing-crown-point`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/transmission-slipping-crown-point-in`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/extended-warranty-auto-repair-crown-point-in`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/mechanic-near-me-crown-point`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];
}
