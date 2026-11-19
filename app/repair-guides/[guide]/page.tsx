import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { repairGuides, type RepairGuide, type RepairGuideSlug } from "@/lib/repair-guides";
import { socialMetadata } from "@/lib/seo";

// Only the slugs from generateStaticParams exist. Anything else is a plain 404
// served by app/not-found.tsx instead of being rendered on demand.
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(repairGuides).map((guide) => ({ guide }));
}

export async function generateMetadata({ params }: { params: Promise<{ guide: string }> }): Promise<Metadata> {
  const { guide } = await params;
  const g = repairGuides[guide as RepairGuideSlug];
  if (!g) return {};
  const title = `${g.title} | Crown Point, IN`;
  const description = `${g.title}: symptoms, common causes, how it is diagnosed and when to stop driving. From a diagnostic-first shop in Crown Point, IN.`;
  return {
    title,
    description,
    alternates: { canonical: `/repair-guides/${guide}` },
    ...socialMetadata({ title, description, path: `/repair-guides/${guide}`, type: "article" }),
  };
}

const BASE = "https://www.rcompleteautocare.com";
const h2 = { fontSize: 28, lineHeight: 1.2, margin: "48px 0 16px" } as const;
const p = { lineHeight: 1.8, margin: "0 0 16px" } as const;
const list = { lineHeight: 1.75, paddingLeft: 22, margin: "0 0 16px" } as const;
const li = { marginBottom: 10 } as const;

export default async function RepairGuidePage({ params }: { params: Promise<{ guide: string }> }) {
  const { guide } = await params;
  const g: RepairGuide | undefined = repairGuides[guide as RepairGuideSlug];
  if (!g) notFound();
  const url = `${BASE}/repair-guides/${guide}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: g.title,
        description: g.summary,
        mainEntityOfPage: url,
        author: { "@id": `${BASE}/#business` },
        publisher: { "@id": `${BASE}/#business` },
        about: [{ "@type": "Thing", name: g.vehicle }, { "@type": "Thing", name: g.system }],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Repair Guides", item: `${BASE}/repair-guides` },
          { "@type": "ListItem", position: 3, name: g.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: g.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  };

  return (
    <article style={{ maxWidth: 850, margin: "0 auto", padding: "72px 24px", color: "#222" }}>
      <p style={{ color: "#c92f3b", fontWeight: 800 }}>VEHICLE REPAIR GUIDE · CROWN POINT, INDIANA</p>
      <h1 style={{ fontSize: "clamp(40px, 6vw, 60px)", lineHeight: 1.08 }}>{g.title}</h1>
      <p className="speakable" style={{ fontSize: 20, lineHeight: 1.75 }}>{g.intro}</p>

      <h2 style={h2}>How the system works</h2>
      {g.background.map((paragraph) => <p key={paragraph} style={p}>{paragraph}</p>)}

      <h2 style={h2}>What are the common symptoms?</h2>
      <ul style={list}>
        {g.symptoms.map((s) => <li key={s.sign} style={li}><strong>{s.sign}.</strong> {s.detail}</li>)}
      </ul>

      <h2 style={h2}>Why does it happen?</h2>
      <p style={p}>These are possibilities, not a diagnosis. Several of them produce the same symptom, which is why testing comes before parts.</p>
      <ul style={list}>
        {g.causes.map((c) => <li key={c.cause} style={li}><strong>{c.cause}.</strong> {c.detail}</li>)}
      </ul>

      <h2 style={h2}>How is it diagnosed?</h2>
      <ol style={list}>
        {g.diagnosis.map((d) => <li key={d.step} style={li}><strong>{d.step}.</strong> {d.detail}</li>)}
      </ol>

      <h2 style={h2}>Can I keep driving?</h2>
      {g.driving.map((paragraph) => <p key={paragraph} style={p}>{paragraph}</p>)}

      <h2 style={h2}>What are the repair options?</h2>
      <ul style={list}>
        {g.repairOptions.map((r) => <li key={r.option} style={li}><strong>{r.option}.</strong> {r.detail}</li>)}
      </ul>
      <p style={p}>
        Cost depends on which of these the testing confirms, plus the vehicle&apos;s configuration, any related damage and current parts pricing. An online figure cannot stand in for a diagnosis of your vehicle. R Complete Auto Care gives you a written estimate and does no repair without your approval.
      </p>

      <h2 style={h2}>How to reduce the risk</h2>
      <ul style={list}>
        {g.prevention.map((item) => <li key={item} style={li}>{item}</li>)}
      </ul>

      <h2 style={h2}>Frequently asked questions</h2>
      {g.faqs.map((faq) => (
        <section key={faq.q} style={{ borderBottom: "1px solid #e0e0e0", padding: "4px 0 12px", marginBottom: 12 }}>
          <h3 style={{ fontSize: 18, margin: "12px 0 8px" }}>{faq.q}</h3>
          <p style={{ ...p, color: "#444" }}>{faq.a}</p>
        </section>
      ))}

      <div style={{ background: "#f9f9f9", borderLeft: "4px solid #e63946", borderRadius: 6, padding: 24, marginTop: 40 }}>
        <h2 style={{ fontSize: 22, margin: "0 0 10px" }}>Have this checked in Crown Point</h2>
        <p style={{ ...p, marginBottom: 12 }}>
          R Complete Auto Care is a diagnostic-first shop at 1305 E Summit St, Crown Point, IN 46307. Call <a href="tel:2192622711" style={{ color: "#e63946", fontWeight: 700 }}>(219) 262-2711</a> or <Link href="/book" style={{ color: "#e63946", fontWeight: 700 }}>book an appointment</Link>.
        </p>
        <p style={{ margin: 0, lineHeight: 1.8 }}>
          <Link href={g.service}>{g.serviceLabel}</Link> · <Link href="/inspection-checklist">Our inspection process</Link> · <Link href="/repair-guides">All repair guides</Link> · <Link href="/contact">Contact us</Link>
        </p>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
    </article>
  );
}
