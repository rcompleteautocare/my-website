import type { Metadata } from "next";
import Link from "next/link";
import BookButton from "@/components/BookButton";

// Custom 404. Rendered inside the root layout (Nav, <main>, Footer).
// Next.js adds <meta name="robots" content="noindex"> to every not-found
// response itself, so no `robots` is set here (setting one produced a second,
// duplicate robots tag).
export const metadata: Metadata = {
  title: "Page Not Found | R Complete Auto Care",
  description: "That page does not exist. Call R Complete Auto Care in Crown Point, IN at (219) 262-2711, book online, or browse our services.",
};

const LINKS = [
  { href: "/services", label: "Our Services", desc: "Diagnostics, engine, transmission, brakes and more." },
  { href: "/contact", label: "Contact Us", desc: "Hours, directions and a service request form." },
];

export default function NotFound() {
  return (
    <div style={{ color: "#1a1a1a" }}>
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "72px 24px", textAlign: "center" }}>
        <p style={{ color: "#f1626f", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Error 404
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          We Couldn&apos;t Find That Page
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "560px", margin: "0 auto 32px" }}>
          The link may be out of date or the address may be mistyped. We can still help you by phone or online.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none", display: "inline-block" }}>
          📞 Call (219) 262-2711
        </a>
        <BookButton style={{ display: "inline-block", marginLeft: "12px", marginTop: "12px", background: "transparent", color: "#fff", border: "2px solid #fff", padding: "12px 30px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Book Online
        </BookButton>
        <p style={{ color: "#999", fontSize: "13px", marginTop: "20px" }}>
          1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ padding: "56px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>Where would you like to go?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "18px", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{link.label} →</div>
              <div style={{ fontSize: "14px", color: "#666" }}>{link.desc}</div>
            </Link>
          ))}
        </div>
        <p style={{ marginTop: "28px", lineHeight: 1.7, color: "#444" }}>
          Or head back to the <Link href="/" style={{ color: "#e63946" }}>homepage</Link>.
        </p>
      </section>
    </div>
  );
}
