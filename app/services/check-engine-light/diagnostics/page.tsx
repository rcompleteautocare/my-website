import Link from "next/link";

export default function Diagnostics() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Auto Diagnostics in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          We diagnose before we repair. Every time. No guesswork — just accurate answers.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Our Diagnostic Services</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          R Complete Auto Care is a diagnostic-first shop. Before we recommend any repair, we find the root cause of your vehicle's problem. Our technicians use professional-grade diagnostic equipment to accurately identify issues with your engine, electrical system, and more.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { title: "Check Engine Light", href: "/services/check-engine-light", desc: "Full scan to find the exact cause of your warning light." },
            { title: "Electrical Diagnostics", href: "/services/electrical-diagnostics", desc: "Battery, alternator, wiring, and electrical system issues." },
            { title: "No-Start Diagnostics", href: "/services/no-start-diagnostics", desc: "Car won't start? We find out why fast." },
          ].map(item => (
            <Link key={