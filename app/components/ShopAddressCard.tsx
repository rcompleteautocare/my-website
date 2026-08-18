// Shop location card. Replaces the Google Static Maps embed that used to sit in
// this slot: that image put a public API key in the page source, cost an API
// call per homepage view, and Google Maps Platform terms do not permit
// self-hosting the rendered tiles to avoid either. The address is the part
// visitors actually need, and rendering it as text is free, server-rendered,
// and crawlable. "Get Directions" hands off to Google Maps on demand.
//
// NAP (name / address / phone) is byte-identical to the footer — see the NAP
// consistency note in CLAUDE.md.

// Public Google Maps place link (Place CID), matches NeighborhoodMap / lib usage.
const MAPS_LINK = "https://www.google.com/maps?cid=13417684656168194405";

export default function ShopAddressCard() {
  return (
    <div
      style={{
        maxWidth: "920px",
        margin: "40px auto 0",
        background: "#fff",
        border: "1px solid #f0f0f0",
        borderLeft: "4px solid #e63946",
        borderRadius: "14px",
        boxShadow: "0 18px 48px rgba(25, 25, 25, .13)",
        padding: "28px 32px",
        display: "flex",
        flexWrap: "wrap",
        gap: "28px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ lineHeight: 1.8, color: "#444", fontSize: "15px" }}>
        <div style={{ color: "#1a1a1a", fontWeight: "bold", fontSize: "18px", marginBottom: "6px" }}>
          R Complete Auto Care
        </div>
        1305 E Summit St<br />
        Crown Point, IN 46307<br />
        <a href="tel:2192622711" style={{ color: "#e63946", fontWeight: "bold", textDecoration: "none" }}>
          (219) 262-2711
        </a>
      </div>

      <div style={{ lineHeight: 1.8, color: "#444", fontSize: "15px" }}>
        <div style={{ color: "#1a1a1a", fontWeight: "bold", fontSize: "15px", marginBottom: "6px" }}>
          Hours
        </div>
        Mon–Fri 8am–6pm<br />
        Sat 8am–2pm<br />
        Sun closed
      </div>

      <a
        href={MAPS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "#e63946",
          color: "#fff",
          padding: "14px 24px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "15px",
          whiteSpace: "nowrap",
        }}
      >
        Get Directions →
      </a>
    </div>
  );
}
