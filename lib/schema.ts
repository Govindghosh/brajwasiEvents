import { site } from "@/data/site";

export function localBusinessSchema() {
  return { "@context": "https://schema.org", "@type": ["LocalBusiness", "ProfessionalService"], "@id": `${site.url}/#business`, name: site.name, url: site.url, telephone: `+91-${site.phone}`, description: site.description, areaServed: site.serviceArea, address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: "Vrindavan", addressRegion: "Uttar Pradesh", addressCountry: "IN" }, sameAs: [] };
}

export function serviceSchema(service: (typeof site.services)[number]) {
  return { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.detail, serviceType: service.title, provider: { "@type": "Organization", name: site.name, url: site.url }, areaServed: ["Vrindavan", "Mathura", "Agra", "Delhi", "Noida", "India", "International destinations"] };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })) };
}

export function faqSchema() {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: site.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
}

export function absoluteUrl(path = "/") { return new URL(path, site.url).toString(); }
export function jsonLd(data: unknown) { return { __html: JSON.stringify(data) }; }
