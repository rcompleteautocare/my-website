import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, CircleAlert, Clock3, Gauge, ShieldCheck, Wrench } from "lucide-react";
import HondaBreadcrumbs from "./HondaBreadcrumbs";
import HondaCta from "./HondaCta";
import { getHondaPage, HONDA_BASE_URL, type HondaPageData } from "@/lib/honda-pages";
import styles from "../honda.module.css";

const generalServiceLinks: Record<string, { href: string; label: string }[]> = {
  "honda-transmission-repair-crown-point-in": [{ href: "/services/transmission-repair", label: "General transmission repair" }],
  "honda-engine-repair-crown-point-in": [{ href: "/services/engine-repair", label: "General engine repair" }],
  "honda-check-engine-light-diagnostics-crown-point-in": [{ href: "/services/check-engine-light", label: "General check-engine-light diagnostics" }, { href: "/services/diagnostics", label: "Auto diagnostics" }],
  "honda-ac-repair-crown-point-in": [{ href: "/services/ac-heating-repair", label: "General A/C and heating repair" }],
  "honda-brake-repair-crown-point-in": [{ href: "/services/brake-repair", label: "General brake repair" }],
  "honda-timing-belt-service-crown-point-in": [{ href: "/services/oil-change-maintenance", label: "General maintenance services" }],
};

export function hondaMetadata(page: HondaPageData): Metadata {
  const url = `${HONDA_BASE_URL}/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title: page.title, description: page.description, url, siteName: "R Complete Auto Care", type: "website", images: [{ url: "/og.png", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/og.png"] },
  };
}

const schema = (page: HondaPageData) => {
  const url = `${HONDA_BASE_URL}/${page.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: HONDA_BASE_URL },
        { "@type": "ListItem", position: 2, name: "Honda Repair", item: `${HONDA_BASE_URL}/honda-repair-crown-point-in` },
        { "@type": "ListItem", position: 3, name: page.shortName, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.heading,
      serviceType: page.shortName,
      url,
      provider: { "@id": `${HONDA_BASE_URL}/#business` },
      areaServed: ["Crown Point", "St. John", "Schererville", "Merrillville", "Cedar Lake", "Lowell", "Dyer", "Munster", "Highland", "Hobart", "Valparaiso"].map((name) => ({ "@type": "City", name, containedIn: { "@type": "State", name: "Indiana" } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
  ];
};

function ListSection({ title, items, icon: Icon }: { title: string; items: string[]; icon: typeof CheckCircle2 }) {
  return (
    <section className={styles.listCard}>
      <Icon aria-hidden="true" />
      <h2>{title}</h2>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}

export default function HondaPage({ slug }: { slug: string }) {
  const page = getHondaPage(slug);
  const schemas = schema(page);
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <HondaBreadcrumbs current={page.shortName} />
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1>{page.heading}</h1>
          <p className={styles.lead}>{page.intro}</p>
          <HondaCta compact />
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.twoColumn}>
          <ListSection title="Common concerns we diagnose" items={page.problems} icon={Gauge} />
          <ListSection title="Warning signs not to ignore" items={page.warningSigns} icon={CircleAlert} />
        </div>

        <section className={styles.textSection}>
          <p className={styles.kicker}>Diagnosis before parts</p>
          <h2>How we approach your Honda</h2>
          <p>{page.diagnostic}</p>
          <p>Accurate diagnosis matters because one symptom can have several causes. Replacing the most commonly blamed part can waste time and money when the underlying electrical, control, fluid, or mechanical condition has not been verified.</p>
        </section>

        <section className={styles.servicesSection}>
          <Wrench aria-hidden="true" />
          <div>
            <p className={styles.kicker}>Complete vehicle service</p>
            <h2>Common services and repairs</h2>
            <ul className={styles.checkGrid}>{page.services.map((service) => <li key={service}><CheckCircle2 aria-hidden="true" size={18} />{service}</li>)}</ul>
          </div>
        </section>

        <HondaCta />

        <section className={styles.textSection}>
          <p className={styles.kicker}>Maintenance guidance</p>
          <h2>Use the schedule for your exact Honda</h2>
          <p>{page.maintenance}</p>
          <p>Bring any available maintenance records. They help us distinguish what is due from what has already been completed and avoid unnecessary repetition.</p>
        </section>

        <div className={styles.threeColumn}>
          <section><ShieldCheck aria-hidden="true" /><h2>Can I keep driving?</h2><p>{page.driving}</p></section>
          <section><Clock3 aria-hidden="true" /><h2>How long can repairs take?</h2><p>{page.timing}</p></section>
          <section><Gauge aria-hidden="true" /><h2>What affects repair cost?</h2><p>{page.cost}</p></section>
        </div>

        <section className={styles.textSection}>
          <p className={styles.kicker}>Claims assistance</p>
          <h2>Extended warranty support</h2>
          <p>{page.warranty}</p>
          <Link className={styles.textLink} href="/services/extended-warranty-repair">Learn about extended warranty repair support</Link>
        </section>

        <section className={styles.whySection}>
          <div><p className={styles.kicker}>Local, diagnostic-first care</p><h2>Why choose R Complete Auto Care?</h2></div>
          <div className={styles.whyGrid}>
            <p><strong>Clear testing.</strong> We investigate the cause before asking you to approve a repair.</p>
            <p><strong>Complete service.</strong> Engine, transmission, electrical, brake, suspension, A/C, and maintenance needs can be handled in one place.</p>
            <p><strong>Local communication.</strong> You receive findings, priorities, and an estimate before authorized work begins.</p>
          </div>
        </section>

        <section className={styles.relatedSection} aria-labelledby="related-heading">
          <h2 id="related-heading">Related Honda repair information</h2>
          <div>{page.related.map((relatedSlug) => { const related = getHondaPage(relatedSlug); return <Link key={related.slug} href={`/${related.slug}`}>{related.shortName}</Link>; })}</div>
          {generalServiceLinks[page.slug] && <div>{generalServiceLinks[page.slug].map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>}
          <Link className={styles.hubLink} href="/honda-repair-crown-point-in">View the complete Honda repair directory</Link>
        </section>

        <section className={styles.faqSection}>
          <p className={styles.kicker}>Honda service questions</p>
          <h2>Frequently asked questions</h2>
          <div className={styles.faqList}>{page.faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>

        <HondaCta />
      </div>
      {schemas.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, "\\u003c") }} />)}
    </article>
  );
}
