"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "Inspection Checklist", href: "/inspection-checklist" },
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
      {/* Top utility bar */}
      <div style={{ background: "#1a1a1a", color: "#fff", textAlign: "center", padding: "8px", fontSize: "13px" }}>
        Mon–Fri 8am–6pm &nbsp;|&nbsp; Sat 8am–2pm &nbsp;|&nbsp;
        <a href="tel:2192622711" style={{ color: "#e63946", fontWeight: "bold", marginLeft: "8px" }}>(219) 262-2711</a>
      </div>

      {/* Main header */}
      <header style={{ background: "#fff", borderBottom: "2px solid #e63946", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 100 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image src="/logo.png" alt="R Complete Auto Care" width={150} height={65} style={{ objectFit: "contain", filter: "brightness(0)" }} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "24px", alignItems: "center", fontSize: "15px" }} className="desktop-nav">
          <Link href="/" style={{ textDecoration: "none", color: "#1a1a1a", fontWeight: "500" }}>Home</Link>
          <div style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <span style={{ cursor: "pointer", color: "#1a1a1a", fontWeight: "500" }}>Services ▾</span>
            {servicesOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #e0e0e0", borderTop: "3px solid #e63946", minWidth: "240px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", zIndex: 200 }}>
                {services.map(s => (
                  <Link key={s.href} href={s.href} style={{ display: "block", padding: "10px 20px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f0f0f0" }}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" style={{ textDecoration: "none", color: "#1a1a1a", fontWeight: "500" }}>About</Link>
          <Link href="/contact" style={{ textDecoration: "none", color: "#1a1a1a", fontWeight: "500" }}>Contact</Link>
          <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "10px 20px", borderRadius: "6px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>(219) 262-2711</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none" }}
          aria-label="Toggle menu"
        >
          <div style={{ width: "24px", height: "2px", background: "#1a1a1a", marginBottom: "5px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <div style={{ width: "24px", height: "2px", background: "#1a1a1a", marginBottom: "5px", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
          <div style={{ width: "24px", height: "2px", background: "#1a1a1a", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#fff", borderBottom: "2px solid #e63946", zIndex: 99, position: "relative" }} className="mobile-menu">
          <div style={{ padding: "8px 0" }}>
            <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "14px 20px", color: "#1a1a1a", textDecoration: "none", fontWeight: "500", borderBottom: "1px solid #f0f0f0" }}>Home</Link>
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                style={{ width: "100%", textAlign: "left", padding: "14px 20px", background: "none", border: "none", borderBottom: "1px solid #f0f0f0", color: "#1a1a1a", fontWeight: "500", fontSize: "15px", cursor: "pointer", display: "flex", justifyContent: "space-between" }}
              >
                Services <span>{servicesOpen ? "▴" : "▾"}</span>
              </button>
              {servicesOpen && (
                <div style={{ background: "#f9f9f9" }}>
                  {services.map(s => (
                    <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "12px 32px", color: "#1a1a1a", textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #eee" }}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/about" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "14px 20px", color: "#1a1a1a", textDecoration: "none", fontWeight: "500", borderBottom: "1px solid #f0f0f0" }}>About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ display: "block", padding: "14px 20px", color: "#1a1a1a", textDecoration: "none", fontWeight: "500", borderBottom: "1px solid #f0f0f0" }}>Contact</Link>
            <div style={{ padding: "16px 20px" }}>
              <a href="tel:2192622711" style={{ display: "block", background: "#e63946", color: "#fff", padding: "14px", borderRadius: "6px", textDecoration: "none", fontWeight: "bold", textAlign: "center", fontSize: "16px" }}>
                📞 Call (219) 262-2711
              </a>
            </div>
          </div>
        </div>
      )}

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

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}