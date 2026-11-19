import type { Metadata } from "next";
import Link from "next/link";
import { repairGuides } from "@/lib/repair-guides";
import { socialMetadata } from "@/lib/seo";

const TITLE = "Vehicle Repair Guides | Crown Point Auto Repair";
const DESCRIPTION = "Diagnostic-first vehicle repair guides for common Honda, Ford, Chevrolet, Nissan, BMW, and Jeep problems from R Complete Auto Care.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/repair-guides" },
  ...socialMetadata({ title: TITLE, description: DESCRIPTION, path: "/repair-guides" }),
};

export default function RepairGuides() {
  return (
    <div style={{ maxWidth: 1050, margin: "0 auto", padding: "72px 24px", color: "#222" }}>
      <p style={{ color: "#c92f3b", fontWeight: 800 }}>R COMPLETE AUTO CARE RESOURCE LIBRARY</p>
      <h1 style={{ fontSize: "clamp(40px, 6vw, 64px)", marginBottom: 18 }}>Vehicle-Specific Repair Guides</h1>
      <p className="speakable" style={{ maxWidth: 760, fontSize: 19, lineHeight: 1.75 }}>
        Plain-language guides to problems that come up again and again on specific vehicles. Each one explains how the system works, what the symptoms can mean, how a technician tells similar causes apart, and when it is no longer safe to keep driving.
      </p>
      <p style={{ maxWidth: 760, lineHeight: 1.8, marginTop: 16 }}>
        The guides share one idea: a symptom or a trouble code is where diagnosis starts, not where it ends. Several different faults can produce the same noise, warning light or code, and replacing the most likely part without testing is how a small repair becomes an expensive one. Use a guide to understand what you are dealing with and what questions to ask. It cannot tell you what is wrong with your vehicle. Only testing that vehicle can.
      </p>
      <p style={{ maxWidth: 760, lineHeight: 1.8 }}>
        Where a manufacturer has issued bulletins, recalls or extended coverage for a problem, the guide says so. Those apply by VIN, so check with a dealer and at NHTSA.gov before paying for a major repair.
      </p>

      <h2 style={{ fontSize: 28, margin: "44px 0 0" }}>Guides by vehicle</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18, marginTop: 20 }}>
        {Object.entries(repairGuides).map(([slug, g]) => (
          <Link href={`/repair-guides/${slug}`} key={slug} style={{ border: "1px solid #ddd", borderRadius: 12, padding: 26, textDecoration: "none", color: "#222" }}>
            <strong style={{ fontSize: 21 }}>{g.title}</strong>
            <p style={{ lineHeight: 1.6, color: "#5d5d5d" }}>{g.summary}</p>
            <span style={{ color: "#c92f3b", fontWeight: 800 }}>Read guide →</span>
          </Link>
        ))}
      </div>

      <p style={{ marginTop: 42, lineHeight: 1.8 }}>
        For an answer about your own vehicle, <Link href="/book">book a diagnostic appointment</Link>, call <a href="tel:2192622711">(219) 262-2711</a>, or review <Link href="/services">all services</Link>.
      </p>
    </div>
  );
}
