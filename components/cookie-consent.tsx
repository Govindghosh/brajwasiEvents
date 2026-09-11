"use client";

import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("brajwasi_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (level: "all" | "essential") => {
    localStorage.setItem("brajwasi_cookie_consent", level);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside className="cookie-banner" aria-label="Cookie consent banner">
      <div className="container cookie-banner__inner">
        <div className="cookie-banner__text">
          <div className="cookie-banner__icon" aria-hidden="true">
            <ShieldCheck size={18} />
          </div>
          <p>
            We use essential cookies and local preferences to ensure smooth event inquiries and high performance across all devices.
          </p>
        </div>

        <div className="cookie-banner__actions">
          <button
            type="button"
            className="button button--small"
            onClick={() => handleConsent("all")}
          >
            Accept All
          </button>
          <button
            type="button"
            className="button button--small button--ghost"
            onClick={() => handleConsent("essential")}
          >
            Essential Only
          </button>
        </div>
      </div>
    </aside>
  );
}
