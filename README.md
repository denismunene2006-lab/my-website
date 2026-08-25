# D-LABS Website

Production-ready website for D-LABS built with Next.js App Router, React, TypeScript, Tailwind CSS, and shadcn/ui-style components.

## Overview

This repository contains the D-LABS marketing site. It keeps the original brand, services, and content, but presents them with a faster, more modern startup-style experience.

### Highlights
- Responsive navigation with a mobile drawer menu
- Branded splash screen shown on first visit per session
- Modern hero, services, projects, blog, pricing, and contact pages
- SEO-friendly metadata, Open Graph tags, robots, and sitemap routes
- `next/image`-based image optimization
- Reusable UI components and shared content data
- Static generation for core pages and blog articles
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

### Blog articles

- `/blog/modern-web-development`
- `/blog/website-performance-page-speed`
- `/blog/business-website-mistakes`
- `/blog/seo-basics-for-small-business`
- `/blog/online-growth-strategy`
- `/blog/content-marketing-tech-companies`
- `/blog/20-unshakable-rules-modern-web-development`

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

- Proper page titles and descriptions
- Canonical URLs
- Open Graph and Twitter metadata
- Static generation for all pages and blog articles
- Image optimization through `next/image`
- Lightweight reusable components
- Dynamic sitemap generated at `https://dlabskenya.com/sitemap.xml`
- Static `sitemap.xml` and `robots.txt` for the legacy static mirror (GitHub Pages)

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
