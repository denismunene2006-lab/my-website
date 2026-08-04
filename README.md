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

## Getting Started

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000

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
- Static article generation
- Image optimization through `next/image`
- Lightweight reusable components
- Dynamic sitemap generated at `/sitemap.xml`

## Deployment

The app is ready for Vercel deployment.

Recommended Vercel settings:
- Framework preset: `Next.js`
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: leave blank
- Node.js version: use the current LTS line supported by Vercel

If you use a custom domain, set:

- `NEXT_PUBLIC_SITE_URL` to your production URL

That keeps canonical links and social metadata pointing to the right domain.

The legacy static HTML files can also be published to GitHub Pages for a static mirror of the site.

## Notes

- The Next.js app is the primary, production deployment.
- Legacy static HTML files are retained in the repository for GitHub Pages hosting and are kept in sync with the app content.
- The site is designed to be easy to extend with more pages, projects, or articles.
