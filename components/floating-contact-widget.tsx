"use client";

import { useState } from "react";
import { MessageCircle, Phone, X, Sparkles } from "lucide-react";
import { site } from "@/data/site";

export function FloatingContactWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Brajwasi Events, I want to discuss event planning and decor."
  )}`;

  return (
    <div className="floating-ctc" aria-label="Quick contact widget">
      {isExpanded && (
        <div className="floating-ctc__card" role="dialog" aria-label="Direct inquiry options">
          <div className="floating-ctc__card-header">
            <div className="floating-ctc__avatar">
              <Sparkles size={16} aria-hidden="true" />
            </div>
            <div>
              <strong>Brajwasi Events Concierge</strong>
              <small>Online for immediate consultation</small>
            </div>
            <button
              type="button"
              className="floating-ctc__close"
              onClick={() => setIsExpanded(false)}
              aria-label="Close chat card"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="floating-ctc__card-body">
            <p>Looking to design a wedding, temple phool bangla, or corporate celebration? Talk directly with our team.</p>

            <a
              className="button floating-ctc__whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a className="button button--ghost floating-ctc__call-btn" href={`tel:+91${site.phone}`}>
              <Phone size={16} aria-hidden="true" />
              <span>Call: {site.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`floating-ctc__toggle ${isExpanded ? "floating-ctc__toggle--active" : ""}`}
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
        aria-label="Toggle WhatsApp and Call options"
      >
        <span className="floating-ctc__pulse" />
        {isExpanded ? (
          <X size={22} aria-hidden="true" />
        ) : (
          <MessageCircle size={22} aria-hidden="true" />
        )}
        <span className="floating-ctc__label">Quick Brief</span>
      </button>
    </div>
  );
}
