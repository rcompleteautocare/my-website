import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasVerifiedFacts, providerGuideName, warrantyProviders, type WarrantyProvider, type WarrantySlug } from "@/lib/warranty-providers";
import { socialMetadata } from "@/lib/seo";

// Only the slugs from generateStaticParams exist. Anything else is a plain 404
// served by app/not-found.tsx instead of being rendered on demand.
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(warrantyProviders).map((provider) => ({ provider }));
}

export async function generateMetadata({ params }: { params: Promise<{ provider: string }> }): Promise<Metadata> {
  const { provider } = await params;
  const p = warrantyProviders[provider as WarrantySlug];
  if (!p) return {};
  // "Fidelity Warranty Services Warranty Repair Guide" ran past 60 characters, so
  // names that already contain "Warranty" do not get the word twice.
  const title = `${providerGuideName(p.name)} | Crown Point, IN`;
  const description = `Independent guide to ${p.name} service contract repairs in Crown Point, IN: diagnosis, claim authorization, estimates and what you may owe.`;
  return {
    title,
    description,
    alternates: { canonical: `/warranty-resources/${provider}` },
    ...socialMetadata({ title, description, path: `/warranty-resources/${provider}`, type: "article" }),
  };
}

const BASE = "https://www.rcompleteautocare.com";
const h2 = { fontSize: 28, lineHeight: 1.2, margin: "48px 0 16px" } as const;
const para = { lineHeight: 1.8, margin: "0 0 16px" } as const;

export default async function ProviderGuide({ params }: { params: Promise<{ provider: string }> }) {
  const { provider } = await params;
  const p: WarrantyProvider | undefined = warrantyProviders[provider as WarrantySlug];
  if (!p) notFound();
  const url = `${BASE}/warranty-resources/${provider}`;
  const guideName = providerGuideName(p.name);

  // The page's own topic FAQs first, then the two questions every provider
  // page needs. One list feeds both the visible section and the FAQPage schema.
  const faq = [
    ...p.faqs,
    { q: `Does ${p.name} automatically cover my repair?`, a: `No. Coverage depends on your individual contract, its exclusions and limits, your maintenance history, the cause of failure, and the administrator's authorization. A provider name on a contract is not a guarantee of payment.` },
    { q: `Can R Complete Auto Care diagnose a possible ${p.name} claim?`, a: "Yes. We diagnose the concern, document the failed component and the cause, prepare an estimate, and send the administrator the findings it asks for. A diagnosis does not guarantee coverage, and no repair starts without your approval." },
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Warranty Resources", item: `${BASE}/warranty-resources` },
          { "@type": "ListItem", position: 3, name: p.name, item: url },
        ],
      },
      {
        "@type": "Article",
        headline: guideName,
        description: p.summary,
        mainEntityOfPage: url,
        author: { "@type": "Organization", "@id": `${BASE}/#business` },
        about: { "@type": "Thing", name: "Vehicle service contract claims" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
      },
    ],
  };

  const v = p.verified;

  return (
    <article style={{ maxWidth: 860, padding: "72px 24px", margin: "0 auto", color: "#222" }}>
      <p style={{ color: "#c92f3b", fontWeight: 800 }}>EXTENDED WARRANTY RESOURCE CENTER</p>
      <h1 style={{ fontSize: "clamp(38px, 6vw, 56px)", lineHeight: 1.08 }}>{guideName}</h1>
      <p className="speakable" style={{ fontSize: 19, lineHeight: 1.75 }}>
        An independent guide for drivers with a {p.name} vehicle service contract who need a repair in Crown Point, Indiana. This page focuses on one part of the process that often decides a claim: {p.focusTitle.charAt(0).toLowerCase() + p.focusTitle.slice(1)}.
      </p>
      <p style={{ padding: 20, borderLeft: "4px solid #e63946", background: "#f7f7f5", lineHeight: 1.7 }}>
        <strong>Read this first:</strong> R Complete Auto Care is an independent repair shop and is not affiliated with {p.name}. The guidance below describes how vehicle service contracts commonly work. It is not a statement of what {p.name} covers or requires. Your own contract and the administrator&apos;s authorization control every claim.
      </p>

      <h2 style={h2}>{p.focusTitle}</h2>
      <p style={para}>{p.focusIntro}</p>
      {p.focusPoints.map((point) => (
        <section key={point.heading}>
          <h3 style={{ fontSize: 19, margin: "24px 0 8px" }}>{point.heading}</h3>
          <p style={para}>{point.detail}</p>
        </section>
      ))}

      <h2 style={h2}>Questions to ask your administrator</h2>
      <p style={para}>Have your contract number ready and write down the name of the person you speak with, the date and what they tell you.</p>
      <ul style={{ lineHeight: 1.75, paddingLeft: 22, margin: "0 0 16px" }}>
        {p.questionsToAsk.map((q) => <li key={q} style={{ marginBottom: 8 }}>{q}</li>)}
      </ul>

      {/* Owner-verified provider facts. Renders only once lib/warranty-providers.ts has them. */}
      {hasVerifiedFacts(v) && (
        <>
          <h2 style={h2}>{p.name} claims contact details</h2>
          <dl style={{ lineHeight: 1.75, margin: "0 0 16px" }}>
            {v.administratorName && (<><dt style={{ fontWeight: 700 }}>Claims administrator</dt><dd style={{ margin: "0 0 10px" }}>{v.administratorName}</dd></>)}
            {v.claimsPhone && (<><dt style={{ fontWeight: 700 }}>Claims phone</dt><dd style={{ margin: "0 0 10px" }}>{v.claimsPhone}</dd></>)}
            {v.claimsHours && (<><dt style={{ fontWeight: 700 }}>Claims hours</dt><dd style={{ margin: "0 0 10px" }}>{v.claimsHours}</dd></>)}
            {v.claimsUrl && (<><dt style={{ fontWeight: 700 }}>Start or check a claim</dt><dd style={{ margin: "0 0 10px" }}><a href={v.claimsUrl} rel="nofollow external">{v.claimsUrl}</a></dd></>)}
            {v.shopNotes && (<><dt style={{ fontWeight: 700 }}>From our experience</dt><dd style={{ margin: "0 0 10px" }}>{v.shopNotes}</dd></>)}
          </dl>
          {v.lastVerified && <p style={{ fontSize: 13, color: "#666" }}>Contact details taken from {p.name}&apos;s official website; last checked {v.lastVerified}. Confirm current details with {p.name} before relying on them.</p>}
        </>
      )}

      <h2 style={h2}>How a repair claim works at our shop</h2>
      <p style={para}>
        We verify the symptom and diagnose the cause of failure, then prepare an estimate and send the administrator the documentation it asks for. The administrator reviews the contract and the findings and decides whether to authorize all, part or none of the repair. We explain the authorization and anything left for you to pay, and work begins only after you approve it. The full sequence is on the <Link href="/warranty-resources">warranty resource center</Link> page.
      </p>
      <p style={para}>
        Bring your contract or contract number, the administrator&apos;s contact information, your maintenance records, the current mileage and any earlier claim details. A sales brochure is not enough; the contract itself controls.
      </p>

      <h2 style={h2}>Frequently asked questions</h2>
      {faq.map((x) => (
        <section key={x.q} style={{ borderBottom: "1px solid #e0e0e0", padding: "4px 0 12px", marginBottom: 12 }}>
          <h3 style={{ fontSize: 18, margin: "12px 0 8px" }}>{x.q}</h3>
          <p style={{ lineHeight: 1.75, margin: 0, color: "#444" }}>{x.a}</p>
        </section>
      ))}

      <div style={{ background: "#f9f9f9", borderLeft: "4px solid #e63946", borderRadius: 6, padding: 24, marginTop: 40 }}>
        <h2 style={{ fontSize: 22, margin: "0 0 10px" }}>Start with a documented diagnosis</h2>
        <p style={{ ...para, marginBottom: 12 }}>
          R Complete Auto Care, 1305 E Summit St, Crown Point, IN 46307. Call <a href="tel:2192622711" style={{ color: "#e63946", fontWeight: 700 }}>(219) 262-2711</a> with your contract details before you bring the vehicle in.
        </p>
        <p style={{ margin: 0, lineHeight: 1.8 }}>
          <Link href="/services/extended-warranty-repair">Our warranty repair process</Link> · <Link href="/warranty-resources">All provider guides</Link> · <Link href="/contact">Contact the shop</Link> · <a href={p.site} rel="nofollow external">{p.name}&apos;s official site</a>
        </p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
    </article>
  );
}
