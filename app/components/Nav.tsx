"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Diagnostics", href: "/services/diagnostics" },
  { name: "Check Engine Light", href: "/services/check-engine-light" },
  { name: "Electrical Diagnostics", href: "/services/electrical-diagnostics" },
  { name: "No-Start Diagnostics", href: "/services/no-start-diagnostics" },
  { name: "Engine Repair", href: "/services/engine-repair" },
  { name: "Transmission Repair", href: "/services/transmission-repair" },
  { name: "Brake Repair", href: "/services/brake-repair" },
  { name: "Suspension & Steering", href: "/services/suspension-steering" },
  { name: "Oil Change & Maintenance", href: "/services/oil-change-maintenance" },
  { name: "A/C & Heating Repair", href: "/services/ac-heating-repair" },
  { name: "Extended Warranty Repairs", href: "/services/extended-warranty-repair" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <div style={{ background: "#1a1a1a", color: "#fff", textAlign: "center", padding: "8px", fontSize: "13px" }}>
        Mon–Fri 8am–6pm &nbsp;|&nbsp; Sat 8am–2pm &nbsp;|&nbsp;
        <a href="tel:2192622711" style={{ color: "#e63946", fontWeight: "bold", marginLeft: "8px" }}>(219) 262-2711</a>
      </div>

      <header style={{ background: "#fff", borderBottom: "2px solid #e63946", padding: "12px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 1000 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image src="/logo.png" alt="R Complete Auto Care" width={150} height={65} style={{ objectFit: "contain", filter: "brightness(0)" }} />
        </Link>

        <nav style={{ display: "flex", gap: "24px", alignItems: "center", fontSize: "15px" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#1a1a1a", fontWeight: "500" }}>Home</Link>
          <div style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <span style={{ cursor: "pointer", color: "#1a1a1a", fontWeight: "500" }}>Services ▾</span>
            {servicesOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", minWidth: "260px", zIndex: 1001, padding: "8px 0" }}>
                {services.map(s => (
                  <Link key={s.href} href={s.href} style={{ display: "block", padding: "10px 20px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px" }}>{s.name}</Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" style={{ textDecoration: "none", color: "#1a1a1a", fontWeight: "500" }}>About</Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "#1a1a1a", fontWeight: "500" }}>Contact</Link>
          <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "10px 20px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>
            (219) 262-2711
          </a>
        </nav>
      </header>
      {/* Trust Bar */}
<div style={{
  background: "#e63946",
  color: "#fff",
  textAlign: "center",
  padding: "8px 16px",
  fontSize: "13px",
  fontWeight: "500",
  display: "flex",
  justifyContent: "center",
  gap: "24px",
  flexWrap: "wrap"
}}>
  <span>⭐ 4.8 Google Rating</span>
  <span>✓ Extended Warranty Accepted</span>
  <span>✓ Same-Day Diagnostics</span>
  <span>📞 <a href="tel:2192622711" style={{ color: "#fff", textDecoration: "none" }}>(219) 262-2711</a></span>
</div>
    </>
  );
}