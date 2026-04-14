import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact R Complete Auto Care | Crown Point IN Auto Repair | (219) 262-2711",
  description: "Contact R Complete Auto Care in Crown Point, IN. Call, email, or fill out our form. Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}