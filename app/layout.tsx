import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "R Complete Auto Care | Auto Repair Crown Point, IN",
  description: "Diagnostic-first auto repair shop in Crown Point, IN. Honest estimates, expert repairs, extended warranty work welcome. Call (219) 262-2711.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}