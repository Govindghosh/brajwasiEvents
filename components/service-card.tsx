import Link from "next/link";
import { ArrowUpRight, Building2, Flower2, Globe2, Heart, Landmark, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { DepthImage } from "./depth-image";
const icons = { heart: Heart, building: Building2, sparkles: Sparkles, landmark: Landmark, rings: Flower2, globe: Globe2 };
export function ServiceCard({ service, featured = false }: { service: (typeof site.services)[number]; featured?: boolean }) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Sparkles;
  return <article className={`service-card ${featured ? "service-card--featured" : ""}`}><DepthImage src={service.image} alt={`${service.title} by ${site.name}`} label={service.shortTitle} /><div className="service-card__body"><div className="service-card__icon" aria-hidden="true"><Icon size={20} strokeWidth={1.7} /></div><div><p className="card-kicker">{service.shortTitle}</p><h3>{service.title}</h3></div><p>{service.description}</p><Link className="text-link" href={`/services/${service.slug}/`}>Explore service<ArrowUpRight size={16} aria-hidden="true" /></Link></div></article>;
}
