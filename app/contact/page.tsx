"use client";
import Image from "next/image";
import { useState } from "react";
import NeighborhoodMap from "../components/NeighborhoodMap";
import { SERVICE_AREAS, OWNER_EMAIL, SERVICE_TYPES } from "@/lib/business";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const submitted = status === "success";
  const sending = status === "sending";
  const [form, setForm] = useState({
    name: "", phone: "", email: "", vehicle: "", service: "", message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    // Belt and braces on top of the native `required` attributes: a
    // whitespace-only value passes browser validation but is useless to us.
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xykbqraj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      // fetch() only rejects on network failure; a 4xx/5xx from Formspree
      // resolves normally, so success must be decided by res.ok.
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ color: "#1a1a1a" }}>

      {/* Hero */}
      <section style={{ background: "#1a1a1a", color: "#fff", padding: "60px 24px", textAlign: "center" }}>
        <p style={{ color: "#f1626f", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", marginBottom: "12px" }}>Crown Point, Indiana</p>
        <h1 style={{ fontSize: "38px", fontWeight: "bold", marginBottom: "16px" }}>
          Contact R Complete Auto Care in Crown Point, IN
        </h1>
        <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "600px", margin: "0 auto 32px" }}>
          Call us, email us, or fill out the form below. We&apos;re here Monday through Saturday and happy to help.
        </p>
        <a href="tel:2192622711" style={{ background: "#e63946", color: "#fff", padding: "14px 32px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none", fontSize: "18px" }}>
          📞 Call (219) 262-2711
        </a>
      </section>

      {/* Serving bar */}
      <section style={{ background: "#e63946", color: "#fff", padding: "14px 24px", textAlign: "center", fontSize: "14px" }}>
        📍 Serving {SERVICE_AREAS.join(" · ")}, IN
      </section>

      {/* Contact info + Form */}
      <section style={{ padding: "60px 24px", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px" }}>

          {/* Contact info */}
          <div>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>Get In Touch</h2>
            <div style={{ position: "relative", width: "100%", aspectRatio: "3 / 2", overflow: "hidden", borderRadius: "8px", marginBottom: "24px", background: "#ededeb" }}>
              <Image
                src="/images/front-desk-1200x800.webp"
                alt="Front desk and service counter at R Complete Auto Care in Crown Point, IN"
                width={1200}
                height={800}
                sizes="(max-width: 768px) 100vw, 600px"
                quality={70}
                loading="lazy"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {[
              { icon: "📞", label: "Phone", value: "(219) 262-2711", href: "tel:2192622711" },
              { icon: "✉️", label: "Email", value: OWNER_EMAIL, href: `mailto:${OWNER_EMAIL}` },
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
              <div role="status" style={{ background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>✅</div>
                <div style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "8px" }}>Request Received!</div>
                <p style={{ color: "#555" }}>We&apos;ll call you back shortly to confirm your appointment. If you need immediate assistance, call us at <a href="tel:2192622711" style={{ color: "#e63946" }}>(219) 262-2711</a>.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { name: "name", label: "Your Name *", type: "text", placeholder: "John Smith", required: true, autoComplete: "name" },
                  { name: "phone", label: "Phone Number *", type: "tel", placeholder: "(219) 555-0000", required: true, autoComplete: "tel" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: false, autoComplete: "email" },
                  { name: "vehicle", label: "Year, Make & Model", type: "text", placeholder: "2018 Honda Civic", required: false, autoComplete: "off" },
                ].map(field => (
                  <div key={field.name}>
                    <label htmlFor={`contact-${field.name}`} style={{ display: "block", fontWeight: "500", marginBottom: "6px", fontSize: "14px" }}>{field.label}</label>
                    <input
                      id={`contact-${field.name}`}
                      type={field.type}
                      name={field.name}
                      required={field.required}
                      aria-required={field.required}
                      autoComplete={field.autoComplete}
                      placeholder={field.placeholder}
                      value={form[field.name as keyof typeof form]}
                      onChange={handleChange}
                      style={{ width: "100%", padding: "10px 14px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "15px", boxSizing: "border-box" }}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="contact-service" style={{ display: "block", fontWeight: "500", marginBottom: "6px", fontSize: "14px" }}>Service Needed</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "15px", boxSizing: "border-box" }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_TYPES.map((service) => <option key={service}>{service}</option>)}
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" style={{ display: "block", fontWeight: "500", marginBottom: "6px", fontSize: "14px" }}>Describe the Problem</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us what your vehicle is doing..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    style={{ width: "100%", padding: "10px 14px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "15px", boxSizing: "border-box", resize: "vertical" }}
                  />
                </div>
                {status === "error" && (
                  <div role="alert" style={{ background: "#fef2f2", border: "1px solid #e63946", borderRadius: "8px", padding: "16px", color: "#1a1a1a", fontSize: "14px", lineHeight: 1.6 }}>
                    <strong>Your request was not sent.</strong>{" "}
                    {!form.name.trim() || !form.phone.trim()
                      ? "Please enter your name and phone number, then try again."
                      : "Something went wrong on our end. Please try again,"}{" "}
                    or call us at <a href="tel:2192622711" style={{ color: "#e63946", fontWeight: "bold" }}>(219) 262-2711</a>.
                  </div>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  aria-busy={sending}
                  style={{ background: "#e63946", color: "#fff", padding: "14px", borderRadius: "6px", fontWeight: "bold", fontSize: "16px", border: "none", cursor: sending ? "not-allowed" : "pointer", opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? "Sending…" : "📅 Request Service Appointment"}
                </button>
                <p style={{ fontSize: "12px", color: "#888", textAlign: "center", margin: 0 }}>
                  We&apos;ll call you back to confirm. For same-day service call <a href="tel:2192622711" style={{ color: "#e63946" }}>(219) 262-2711</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* What to expect / directions */}
      <section style={{ padding: "0 24px 60px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>What to Expect When You Reach Out</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
          When you call or send the form, you&apos;ll talk with someone who actually works on cars — not a call center. Tell us what your vehicle is doing, when it happens, and any warning lights you&apos;ve noticed. We&apos;ll let you know whether it&apos;s safe to keep driving, give you a realistic idea of timing, and get you scheduled — often the same day for diagnostics. We always call with our findings and a clear estimate before starting any repair, so there are no surprises.
        </p>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", margin: "32px 0 16px" }}>Directions &amp; Parking</h2>
        <p style={{ lineHeight: 1.8, color: "#444", marginBottom: "16px" }}>
          Our shop is at 1305 E Summit St in Crown Point, IN 46307, with off-street parking right in front of the building. We&apos;re a short drive for neighbors in St. John, Schererville, Merrillville, and Cedar Lake, and easy to reach from anywhere in Lake County. If you&apos;re dropping off before or after hours, give us a call and we&apos;ll walk you through where to leave your keys.
        </p>
        <p style={{ lineHeight: 1.8, color: "#444" }}>
          Hours are Monday–Friday 8:00 AM to 6:00 PM and Saturday 8:00 AM to 2:00 PM; we&apos;re closed Sunday. Appointments are recommended so we can have a bay ready for you, but walk-ins are always welcome.
        </p>
      </section>

      {/* Map */}
      <section style={{ padding: "0 24px 60px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Find Us</h2>
        <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", overflow: "hidden", borderRadius: "14px", boxShadow: "0 18px 48px rgba(25, 25, 25, 0.13)", marginBottom: "24px", background: "#ededeb" }}>
          <Image
            src="/images/shop/r-complete-auto-care-roadside-sign-crown-point-indiana.webp"
            alt="R Complete Auto Care roadside sign in Crown Point, Indiana"
            fill
            sizes="(max-width: 948px) calc(100vw - 48px), 900px"
            quality={70}
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <NeighborhoodMap />

    </div>
  );
}
