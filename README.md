# D-LABS Website

Production-ready website for D-LABS built with Next.js App Router, React, TypeScript, Tailwind CSS, and shadcn/ui-style components.

## Overview

This repository contains the D-LABS marketing site. It keeps the original brand, services, and content, but presents them with a faster, more modern startup-style experience.

### Highlights
- Responsive navigation with a mobile drawer menu
- "From D-Labs" product section: a dropdown nav item for in-house products (currently Lipa)
- Branded splash screen shown on first visit per session
- Modern hero, services, projects, blog, pricing, and contact pages
- SEO-friendly metadata, Open Graph tags, JSON-LD structured data, robots, and sitemap routes
- `next/image`-based image optimization
- Reusable UI components and shared content data
- Static generation for core pages, blog articles, and products
- Legacy static HTML pages retained alongside the Next.js app for GitHub Pages hosting
- WhatsApp integration and contact forms
- Localized pricing in Kenyan Shillings (KES)

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Lucide icons

## Routes

### Core pages

- `/` - Home
- `/about` - About D-LABS
- `/services` - Services overview and FAQ
- `/pricing` - Package pricing
- `/projects` - Portfolio
- `/blog` - Blog index
- `/contact` - Contact page

### Products (From D-Labs)

Products D-LABS builds and owns in-house, kept separate from client projects.

- `/from-d-labs/lipa` - Lipa (M-Pesa STK Push, payment tracking, and receipts)

### Blog articles

- `/blog/modern-web-development`
- `/blog/website-performance-page-speed`
- `/blog/business-website-mistakes`
- `/blog/seo-basics-for-small-business`
- `/blog/online-growth-strategy`
- `/blog/content-marketing-tech-companies`
- `/blog/20-unshakable-rules-modern-web-development`

### Adding a new product

1. Add an entry to the `products` array in `data/products.ts`.
2. The navigation dropdown, sitemap entry, and static params are all generated from that
   array, so no other wiring is needed — `/from-d-labs/<slug>` is served by the existing
   dynamic route at `app/from-d-labs/[slug]/page.tsx`.

### Legacy static pages (GitHub Pages mirror)

- `index.html`
- `about.html`
- `services.html`
- `service-pricing.html`
- `projects.html`
- `blog.html`
- `contact.html`
- `article-*.html` (all 7 blog articles)

## Getting Started

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000

## Environment Variables

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL` to your production URL for canonical links and social metadata (default: `https://dlabskenya.com`).

## Production Build

```bash
npm run build
npm run start
```

## Project Structure

```text
app/         Next.js App Router pages, layouts, metadata, robots, sitemap
components/  Reusable UI and section components
data/        Site content, project data, pricing, FAQ, and articles
lib/         Shared helpers
images/      Project and article images
css/         Stylesheets (including minified production builds)
js/          Client-side scripts (including minified production builds)
scripts/     Build and optimization helpers
*.html       Legacy static pages (index, about, services, blog, articles, etc.)
```

## SEO and Performance

### Technical SEO
- Unique, keyword-targeted `<title>` and meta description on every route, built through
  `createPageMetadata()` in `lib/metadata.ts`
- Self-referencing canonical URLs on every page, resolved against `siteUrl`
- Open Graph and Twitter card metadata with a generated 1200×630 preview image
- Semantic heading hierarchy (one `<h1>` per page) and descriptive image `alt` text
- `next/image` for automatic sizing, lazy loading, and AVIF/WebP delivery
- Full static generation for all pages, blog articles, and products — crawlable HTML with
  no client-side rendering dependency

### Structured data (JSON-LD)
Rendered through the `JsonLd` component, which injects `application/ld+json` script tags.

| Schema.org type | Where |
| --- | --- |
| `Organization`, `WebSite` | `app/layout.tsx` (site-wide) |
| `Service`, `FAQPage` | `/services`, `/pricing` |
| `BlogPosting` | `/blog/[slug]` |
| `SoftwareApplication`, `BreadcrumbList`, `WebPage` | `/from-d-labs/[slug]` |

Entity references are cross-linked with `@id` values (for example the organization
`${siteUrl}/#organization`) so the graph stays connected rather than emitting isolated nodes.

### Crawler files
- `app/sitemap.ts` generates `/sitemap.xml` dynamically from the same data modules the pages
  use, so new products and articles appear automatically. Priorities rank the commercial
  pages (services, pricing, contact) above the blog. `lastModified` is a fixed content date,
  not the current time, because a sitemap that reports every URL as freshly modified on every
  request is discounted by crawlers.
- `app/robots.ts` generates `/robots.txt` with an explicit sitemap reference and a `Host`
  directive.
- Static `sitemap.xml` and `robots.txt` at the repository root mirror the same data for the
  legacy GitHub Pages build. **Keep both in sync** when adding routes.

### Performance notes
Scroll smoothness is currently limited by three site-wide components, all of which run on
every page:

- `components/smooth-scroll-provider.tsx` — Lenis with a 1.2s duration; a long duration makes
  the page feel like it lags behind the input.
- `components/neural-background.tsx` — a full-viewport canvas redrawn every frame with
  O(n²) line drawing, competing with scroll rendering.
- `components/scroll-progress.tsx` — calls `setState` on every scroll event, forcing a React
  re-render per scroll tick.

Throttling the progress bar, pausing the canvas while scrolling, and shortening the Lenis
duration would measurably improve frame times. The Lipa feature section already avoids
scroll-triggered transforms and reveals for this reason.

## Deployment

### Vercel (primary deployment)

The app is ready for Vercel deployment.

Recommended Vercel settings:
- Framework preset: `Next.js`
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: leave blank
- Node.js version: use the current LTS line supported by Vercel

The production domain is `https://dlabskenya.com`. Set:

- `NEXT_PUBLIC_SITE_URL=https://dlabskenya.com`

That keeps canonical links, Open Graph/Twitter metadata, `robots.txt`, and the sitemap pointing to the right domain.

### GitHub Pages (static mirror)

The legacy static HTML files can be published to GitHub Pages as a static mirror of the site.

## Notes

- The Next.js app is the primary, production deployment.
- Legacy static HTML files are retained in the repository for GitHub Pages hosting and are kept in sync with the app content.
- The site is designed to be easy to extend with more pages, projects, or articles.
