// Trust / certification badges strip.
//
// Asset notes:
// - BBB: dynamic seal, hot-linked from BBB as required (do NOT download). Uses a
//   plain <img> because the host isn't in next.config remotePatterns.
// - RepairPal: official PNG lives at /public/badges/repairpal.png (added separately),
//   linked to the shop's RepairPal profile page.
// - ASE: deferred — add /public/badges/ase.png + the block below when the asset is ready.

const BADGE_HEIGHT = 56;

export default function TrustBadges() {
  return (
    <section
      aria-label="Certifications and accreditations"
      style={{ background: "#fff", borderBottom: "1px solid #eee", padding: "20px 24px" }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        {/* RepairPal Certified */}
        <a
          href="https://repairpal.com/auto-repair-near-me/auto-repair-in-crown-point-indiana/r-complete-auto-care"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <img
            src="/badges/repairpal.png"
            alt="RepairPal Certified Shop"
            width={260}
            height={233}
            style={{ height: BADGE_HEIGHT, width: "auto", display: "block" }}
          />
        </a>

        {/* ASE Certified — deferred; enable once /public/badges/ase.png is added
        <a
          href="https://www.ase.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <img
            src="/badges/ase.png"
            alt="ASE Certified"
            style={{ height: BADGE_HEIGHT, width: "auto", display: "block" }}
          />
        </a>
        */}

        {/* BBB Accredited — dynamic seal, hot-linked as-is (do NOT download) */}
        <a
          href="https://www.bbb.org/us/in/crown-point/profile/auto-repairs/r-complete-auto-care-0352-90173711/#sealclick"
          target="_blank"
          rel="nofollow"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <img
            src="https://seal-fortwayne.bbb.org/seals/blue-seal-96-50-bbb-90173711.png"
            width={96}
            height={50}
            style={{ border: 0, height: BADGE_HEIGHT, width: "auto", display: "block" }}
            alt="R Complete Auto Care BBB Business Review"
          />
        </a>
      </div>
    </section>
  );
}
