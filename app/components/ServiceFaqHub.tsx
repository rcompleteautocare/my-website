import FaqAccordion from "./FaqAccordion";
import { buildServiceFaqs, serviceFaqConfig } from "@/lib/service-faqs";

export default function ServiceFaqHub({ slug }: { slug: string }) {
  const faqs = buildServiceFaqs(slug);
  const service = serviceFaqConfig[slug];
  if (!service || !faqs.length) return null;
  return (
    <section style={{ maxWidth: 820, margin: "0 auto", padding: "72px 24px" }} aria-labelledby={`${slug}-complete-faq`}>
      <p style={{ color: "#c92f3b", fontSize: 13, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 12 }}>Clear answers from a diagnostic-first shop</p>
      <h2 id={`${slug}-complete-faq`} style={{ fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.15, margin: "0 0 14px" }}>Frequently Asked Questions About {service.name}</h2>
      <p style={{ color: "#5d5d5d", lineHeight: 1.7, margin: "0 0 32px" }}>Concise guidance for Crown Point and Northwest Indiana drivers. A vehicle-specific inspection is always required for a confirmed diagnosis and estimate.</p>
      <FaqAccordion faqs={faqs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }).replace(/</g, "\\u003c") }} />
    </section>
  );
}
