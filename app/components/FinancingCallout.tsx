import Link from "next/link";

// One-line pay-over-time callout used on higher-ticket service pages.
export default function FinancingCallout() {
  return (
    <div style={{ background: "#fff0f1", borderTop: "1px solid #f6d3d6", borderBottom: "1px solid #f6d3d6", padding: "12px 24px", textAlign: "center", fontSize: "14px", color: "#1a1a1a" }}>
      💳 Financing available — <strong>Affirm, Klarna &amp; Sunbit</strong>.{" "}
      <Link href="/financing" style={{ color: "#c92f3b", fontWeight: 700, textDecoration: "none" }}>Pay over time on your estimate →</Link>
    </div>
  );
}
