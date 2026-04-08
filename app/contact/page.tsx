export default function Contact() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Contact R Complete Auto Care
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Call us, email us, or stop by. We're here Monday through Saturday.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

      {/* Contact Info */}
      <section style={{ padding: "60px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px", marginBottom: "60px" }}>
          <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>📞</div>
            <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>Call Us</div>
            <a href="tel:2192622711" style={{ color: "#e63946", fontSize: "22px", fontWeight: "bold", textDecoration: "none" }}>
              (219) 262-2711
            </a>
            <p style={{ color: "#666", fontSize: "14px", marginTop: "8px" }}>Mon–Fri 8am–6pm · Sat 8am–2pm</p>
          </div>

          <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>📧</div>
            <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>Email Us</div>
            <a href="mailto:Owner@rcompleteautocare.com" style={{ color: "#e63946", textDecoration: "none", fontSize: "14px", wordBreak: "break-all" }}>
              Owner@rcompleteautocare.com
            </a>
          </div>

          <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>📍</div>
            <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>Visit Us</div>
            <div style={{ color: "#444", lineHeight: 1.8 }}>
              1305 E Summit St<br />
              Crown Point, IN 46307
            </div>
          </div>
        </div>

        {/* Hours */}
        <div style={{ background: "#1a1a1a", color: "#fff", borderRadius: "8px", padding: "40px", marginBottom: "60px", textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", marginBottom: "24px" }}>Business Hours</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "24px" }}>
            <div>
              <div style={{ color: "#e63946", fontWeight: "bold", marginBottom: "8px" }}>Monday – Friday</div>
              <div>8:00 AM – 6:00 PM</div>
            </div>
            <div>
              <div style={{ color: "#e63946", fontWeight: "bold", marginBottom: "8px" }}>Saturday</div>
              <div>8:00 AM – 2:00 PM</div>
            </div>
            <div>
              <div style={{ color: "#e63946", fontWeight: "bold", marginBottom: "8px" }}>Sunday</div>
              <div>Closed</div>
            </div>
          </div>
        </div>

        {/* Map */}
        <h2 style={{ fontSize: "28px", marginBottom: "24px", textAlign: "center" }}>Find Us</h2>
        <div style={{ borderRadius: "8px", overflow: "hidden", marginBottom: "60px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.1!2d-87.3654!3d41.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1305+E+Summit+St%2C+Crown+Point%2C+IN+46307!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Serving Areas */}
        <h2 style={{ fontSize: "28px", marginBottom: "16px", textAlign: "center" }}>Areas We Serve</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "24px" }}>
          We proudly serve drivers throughout Lake County and Northwest Indiana.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          {["Crown Point, IN", "St. John, IN", "Schererville, IN", "Merrillville, IN", "Cedar Lake, IN", "Lowell, IN", "Dyer, IN", "Munster, IN"].map(city => (
            <div key={city} style={{ background: "#f9f9f9", border: "1px solid #e0e0e0", borderRadius: "20px", padding: "8px 16px", fontSize: "14px", fontWeight: "500" }}>
              {city}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Ready to Get Your Car Fixed Right?</h2>
        <p style={{ marginBottom: "24px", opacity: 0.9 }}>Call us today — honest diagnostics, expert repairs.</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}