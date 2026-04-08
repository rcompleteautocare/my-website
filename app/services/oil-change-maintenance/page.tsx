export default function OilChangeMaintenance() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Oil Change & Maintenance in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Keep your vehicle running its best with regular oil changes and maintenance from experts you can trust.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Content */}
      <section style={{ padding: "60px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Professional Oil Change & Vehicle Maintenance</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "24px" }}>
          Regular oil changes and preventive maintenance are the best way to protect your vehicle and avoid costly repairs down the road. At R Complete Auto Care, we use quality oils and filters and perform a multi-point inspection with every service — so you always know the true condition of your vehicle.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "40px" }}>
          Serving Crown Point, St. John, Schererville, Merrillville, and Cedar Lake, IN.
        </p>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Maintenance Services We Offer</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            "Conventional oil change",
            "Synthetic oil change",
            "Oil filter replacement",
            "Tire rotation",
            "Multi-point inspection",
            "Air filter replacement",
            "Fluid top-off & check",
            "Cabin air filter replacement",
          ].map(item => (
            <div key={item} style={{ border: "1px solid #e0e0e0", borderLeft: "4px solid #e63946", borderRadius: "6px", padding: "14px 16px", fontWeight: "500" }}>
              {item}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px" }}>Frequently Asked Questions</h2>
        {[
          { q: "How often should I change my oil?", a: "Most modern vehicles with synthetic oil should have an oil change every 5,000–7,500 miles. Older vehicles or those using conventional oil may need it every 3,000 miles. Check your owner's manual or ask us." },
          { q: "What happens if I skip oil changes?", a: "Old, dirty oil loses its ability to lubricate your engine properly, leading to increased wear, overheating, and eventually serious engine damage. Regular oil changes are the single best thing you can do for your engine." },
          { q: "Do you use synthetic or conventional oil?", a: "We use whichever type your vehicle manufacturer recommends. We stock both conventional and full synthetic oils." },
          { q: "How long does an oil change take?", a: "Most oil changes are completed in 30–45 minutes. We also perform a multi-point inspection at no extra charge." },
          { q: "Do you rotate tires with an oil change?", a: "Yes — we can perform a tire rotation at the same time to maximize tire life and ensure even wear." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Due for an Oil Change? Call Us Today.</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Quick, honest, and done right. Crown Point, IN.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}