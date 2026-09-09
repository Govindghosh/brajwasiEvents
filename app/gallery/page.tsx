import type { Metadata } from "next";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { DepthImage } from "@/components/depth-image";
export const metadata: Metadata = buildMetadata({ title: "Event Decoration Gallery", description: "Explore the visual language of Brajwasi Events across wedding decoration, corporate events, temple floral styling and destination celebrations.", path: "/gallery/" });
export default function GalleryPage() { return <><section className="page-hero"><div className="container page-hero__inner"><p className="eyebrow">Gallery</p><h1>Visual references with a little more depth.</h1><p>A 2.5D presentation of the moods, spaces and event formats Brajwasi Events is built to create.</p></div></section><section className="section"><div className="container gallery-page">{site.gallery.map((item,index) => <figure className={`gallery-page__item gallery-page__item--${(index%4)+1}`} key={item.title}><DepthImage src={item.image} alt={item.title} label={item.category} /><figcaption>{item.title}</figcaption></figure>)}</div></section></>; }
