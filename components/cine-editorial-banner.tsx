"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface MediaPillProps {
  readonly src: string;
  readonly alt: string;
}

function MediaPill({ src, alt }: MediaPillProps) {
  return (
    <span className="cine-inline-pill" aria-hidden="true">
      <Image src={src} alt={alt} width={130} height={56} loading="lazy" />
    </span>
  );
}

export function CineEditorialBanner() {
  return (
    <section className="cine-editorial-section" aria-label="Visionary Brand Statement">
      <div className="container">
        <p className="eyebrow" style={{ color: "var(--c-royal-violet)", marginBottom: "24px" }}>
          Visionaries Behind Brajwasi Events
        </p>

        <h2 className="cine-editorial-headline">
          <span className="text-violet">Our atelier</span>
          <MediaPill
            src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=260&q=80"
            alt="Phool Bangla detail"
          />
          redefines sacred devotion
          <MediaPill
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=260&q=80"
            alt="Royal Mandap celebration"
          />
          with cinematic grandeur
          <MediaPill
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=260&q=80"
            alt="Destination celebration"
          />
          <span className="text-violet">&amp; excellence.</span>
        </h2>

        <div className="cine-editorial-cta">
          <Link href="/contact/" className="cine-pill-action">
            <span>Commission Your Occasion</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
