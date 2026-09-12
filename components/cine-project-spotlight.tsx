"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Sparkles, MapPin, Calendar, Layers } from "lucide-react";

interface SpotlightModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

function SpotlightModal({ isOpen, onClose }: SpotlightModalProps) {
  if (!isOpen) return null;

  return (
    <div className="lead-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="lead-modal-container cine-modal-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lead-modal-header">
          <div>
            <span className="eyebrow" style={{ color: "var(--c-royal-violet)" }}>
              Production Logline & Blueprint
            </span>
            <h3 style={{ margin: "4px 0 0 0", color: "var(--ink)", fontSize: "1.4rem" }}>
              The Vrindavan Mahamandap
            </h3>
          </div>
          <button
            type="button"
            className="lead-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div style={{ marginTop: "20px", display: "grid", gap: "16px" }}>
          <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, margin: 0 }}>
            A 48-hour turnkey production transforming an open Vrindavan estate into a royal sanctuary. Handcrafted brass arches, 2.5 tonnes of fresh rajnigandha and marigold blooms, and multi-tier ambient lighting designed for high-resolution 8K cinematography.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginTop: "8px" }}>
            <div className="cine-bento-card" style={{ padding: "16px" }}>
              <span className="cine-bento-meta">VENUE & SCOPE</span>
              <strong style={{ color: "var(--ink)", marginTop: "4px" }}>Vrindavan Estate (1,500 Guests)</strong>
            </div>
            <div className="cine-bento-card" style={{ padding: "16px" }}>
              <span className="cine-bento-meta">FLORAL TONNAGE</span>
              <strong style={{ color: "var(--ink)", marginTop: "4px" }}>2.5 Tonnes Fresh Blooms</strong>
            </div>
            <div className="cine-bento-card" style={{ padding: "16px" }}>
              <span className="cine-bento-meta">LIGHTING TELEMETRY</span>
              <strong style={{ color: "var(--ink)", marginTop: "4px" }}>3200K Warm Tungsten Glow</strong>
            </div>
            <div className="cine-bento-card" style={{ padding: "16px" }}>
              <span className="cine-bento-meta">TURNKEY TIME</span>
              <strong style={{ color: "var(--ink)", marginTop: "4px" }}>48h Build to Darshan</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CineProjectSpotlight() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="cine-spotlight-section" id="project" aria-label="Signature Occasion Showcase">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <p className="eyebrow">On Location // Signature Showcase</p>
            <h2 style={{ margin: "10px 0 0 0", fontSize: "clamp(2.4rem, 5vw, 4.2rem)", fontWeight: 900, color: "var(--ink)" }}>
              VRINDAVAN MAHAMANDAP
            </h2>
          </div>

          <button
            type="button"
            className="cine-pill-action"
            onClick={() => setModalOpen(true)}
            aria-label="View Vrindavan Mahamandap project details"
          >
            <span>About Occasion</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        </div>

        <div
          className="cine-focal-showcase"
          onClick={() => setModalOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Inspect Vrindavan Mahamandap blueprint details"
        >
          <div className="cine-focal-card cine-focal-card--left" aria-hidden="true">
            <Image
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
              alt="Floral Temple Geometry"
              fill
              sizes="35vw"
            />
          </div>

          <div className="cine-focal-card cine-focal-card--main">
            <Image
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=88"
              alt="Vrindavan Mahamandap Signature Setup"
              fill
              sizes="70vw"
              priority
            />
            <div className="cine-mobile-tap-badge">
              <Sparkles size={13} aria-hidden="true" />
              <span>Tap for Blueprint</span>
            </div>
          </div>

          <div className="cine-focal-card cine-focal-card--right" aria-hidden="true">
            <Image
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
              alt="Destination Palace Mandap Setup"
              fill
              sizes="35vw"
            />
          </div>
        </div>
      </div>

      <SpotlightModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
