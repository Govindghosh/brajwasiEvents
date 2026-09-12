"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X, MessageCircle, ChevronRight, Sparkles, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

import { LiveTimeTicker } from "./live-time-ticker";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hello Brajwasi Events, I want to discuss event planning and decor."
  )}`;

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <div className="header-brand-group">
            <Link
              className="brand"
              href="/"
              onClick={() => setOpen(false)}
              aria-label={`${site.name} home`}
            >
              <Image
                src="/logo.png"
                alt="Brajwasi Events"
                width={130}
                height={44}
                priority
                className="brand__logo-img"
              />
            </Link>
            <div className="cine-rec-pill" title="Live Event Production Status">
              <span className="cine-rec-dot" aria-hidden="true" />
              <span>ON SET</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            {site.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "desktop-nav__link--active" : ""}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Buttons & Telemetry Clock */}
          <div className="site-header__actions">
            <div className="header-telemetry-clock">
              <LiveTimeTicker prefix="IST" />
            </div>
            <a
              className="header-call"
              href={`tel:+91${site.phone}`}
              aria-label={`Call ${site.phoneDisplay}`}
            >
              <Phone size={15} aria-hidden="true" />
              <span>Call</span>
            </a>
            <Link className="button button--small header-cta-desktop" href="/contact/">
              Start a brief
            </Link>
            <button
              className={`menu-button ${open ? "menu-button--open" : ""}`}
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {open && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Modern Slide-In Mobile Navigation Drawer */}
      <div
        className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}
        role="dialog"
        aria-label="Mobile Navigation Menu"
        aria-modal="true"
      >
        <div className="mobile-drawer__header">
          <Link
            className="brand"
            href="/"
            onClick={() => setOpen(false)}
            aria-label={`${site.name} home`}
          >
            <Image
              src="/logo.png"
              alt="Braj Event Wale"
              width={118}
              height={40}
              className="brand__logo-img"
            />
          </Link>
          <button
            className="mobile-drawer__close"
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-drawer__nav" aria-label="Mobile navigation">
          {site.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-drawer__link ${isActive ? "mobile-drawer__link--active" : ""}`}
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <ChevronRight size={18} className="mobile-drawer__arrow" aria-hidden="true" />
              </Link>
            );
          })}
        </nav>

        <div className="mobile-drawer__footer">
          <Link
            className="button mobile-drawer__cta"
            href="/contact/"
            onClick={() => setOpen(false)}
          >
            <Sparkles size={16} aria-hidden="true" />
            <span>Plan Your Event</span>
          </Link>

          <div className="mobile-drawer__contact-row">
            <a
              className="mobile-drawer__contact-btn mobile-drawer__contact-btn--call"
              href={`tel:+91${site.phone}`}
            >
              <Phone size={15} aria-hidden="true" />
              <span>Call Direct</span>
            </a>
            <a
              className="mobile-drawer__contact-btn mobile-drawer__contact-btn--whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mobile-drawer__meta">
            <MapPin size={13} aria-hidden="true" />
            <span>Vrindavan Base • Pan-India Execution</span>
          </div>
        </div>
      </div>
    </>
  );
}
