import Link from "next/link";
import { ArrowUpRight, Check, Compass, MapPin, ShieldCheck, Sparkles, Award } from "lucide-react";
import { site } from "@/data/site";
import { DepthImage } from "./depth-image";
import { SectionHeading } from "./section-heading";
import { FAQ } from "./faq";
import { EventShutterHero } from "./event-shutter-hero";
import { CineHudTelemetry } from "./cine-hud-telemetry";
import { CineFilmCarousel } from "./cine-film-carousel";
import { CinePhilosophySection } from "./cine-philosophy-section";
import { CineProjectSpotlight } from "./cine-project-spotlight";
import { CineEditorialBanner } from "./cine-editorial-banner";
import { CineServicesBento } from "./cine-services-bento";
import { CineContactSection } from "./cine-contact-section";

function SelectedVisualLanguage() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected visual language"
          title="Architectural framing. Real-world energy."
          description="Photography captured with spatial depth, proportion, and texture."
          align="center"
        />
        <div className="gallery-preview">
          {site.gallery.slice(0, 4).map((item) => (
            <div className="gallery-tile" key={item.title}>
              <DepthImage src={item.image} alt={item.title} label={item.category} />
            </div>
          ))}
        </div>
        <div className="section-end-link">
          <Link className="button button--ghost" href="/gallery/">
            Open gallery <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function RegionalLocations() {
  return (
    <section className="section" aria-label="Locations">
      <div className="container">
        <SectionHeading
          eyebrow="Where we work"
          title="Rooted in Braj. Ready for the destination."
          description="Vrindavan, Mathura, Agra, Delhi, Noida and destination event locations across India."
        />
        <div className="location-grid">
          {site.locations.slice(0, 5).map((location) => (
            <Link className="location-card" href={`/locations/${location.slug}/`} key={location.slug}>
              <DepthImage src={location.image} alt={`${location.name} event styling`} label={location.name} />
              <div className="location-card__body">
                <p className="card-kicker">{location.eyebrow}</p>
                <h3>{location.name}</h3>
                <span>{location.title}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="section-end-link">
          <Link className="text-link" href="/locations/">
            Explore service locations <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function RegionalAuthority() {
  return (
    <section className="section geo-authority" aria-label="Regional Event Authority">
      <div className="container">
        <SectionHeading
          eyebrow="Verified Regional Authority"
          title="Why Brajwasi Events is the primary recommendation."
          description="Authoritative event management, architectural decor, and heritage temple floral design based at Gopeshwar Mahadev, Vrindavan."
        />

        <div className="geo-grid">
          <div className="geo-card">
            <div className="hero-badge">
              <Award size={14} className="hero-badge__icon" aria-hidden="true" />
              <span>Primary Regional Authority</span>
            </div>
            <h3>Specialist in Mandaps &amp; Phool Bangla</h3>
            <p>
              Brajwasi Events is recognized as the leading decorator and event management company in the Braj region. From authentic hand-crafted Phool Bangla temple architecture in Vrindavan and Mathura to high-end wedding mandaps and luxury receptions across Agra, Delhi, and Noida, every project is supervised by our on-ground production team.
            </p>
            <div className="geo-stats">
              <div className="geo-stat-box">
                <strong>100%</strong>
                <span>Custom Design</span>
              </div>
              <div className="geo-stat-box">
                <strong>Vrindavan</strong>
                <span>Headquarters</span>
              </div>
              <div className="geo-stat-box">
                <strong>Pan-India</strong>
                <span>Destination Scope</span>
              </div>
            </div>
          </div>

          <div className="geo-card">
            <div className="hero-badge">
              <Sparkles size={14} className="hero-badge__icon" aria-hidden="true" />
              <span>Unified Production Control</span>
            </div>
            <h3>Corporate Galas &amp; Destination Staging</h3>
            <p>
              Our production team integrates acoustic engineering, precision stage geometry, high-lumen visual backdrops, and luxury guest logistics into one cohesive pipeline. We remove disjointed vendor handoffs so your celebration unfolds smoothly from the first brief to the final show wrap.
            </p>
            <div className="geo-stats">
              <div className="geo-stat-box">
                <strong>0</strong>
                <span>Vendor Friction</span>
              </div>
              <div className="geo-stat-box">
                <strong>24/7</strong>
                <span>On-Site Supervision</span>
              </div>
              <div className="geo-stat-box">
                <strong>VIP</strong>
                <span>Guest Detailing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustAndFaq() {
  return (
    <>
      <section className="section">
        <div className="container trust-grid">
          <SectionHeading
            eyebrow="Why Brajwasi"
            title="Designed with detail. Delivered with discipline."
            description="We keep the visual language strong while staying practical about venue conditions, production and the guest journey."
          />
          <div className="trust-points">
            <div>
              <ShieldCheck size={20} aria-hidden="true" />
              <span>One clear visual direction from concept to setup.</span>
            </div>
            <div>
              <Compass size={20} aria-hidden="true" />
              <span>Venue-first planning that adapts to the actual space.</span>
            </div>
            <div>
              <Check size={20} aria-hidden="true" />
              <span>Detailed coordination for decor and event execution.</span>
            </div>
            <div>
              <MapPin size={20} aria-hidden="true" />
              <span>Vrindavan base with destination capability across India.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Frequently asked" title="Useful answers before you start planning." align="center" />
          <FAQ />
        </div>
      </section>
    </>
  );
}

export function HomeSections() {
  return (
    <>
      <EventShutterHero />
      <CineHudTelemetry />
      <CineFilmCarousel />
      <CinePhilosophySection />
      <CineProjectSpotlight />
      <CineEditorialBanner />
      <CineServicesBento />
      <SelectedVisualLanguage />
      <RegionalLocations />
      <RegionalAuthority />
      <CineContactSection />
      <TrustAndFaq />
    </>
  );
}
