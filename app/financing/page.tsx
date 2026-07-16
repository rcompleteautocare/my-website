import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "../components/FaqAccordion";
import FaqSchema from "../components/FaqSchema";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = {
  title: "Auto Repair Financing in Crown Point, IN | R Complete Auto Care",
  description:
    "Pay-over-time auto repair financing in Crown Point, IN — Affirm, Klarna, and Sunbit. Options appear on your estimate; quick application, subject to approval.",
  alternates: { canonical: "https://www.rcompleteautocare.com/financing" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Auto Repair Financing in Crown Point, IN | R Complete Auto Care",
    description:
      "Pay-over-time auto repair financing in Crown Point, IN — Affirm, Klarna, and Sunbit. Options appear on your estimate; quick application, subject to approval.",
    url: "https://www.rcompleteautocare.com/financing",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auto Repair Financing in Crown Point, IN | R Complete Auto Care",
    description:
      "Pay-over-time auto repair financing in Crown Point, IN — Affirm, Klarna, and Sunbit. Options appear on your estimate; quick application, subject to approval.",
    images: ["/og.png"],
  },
};

const FAQS = [
  {
    q: "Which financing providers do you offer?",
    a: "We offer pay-over-time options through Affirm, Klarna, and Sunbit, integrated into the estimates we send from Tekmetric.",
  },
  {
    q: "Does applying hurt my credit?",
    a: "That depends on the provider. Some run a soft check to show you options, while others may run a hard check when you complete a full application. The lender tells you which one applies before you finish — so there are no surprises.",
  },
  {
    q: "How do I apply?",
    a: "You can apply right from the estimate we send you, or ask your service advisor to walk you through it. The application takes only a few minutes, and the lender makes the decision.",
  },
  {
    q: "When can my repair start?",
    a: "If you're approved, we can usually begin the same day. You don't have to wait for a separate payment to clear before we get to work.",
  },
  {
    q: "What kinds of repairs can I finance?",
    a: "Pay-over-time options can be applied to the repairs on your estimate — commonly larger jobs like transmission, engine, and A/C work, though they are not limited to those.",
  },
  {
    q: "Is financing guaranteed?",
    a: "No. Financing is provided by third-party lenders and is subject to their approval. We can't guarantee approval; the lender shows you the details when you apply.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Ask your advisor, or look at your estimate",
    body: "Pay-over-time options appear directly on the estimate we send you. If you'd like to use one, tell your service advisor — or select the option right on your estimate.",
  },
  {
    n: "2",
    title: "Quick application",
    body: "You apply in minutes through the lender — Affirm, Klarna, or Sunbit. The lender handles the application and makes the decision.",
  },
  {
    n: "3",
    title: "Approved? We start right away",
    body: "If you're approved, we can begin the repair the same day. There's no waiting for a separate check to clear before the work begins.",
  },
];

export default function Financing() {
  return (
    <div style={{ color: "#1a1a1a" }}>
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#f1626f", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px", lineHeight: 1.2 }}>
          Auto Repair Financing in Crown Point, IN
        </h1>
        <p className="speakable" style={{ fontSize: "16px", color: "#f1626f", fontWeight: "600", marginBottom: "16px", fontStyle: "italic", maxWidth: "760px", margin: "0 auto 16px" }}>
          TL;DR: R Complete Auto Care offers pay-over-time financing right on your repair estimate through Affirm, Klarna, and Sunbit. A big or unexpected repair doesn&apos;t have to wait — apply in minutes, and if you&apos;re approved, we can start the work right away. Financing is provided by third-party lenders and is subject to approval.
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "620px", margin: "0 auto 32px" }}>
          Most of our customers don&apos;t know pay-over-time options are built right into their estimate. Here&apos;s how it works.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
        <p style={{ color: "#666", fontSize: "13px", marginTop: "16px" }}>
          1305 E Summit St, Crown Point, IN 46307 · Mon–Fri 8am–6pm · Sat 8am–2pm
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake, Indiana
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Pay over time — turn &ldquo;not today&rdquo; into &ldquo;yes, today&rdquo;</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          A big or unexpected repair shouldn&apos;t sideline your vehicle — or your week. When you receive an estimate from us, pay-over-time options from Affirm, Klarna, and Sunbit can appear right on it. That means you can move forward with the repair now and pay for it over time. It&apos;s built into our Tekmetric estimates; most customers simply don&apos;t know it&apos;s there.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "16px", marginTop: "40px" }}>When financing helps most</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
          It matters most for the repairs nobody plans for — the ones that arrive on their own schedule:
        </p>
        <ul style={{ lineHeight: 2, color: "#444", paddingLeft: "20px", marginBottom: "16px" }}>
          <li><Link href="/services/transmission-repair" style={{ color: "#e63946", fontWeight: 600 }}>Transmission repair</Link> — a repair that can grow quickly if it waits</li>
          <li><Link href="/services/engine-repair" style={{ color: "#e63946", fontWeight: 600 }}>Engine repair</Link> — from a leak or misfire to a larger job</li>
          <li><Link href="/services/ac-heating-repair" style={{ color: "#e63946", fontWeight: 600 }}>A/C and heating repair</Link> — no cold air in an Indiana summer</li>
          <li>Any diagnosis that turns into a larger-than-expected repair</li>
        </ul>
        <p style={{ lineHeight: 1.8, color: "#444" }}>
          These are the moments where waiting can turn a manageable problem into a bigger one. Financing lets you fix it on your schedule instead of the problem&apos;s.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px", marginTop: "40px" }}>How it works — three simple steps</h2>
        {STEPS.map((step) => (
          <div key={step.n} style={{ display: "flex", gap: "16px", marginBottom: "24px", alignItems: "flex-start" }}>
            <div style={{ background: "#e63946", color: "#fff", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", flexShrink: 0 }}>{step.n}</div>
            <div>
              <div style={{ fontWeight: "bold", marginBottom: "6px", fontSize: "17px" }}>{step.title}</div>
              <div style={{ color: "#555", lineHeight: 1.7 }}>{step.body}</div>
            </div>
          </div>
        ))}

        <h2 style={{ fontSize: "28px", marginBottom: "16px", marginTop: "40px" }}>Our financing providers</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
          We work with three well-known pay-over-time providers, integrated directly into our Tekmetric estimates:
        </p>
        <ul style={{ lineHeight: 2, color: "#444", paddingLeft: "20px", marginBottom: "16px" }}>
          <li><strong>Affirm</strong> — pay-over-time plans you can select on your estimate.</li>
          <li><strong>Klarna</strong> — flexible pay-over-time options.</li>
          <li><strong>Sunbit</strong> — a quick application designed for in-shop use.</li>
        </ul>
        <p style={{ lineHeight: 1.8, color: "#444" }}>
          Whether a specific provider or plan is available is determined by the lender at the time you apply.
        </p>
      </section>

      <section style={{ background: "#f5f5f5", padding: "60px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Financing questions</h2>
          <FaqAccordion faqs={FAQS} />
        </div>
      </section>

      <section style={{ padding: "40px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.7, borderTop: "1px solid #e0e0e0", paddingTop: "20px" }}>
          Financing is provided by third-party lenders (Affirm, Klarna, and Sunbit) and is subject to credit approval. Rates and terms are shown by the lender at the time of application. R Complete Auto Care does not provide financing directly and does not determine approval, rates, or terms.
        </p>
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Have a repair that shouldn&apos;t wait?</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Call us or book — and ask about pay-over-time options when you get your estimate.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
            📞 Call (219) 262-2711
          </a>
          <BookButton style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,.6)", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
            Book an Appointment
          </BookButton>
        </div>
      </section>

      <FaqSchema faqs={FAQS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rcompleteautocare.com" },
          { "@type": "ListItem", position: 2, name: "Financing", item: "https://www.rcompleteautocare.com/financing" },
        ],
      }).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.rcompleteautocare.com/financing#webpage",
        url: "https://www.rcompleteautocare.com/financing",
        name: "Auto Repair Financing in Crown Point, IN",
        dateModified: "2026-07-16",
        about: { "@id": "https://www.rcompleteautocare.com/#business" },
      }).replace(/</g, "\\u003c") }} />
    </div>
  );
}
