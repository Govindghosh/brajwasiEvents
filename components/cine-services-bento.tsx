"use client";

import Link from "next/link";
import { ArrowUpRight, Camera, Sparkles, Landmark, Compass } from "lucide-react";

interface BentoItem {
  readonly id: string;
  readonly title: string;
  readonly desc: string;
  readonly metaLeft: string;
  readonly metaRight: string;
  readonly href: string;
  readonly iconType: "mandir" | "mandap" | "cinema";
}

const BENTO_ITEMS: readonly BentoItem[] = [
  {
    id: "bento-phool-bangla",
    title: "Phool Bangla & Sacred Architecture",
    desc: "End-to-end devotional floral architecture composed around sanctum darshan flow, hand-strung mogra jaalis, and fragrant brass motifs.",
    metaLeft: "Heritage Discipline",
    metaRight: "Braj Origin",
    href: "/services/phool-bangla-temple-decoration/",
    iconType: "mandir"
  },
  {
    id: "bento-wedding-mandap",
    title: "Royal Mandaps & Destination Galas",
    desc: "Architectural stages, cascading botanical canopies, and luxury destination orchestration across Mathura, Agra, Delhi, and Rajasthan.",
    metaLeft: "Turnkey Execution",
    metaRight: "Pan-India",
    href: "/services/wedding-decoration/",
    iconType: "mandap"
  },
  {
    id: "bento-cine-production",
    title: "Cinematic Telemetry & Event Direction",
    desc: "Drone cinematography, multi-tier tungsten lighting, timeline management, and seamless vendor alignment without disjointed handoffs.",
    metaLeft: "8K Raw Production",
    metaRight: "Zero Friction",
    href: "/services/event-management/",
    iconType: "cinema"
  }
];

function BentoIcon({ type }: { type: BentoItem["iconType"] }) {
  if (type === "mandir") return <Landmark size={24} aria-hidden="true" />;
  if (type === "mandap") return <Sparkles size={24} aria-hidden="true" />;
  return <Camera size={24} aria-hidden="true" />;
}

export function CineServicesBento() {
  return (
    <section className="cine-bento-section" id="services" aria-label="Signature Event Services">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <p className="eyebrow">Our Disciplines // 02</p>
            <h2 style={{ margin: "8px 0 0 0", fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)", fontWeight: 800, color: "var(--ink)" }}>
              Beyond Event Production
            </h2>
          </div>
          <p style={{ maxWidth: "420px", color: "var(--ink-soft)", margin: 0, fontSize: "0.98rem", lineHeight: 1.6 }}>
            Comprehensive occasion solutions spanning sacred sanctums, destination royal weddings, and precision show-flow management.
          </p>
        </div>

        <div className="cine-bento-grid">
          {BENTO_ITEMS.map((item) => (
            <Link href={item.href} key={item.id} className="cine-bento-card">
              <div className="cine-bento-icon">
                <BentoIcon type={item.iconType} />
              </div>
              <h3 className="cine-bento-title">{item.title}</h3>
              <p className="cine-bento-desc">{item.desc}</p>
              <div className="cine-bento-meta">
                <span>{item.metaLeft}</span>
                <span>{item.metaRight}</span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <Link href="/services/" className="cine-pill-action cine-pill-action--ghost">
            <span>View All Services &amp; Locations</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
