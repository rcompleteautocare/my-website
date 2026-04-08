export const metadata = {
  title: "Contact R Complete Auto Care | Crown Point IN | (219) 262-2711",
  description: "Contact R Complete Auto Care in Crown Point IN. Call (219) 262-2711 or stop by at 1305 E Summit St. Open Mon–Fri 8am–6pm, Sat 8am–2pm. Serving all of Lake County Indiana.",
};

export default function Contact() {
  return (
    <div style={{ color: "#1a1a1a" }}>

      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          Crown Point, Indiana
        </p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px", lineHeight: 1.2 }}>
          Contact R Complete Auto Care in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Call us, email us, or stop by. We're here Monday through Saturday and happy to help.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px", fontWeight: "500" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake, Indiana
      </section>

      <section style={{ padding: "60px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "60px" }}>
          <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>📞</div>
            <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>Call Us</div>
            <a href="tel:2192622711" style={{ color: "#e63946", fontSize: "24px", fontWeight: "bold", textDecoration: "none", display: "block", marginBottom: "8px" }}>
              (219) 262-2711
            </a>
            <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7 }}>Mon–Fri 8am–6pm<br />Saturday 8am–2pm<br />Talk to a real person — not a call center</p>
          </div>

          <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>📧</div>
            <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>Email Us</div>
            <a href="mailto:Owner@rcompleteautocare.com" style={{ color: "#e63946", textDecoration: "none", fontSize: "14px", wordBreak: "break-all", display: "block", marginBottom: "8px" }}>
              Owner@rcompleteautocare.com
            </a>
            <p style={{ color: "#666", fontSize: "14px" }}>We respond promptly to all inquiries</p>
          </div>

          <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>📍</div>
            <div style={{ fontWeight: "bold", fontSize: "18px", marginBottom: "8px" }}>Visit Us</div>
            <div style={{ color: "#444", lineHeight: 1.8, marginBottom: "8px" }}>
              1305 E Summit St<br />Crown Point, IN 46307
            </div>
            <p style={{ color: "#666", fontSize: "14px" }}>Conveniently located in Crown Point serving all of Lake County</p>
          </div>
        </div>

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

        <h2 style={{ fontSize: "28px", marginBottom: "24px", textAlign: "center" }}>Find Us in Crown Point</h2>
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

        <h2 style={{ fontSize: "28px", marginBottom: "16px", textAlign: "center" }}>Areas We Serve</h2>
        <p style={{ textAlign: "center", color: "#666", marginBottom: "24px" }}>
          We proudly serve drivers throughout Lake County and Northwest Indiana.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "40px" }}>
          {["Crown Point, IN", "St. John, IN", "Schererville, IN", "Merrillville, IN", "Cedar Lake, IN", "Lowell, IN", "Dyer, IN", "Munster, IN"].map(city => (
            <div key={city} style={{ background: "#f9f9f9", border: "1px solid #e0e0e0", borderRadius: "20px", padding: "8px 16px", fontSize: "14px", fontWeight: "500" }}>
              {city}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "28px", marginBottom: "24px", textAlign: "center" }}>Frequently Asked Questions</h2>
        {[
          { q: "How do I schedule an appointment at R Complete Auto Care in Crown Point?", a: "Just call us at (219) 262-2711 during business hours. We're open Monday through Friday 8am–6pm and Saturday 8am–2pm. We'll get you in as fast as possible — often same day." },
          { q: "Do you accept walk-ins at your Crown Point location?", a: "Yes — walk-ins are welcome. For faster service, give us a call ahead so we can prepare for your arrival." },
          { q: "Do you accept extended warranties?", a: "Yes! We work with most extended warranty providers and handle the entire claims process for you. Call us with your warranty information and we'll verify coverage before scheduling." },
          { q: "How far is R Complete Auto Care from St. John, Schererville, and Merrillville?", a: "We're located in Crown Point, just minutes from St. John (about 10 min), Schererville (about 15 min), and Merrillville (about 10 min)." },
        ].map(item => (
          <div key={item.q} style={{ marginBottom: "20px", borderBottom: "1px solid #e0e0e0", paddingBottom: "20px" }}>
            <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>{item.q}</div>
            <div style={{ color: "#555", lineHeight: 1.7 }}>{item.a}</div>
          </div>
        ))}
      </section>

      <section style={{ background: "#e63946", color: "#fff", textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Ready to Get Your Car Fixed Right?</h2>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>Call us today — honest diagnostics, expert repairs, no guesswork.</p>
        <p style={{ marginBottom: "24px", opacity: 0.75, fontSize: "14px" }}>1305 E Summit St, Crown Point, IN 46307</p>
        <a href="tel:2192622711" style={{ background: "#fff", color: "#e63946", padding: "14px 36px", borderRadius: "6px", fontWeight: "bold", fontSize: "18px", textDecoration: "none" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

    </div>
  );
}