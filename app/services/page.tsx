import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
export const metadata: Metadata = buildMetadata({ title: "Wedding, Corporate & Event Services", description: "Explore wedding decoration, corporate events, event management, phool bangla, engagement styling and destination event services by Brajwasi Events.", path: "/services/" });
export default function ServicesPage() { return <><section className="page-hero"><div className="container page-hero__inner"><p className="eyebrow">Services</p><h1>One studio for the spaces people remember.</h1><p>From wedding decoration and temple floral styling to corporate event production and destination celebrations, every service starts with the space and the experience.</p></div></section><section className="section"><div className="container"><div className="service-grid service-grid--all">{site.services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></div></section><section className="section section--soft"><div className="container service-note"><SectionHeading eyebrow="Need something custom?" title="The list is a starting point, not a limit." description="If your event mixes formats, venues or cultural requirements, share the brief and we can shape the right combination of services." /><Link className="button" href="/contact/">Share your brief <ArrowUpRight size={17} aria-hidden="true" /></Link></div></section></>; }
