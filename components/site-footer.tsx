import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="footer-brand">
          <Link
            className="brand brand--footer"
            href="/"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/logo.png"
              alt="Braj Event Wale"
              width={160}
              height={55}
              className="brand__logo-img"
            />
          </Link>
          <p>{site.tagline}</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            {site.navigation.slice(1).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-label">Reach</p>
          <div className="footer-contact">
            <a href={`tel:+91${site.phone}`}>
              <Phone size={16} aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <div>
              <MapPin size={16} aria-hidden="true" />
              <span>{site.address}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>Vrindavan • Mathura • Agra • Delhi • Noida • India • International</span>
      </div>
    </footer>
  );
}

