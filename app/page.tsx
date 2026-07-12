import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  ClipboardCheck,
  Gauge,
  MapPin,
  Phone,
  ScanSearch,
  ShieldCheck,
  Star,
  Timer,
  UserRoundCheck,
  Wrench,
} from "lucide-react";
import BookButton from "@/components/BookButton";
import { RATING, REVIEW_COUNT } from "@/lib/rating";
import FaqAccordion from "./components/FaqAccordion";
import FinancingPlaceholder from "./components/FinancingPlaceholder";
import ReviewsWidget from "./components/ReviewsWidget";
import StickyMobileCta from "./components/StickyMobileCta";
import TrustBadges from "./components/TrustBadges";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "R Complete Auto Care | Auto Repair in Crown Point, IN",
  description:
    "Family-owned auto repair shop in Crown Point, IN. Diagnostic-first approach, honest estimates, and extended warranty work. Call (219) 262-2711.",
  alternates: { canonical: "https://www.rcompleteautocare.com" },
  openGraph: {
    title: "R Complete Auto Care | Auto Repair in Crown Point, IN",
    description:
      "Find the real problem before replacing parts. Honest auto repair and diagnostics in Crown Point, Indiana.",
    url: "https://www.rcompleteautocare.com",
    siteName: "R Complete Auto Care",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "R Complete Auto Care | Crown Point, IN",
    description: "Diagnostic-first auto repair. Honest answers. No guesswork.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const services = [
  {
    title: "Check Engine & Electrical",
    description: "Warning lights, wiring faults, batteries, sensors, and no-start problems.",
    href: "/services/diagnostics",
    icon: ScanSearch,
  },
  {
    title: "Brake & Suspension",
    description: "Measured inspections and clear recommendations for safe, predictable handling.",
    href: "/services/brake-repair",
    icon: ShieldCheck,
  },
  {
    title: "Engine & Transmission",
    description: "Root-cause testing before you approve a major repair or replacement.",
    href: "/services/engine-repair",
    icon: Wrench,
  },
];

const faqs = [
  {
    q: "Do you work on foreign and domestic vehicles?",
    a: "Yes. We service all makes and models, including Honda, Toyota, BMW, Mercedes, Subaru, Ford, Chevrolet, Dodge, and GMC.",
  },
  {
    q: "Do you accept extended warranties?",
    a: "Yes. We work with most extended warranty providers and handle the claim and documentation process for you.",
  },
  {
    q: "Do you offer same-day diagnostics?",
    a: "Most diagnostic appointments are completed the same day. Repair time depends on the work required, and we provide a timeline before you approve anything.",
  },
  {
    q: "What happens before a repair is approved?",
    a: "We test the vehicle, identify the root cause, and call you with our findings, priorities, and a clear estimate. No repair begins without your approval.",
  },
  {
    q: "Where is the shop?",
    a: "We are at 1305 E Summit St in Crown Point, Indiana, serving Crown Point, St. John, Schererville, Merrillville, Cedar Lake, and the surrounding area.",
  },
];

const emergencyServices = [
  { title: "Check Engine Light Flashing", href: "/check-engine-light-flashing-crown-point", icon: Gauge },
  { title: "Engine Overheating", href: "/car-overheating-crown-point-in", icon: Timer },
  { title: "Car Won't Start", href: "/car-wont-start-crown-point-in", icon: CarFront },
  { title: "Transmission Problems", href: "/transmission-slipping-crown-point-in", icon: Wrench },
];

const serviceAreas = [
  { city: "Crown Point", href: "/auto-repair-crown-point-in" },
  { city: "St. John", href: "/auto-repair-st-john-in" },
  { city: "Schererville", href: "/auto-repair-schererville-in" },
  { city: "Dyer" },
  { city: "Cedar Lake", href: "/auto-repair-cedar-lake-in" },
  { city: "Lowell" },
  { city: "Merrillville", href: "/auto-repair-merrillville-in" },
  { city: "Valparaiso" },
  { city: "Munster" },
  { city: "Hobart" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Your local Crown Point shop</p>
          <h1>We find the real problem before replacing parts.</h1>
          <p className={styles.heroCopy}>
            Diagnostic-first auto repair with straight answers, a clear estimate, and no work
            performed until you approve it.
          </p>
          <div className={styles.heroActions}>
            <BookButton className={styles.primaryButton}>
              <CalendarDays aria-hidden="true" size={20} /> Schedule Service Online
            </BookButton>
            <a className={styles.secondaryButton} href="tel:2192622711">
              <Phone aria-hidden="true" size={20} /> (219) 262-2711
            </a>
          </div>
          <div className={styles.heroProof} aria-label="Why drivers choose R Complete Auto Care">
            <span><Star aria-hidden="true" size={17} fill="currentColor" /><strong>4.9 Google Rating</strong><small>110+ five-star reviews</small></span>
            <span><ShieldCheck aria-hidden="true" size={18} /><strong>Extended Warranty</strong><small>Claims accepted</small></span>
            <span><Timer aria-hidden="true" size={18} /><strong>Same-Day Diagnostics</strong><small>Appointments available</small></span>
          </div>
          <div className={styles.heroDetails}>
            <span>Mon–Fri 8am–6pm · Sat 8am–2pm</span>
            <span>1305 E Summit St, Crown Point, IN</span>
          </div>
        </div>
      </section>

      <section className={`${styles.photoFeature} ${styles.photoFeatureFirst}`} aria-labelledby="visit-shop-heading">
        <div className={styles.photoFrame}>
          <Image
            src="/images/shop/r-complete-auto-care-building-exterior.webp"
            alt="Exterior of R Complete Auto Care auto repair shop in Crown Point, Indiana"
            fill
            sizes="(max-width: 800px) 100vw, 55vw"
            className={styles.featureImage}
          />
        </div>
        <div className={styles.photoCopy}>
          <p className={styles.kicker}>Your local Crown Point shop</p>
          <h2 id="visit-shop-heading">Visit R Complete Auto Care</h2>
          <p>Our modern Crown Point facility provides diagnostic-first auto repair using professional equipment, experienced ASE-certified technicians, and transparent service from start to finish.</p>
          <BookButton className={styles.photoButton}>
            <CalendarDays aria-hidden="true" size={19} /> Book Appointment
          </BookButton>
        </div>
      </section>

      <section className={styles.emergencySection} aria-labelledby="emergency-heading">
        <div className={styles.emergencyHeader}>
          <div>
            <p className={styles.kicker}>Fast paths for urgent problems</p>
            <h2 id="emergency-heading">Need Immediate Auto Repair?</h2>
          </div>
          <a className={styles.emergencyCall} href="tel:2192622711">
            <Phone aria-hidden="true" size={19} /> Call Now
          </a>
        </div>
        <div className={styles.emergencyGrid}>
          {emergencyServices.map(({ title, href, icon: Icon }) => (
            <Link href={href} key={title}>
              <Icon aria-hidden="true" size={22} />
              <span>{title}</span>
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.photoFeature} aria-labelledby="diagnostics-heading">
        <div className={styles.photoFrame}>
          <Image
            src="/images/shop/r-complete-auto-care-service-bays.webp"
            alt="Service bays with vehicle lifts at R Complete Auto Care in Crown Point, IN"
            fill
            sizes="(max-width: 800px) 100vw, 55vw"
            className={styles.featureImage}
          />
        </div>
        <div className={styles.photoCopy}>
          <p className={styles.kicker}>Professional capabilities</p>
          <h2 id="diagnostics-heading">Modern Equipment.<br />Accurate Diagnostics.</h2>
          <p>Every repair begins with professional diagnostics so we identify the real problem before replacing parts.</p>
        </div>
      </section>

      <section className={styles.proof} aria-label="Customer rating and shop credentials">
        <div className={styles.ratingSummary}>
          <span className={styles.stars} aria-hidden="true">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </span>
          <strong>{RATING} on Google</strong>
          <span>{REVIEW_COUNT} customer reviews</span>
        </div>
        <TrustBadges />
      </section>

      <ReviewsWidget />

      <section className={styles.warrantySection} aria-labelledby="warranty-heading">
        <div className={styles.warrantyCopy}>
          <p className={styles.kicker}>Claims support from diagnosis to decision</p>
          <h2 id="warranty-heading">We Handle Extended Warranty Claims Every Day</h2>
          <p>
            We work directly with many extended warranty companies. We verify the failure, submit
            documentation, communicate with the adjuster, and help guide the approval process.
          </p>
          <Link href="/services/extended-warranty-repair">
            Learn More About Warranty Repairs <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <div className={styles.providerPanel} aria-label="Extended warranty providers we work with">
          <p>Common providers</p>
          <div>
            {['CarShield', 'SilverRock', 'Endurance', 'Fidelity', 'Zurich', 'American Auto Shield'].map((provider) => (
              <span key={provider}>{provider}</span>
            ))}
          </div>
          <small>Coverage and authorization depend on your individual contract.</small>
        </div>
      </section>

      <section className={styles.metricsSection} aria-label="Shop qualifications and service metrics">
        <article><Star aria-hidden="true" /><strong>110+</strong><span>Five-Star Reviews</span></article>
        <article><UserRoundCheck aria-hidden="true" /><strong>ASE-Certified</strong><span>Technicians</span></article>
        <article><ScanSearch aria-hidden="true" /><strong>Same-Day</strong><span>Diagnostics Available</span></article>
        <article><ClipboardCheck aria-hidden="true" /><strong>Processed Daily</strong><span>Extended Warranty Claims</span></article>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Most-requested services</p>
          <h2>Start with the problem you need solved.</h2>
          <p>From warning lights to major repairs, every recommendation begins with testing.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(({ title, description, href, icon: Icon }) => (
            <Link className={styles.serviceCard} href={href} key={title}>
              <span className={styles.iconBox}><Icon aria-hidden="true" size={25} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className={styles.textLink}>Explore services <ArrowRight aria-hidden="true" size={17} /></span>
            </Link>
          ))}
        </div>
        <div className={styles.centeredLink}>
          <Link href="/services">View all auto repair services <ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processIntro}>
          <p className={styles.kicker}>How it works</p>
          <h2>Answers first. Repairs second.</h2>
          <p className="speakable">
            R Complete Auto Care is a diagnostic-first family shop. We run the appropriate test
            protocol before recommending a repair, explain what is urgent and what can wait, and
            provide a clear estimate before work begins.
          </p>
        </div>
        <ol className={styles.processList}>
          <li><span>1</span><div><h3>Tell us what the vehicle is doing</h3><p>Call or book a time that works for you.</p></div></li>
          <li><span>2</span><div><h3>We test and diagnose</h3><p>We identify the cause instead of guessing from symptoms.</p></div></li>
          <li><span>3</span><div><h3>You get a clear plan</h3><p>We explain the findings, priorities, price, and timing.</p></div></li>
          <li><span>4</span><div><h3>We repair what you approve</h3><p>No surprises and no unauthorized work.</p></div></li>
        </ol>
      </section>

      <section className={`${styles.photoFeature} ${styles.photoFeatureReverse}`} aria-labelledby="customer-experience-heading">
        <div className={styles.photoFrame}>
          <Image
            src="/images/shop/r-complete-auto-care-office-overview.webp"
            alt="Reception and front-office area at R Complete Auto Care"
            fill
            sizes="(max-width: 800px) 100vw, 55vw"
            className={styles.featureImage}
          />
        </div>
        <div className={styles.photoCopy}>
          <p className={styles.kicker}>Customer experience</p>
          <h2 id="customer-experience-heading">Professional Service From Check-In to Check-Out</h2>
          <p>Our service advisors provide honest communication, transparent estimates, and exceptional customer service throughout every repair.</p>
        </div>
      </section>

      <section className={`${styles.photoFeature} ${styles.photoFeatureCompact}`} aria-labelledby="waiting-area-heading">
        <div className={styles.photoFrame}>
          <Image
            src="/images/shop/r-complete-auto-care-waiting-room.webp"
            alt="Customer waiting room at R Complete Auto Care"
            fill
            sizes="(max-width: 800px) 100vw, 48vw"
            className={styles.featureImage}
          />
        </div>
        <div className={styles.photoCopy}>
          <p className={styles.kicker}>While you wait</p>
          <h2 id="waiting-area-heading">Comfortable Waiting Area</h2>
          <p>Relax in our clean customer waiting area while shorter services are completed.</p>
        </div>
      </section>

      <section className={styles.whySection}>
        <section className={styles.dviSection} aria-labelledby="dvi-heading">
          <div className={styles.dviIntro}>
            <p className={styles.kicker}>Digital Vehicle Inspections</p>
            <h2 id="dvi-heading">See What We See Before You Decide.</h2>
            <p>Our inspection process turns technician findings into clear, prioritized recommendations. Available documentation can include photos today, with the process designed to support video when applicable in the future.</p>
            <Link href="/inspection-checklist">Explore our inspection process <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
          <ol className={styles.dviSteps}>
            <li><strong>1. Technician inspection</strong><span>We inspect and test the vehicle based on the concern and service requested.</span></li>
            <li><strong>2. Findings documented</strong><span>Relevant measurements and available photos help explain what the technician found.</span></li>
            <li><strong>3. Priorities explained</strong><span>Recommendations are separated into urgent, upcoming, and monitor items where appropriate.</span></li>
            <li><strong>4. Customer approval</strong><span>You receive a transparent estimate. No repair begins without your approval.</span></li>
          </ol>
        </section>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Why R Complete</p>
          <h2>A local shop built around clear decisions.</h2>
        </div>
        <div className={styles.whyGrid}>
          <article><CheckCircle2 aria-hidden="true" /><h3>Diagnostic-first</h3><p>We verify the root cause before recommending parts or repairs.</p></article>
          <article><ClipboardCheck aria-hidden="true" /><h3>Clear priorities</h3><p>Know what needs attention now, what can wait, and why.</p></article>
          <article><ShieldCheck aria-hidden="true" /><h3>Warranty help</h3><p>We work with most extended warranty providers and handle the paperwork.</p></article>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={`${styles.storyCard} ${styles.storyCardTextOnly}`}>
          <div className={styles.storyCopy}>
            <p className={styles.kicker}>Family experience, local accountability</p>
            <h2>Locally Owned.<br />Professionally Operated.</h2>
            <p>
              Our family-owned team brings decades of experience and ASE-certified expertise to
              every vehicle. We diagnose first, explain what is urgent and what can wait, provide a
              transparent estimate, and perform no repair without customer approval.
            </p>
            <Link href="/about">Meet R Complete Auto Care <ArrowRight aria-hidden="true" size={17} /></Link>
          </div>
        </div>
      </section>

      <section className={styles.serviceAreaSection} aria-labelledby="service-area-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Serving Northwest Indiana</p>
          <h2 id="service-area-heading">Your local diagnostic-first repair shop.</h2>
          <p>Conveniently located in Crown Point for drivers from St. John, Schererville, Merrillville, Dyer, Cedar Lake, Lowell, Munster, Hobart, Valparaiso, and nearby communities.</p>
        </div>
        <div className={styles.serviceAreaGrid}>
          {serviceAreas.map(({ city, href }) => href ? (
            <Link href={href} key={city}><MapPin aria-hidden="true" size={18} />{city}<ArrowRight aria-hidden="true" size={15} /></Link>
          ) : (
            <div key={city}><MapPin aria-hidden="true" size={18} />{city}</div>
          ))}
        </div>
      </section>

      <FinancingPlaceholder />

      <section className={styles.faqSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>Questions, answered</p>
          <h2>Before you bring in your vehicle.</h2>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>

      <section className={styles.finalCta}>
        <p className={styles.kicker}>Ready when you are</p>
        <h2>Let’s find out what your car actually needs.</h2>
        <p>Talk to a real person at our Crown Point shop.</p>
        <div className={styles.heroActions}>
          <a className={styles.primaryButton} href="tel:2192622711">
            <Phone aria-hidden="true" size={20} /> Call (219) 262-2711
          </a>
          <BookButton className={styles.secondaryButton}>
            <CalendarDays aria-hidden="true" size={20} /> Book Your Appointment
          </BookButton>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <StickyMobileCta />
    </div>
  );
}
