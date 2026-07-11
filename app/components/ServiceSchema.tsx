// Shared Service JSON-LD tied to the LocalBusiness entity (#business).
// Reuses the site-wide escaping pattern: JSON.stringify(...).replace(/</g, "<").
const BASE = "https://www.rcompleteautocare.com";
const AREA_SERVED = ["Crown Point", "St. John", "Schererville", "Merrillville", "Cedar Lake"];

export default function ServiceSchema({
  name,
  serviceType,
  path,
  description,
}: {
  name: string;
  serviceType: string;
  path: string;
  description?: string;
}) {
  const url = `${BASE}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    url,
    ...(description ? { description } : {}),
    provider: { "@id": `${BASE}/#business` },
    areaServed: AREA_SERVED.map((cityName) => ({
      "@type": "City",
      name: cityName,
      containedIn: { "@type": "State", name: "Indiana" },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
