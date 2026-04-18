import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Crown Point Auto Repair | R Complete Auto Care",
  description: "Contact R Complete Auto Care in Crown Point, IN. Call, email, or fill out our form. Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com/contact",
  },
  openGraph: {
    title: "Contact Crown Point Auto Repair | R Complete Auto Care",
    description: "Contact R Complete Auto Care in Crown Point, IN. Call, email, or fill out our form. Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake.",
    url: "https://www.rcompleteautocare.com/contact",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Crown Point Auto Repair | R Complete Auto Care",
    description: "Contact R Complete Auto Care in Crown Point, IN. Call, email, or fill out our form. Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}