# Brajwasi Events

Premium static Next.js website for Brajwasi Events.

## Stack

- Next.js 16.3.3
- React 19.2
- TypeScript
- Lucide React
- Static export, no backend
- Single business/content source: `data/site.ts`

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static export is generated in `out/`.

## Content source

Business name, phone, WhatsApp, address, services, locations, FAQs, gallery and SEO phrases live in `data/site.ts`.

## SEO foundation

- Route metadata and canonical URLs
- Open Graph and Twitter metadata
- Local business, service, breadcrumb and FAQ JSON-LD
- Static sitemap and robots rules
- Static service and location pages
- Internal linking and semantic headings
- Image alt text

No SEO system can honestly guarantee permanent rankings. This project is structured so technical SEO, content and internal linking can be expanded without a backend.

## Domain

Configured canonical domain: `https://brajwasievents.com`

Change `site.url` in `data/site.ts` if the final domain differs.
