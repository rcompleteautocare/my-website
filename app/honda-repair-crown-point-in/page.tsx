import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HondaCta from "../components/HondaCta";
import { HONDA_BASE_URL, HONDA_MODELS, HONDA_SERVICES, type HondaFaq } from "@/lib/honda-pages";
import styles from "../honda.module.css";

const url = `${HONDA_BASE_URL}/honda-repair-crown-point-in`;

export const metadata: Metadata = {
  title: "Honda Repair Crown Point, IN | R Complete Auto Care",
  description: "Honda diagnostics, maintenance, and repair in Crown Point, IN. Explore model-specific service, engine, transmission, A/C, brake, and timing-belt guidance.",
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { title: "Honda Repair in Crown Point, IN", description: "Diagnostic-first Honda service for Crown Point and nearby Northwest Indiana communities.", url, siteName: "R Complete Auto Care", type: "website", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: "Honda Repair in Crown Point, IN", description: "Diagnostic-first Honda service at R Complete Auto Care.", images: ["/og.png"] },
};

const faqs: HondaFaq[] = [
  { question: "Do you repair Honda vehicles in Crown Point?", answer: "Yes. R Complete Auto Care diagnoses, maintains, and repairs Honda cars, crossovers, minivans, and Ridgeline models at our Crown Point shop." },
  { question: "Are you a Honda dealership or Honda-authorized repair center?", answer: "No. We are an independent auto repair shop. We service Honda vehicles without representing that we are a Honda dealership or factory-authorized facility." },
  { question: "Can you diagnose a Honda check-engine light?", answer: "Yes. We use trouble codes, freeze-frame and live data, inspection, and circuit or mechanical testing as needed. A code identifies a diagnostic path; it does not automatically identify a failed part." },
  { question: "Do you service Honda automatic transmissions and CVTs?", answer: "Yes. We diagnose conventional automatic transmissions and CVTs based on the exact model, year, and configuration. Correct fluid and test information are vehicle-specific." },
  { question: "Does every Honda need timing-belt service?", answer: "No. Honda has used timing belts and timing chains. The exact engine and model year determine the design and maintenance guidance, so we verify the vehicle first." },
  { question: "Can you help with a Honda extended warranty claim?", answer: "Yes. If a failure may be covered, we can document the diagnosis and communicate with the warranty administrator. Coverage and authorization depend on the individual contract." },
  { question: "Can I bring my Honda in for maintenance even without a warning light?", answer: "Yes. Bring the model year, mileage, service history, and owner’s manual information. We can review what is actually due for that vehicle rather than applying one schedule to every Honda." },
  { question: "Can I keep driving my Honda with a warning light?", answer: "It depends on the warning and symptoms. Stop for a flashing check-engine light, overheating, low oil pressure, unsafe braking, or severe drivability changes. Call us when you are unsure." },
  { question: "How long will Honda diagnosis or repair take?", answer: "Timing depends on the symptom, whether it is intermittent, the testing required, parts availability, and repair access. We explain the expected timeline after the initial evaluation." },
  { question: "How do I schedule Honda service?", answer: "Book online through our appointment page or call (219) 262-2711. Include the Honda model, model year, mileage, warning lights, and symptoms when scheduling." },
];

const schemas = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: HONDA_BASE_URL }, { "@type": "ListItem", position: 2, name: "Honda Repair", item: url }] },
  { "@context": "https://schema.org", "@type": "Service", name: "Honda Repair and Diagnostics", serviceType: "Honda vehicle repair and maintenance", url, provider: { "@id": `${HONDA_BASE_URL}/#business` }, areaServed: ["Crown Point", "St. John", "Schererville", "Merrillville", "Cedar Lake", "Lowell", "Dyer", "Munster", "Highland", "Hobart", "Valparaiso"].map((name) => ({ "@type": "City", name, containedIn: { "@type": "State", name: "Indiana" } })) },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
];

export default function HondaRepairHub() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li><li aria-current="page">Honda Repair</li></ol></nav>
          <p className={styles.eyebrow}>Independent Honda service in Crown Point</p>
          <h1>Honda Repair and Diagnostics</h1>
          <p className={styles.lead}>Complete diagnostics. Complete repairs. We service Honda vehicles with a test-first approach for engine, transmission, electrical, A/C, brake, suspension, maintenance, and extended warranty concerns.</p>
          <HondaCta compact />
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.textSection}>
          <p className={styles.kicker}>Start with the exact vehicle</p>
          <h2>Honda systems change by model, year, and configuration</h2>
          <p>A Civic CVT concern, Pilot timing-belt question, Odyssey sliding-door problem, and CR-V AWD warning require different information and tests. We identify the engine, transmission, and drivetrain, listen to when the symptom occurs, and verify the cause before asking you to approve a repair.</p>
          <p>Our Crown Point shop serves Honda drivers from St. John, Schererville, Merrillville, Cedar Lake, Lowell, Dyer, Munster, Highland, Hobart, Valparaiso, and surrounding Northwest Indiana communities.</p>
        </section>

        <div className={styles.photoBand}>
          <figure><Image src="/images/shop/service-bays.webp" alt="Service bays at R Complete Auto Care" fill sizes="(max-width:760px) 100vw, 50vw" /></figure>
          <figure><Image src="/images/shop/reception.webp" alt="Reception area at R Complete Auto Care" fill sizes="(max-width:760px) 100vw, 50vw" /></figure>
        </div>

        <section className={styles.textSection}>
          <p className={styles.kicker}>Honda model directory</p>
          <h2>Find guidance for your Honda</h2>
          <div className={styles.directory}>{HONDA_MODELS.map((page) => <Link key={page.slug} href={`/${page.slug}`}>{page.shortName} Repair</Link>)}</div>
        </section>

        <section className={styles.textSection}>
          <p className={styles.kicker}>Honda service directory</p>
          <h2>Diagnosis and repair by system</h2>
          <div className={styles.directory}>{HONDA_SERVICES.map((page) => <Link key={page.slug} href={`/${page.slug}`}>{page.shortName}</Link>)}</div>
        </section>

        <HondaCta />

        <section className={styles.servicesSection}>
          <div>
            <p className={styles.kicker}>Connected to complete vehicle care</p>
            <h2>General services for Honda drivers</h2>
            <p>Honda-specific diagnosis is supported by our complete repair capabilities.</p>
            <div className={styles.directory}>
              <Link href="/services/diagnostics">Auto Diagnostics</Link><Link href="/services/check-engine-light">Check Engine Light</Link><Link href="/services/electrical-diagnostics">Electrical Diagnostics</Link><Link href="/services/engine-repair">Engine Repair</Link><Link href="/services/transmission-repair">Transmission Repair</Link><Link href="/services/brake-repair">Brake Repair</Link><Link href="/services/ac-heating-repair">A/C &amp; Heating</Link><Link href="/services/extended-warranty-repair">Extended Warranty Repair</Link>
            </div>
          </div>
        </section>

        <section className={styles.textSection}>
          <p className={styles.kicker}>Maintenance without guesswork</p>
          <h2>There is no single maintenance schedule for every Honda</h2>
          <p>Model year, engine, transmission, drivetrain, mileage, driving conditions, and service history all matter. Some Honda engines use timing belts while others use chains; transmission and AWD fluid requirements also vary. Consult your owner’s manual and vehicle-specific maintenance information rather than relying on a universal list.</p>
          <p>Bring your records and tell us how the vehicle is used. We will help identify what is due, what can be monitored, and what has already been completed.</p>
        </section>

        <section className={styles.faqSection}>
          <p className={styles.kicker}>Honda repair questions</p><h2>Frequently asked questions</h2>
          <div className={styles.faqList}>{faqs.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </section>
        <HondaCta />
      </div>
      {schemas.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry).replace(/</g, "\\u003c") }} />)}
    </article>
  );
}
