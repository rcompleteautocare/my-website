import type { Metadata } from "next";
import Link from "next/link";
import { warrantyProviders } from "@/lib/warranty-providers";

export const metadata: Metadata = {
  title: "Extended Warranty Repair Resource Center | Crown Point, IN",
  description: "Learn how vehicle service contract diagnosis, claims, authorization, estimates, deductibles, and customer responsibilities work in Crown Point, Indiana.",
  alternates: { canonical: "/warranty-resources" },
};

export default function WarrantyResources() {
  const crumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.rcompleteautocare.com" }, { "@type": "ListItem", position: 2, name: "Warranty Resources", item: "https://www.rcompleteautocare.com/warranty-resources" }] };
  return <div style={{ color: "#1a1a1a" }}>
    <section style={{ padding: "72px 24px", background: "#191919", color: "white", textAlign: "center" }}><p style={{ color: "#f1626f", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".12em" }}>Educational resource center</p><h1 style={{ fontSize: "clamp(38px, 6vw, 62px)", margin: "12px auto", maxWidth: 900 }}>How Extended Warranty Repairs Work</h1><p style={{ color: "#ccc", lineHeight: 1.7, maxWidth: 720, margin: "0 auto" }}>A practical guide to diagnosis, documentation, authorization, estimates, and customer responsibilities for vehicle service contracts.</p></section>
    <section style={{ maxWidth: 980, padding: "72px 24px", margin: "0 auto" }}>
      <h2 style={{ fontSize: 34 }}>The claims process, step by step</h2>
      <ol style={{ display: "grid", gap: 18, lineHeight: 1.7, paddingLeft: 24 }}><li><strong>Review your contract.</strong> Coverage, exclusions, deductibles, maintenance rules, and claim procedures differ by contract.</li><li><strong>Diagnose the concern.</strong> The shop confirms the failed component and cause; a symptom alone is not enough for a claim.</li><li><strong>Document findings.</strong> Test results, photos, estimates, maintenance records, or an administrator inspection may be requested.</li><li><strong>Request authorization.</strong> The administrator determines whether the repair is covered and what amount it authorizes.</li><li><strong>Review your responsibility.</strong> Deductibles, diagnosis, fluids, taxes, betterment, non-covered parts, or rate differences may remain the customer’s responsibility.</li><li><strong>Approve the work.</strong> R Complete Auto Care explains both the authorization and estimate. Repairs begin only after customer approval.</li></ol>
      <p style={{ padding: 20, borderLeft: "4px solid #e63946", background: "#f7f7f5", lineHeight: 1.7 }}><strong>Important:</strong> A provider name does not guarantee coverage or payment. Your individual contract and the administrator’s authorization control the claim.</p>
      <h2 style={{ fontSize: 30, marginTop: 52 }}>Provider-specific educational guides</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>{Object.entries(warrantyProviders).map(([slug, p]) => <Link key={slug} href={`/warranty-resources/${slug}`} style={{ padding: 22, border: "1px solid #ddd", borderRadius: 10, color: "#222", textDecoration: "none", fontWeight: 800 }}>{p.name} repair guide →</Link>)}</div>
      <p style={{ marginTop: 38, lineHeight: 1.7 }}>Need diagnosis for a possible covered failure? Review our <Link href="/services/extended-warranty-repair">extended warranty repair service</Link>, <Link href="/inspection-checklist">inspection process</Link>, or <Link href="/book">book an appointment</Link>.</p>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs).replace(/</g, "\\u003c") }} />
  </div>;
}
