import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#aaa", fontSize: "13px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "48px 24px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
        <div>
          <div style={{ color: "#fff", fontWeight: "bold", fontSize: "16px", marginBottom: "12px" }}>R Complete Auto Care</div>
          <div style={{ lineHeight: 1.8 }}>
            1305 E Summit St<br />
            Crown Point, IN 46307<br />
            <a href="tel:2192622711" style={{ color: "#e63946" }}>(219) 262-2711</a><br />
            <a href="mailto:Owner@rcompleteautocare.com" style={{ color: "#aaa" }}>Owner@rcompleteautocare.com</a>
          </div>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: "bold", marginBottom: "12px" }}>Services</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              ["Check Engine Light", "/services/check-engine-light"],
              ["Engine Repair", "/services/engine-repair"],
              ["Transmission Repair", "/services/transmission-repair"],
              ["Brake Repair", "/services/brake-repair"],
              ["Oil Change", "/services/oil-change-maintenance"],
              ["Extended Warranty", "/services/extended-warranty-repair"],
            ].map(([name, href]) => (
              <Link key={href} href={href} style={{ color: "#aaa", textDecoration: "none" }}>{name}</Link>
            ))}
          </div>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: "bold", marginBottom: "12px" }}>Serving</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              ["Crown Point, IN", "/auto-repair-crown-point-in"],
              ["St. John, IN", "/auto-repair-st-john-in"],
              ["Schererville, IN", "/auto-repair-schererville-in"],
              ["Merrillville, IN", "/auto-repair-merrillville-in"],
              ["Cedar Lake, IN", "/auto-repair-cedar-lake-in"],
            ].map(([name, href]) => (
              <Link key={href} href={href} style={{ color: "#aaa", textDecoration: "none" }}>{name}</Link>
            ))}
          </div>
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: "bold", marginBottom: "12px" }}>Hours</div>
          <div style={{ lineHeight: 1.8 }}>
            Mon–Fri: 8:00 AM – 6:00 PM<br />
            Saturday: 8:00 AM – 2:00 PM<br />
            Sunday: Closed
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #222", textAlign: "center", padding: "16px 24px" }}>
        © {new Date().getFullYear()} R Complete Auto Care · Crown Point, IN · All rights reserved.
      </div>
    </footer>
  );
}