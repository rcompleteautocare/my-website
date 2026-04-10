import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "R Complete Auto Care | Auto Repair Crown Point, IN",
  description: "Diagnostic-first auto repair shop in Crown Point, IN. Honest estimates, expert repairs, extended warranty accepted. Serving Crown Point, St. John, Schererville, Merrillville, Cedar Lake.",
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  name: "R Complete Auto Care",
  url: "https://www.rcompleteautocare.com",
  telephone: "(219) 262-2711",
  image: "https://www.rcompleteautocare.com/logo.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1305 E Summit St",
    addressLocality: "Crown Point",
    addressRegion: "IN",
    postalCode: "46307",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 41.4175, longitude: -87.3648 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  description: "Crown Point, Indiana diagnostic-first auto repair shop. Specializing in complex diagnostics, extended warranty repairs, and issues other shops misdiagnose.",
  areaServed: ["Crown Point, IN","St. John, IN","Schererville, IN","Merrillville, IN","Cedar Lake, IN"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Check Engine Light Diagnostics" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Repair" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transmission Repair" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Repair" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Diagnostics" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extended Warranty Repairs" }},
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
        <Script src="https://elfsightcdn.com/platform.js" async />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
