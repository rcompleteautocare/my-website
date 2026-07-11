import Link from "next/link";
import { BadgeDollarSign } from "lucide-react";

type FinancingPlaceholderProps = {
  enabled?: boolean;
  href?: string;
};

export default function FinancingPlaceholder({
  enabled = false,
  href = "/contact",
}: FinancingPlaceholderProps) {
  if (!enabled) return null;

  return (
    <section aria-labelledby="financing-heading">
      <BadgeDollarSign aria-hidden="true" />
      <h2 id="financing-heading">Flexible repair financing</h2>
      <p>Ask about available payment options before approving your repair.</p>
      <Link href={href}>Explore financing options</Link>
    </section>
  );
}
