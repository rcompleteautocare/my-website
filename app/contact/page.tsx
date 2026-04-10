"use client";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", vehicle: "", service: "", message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/xpwzgkjd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>Crown Point, Indiana</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Contact R Complete Auto Care in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Call us, email us, or fill out the form below. We're here Monday through Saturday and happy to help.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

      {/* Serving bar */}
      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px" }}>
        📍 Serving Crown Point · St. John · Schererville · Merrillville · Cedar Lake, IN
      </section>

      {/* Contact info + Form */}
      <section style={{ padding: "60px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>

          {/* Contact info */}
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>Get In Touch</h2>
            {[
              { icon: "📞", label: "Phone", value: "(219) 262-2711", href: "tel:2192622711" },
              { icon: "✉️", label: "Email", value: "Owner@rcompleteautocare.com", href: "mailto:Owner@rcompleteautocare.com" },
              { icon: "📍", label: "Address", value: "1305 E Summit St, Crown Point, IN 46307", href: "https://maps.google.com/?q=1305+E+Summit+St+Crown+Point+IN+46307" },
            ].map(item => (
              <div key={item.label} style={{ background: "#f9f9f9", borderRadius: "8px", padding: "20px", marginBottom: "16px" }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>{item.icon}</div>
                <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "4px" }}>{item.label}</div>
                <a href={item.href} style={{ color: "#e63946", fontSize: "15px", textDecoration: "none" }}>{item.value}</a>
              </div>
            ))}
            <div style={{ background: "#f9f9f9", borderRadius: "8px", padding: "20px" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>🕐</div>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>Hours</div>
              <p style={{ color: "#444", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
                Mon–Fri: 8:00 AM – 6:00 PM<br />
                Saturday: 8:00 AM – 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>Request Service</h2>
            {submitted ? (
              <div style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>Request Received!</div>
                <p style={{ color: "#555" }}>We'll call you back shortly to confirm your appointment. If you need immediate assistance, call us at <a href="tel:2192622711" style={{ color: "#e63946" }}>(219) 262-2711</a>.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { name: "name", label: "Your Name *", type: "text", placeholder: "John Smith" },
                  { name: "phone", label: "Phone Number *", type: "tel", placeholder: "(219) 555-0000" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                  { name: "vehicle", label: "Year, Make & Model", type: "text", placeholder: "2018 Honda Civic" },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{ display: "block", fontWeight: "500", marginBottom: "6px", fontSize: "14px" }}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      style={{ width: "100%", padding: "10px 14px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "15px", boxSizing: "border-box" }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: "block", fontWeight: "500", marginBottom: "6px", fontSize: "14px" }}>Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "15px", boxSizing: "border-box" }}
                  >
                    <option value="">Select a service...</option>
                    <option>Check Engine Light</option>
                    <option>Engine Repair</option>
                    <option>Transmission Repair</option>
                    <option>Brake Repair</option>
                    <option>Electrical Diagnostics</option>
                    <option>Suspension & Steering</option>
                    <option>No-Start Diagnostics</option>
                    <option>Extended Warranty Repair</option>
                    <option>AC & Heating Repair</option>
                    <option>Oil Change & Maintenance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontWeight: "500", marginBottom: "6px", fontSize: "14px" }}>Describe the Problem</label>
                  <textarea
                    name="message"
                    placeholder="Tell us what your vehicle is doing..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "15px", boxSizing: "border-box", resize: "vertical" }}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  style={{ background: "#e63946", color: "#fff", padding: "14px", borderRadius: "6px", fontWeight: "bold", fontSize: "16px", border: "none", cursor: "pointer" }}
                >
                  📅 Request Service Appointment
                </button>
                <p style={{ fontSize: "12px", color: "#888", textAlign: "center", margin: 0 }}>
                  We'll call you back to confirm. For same-day service call <a href="tel:2192622711" style={{ color: "#e63946" }}>(219) 262-2711</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ padding: "0 24px 60px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.0!2d-87.3648!3d41.4175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811b0e1e1e1e1e1%3A0x1!2s1305+E+Summit+St%2C+Crown+Point%2C+IN+46307!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </div>
  );
}