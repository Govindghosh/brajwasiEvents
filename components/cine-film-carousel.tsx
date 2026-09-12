"use client";

import Image from "next/image";
import Link from "next/link";

interface FilmSlide {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly image: string;
  readonly href: string;
}

const FILM_SLIDES: readonly FilmSlide[] = [
  {
    id: "reel-1",
    title: "Vrindavan Phool Bangla & Sanctum Art",
    category: "Devotional Heritage",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
    href: "/services/phool-bangla-temple-decoration/"
  },
  {
    id: "reel-2",
    title: "Royal Mandap & Floral Architecture",
    category: "Luxury Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    href: "/services/wedding-decoration/"
  },
  {
    id: "reel-3",
    title: "Destination Palace Gala & Spatial Design",
    category: "Destination Production",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
    href: "/services/destination-events/"
  },
  {
    id: "reel-4",
    title: "Executive Summits & Brand Architecture",
    category: "Corporate Production",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=85",
    href: "/services/corporate-events/"
  },
  {
    id: "reel-5",
    title: "Ambient Evening Reception & Lighting",
    category: "Celebration Styling",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
    href: "/services/engagement-reception/"
  },
  {
    id: "reel-6",
    title: "Heritage Venue Turnkey Transformation",
    category: "Event Management",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
    href: "/services/event-management/"
  }
];

function FilmSlideCard({ slide }: { slide: FilmSlide }) {
  return (
    <Link href={slide.href} className="cine-film-frame" key={slide.id}>
      <Image
        src={slide.image}
        alt={slide.title}
        width={440}
        height={275}
        className="cine-slide-img"
        loading="lazy"
      />
      <div className="cine-film-overlay">
        <span className="cine-film-badge">{slide.category}</span>
        <h3 className="cine-film-title">{slide.title}</h3>
      </div>
    </Link>
  );
}

export function CineFilmCarousel() {
  const slidesDuplicated = [...FILM_SLIDES, ...FILM_SLIDES];

  return (
    <div className="cine-lens-viewport" aria-label="Cinematic Filmstrip Showcase">
      <div className="cine-lens-curve-top" aria-hidden="true" />
      <div className="cine-flare-left" aria-hidden="true" />
      <div className="cine-flare-right" aria-hidden="true" />

      <div className="cine-film-track-container">
        <div className="cine-film-track">
          {slidesDuplicated.map((slide, index) => (
            <FilmSlideCard key={`${slide.id}-${index}`} slide={slide} />
          ))}
        </div>
      </div>

      <div className="cine-lens-curve-bottom" aria-hidden="true" />
    </div>
  );
}
