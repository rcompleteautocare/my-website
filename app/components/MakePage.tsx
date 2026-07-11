import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, CircleAlert, Clock3, Gauge, ShieldCheck, Wrench } from "lucide-react";
import MakeCta from "./MakeCta";
import { getMakePage, MAKE_BASE_URL, MAKE_DIRECTORY, type MakePageData } from "@/lib/make-pages";
import styles from "../honda.module.css";

const AREA_SERVED = ["Crown Point", "St. John", "Schererville", "Merrillville", "Cedar Lake"];

export function makeMetadata(page: MakePageData): Metadata {
  const url = `${MAKE_BASE_URL}/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title: page.title, description: page.description, url, siteName: "R Complete Auto Care", type: "website", images: [{ url: "/og.png", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/og.png"] },
  };
}

const schema = (page: MakePageData) => {
  const url = `${MAKE_BASE_URL}/${page.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: MAKE_BASE_URL },
        { "@type": "ListItem", position: 2, name: `${page.make} Repair`, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.heading,
      serviceType: `${page.make} repair`,
      url,
      provider: { "@id": `${MAKE_BASE_URL}/#business` },
      areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name, containedIn: { "@type": "State", name: "Indiana" } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
  ];
};

export default function MakePage({ slug }: { slug: string }) {
  const page = getMakePage(slug);
  const schemas = schema(page);
  const otherMakes = MAKE_DIRECTORY.filter((entry) => entry.href !== `/${page.slug}`);

  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li aria-current="page">{page.make} Repair</li>
            </ol>
          </nav>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1>{page.heading}</h1>
          <p className={`${styles.lead} speakable`}>{page.tldr}</p>
          <MakeCta make={page.make} compact />
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.textSection}>
          <p className={styles.kicker}>Start with the exact vehicle</p>
          <h2>Diagnostic-first {page.make} service in Crown Point</h2>
          <p>{page.intro}</p>
        </section>

        <section className={styles.textSection}>
          <p className={styles.kicker}>What we commonly diagnose</p>
          <h2>Common {page.make} problems we test for</h2>
          {page.problems.map((problem) => (
            <div key={problem.name} style={{ marginBottom: "26px" }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "20px" }}>{problem.name}</h3>
              <p>{problem.detail}</p>
            </div>
          ))}
        </section>

        <div className={styles.twoColumn}>
          <section className={styles.listCard}>
            <CircleAlert aria-hidden="true" />
            <h2>Warning signs not to ignore</h2>
            <ul>{page.warningSigns.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className={styles.listCard}>
            <Gauge aria-hidden="true" />
            <h2>How we diagnose your {page.make}</h2>
            <p style={{ color: "#555", lineHeight: 1.7 }}>{page.diagnostic}</p>
          </section>
        </div>

        <section className={styles.servicesSection}>
          <Wrench aria-hidden="true" />
          <div>
            <p className={styles.kicker}>Complete vehicle service</p>
            <h2>{page.make} services and repairs</h2>
            <ul className={styles.checkGrid}>{page.services.map((service) => <li key={service}><CheckCircle2 aria-hidden="true" size={18} />{service}</li>)}</ul>
          </div>
        </section>

        <MakeCta make={page.make} />

        <section className={styles.textSection}>
          <p className={styles.kicker}>Maintenance guidance</p>
          <h2>Use the schedule for your exact {page.make}</h2>
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
          <h2>{page.make} extended warranty support</h2>
          <p>{page.warranty}</p>
          <Link className={styles.textLink} href="/services/extended-warranty-repair">Learn about extended warranty repair support</Link>
        </section>

        <section className={styles.whySection}>
          <div><p className={styles.kicker}>Local, diagnostic-first care</p><h2>Why choose R Complete Auto Care?</h2></div>
          <div className={styles.whyGrid}>
            <p><strong>Clear testing.</strong> We investigate the cause before asking you to approve a {page.make} repair.</p>
            <p><strong>Complete service.</strong> Engine, transmission, electrical, brake, suspension, A/C, and maintenance needs can be handled in one place.</p>
            <p><strong>Local communication.</strong> You receive findings, priorities, and an estimate before authorized work begins.</p>
          </div>
        </section>

        <section className={styles.relatedSection} aria-labelledby="related-heading">
          <h2 id="related-heading">Related repair information</h2>
          <div>
            {page.relatedServices.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/auto-repair-crown-point-in">Auto repair in Crown Point</Link>
            {page.relatedSymptoms.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
          <p className={styles.kicker} style={{ marginTop: "8px" }}>Other makes we service</p>
          <div>
            {otherMakes.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </section>

        <section className={styles.faqSection}>
          <p className={styles.kicker}>{page.make} service questions</p>
          <h2>Frequently asked questions</h2>
          <div className={styles.faqList}>{page.faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>

        <MakeCta make={page.make} />
      </div>
      {schemas.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, "\\u003c") }} />)}
    </article>
  );
}
