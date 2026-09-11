import { site } from "@/data/site";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data) };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EventPlanner", "LocalBusiness", "ProfessionalService"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.name,
        url: site.url,
        logo: `${site.url}/icon.svg`,
        image: site.hero.image,
        telephone: `+91-${site.phone}`,
        email: "contact@brajwasievents.com",
        description: site.description,
        priceRange: "$$ - $$$$",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Bank Transfer, Net Banking",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: "Vrindavan",
          addressRegion: "Uttar Pradesh",
          postalCode: "281121",
          addressCountry: "IN"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 27.5806,
          longitude: 77.7006
        },
        areaServed: [
          { "@type": "City", name: "Vrindavan" },
          { "@type": "City", name: "Mathura" },
          { "@type": "City", name: "Agra" },
          { "@type": "City", name: "Delhi" },
          { "@type": "City", name: "Noida" },
          { "@type": "City", name: "Greater Noida" },
          { "@type": "City", name: "Gurugram" },
          { "@type": "Country", name: "India" }
        ],
        knowsAbout: [
          "Luxury Wedding Decoration",
          "Vrindavan Wedding Planners",
          "Phool Bangla Temple Decoration",
          "Mandir Floral Architecture",
          "Corporate Event Production Delhi NCR",
          "Mathura Event Management",
          "Agra Destination Weddings",
          "Gopeshwar Mahadev Floral Art",
          "Mandap Stage Architecture",
          "Theme Floral Installations"
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Brajwasi Event Management & Decor Services",
          itemListElement: site.services.map((service, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              position: index + 1,
              name: service.title,
              description: service.detail,
              url: absoluteUrl(`/services/${service.slug}/`)
            }
          }))
        }
      }
    ]
  };
}

export function serviceSchema(service: (typeof site.services)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.detail,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url
    },
    areaServed: ["Vrindavan", "Mathura", "Agra", "Delhi", "Noida", "India", "International destinations"],
    url: absoluteUrl(`/services/${service.slug}/`)
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
