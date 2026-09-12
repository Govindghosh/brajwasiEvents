"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin, Sparkles, Phone, MessageCircle, Heart } from "lucide-react";
import { site } from "@/data/site";

export interface HeroCard {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly category: string;
  readonly kicker: string;
  readonly subtitle: string;
  readonly location: string;
  readonly image: string;
  readonly ctaLink: string;
  readonly badgeText: string;
}

export const HERO_CARDS: readonly HeroCard[] = [
  {
    id: "weddings",
    index: "01",
    title: "Royal Mandap & Floral Architecture",
    category: "Luxury Wedding",
    kicker: "Curated Mandap Art",
    subtitle: "Sacred ceremonies staged with cascading florals, sculpted brass geometry, and warm ambient glow.",
    location: "Vrindavan • Mathura • Delhi",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=88",
    ctaLink: "/services/wedding-decoration/",
    badgeText: "Royal Mandap"
  },
  {
    id: "phool-bangla",
    index: "02",
    title: "Vrindavan Phool Bangla & Mandir Art",
    category: "Phool Bangla",
    kicker: "Heritage Devotional",
    subtitle: "Traditional floral mansions hand-woven with fragrant rajnigandha, mogra, and sanctum jaalis.",
    location: "Gopeshwar Mahadev, Vrindavan",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=88",
    ctaLink: "/services/phool-bangla-temple-decoration/",
    badgeText: "Phool Bangla"
  },
  {
    id: "corporate",
    index: "03",
    title: "Executive Summits & Brand Galas",
    category: "Corporate Event",
    kicker: "Turnkey Direction",
    subtitle: "Precision stage geometry, brand-aligned visual architecture, and flawless guest movement.",
    location: "Delhi • Noida • Gurugram",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=88",
    ctaLink: "/services/corporate-events/",
    badgeText: "Corporate Gala"
  },
  {
    id: "destination",
    index: "04",
    title: "Palace Celebrations & Destination Events",
    category: "Pan-India Destination",
    kicker: "Pan-India Execution",
    subtitle: "Turnkey destination production translating Braj warmth into heritage settings across India.",
    location: "Agra • Rajasthan • Destination",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=88",
    ctaLink: "/services/destination-events/",
    badgeText: "Palace Gala"
  }
];

function getArcanaOffset(cardIndex: number, activeIndex: number, total: number): number {
  let diff = (cardIndex - activeIndex) % total;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

interface HeroHeaderProps {
  readonly activeIndex: number;
  readonly onSelectCard: (index: number) => void;
}

function HeroHeader({ activeIndex, onSelectCard }: HeroHeaderProps) {
  return (
    <div className="event-hero__content">
      <div className="hero-badge">
        <Heart size={14} className="hero-badge__icon" aria-hidden="true" />
        <span>Curated Celebrations • Mandap Decor • Phool Bangla</span>
      </div>

      <h1 className="event-hero__heading">
        Grand celebrations,
        <span className="event-hero__heading-accent"> captured with heart.</span>
      </h1>

      <p className="event-hero__lead">
        Brajwasi Events designs warm, unforgettable celebrations. From romantic wedding mandaps and authentic Vrindavan Phool Bangla to executive corporate galas and destination palace venues across India.
      </p>

      <div className="event-hero__ctas">
        <Link className="cute-button" href="/contact/">
          <span>Plan Your Event</span>
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <a className="cute-button cute-button--outline" href={`tel:+91${site.phone}`}>
          <Phone size={16} aria-hidden="true" />
          <span>Direct Call</span>
        </a>
        <a
          className="cute-button cute-button--ghost"
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Brajwasi Events, I want to discuss decor & event planning.")}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={16} aria-hidden="true" />
          <span>WhatsApp Brief</span>
        </a>
      </div>

      <div className="hero-scene-nav" role="tablist" aria-label="Event Occasions">
        {HERO_CARDS.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={idx === activeIndex}
            className={`scene-pill ${idx === activeIndex ? "scene-pill--active" : ""}`}
            onClick={() => onSelectCard(idx)}
          >
            <span className="scene-pill__num">{item.index}</span>
            <span className="scene-pill__name">{item.category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

interface ArcanaCardItemProps {
  readonly card: HeroCard;
  readonly offset: number;
  readonly isActive: boolean;
  readonly onSelect: () => void;
}

function ArcanaCardItem({ card, offset, isActive, onSelect }: ArcanaCardItemProps) {
  return (
    <div
      className={`arcana-card arcana-card--offset-${offset} ${isActive ? "arcana-card--active" : ""}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      aria-label={`Select ${card.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect();
        }
      }}
    >
      <div className="arcana-card__inner">
        <div className="arcana-card__header">
          <div className="arcana-card__emblem-left" title={`Card ${card.index}`}>
            <span className="arcana-emblem-text">{card.index}</span>
          </div>
          <div className="arcana-card__gem-center">
            <Sparkles size={14} aria-hidden="true" />
          </div>
          <div className="arcana-card__emblem-right">
            <MapPin size={11} aria-hidden="true" />
            <span>{card.badgeText}</span>
          </div>
        </div>

        <div className="arcana-card__visual">
          <div className="arcana-card__halo" aria-hidden="true" />
          <div className="arcana-card__photo-frame">
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 300px, 380px"
              priority={isActive}
              className="arcana-card__img"
            />
          </div>
          <div className="arcana-card__shine" aria-hidden="true" />
        </div>

        <div className="arcana-card__footer">
          <div className="arcana-card__kicker">
            <span>{card.category}</span>
            <span className="arcana-card__loc">{card.location}</span>
          </div>
          <h3 className="arcana-card__title">{card.title}</h3>
          <p className="arcana-card__subtitle">{card.subtitle}</p>

          <div className="arcana-card__cta-row">
            <Link href={card.ctaLink} className="arcana-card__btn" onClick={(e) => e.stopPropagation()}>
              <span>Explore Service</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ArcanaControlsProps {
  readonly activeIndex: number;
  readonly onPrev: () => void;
  readonly onNext: () => void;
  readonly onSelect: (idx: number) => void;
}

function ArcanaControls({ activeIndex, onPrev, onNext, onSelect }: ArcanaControlsProps) {
  return (
    <div className="arcana-deck-footer">
      <div className="arcana-wheel-controls">
        <button
          type="button"
          className="arcana-arrow-btn"
          onClick={onPrev}
          aria-label="Previous card in wheel"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>

        <div className="arcana-wheel-dots">
          {HERO_CARDS.map((card, idx) => (
            <button
              key={card.id}
              type="button"
              className={`arcana-dot ${idx === activeIndex ? "arcana-dot--active" : ""}`}
              onClick={() => onSelect(idx)}
              aria-label={`Go to card ${idx + 1}: ${card.category}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="arcana-arrow-btn"
          onClick={onNext}
          aria-label="Next card in wheel"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>

      <p className="arcana-wheel-hint">
        Scroll down to rotate cards // Next section after card 04
      </p>
    </div>
  );
}

export function EventShutterHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const lastWheelTimeRef = useRef<number>(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_CARDS.length);
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + HERO_CARDS.length) % HERO_CARDS.length);
  }, []);

  const selectCard = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 50) return;

      const deltaY = e.deltaY;
      if (Math.abs(deltaY) < 15) return;

      const now = Date.now();
      if (now - lastWheelTimeRef.current < 380) {
        if ((deltaY > 0 && activeIndex < HERO_CARDS.length - 1) || (deltaY < 0 && activeIndex > 0)) {
          e.preventDefault();
        }
        return;
      }

      if (deltaY > 0) {
        if (activeIndex < HERO_CARDS.length - 1) {
          e.preventDefault();
          lastWheelTimeRef.current = now;
          setActiveIndex((prev) => prev + 1);
        }
      } else if (deltaY < 0) {
        if (activeIndex > 0) {
          e.preventDefault();
          lastWheelTimeRef.current = now;
          setActiveIndex((prev) => prev - 1);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartXRef.current === null || touchStartYRef.current === null) return;
      const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;

      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          setActiveIndex((prev) => (prev + 1) % HERO_CARDS.length);
        } else {
          setActiveIndex((prev) => (prev - 1 + HERO_CARDS.length) % HERO_CARDS.length);
        }
      }
      touchStartXRef.current = null;
      touchStartYRef.current = null;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex]);

  return (
    <section
      className="event-hero"
      ref={heroRef}
      aria-label="Brajwasi Events Signature Occasions Deck"
    >
      <div className="cine-reticle-wrap">
        <div className="cine-corner cine-corner--tl" aria-hidden="true" />
        <div className="cine-corner cine-corner--tr" aria-hidden="true" />
        <div className="cine-corner cine-corner--bl" aria-hidden="true" />
        <div className="cine-corner cine-corner--br" aria-hidden="true" />

        <div className="event-hero__ambient event-hero__ambient--primary" />
        <div className="event-hero__ambient event-hero__ambient--secondary" />

        <div className="container event-hero__container">
          <HeroHeader activeIndex={activeIndex} onSelectCard={selectCard} />

          <div
            className="arcana-deck-stage"
            role="region"
            aria-label="Arcana-Style 3D Wheel Showcase"
          >
            <div className="arcana-deck-fan">
              {HERO_CARDS.map((card, idx) => {
                const offset = getArcanaOffset(idx, activeIndex, HERO_CARDS.length);
                const isActive = offset === 0;

                return (
                  <ArcanaCardItem
                    key={card.id}
                    card={card}
                    offset={offset}
                    isActive={isActive}
                    onSelect={() => selectCard(idx)}
                  />
                );
              })}
            </div>

            <ArcanaControls
              activeIndex={activeIndex}
              onPrev={goToPrev}
              onNext={goToNext}
              onSelect={selectCard}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
