import { HomeSections } from "@/components/home-sections";
import { faqSchema, jsonLd } from "@/lib/schema";
export default function HomePage() { return <><HomeSections /><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema())} /></>; }
