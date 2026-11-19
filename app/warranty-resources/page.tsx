import type { Metadata } from "next";
import Link from "next/link";
import { warrantyProviders } from "@/lib/warranty-providers";
import { socialMetadata } from "@/lib/seo";

const TITLE = "Extended Warranty Repair Resource Center | Crown Point, IN";
const DESCRIPTION = "Learn how vehicle service contract diagnosis, claims, authorization, estimates, deductibles, and customer responsibilities work in Crown Point, Indiana.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/warranty-resources" },
  ...socialMetadata({ title: TITLE, description: DESCRIPTION, path: "/warranty-resources" }),
};

// The claim process, in the order it happens. General guidance: the reader's
// own contract and the administrator's authorization always control.
const CLAIM_STEPS = [
  {
    title: "Find and read your contract",
    detail: "Locate the contract document itself, not the brochure. Note the contract number, coverage level, expiry date and mileage, deductible, and the administrator's claims phone number. Read the sections on what is covered, what is excluded and what you are required to do.",
  },
  {
    title: "Stop driving if the vehicle is at risk",
    detail: "Most contracts exclude damage caused by continuing to operate a vehicle after a failure or a warning. If it is overheating, low on oil pressure, slipping or making a serious noise, have it towed. Ask whether your contract includes towing.",
  },
  {
    title: "Bring the vehicle and your paperwork to the shop",
    detail: "Bring the contract or contract number, maintenance records and the current mileage. Tell the shop up front that you have a service contract, so the diagnosis is documented the way an administrator expects.",
  },
  {
    title: "Authorize the diagnosis",
    detail: "A claim cannot be opened on a symptom. The shop has to identify the failed component and the cause of failure, and that takes diagnostic time you approve. Whether the contract reimburses diagnosis depends on the contract and usually on whether the repair is covered.",
  },
  {
    title: "The shop contacts the administrator",
    detail: "The shop calls the claims line before any repair is done and reports the complaint, the failed part, the cause and the estimate. Repairs done before authorization are commonly not paid, which is why nothing is replaced first.",
  },
  {
    title: "The administrator reviews the claim",
    detail: "It may ask for maintenance records, photos or a teardown, or send an independent inspector. This step can take anywhere from one phone call to several days, depending on the size of the claim.",
  },
  {
    title: "Authorization, partial authorization or denial",
    detail: "The administrator states what it will pay for: which parts, what kind of parts, how much labor time and at what rate. Ask for a denial reason in writing, with the contract section it relies on.",
  },
  {
    title: "Review what you owe and approve the work",
    detail: "Your share can include the deductible, non-covered parts, maintenance items, fluids, taxes, diagnostic time and any difference between the authorized amount and the estimate. R Complete Auto Care goes through the authorization and the estimate with you, and repairs begin only after you approve.",
  },
  {
    title: "Repair, payment and records",
    detail: "After the repair, the administrator typically pays the shop directly for the authorized amount and you pay your share. Keep the final invoice with your contract. It is part of the vehicle's maintenance history for any later claim.",
  },
];

export default function WarrantyResources() {
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rcompleteautocare.com" },
      { "@type": "ListItem", position: 2, name: "Warranty Resources", item: "https://www.rcompleteautocare.com/warranty-resources" },
    ],
  };

  return (
    <div style={{ color: "#1a1a1a" }}>
      <section style={{ padding: "72px 24px", background: "#191919", color: "white", textAlign: "center" }}>
        <p style={{ color: "#f1626f", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em" }}>Educational resource center</p>
        <h1 style={{ fontSize: "clamp(38px, 6vw, 62px)", margin: "12px auto", maxWidth: 900 }}>Extended Warranty Repair Resource Center</h1>
        <p className="speakable" style={{ color: "#ccc", lineHeight: 1.7, maxWidth: 720, margin: "0 auto" }}>
          A practical guide to diagnosis, documentation, authorization, estimates, and customer responsibilities for vehicle service contracts.
        </p>
      </section>

      <section style={{ maxWidth: 980, padding: "72px 24px", margin: "0 auto" }}>
        <h2 style={{ fontSize: 34 }}>What an &ldquo;extended warranty&rdquo; actually is</h2>
        <p style={{ lineHeight: 1.8 }}>
          Most plans sold as extended warranties are vehicle service contracts: separate agreements, bought at extra cost, that promise to pay for certain repairs. They are not the manufacturer&apos;s warranty, and each one has its own covered parts, exclusions, deductible and claim procedure. A contract administrator, not the repair shop, decides whether a repair is covered.
        </p>

        <h2 style={{ fontSize: 34, marginTop: 52 }}>The claims process, step by step</h2>
        <ol style={{ display: "grid", gap: 18, lineHeight: 1.7, paddingLeft: 24 }}>
          {CLAIM_STEPS.map((step) => (
            <li key={step.title}><strong>{step.title}.</strong> {step.detail}</li>
          ))}
        </ol>
        <p style={{ padding: 20, borderLeft: "4px solid #e63946", background: "#f7f7f5", lineHeight: 1.7 }}>
          <strong>Important:</strong> A provider name does not guarantee coverage or payment. Your individual contract and the administrator&apos;s authorization control the claim.
        </p>

        <h2 style={{ fontSize: 30, marginTop: 52 }}>Provider guides</h2>
        <p style={{ lineHeight: 1.8 }}>
          Each guide below goes deep on a different part of the claims process. The topics apply to service contracts in general, so the guide for another provider may answer your question too.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
          {Object.entries(warrantyProviders).map(([slug, p]) => (
            <Link key={slug} href={`/warranty-resources/${slug}`} style={{ padding: 22, border: "1px solid #ddd", borderRadius: 10, color: "#222", textDecoration: "none" }}>
              <strong style={{ display: "block", fontSize: 18, marginBottom: 8 }}>{p.name} repair guide →</strong>
              <span style={{ display: "block", lineHeight: 1.6, color: "#5d5d5d", fontSize: 15 }}>{p.summary}</span>
            </Link>
          ))}
        </div>

        <p style={{ marginTop: 38, lineHeight: 1.7 }}>
          Need diagnosis for a possible covered failure? Review our <Link href="/services/extended-warranty-repair">extended warranty repair service</Link>, <Link href="/inspection-checklist">inspection process</Link>, or <Link href="/book">book an appointment</Link>. You can also call <a href="tel:2192622711">(219) 262-2711</a>.
        </p>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs).replace(/</g, "\\u003c") }} />
    </div>
  );
}
