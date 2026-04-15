import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rcompleteautocare.com"),
  title: "R Complete Auto Care | Auto Repair Crown Point, IN",
  description: "Diagnostic-first auto repair shop in Crown Point, IN. Honest estimates, expert repairs, extended warranty accepted. Serving Crown Point, St. John, Schererville, Merrillville, Cedar Lake.",
}

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  name: "R Complete Auto Care",
  url: "https://www.rcompleteautocare.com",
  telephone: "(219) 262-2711",
  email: "Owner@rcompleteautocare.com",
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
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "69",
  },
  sameAs: [
    "https://www.google.com/maps/place/R+Complete+Auto+Care/@41.4270614,-87.3410824,17z",
    "https://www.yelp.com/biz/r-complete-auto-care-crown-point",
    "https://www.facebook.com/RCompleteAutoCare/",
    "https://www.bbb.org/us/in/crown-point/profile/auto-repair/r-complete-auto-care-0352-90173711",
    "https://www.chamberofcommerce.com/business-directory/indiana/crown-point/auto-repair-shop/2034231063-r-complete-auto-care",
    // Add when ready: "https://www.carfax.com/...", "https://repairpal.com/..."
  ],
  description: "Crown Point, Indiana diagnostic-first auto repair shop. Specializing in complex diagnostics, extended warranty repairs, and issues other shops misdiagnose.",
  areaServed: [
    { "@type": "City", name: "Crown Point", containedIn: { "@type": "State", name: "Indiana" } },
    { "@type": "City", name: "St. John", containedIn: { "@type": "State", name: "Indiana" } },
    { "@type": "City", name: "Schererville", containedIn: { "@type": "State", name: "Indiana" } },
    { "@type": "City", name: "Merrillville", containedIn: { "@type": "State", name: "Indiana" } },
    { "@type": "City", name: "Cedar Lake", containedIn: { "@type": "State", name: "Indiana" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Check Engine Light Diagnostics", url: "https://www.rcompleteautocare.com/services/check-engine-light" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Repair", url: "https://www.rcompleteautocare.com/services/engine-repair" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transmission Repair", url: "https://www.rcompleteautocare.com/services/transmission-repair" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Repair", url: "https://www.rcompleteautocare.com/services/brake-repair" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Diagnostics", url: "https://www.rcompleteautocare.com/services/electrical-diagnostics" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Extended Warranty Repairs", url: "https://www.rcompleteautocare.com/services/extended-warranty-repair" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil Change & Maintenance", url: "https://www.rcompleteautocare.com/services/oil-change-maintenance" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "A/C & Heating Repair", url: "https://www.rcompleteautocare.com/services/ac-heating-repair" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Suspension & Steering Repair", url: "https://www.rcompleteautocare.com/services/suspension-steering" }},
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "No-Start Diagnostics", url: "https://www.rcompleteautocare.com/services/no-start-diagnostics" }},
    ],
  },
  knowsAbout: [
    "Auto Diagnostics",
    "Extended Warranty Repair",
    "Engine Repair",
    "Transmission Repair",
    "Brake Repair",
    "Electrical Diagnostics",
    "Suspension Repair",
  ],
};

const SPEAKABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", ".speakable"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_SCHEMA).replace(/</g, "\\u003c") }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
