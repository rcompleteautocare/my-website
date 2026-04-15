import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rcompleteautocare.com";
  const siteLastModified = new Date("2025-04-15");

  return [
    { url: baseUrl, lastModified: siteLastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/diagnostics`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/check-engine-light`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/electrical-diagnostics`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/no-start-diagnostics`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/engine-repair`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/transmission-repair`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/brake-repair`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/suspension-steering`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/oil-change-maintenance`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/ac-heating-repair`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services/extended-warranty-repair`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/auto-repair-crown-point-in`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-st-john-in`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-schererville-in`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-merrillville-in`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/auto-repair-cedar-lake-in`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/car-overheating-crown-point-in`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/car-wont-start-crown-point-in`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/check-engine-light-flashing-crown-point`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/extended-warranty-auto-repair-crown-point-in`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mechanic-near-me-crown-point`, lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
