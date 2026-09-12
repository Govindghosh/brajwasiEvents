"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { LiveTimeTicker } from "./live-time-ticker";

interface FormState {
  name: string;
  contact: string;
  occasionType: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  contact: "",
  occasionType: "Wedding Decoration",
  message: ""
};

const OCCASIONS = [
  "Wedding Decoration",
  "Phool Bangla",
  "Corporate Event",
  "Destination Gala"
] as const;

export function CineContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim()) return;
    setSubmitted(true);
  };

  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Hello Brajwasi Events, my name is ${form.name || "Client"} and I want to discuss ${form.occasionType}.`
  )}`;

  return (
    <section className="cine-contact-section" id="contact" aria-label="Direct Inquiries">
      <div className="container cine-contact-layout">
        <div>
          <p className="eyebrow" style={{ color: "var(--c-royal-violet)" }}>
            Contact Atelier // 03
          </p>
          <h2 style={{ margin: "10px 0 0 0", fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)", fontWeight: 900, color: "var(--ink)", lineHeight: 1 }}>
            DROP US A LINE!
          </h2>
          <p style={{ marginTop: "24px", color: "var(--ink-soft)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "420px" }}>
            Share your occasion dates, venue, and aesthetic direction. We review each brief to shape a unified design and production scope.
          </p>

          <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <a href={`tel:+91${site.phone}`} className="cine-pill-action cine-pill-action--ghost">
              <Phone size={16} aria-hidden="true" />
              <span>Direct: {site.phoneDisplay}</span>
            </a>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="cine-pill-action">
              <MessageCircle size={16} aria-hidden="true" />
              <span>WhatsApp Production Desk</span>
            </a>
          </div>

          <div style={{ marginTop: "32px", fontSize: "0.8rem", color: "var(--ink-soft)", fontFamily: "ui-monospace, monospace" }}>
            <span>HEADQUARTERS: VRINDAVAN, MATHURA • </span>
            <LiveTimeTicker prefix="TIME" />
          </div>
        </div>

        <div className="cine-contact-card">
          {submitted ? (
            <div style={{ padding: "32px 0", textAlign: "center" }}>
              <CheckCircle2 size={48} color="var(--c-royal-violet)" style={{ margin: "0 auto 16px" }} aria-hidden="true" />
              <h3 style={{ color: "var(--ink)", margin: "0 0 8px 0" }}>Inquiry Received</h3>
              <p style={{ color: "var(--ink-soft)", margin: "0 0 24px 0" }}>
                Thank you, {form.name}. Our production lead will review your date and reach out within 2 hours.
              </p>
              <button
                type="button"
                className="cine-pill-action cine-pill-action--ghost"
                onClick={() => {
                  setSubmitted(false);
                  setForm(INITIAL_STATE);
                }}
              >
                Send Another Brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="cine-line-group">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="cine-line-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  id="cine-form-name"
                />
              </div>

              <div className="cine-line-group">
                <input
                  type="text"
                  required
                  placeholder="Phone Number or WhatsApp"
                  className="cine-line-input"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  maxLength={50}
                  id="cine-form-contact"
                />
              </div>

              <div className="cine-line-group">
                <label
                  htmlFor="cine-form-occasion"
                  style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, color: "var(--c-royal-violet)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  Occasion Type
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }} id="cine-form-occasion">
                  {OCCASIONS.map((occ) => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setForm({ ...form, occasionType: occ })}
                      className="cine-rec-pill"
                      style={{
                        cursor: "pointer",
                        background: form.occasionType === occ ? "var(--c-royal-violet)" : "var(--c-soft-orchid)",
                        color: form.occasionType === occ ? "var(--c-butter-cream)" : "var(--c-royal-violet)"
                      }}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              <div className="cine-line-group">
                <textarea
                  placeholder="Tell us about the venue, date, and visual vision..."
                  className="cine-line-input cine-textarea"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  id="cine-form-message"
                />
                <div className="cine-char-indicator">
                  {1000 - form.message.length} symbols remaining
                </div>
              </div>

              <div style={{ marginTop: "16px" }}>
                <button type="submit" className="cine-pill-action" style={{ width: "100%", justifyContent: "center" }}>
                  <span>Send Message</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
