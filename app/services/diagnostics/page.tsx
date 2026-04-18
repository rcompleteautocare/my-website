import Link from "next/link";
import LastUpdated from "@/app/components/LastUpdated";

export const metadata = {
  title: "Auto Diagnostics Crown Point IN | R Complete Auto Care",
  description: "Auto diagnostics in Crown Point, IN — check engine light, electrical, no-start. We find the real problem before recommending repairs. (219) 262-2711.",
  alternates: {
    canonical: "https://www.rcompleteautocare.com/services/diagnostics",
  },
};

export default function Diagnostics() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "12px", lineHeight: 1.2 }}>
          Auto Diagnostics in Crown Point, IN
        </h1>
        <p style={{ fontSize: "16px", color: "#e63946", fontWeight: "600", marginBottom: "16px", fontStyle: "italic" }}>
          TL;DR: We charge a diagnostic fee (applied toward repair cost) and complete most diagnostics same day. We scan all vehicle modules, find the root cause, and call you with a clear estimate before doing any work.
        </p>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          We diagnose before we repair. Every time. No guesswork — just accurate answers and honest recommendations.
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
        <LastUpdated date="2026-04-18" />
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Crown Point&apos;s Diagnostic-First Auto Repair Shop</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          R Complete Auto Care is built around one principle: find the real problem before recommending a single repair. Too many shops skip the diagnostic process — they guess, replace parts, and hope for the best. That costs you time and money.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>
          At our Crown Point, Indiana shop, every vehicle gets a thorough diagnostic first. We use professional-grade equipment to accurately identify the root cause of your vehicle's problem — then we give you a clear, honest explanation of what's wrong and what it will cost to fix it.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          We work on all foreign and domestic vehicles and serve drivers from Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, Indiana.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Our Diagnostic Services in Crown Point</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Check Engine Light Diagnostics", href: "/services/check-engine-light", desc: "Full scan to find the exact cause of your warning light. We never just clear the code." },
            { title: "Electrical Diagnostics", href: "/services/electrical-diagnostics", desc: "Battery, alternator, wiring, sensors, modules and complex electrical issues." },
            { title: "No-Start Diagnostics", href: "/services/no-start-diagnostics", desc: "Car won't start? We find the exact cause fast — same day in most cases." },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "20px", textDecoration: "none", color: "#1a1a1a", display: "block" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.title} →</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Why Diagnostics Matter Before Any Repair</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "You Only Pay for What You Need", desc: "Without a proper diagnosis, repairs are guesswork. We identify the exact problem so you don't pay for parts you don't need." },
            { title: "Problems Get Fixed Right", desc: "When you know the root cause, the repair sticks. Guessing leads to repeat visits and wasted money." },
            { title: "You Get Clear Answers", desc: "We explain exactly what's wrong, what caused it, and what your options are — in plain language." },
            { title: "No Surprises on Your Bill", desc: "We give you a complete estimate after diagnosis and get your approval before touching anything." },
          ].map(item => (
            <div key={item.title} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>{item.title}</div>
              <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions — Auto Diagnostics in Crown Point, IN</h2>
        {[
          { q: "Where can I get auto diagnostics in Crown Point, IN?", a: "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. Open Mon–Fri 8am–6pm, Sat 8am–2pm. Most diagnostics completed same day." },
          { q: "Why is a diagnostic important before repairs?", a: "Without a proper diagnosis, repairs are guesswork. We identify the exact problem so you only pay for what your vehicle actually needs — saving you time and money at our Crown Point shop." },
          { q: "How long does an auto diagnostic take in Crown Point?", a: "Most diagnostics at our Crown Point location are completed the same day. We call you with our findings before doing any repair work." },
          { q: "How much does a diagnostic cost in Crown Point?", a: "We charge a diagnostic fee to properly identify the issue. This fee is applied toward your repair cost if you choose to have us fix it at our Crown Point location." },
          { q: "Do you work on all makes and models?", a: "Yes — all foreign and domestic vehicles including Honda, Toyota, BMW, Mercedes, Ford, Chevrolet, Dodge, Subaru, and more." },
          { q: "Do you serve St. John, Schererville, and Merrillville for diagnostics?", a: "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." },
          { q: "Do you accept extended warranties for diagnostic repairs?", a: "Yes! We work with most extended warranty providers and handle the entire claims process for you." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>Related Services</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {[
            { name: "Engine Repair", href: "/services/engine-repair" },
            { name: "Transmission Repair", href: "/services/transmission-repair" },
            { name: "Extended Warranty Repairs", href: "/services/extended-warranty-repair" },
            { name: "Auto Repair Crown Point", href: "/auto-repair-crown-point-in" },
          ].map(s => (
            <Link key={s.href} href={s.href} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "12px 16px", textDecoration: "none", color: "#1a1a1a", fontSize: "14px", fontWeight: "500", display: "block" }}>
              {s.name} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Need a Diagnostic in Crown Point? Call Us Today.</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>We find the real problem before recommending any repair.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I get auto diagnostics in Crown Point, IN?",
        "acceptedAnswer": { "@type": "Answer", "text": "R Complete Auto Care at 1305 E Summit St, Crown Point, IN 46307. Call (219) 262-2711. Open Mon–Fri 8am–6pm, Sat 8am–2pm. Most diagnostics completed same day." }
      },
      {
        "@type": "Question",
        "name": "Why is a diagnostic important before repairs?",
        "acceptedAnswer": { "@type": "Answer", "text": "Without a proper diagnosis, repairs are guesswork. We identify the exact problem so you only pay for what your vehicle actually needs — saving you time and money at our Crown Point shop." }
      },
      {
        "@type": "Question",
        "name": "How long does an auto diagnostic take in Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "Most diagnostics at our Crown Point location are completed the same day. We call you with our findings before doing any repair work." }
      },
      {
        "@type": "Question",
        "name": "How much does a diagnostic cost in Crown Point?",
        "acceptedAnswer": { "@type": "Answer", "text": "We charge a diagnostic fee to properly identify the issue. This fee is applied toward your repair cost if you choose to have us fix it at our Crown Point location." }
      },
      {
        "@type": "Question",
        "name": "Do you work on all makes and models?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — all foreign and domestic vehicles including Honda, Toyota, BMW, Mercedes, Ford, Chevrolet, Dodge, Subaru, and more." }
      },
      {
        "@type": "Question",
        "name": "Do you serve St. John, Schererville, and Merrillville for diagnostics?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We're located in Crown Point and serve all of Lake County including St. John, Schererville, Merrillville, and Cedar Lake, Indiana." }
      },
      {
        "@type": "Question",
        "name": "Do you accept extended warranties for diagnostic repairs?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes! We work with most extended warranty providers and handle the entire claims process for you." }
      }
    ]
  })}}
/>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Auto Diagnostics Work at R Complete Auto Care",
  "description": "Our diagnostic-first process in Crown Point, IN.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Full Module Scan", "text": "We scan all vehicle modules — not just the engine — for fault codes, live data, and system health." },
    { "@type": "HowToStep", "position": 2, "name": "Root Cause Investigation", "text": "We perform hands-on inspection to find the actual failed component, not just the symptom." },
    { "@type": "HowToStep", "position": 3, "name": "Clear Explanation", "text": "We call you with exactly what we found, what's urgent, and what can wait — in plain language." },
    { "@type": "HowToStep", "position": 4, "name": "Your Approval, Then Repair", "text": "You approve the estimate before any work begins. We fix it right and verify the repair before returning the vehicle." }
  ]
}) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rcompleteautocare.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.rcompleteautocare.com/services/diagnostics" },
    { "@type": "ListItem", "position": 3, "name": "Auto Diagnostics" }
  ]
}) }} /></div>
  );
}