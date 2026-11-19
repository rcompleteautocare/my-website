import FaqAccordion from "./FaqAccordion";
import FaqSchema from "./FaqSchema";
import { buildServiceFaqs, serviceFaqConfig, type Faq } from "@/lib/service-faqs";

// Service names in lib/service-faqs.ts are lowercase for use mid-sentence;
// the section heading needs Title Case ("Brake Repair", "No-Start Diagnostics").
function titleCase(name: string) {
  return name.replace(/(^|[\s-])([a-z])/g, (_, sep, ch) => sep + ch.toUpperCase()).replace(/ And /g, " and ");
}

// The one FAQ section on a service page. `faqs` are the page's own questions;
// they are merged with the shared service questions the page has not already
// answered (see buildServiceFaqs). The same merged list feeds the visible
// accordion and the page's single FAQPage JSON-LD block. Service pages must not
// render another FAQ list or emit their own FAQPage schema.
export default function ServiceFaqHub({ slug, faqs: pageFaqs = [] }: { slug: string; faqs?: Faq[] }) {
  const faqs = buildServiceFaqs(slug, pageFaqs);
  const service = serviceFaqConfig[slug];
  if (!service || !faqs.length) return null;
  return (
    <section style={{ maxWidth: 820, margin: "0 auto", padding: "72px 24px" }} aria-labelledby={`${slug}-complete-faq`}>
      <p style={{ color: "#c92f3b", fontSize: 13, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 12 }}>Clear answers from a diagnostic-first shop</p>
      <h2 id={`${slug}-complete-faq`} style={{ fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1.15, margin: "0 0 14px" }}>Frequently Asked Questions About {titleCase(service.name)}</h2>
      <p style={{ color: "#5d5d5d", lineHeight: 1.7, margin: "0 0 32px" }}>Concise guidance for Crown Point and Northwest Indiana drivers. A vehicle-specific inspection is always required for a confirmed diagnosis and estimate.</p>
      <FaqAccordion faqs={faqs} />
      <FaqSchema faqs={faqs} />
    </section>
  );
}
