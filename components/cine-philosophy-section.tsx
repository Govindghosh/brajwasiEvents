"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface PhilosophyPillar {
  readonly num: string;
  readonly title: string;
  readonly desc: string;
}

const PILLARS: readonly PhilosophyPillar[] = [
  {
    num: "01",
    title: "Devotional Architecture & Sacred Geometry",
    desc: "Authentic Phool Bangla floral mansions woven with fresh mogra and rajnigandha, designed around the darshan flow of sacred sanctums."
  },
  {
    num: "02",
    title: "Royal Mandaps & Turnkey Destination Management",
    desc: "Custom brass framework, sculpted ceremonial canopies, and flawless guest circulation from Vrindavan to heritage palace venues across India."
  },
  {
    num: "03",
    title: "Cinematic Telemetry & Spatial Lighting",
    desc: "Atmospheric multi-point illumination, aerial drone tracking, and deliberate visual framing that turns live moments into timeless heirlooms."
  }
];

function DepthCardStack() {
  return (
    <div className="cine-cards-depth" aria-hidden="true">
      <div className="cine-depth-card cine-depth-card--back-2">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80"
          alt="Atmospheric Palace Decor"
          fill
          sizes="40vw"
        />
      </div>
      <div className="cine-depth-card cine-depth-card--back-1">
        <Image
          src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80"
          alt="Phool Bangla Mandir Art"
          fill
          sizes="40vw"
        />
      </div>
      <div className="cine-depth-card cine-depth-card--front">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85"
          alt="Royal Mandap Setup"
          fill
          sizes="45vw"
          priority
        />
      </div>
    </div>
  );
}

export function CinePhilosophySection() {
  return (
    <section className="section" id="philosophy" aria-label="Design Philosophy">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Design Philosophy // 01</p>
          <h2>We Embody Devotion & Grandeur in Visuals</h2>
        </div>

        <div className="cine-split-art">
          <DepthCardStack />

          <div className="cine-numbered-pillars">
            {PILLARS.map((pillar) => (
              <div className="cine-pillar-block" key={pillar.num}>
                <span className="cine-pillar-num">{pillar.num}</span>
                <div className="cine-pillar-content">
                  <h3 className="cine-pillar-title">{pillar.title}</h3>
                  <p className="cine-pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}

            <div style={{ marginTop: "12px" }}>
              <Link href="/about/" className="cine-pill-action">
                <span>Our Design Manifesto</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
