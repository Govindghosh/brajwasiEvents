import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { DepthImage } from "@/components/depth-image";
export const metadata: Metadata = buildMetadata({ title: "Event Services in Vrindavan, Mathura, Agra, Delhi & Noida", description: "Find Brajwasi Events service locations across Vrindavan, Mathura, Agra, Delhi, Noida and destination locations across India.", path: "/locations/" });
export default function LocationsPage() { return <><section className="page-hero"><div className="container page-hero__inner"><p className="eyebrow">Locations</p><h1>Local understanding. Destination scale.</h1><p>Our base is in Vrindavan, with a service footprint across the Braj region, Delhi NCR, Agra and destination event locations across India.</p></div></section><section className="section"><div className="container"><SectionHeading eyebrow="Service areas" title="Choose the place. We shape the experience." description="Each location page combines the service mix, event context and visual direction relevant to that destination." /><div className="location-grid location-grid--all">{site.locations.map((location) => <Link className="location-card" href={`/locations/${location.slug}/`} key={location.slug}><DepthImage src={location.image} alt={`${location.name} event services`} label={location.name} /><div className="location-card__body"><p className="card-kicker">{location.eyebrow}</p><h2>{location.name}</h2><span>{location.title}</span><ArrowUpRight size={17} aria-hidden="true" /></div></Link>)}</div></div></section></>; }
