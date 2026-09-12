"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import anime from "animejs";
import { ArrowUpRight, Camera, Sparkles, MapPin, ChevronRight, Phone, MessageCircle, Heart } from "lucide-react";
import { site } from "@/data/site";

export interface EventScene {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly subtitle: string;
  readonly location: string;
  readonly aperture: string;
  readonly focal: string;
  readonly shutterSpeed: string;
  readonly image: string;
  readonly ctaLink: string;
}

export const HERO_SCENES: readonly EventScene[] = [
  {
    id: "weddings",
    title: "Royal Mandap & Floral Architecture",
    category: "Luxury Wedding",
    subtitle: "Sacred ceremonies staged with cascading florals, sculpted brass geometry, and warm ambient glow.",
    location: "Vrindavan • Mathura • Delhi",
    aperture: "f/1.4",
    focal: "85mm",
    shutterSpeed: "1/250s",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=88",
    ctaLink: "/services/wedding-decoration/"
  },
  {
    id: "phool-bangla",
    title: "Vrindavan Phool Bangla & Mandir Art",
    category: "Devotional Heritage",
    subtitle: "Traditional floral mansions hand-woven with fragrant rajnigandha, mogra, and sanctum jaalis.",
    location: "Gopeshwar Mahadev, Vrindavan",
    aperture: "f/1.8",
    focal: "50mm",
    shutterSpeed: "1/160s",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=88",
    ctaLink: "/services/phool-bangla-temple-decoration/"
  },
  {
    id: "corporate",
    title: "Executive Summits & Brand Galas",
    category: "Corporate Production",
    subtitle: "Precision stage geometry, brand-aligned visual architecture, and flawless guest movement.",
    location: "Delhi • Noida • Gurugram",
    aperture: "f/2.8",
    focal: "35mm",
    shutterSpeed: "1/500s",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=88",
    ctaLink: "/services/corporate-events/"
  },
  {
    id: "destination",
    title: "Palace Celebrations & Destination Events",
    category: "Pan-India Destination",
    subtitle: "Turnkey destination production translating Braj warmth into heritage settings across India.",
    location: "Agra • Rajasthan • Destination",
    aperture: "f/2.0",
    focal: "24mm",
    shutterSpeed: "1/320s",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=88",
    ctaLink: "/services/destination-events/"
  }
];

export function EventShutterHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const bladesRef = useRef<SVGGElement | null>(null);
  const flashRef = useRef<HTMLDivElement | null>(null);
  const hudRef = useRef<HTMLDivElement | null>(null);
  const imageFrameRef = useRef<HTMLDivElement | null>(null);

  const triggerShutterAnimation = useCallback((targetIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const blades = bladesRef.current?.querySelectorAll<SVGPathElement>(".shutter-blade");
    const flash = flashRef.current;
    const hud = hudRef.current;
    const imageFrame = imageFrameRef.current;

    const timeline = anime.timeline({
      complete: () => {
        setIsTransitioning(false);
      }
    });

    if (blades && blades.length > 0) {
      timeline
        .add({
          targets: blades,
          transformOrigin: ["50% 50%", "50% 50%"],
          scale: [0.3, 1.08],
          rotate: (el: Element, i: number) => [i * 45, i * 45 + 52],
          opacity: [0.6, 1],
          duration: 380,
          easing: "cubicBezier(0.25, 1, 0.5, 1)"
        })
        .add({
          targets: flash,
          opacity: [0, 0.95, 0],
          scale: [0.8, 1.4],
          duration: 180,
          easing: "easeOutQuad",
          begin: () => {
            setActiveIndex(targetIndex);
          }
        }, "-=120")
        .add({
          targets: blades,
          scale: [1.08, 0.15],
          rotate: (el: Element, i: number) => [i * 45 + 52, i * 45 + 95],
          opacity: [1, 0],
          duration: 520,
          easing: "cubicBezier(0.16, 1, 0.3, 1)"
        }, "-=40");
    } else {
      setActiveIndex(targetIndex);
    }

    if (imageFrame) {
      anime({
        targets: imageFrame,
        scale: [1.08, 1],
        opacity: [0.75, 1],
        duration: 700,
        easing: "easeOutCubic"
      });
    }

    if (hud) {
      anime({
        targets: hud.querySelectorAll(".hud-telemetry-val"),
        translateY: [-6, 0],
        opacity: [0, 1],
        duration: 350,
        delay: anime.stagger(40),
        easing: "easeOutQuad"
      });
    }
  }, [isTransitioning]);

  const goToNextScene = useCallback(() => {
    const next = (activeIndex + 1) % HERO_SCENES.length;
    triggerShutterAnimation(next);
  }, [activeIndex, triggerShutterAnimation]);

  const selectScene = (index: number) => {
    if (index === activeIndex || isTransitioning) return;
    triggerShutterAnimation(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextScene();
    }, 6500);
    autoPlayTimerRef.current = interval;
    return () => clearInterval(interval);
  }, [goToNextScene]);

  const currentScene = HERO_SCENES[activeIndex];

  return (
    <section className="event-hero cine-reticle-wrap" ref={containerRef} aria-label="Brajwasi Events Aesthetic Portfolio">
      <div className="cine-corner cine-corner--tl" aria-hidden="true" />
      <div className="cine-corner cine-corner--tr" aria-hidden="true" />
      <div className="cine-corner cine-corner--bl" aria-hidden="true" />
      <div className="cine-corner cine-corner--br" aria-hidden="true" />

      <div className="event-hero__ambient event-hero__ambient--primary" />
      <div className="event-hero__ambient event-hero__ambient--secondary" />

      <div className="container event-hero__container">
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

          <div className="hero-scene-nav" role="tablist" aria-label="Event Themes">
            {HERO_SCENES.map((scene, idx) => (
              <button
                key={scene.id}
                type="button"
                role="tab"
                aria-selected={idx === activeIndex}
                className={`scene-pill ${idx === activeIndex ? "scene-pill--active" : ""}`}
                onClick={() => selectScene(idx)}
                disabled={isTransitioning}
              >
                <span className="scene-pill__num">0{idx + 1}</span>
                <span className="scene-pill__name">{scene.category}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="event-hero__aperture-stage">
          <div className="lens-housing">
            <div className="lens-bezel">
              <div className="lens-bezel__ticks" />
              <div className="lens-bezel__label">
                <span className="lens-bezel__brand">
                  <span className="lens-bezel__brand-full">BRAJWASI STUDIO LENS // 85MM</span>
                  <span className="lens-bezel__brand-short">BRAJWASI LENS</span>
                </span>
                <span className="lens-bezel__status">LIVE FOCUS</span>
              </div>
            </div>

            <div className="lens-viewfinder" ref={hudRef}>
              <div className="viewfinder-grid" aria-hidden="true">
                <div className="viewfinder-grid__crosshair" />
                <div className="viewfinder-grid__bracket viewfinder-grid__bracket--tl" />
                <div className="viewfinder-grid__bracket--tr" />
                <div className="viewfinder-grid__bracket--bl" />
                <div className="viewfinder-grid__bracket--br" />
              </div>

              <div className="viewfinder-hud">
                <div className="hud-metric-group">
                  <div className="hud-metric">
                    <span className="hud-metric__label">APERTURE</span>
                    <span className="hud-metric__val hud-telemetry-val">{currentScene.aperture}</span>
                  </div>
                  <div className="hud-metric">
                    <span className="hud-metric__label">SHUTTER</span>
                    <span className="hud-metric__val hud-telemetry-val">{currentScene.shutterSpeed}</span>
                  </div>
                  <div className="hud-metric">
                    <span className="hud-metric__label">FOCAL</span>
                    <span className="hud-metric__val hud-telemetry-val">{currentScene.focal}</span>
                  </div>
                </div>
                <div className="hud-metric hud-metric--location">
                  <MapPin size={12} aria-hidden="true" />
                  <span className="hud-metric__val hud-telemetry-val">{currentScene.location}</span>
                </div>
              </div>

              <div className="lens-aperture-core" ref={imageFrameRef}>
                <Image
                  src={currentScene.image}
                  alt={`${currentScene.title} - Brajwasi Events`}
                  fill
                  sizes="(max-width: 900px) 100vw, 55vw"
                  priority
                  className="lens-display-photo"
                />
                <div className="lens-photo-vignette" />
              </div>

              <svg
                className="shutter-iris-svg"
                viewBox="0 0 500 500"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF4BF" />
                    <stop offset="35%" stopColor="#FFBEFB" />
                    <stop offset="70%" stopColor="#DC95FF" />
                    <stop offset="100%" stopColor="#8C56D4" />
                  </linearGradient>
                  <linearGradient id="petalEdge" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFBEFB" />
                    <stop offset="50%" stopColor="#DC95FF" />
                    <stop offset="100%" stopColor="#8C56D4" />
                  </linearGradient>
                </defs>
                <g ref={bladesRef} className="shutter-blades-group">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
                    <path
                      key={idx}
                      className="shutter-blade"
                      d="M250,250 L480,140 C430,70 360,20 280,0 L250,250 Z"
                      fill="url(#bladeGrad)"
                      stroke="url(#petalEdge)"
                      strokeWidth="1.6"
                      style={{
                        transformOrigin: "250px 250px",
                        transform: `rotate(${angle}deg) scale(0.15)`,
                        opacity: 0
                      }}
                    />
                  ))}
                </g>
              </svg>

              <div className="lens-optical-flash" ref={flashRef} aria-hidden="true" />

              <div className="viewfinder-footer">
                <div className="viewfinder-footer__caption">
                  <p className="viewfinder-footer__cat">{currentScene.category}</p>
                  <h2 className="viewfinder-footer__title">{currentScene.title}</h2>
                  <p className="viewfinder-footer__sub">{currentScene.subtitle}</p>
                </div>

                <div className="viewfinder-footer__action">
                  <button
                    type="button"
                    className="shutter-trigger-btn"
                    onClick={goToNextScene}
                    disabled={isTransitioning}
                    aria-label="Capture next event scene"
                    title="Snap Next Scene"
                  >
                    <span className="shutter-trigger-btn__ring">
                      <Camera size={18} aria-hidden="true" />
                    </span>
                    <span className="shutter-trigger-btn__text">SNAP SCENE</span>
                  </button>

                  <Link href={currentScene.ctaLink} className="viewfinder-link">
                    <span>Explore Service</span>
                    <ChevronRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
