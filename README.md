# D-LABS — Web Development & Digital Solutions

[![Live Site](https://img.shields.io/badge/Live-Site-5B21B6?style=for-the-badge&logo=vercel&logoColor=white)](https://d-labs.vercel.app/)
[![Last Updated](https://img.shields.io/badge/Last%20Updated-June%202026-06B6D4?style=for-the-badge)](#)

> A modern, conversion-optimised multi-page business website built with vanilla HTML, CSS, and JavaScript. Designed to showcase web development services, technical expertise, and thought leadership through SEO-rich content.

---

## 📋 Table of Contents⚡

- [Overview](#overview)
- [Live Site](#-live-site)
- [Pages](#-pages)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Build & Optimization](#-build--optimization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Author](#-author)

---

## Overview

D-LABS is a professional business website that serves as both a portfolio and a service platform. It combines modern UI/UX design with technical SEO best practices to deliver a fast, accessible, and conversion-ready experience.

**Key highlights:**
- 14 fully responsive HTML pages covering services, blog, portfolio, and contact
- Premium splash screen with smooth first-visit onboarding
- SEO-optimised with structured data, Open Graph, and sitemap
- Build pipeline for image optimisation, CSS/JS minification, and asset generation
- Live chat integration, contact forms, and clear call-to-action flows

---

## 🌐 Live Site

| URL | Description |
|-----|-------------|
| [https://d-labs.vercel.app/](https://d-labs.vercel.app/) | Production site hosted on Vercel |

---

## 📄 Pages

### Core Pages
| Page | Description |
|------|-------------|
| [`index.html`](index.html) | Homepage with hero section, featured services, and portfolio highlights |
| [`about.html`](about.html) | Company overview, mission, and brand story |
| [`services.html`](services.html) | Detailed service breakdown with FAQ accordion |
| [`service-pricing.html`](service-pricing.html) | Three-tier pricing matrix (Starter, Growth, Premium) |
| [`projects.html`](projects.html) | Project showcase with case studies |
| [`blog.html`](blog.html) | Blog hub listing all articles |
| [`contact.html`](contact.html) | Contact form, WhatsApp/email/phone actions, and quick FAQ |

### Blog Articles
| Article | Topic |
|---------|-------|
| [`20 Unshakable Rules of Modern Web Development`](article-20-unshakable-rules-modern-web-development.html) | Core principles and best practices |
| [`Modern Web Development Trends`](article-modern-web-development.html) | Technologies shaping the modern web |
| [`Business Website Mistakes`](article-business-website-mistakes.html) | Common pitfalls hurting conversions |
| [`SEO Basics for Small Business`](article-seo-basics-for-small-business.html) | Essential local SEO strategies |
| [`Online Growth Strategy`](article-online-growth-strategy.html) | Building a sustainable digital presence |
| [`Content Marketing for Tech Companies`](article-content-marketing-tech-companies.html) | Effective marketing for technical audiences |
| [`Website Performance & Page Speed`](article-website-performance-page-speed.html) | Optimising for UX and rankings |

---

## ✨ Features

### UI/UX Design
- **Premium Color Palette:** Purple (`#5B21B6`) primary, Cyan (`#06B6D4`) accent with sophisticated gradients
- **Glass-Morphism Effects:** Frosted glass buttons and navigation elements
- **Splash Screen:** First-visit onboarding with circular logo, glow effect, and smooth transition
- **Scroll Reveal Animations:** Fade-and-slide motion as content enters the viewport
- **Micro-interactions:** Cubic-bezier animations, hover effects with visual depth
- **Professional Shadow System:** Multi-tier shadows (sm, md, lg, xl) for hierarchy
- **Gradient Accents:** Subtle gradient backgrounds on cards and sections
- **Modern Buttons:** Gradient buttons with shine effects and smooth transitions
- **Service Icons:** Gradient text effects with scale animations

### Technical SEO
- Unique page titles and meta descriptions across all pages
- Canonical URLs on core pages
- Open Graph and Twitter Card metadata for social sharing
- Structured data (JSON-LD) for Organization, WebSite, WebPage, Blog, and BlogPosting
- Single real `H1` per page for clean content outline
- `lang="en"` and UTF-8 charset declarations
- Robots directives (`index,follow,max-image-preview:large`)
- [`robots.txt`](robots.txt) and [`sitemap.xml`](sitemap.xml) at project root

### Performance & Accessibility
- Responsive design across all screen sizes
- Optimised images in WebP and AVIF formats
- Minified CSS and JavaScript for production
- Semantic HTML structure
- Keyboard-navigable interactive elements

### Conversion Optimisation
- Pricing comparison table with feature matrix
- Back-to-home navigation on all secondary pages
- Floating Tawk.to live chat launcher
- Contact page with WhatsApp, email, and phone CTAs
- FAQ blocks addressing common objections
- Clear call-to-action flow from services → pricing → contact

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic page structure |
| **CSS3** | Styling, animations, gradients, backdrop filters, CSS variables |
| **Vanilla JavaScript** | Interactivity, shared layout rendering, scroll animations, splash screen |
| **Font Awesome** | Icon library |
| **Sharp** | Image conversion (WebP/AVIF) |
| **PostCSS + cssnano** | CSS minification |
| **Terser** | JavaScript minification |

---

## 📁 Project Structure

```
.
├── index.html                          # Homepage
├── about.html                          # About page
├── projects.html                       # Project showcase
├── services.html                       # Services & FAQ
├── service-pricing.html                # Pricing packages
├── blog.html                           # Blog listing
├── contact.html                        # Contact page
├── article-*.html                      # 7 blog articles
│
├── robots.txt                          # Crawler directives
├── sitemap.xml                         # XML sitemap
├── README.md                           # This file
├── CONTRIBUTING.md                     # Contribution guidelines
├── package.json                        # Dependencies & scripts
├── vercel.json                         # Vercel deployment config
│
├── css/
│   ├── style.css                       # Main stylesheet
│   ├── style.min.css                   # Minified production version
│   ├── splash.css                      # Splash screen styles
│   └── splash.min.css                  # Minified splash styles
│
├── js/
│   ├── main.js                         # Core interactivity
│   ├── main.min.js                     # Minified production version
│   ├── shared-layout.js                # Header/footer renderer
│   ├── shared-layout.min.js            # Minified layout renderer
│   ├── splash.js                       # Splash screen logic
│   ├── splash.min.js                   # Minified splash logic
│   ├── scroll-animations.js            # Scroll reveal animations
│   ├── scroll-animations.min.js        # Minified scroll animations
│   └── icons.js                        # Icon definitions
│
├── scripts/
│   └── optimize.js                     # Build pipeline script
│
├── images/                             # Optimised images by category
│   ├── hero-project/
│   ├── bookshop-website/
│   ├── ecommerce-website/
│   ├── d-labs-education/
│   ├── student-hustle-hub/
│   └── article-*/
│
└── splash-assets/                      # Splash screen assets
    ├── logo.png
    ├── logo.webp
    ├── logo.avif
    ├── logo-tight.png
    └── logo-tight.webp
```

---

## 🚀 Getting Started

### Option 1: Open Directly

Simply open `index.html` in your browser.

### Option 2: Python HTTP Server

```bash
python -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

### Option 3: Node.js

```bash
npx serve
```

---

## 🔧 Build & Optimization

The project includes a build pipeline that generates optimised assets for production.

### Setup

```bash
npm install
```

### Run the Build

```bash
npm run build
```

### What the Build Does

1. **Image Optimisation** — Converts PNG/JPEG images in `images/` and `splash-assets/` to WebP and AVIF formats using Sharp
2. **CSS Minification** — Produces `*.min.css` files via PostCSS + cssnano
3. **JS Minification** — Produces `*.min.js` files via Terser
4. **HTML Rewriting** — Updates HTML references to use minified assets and adds preload hints

### Build Notes

- The optimizer skips images already inside `<picture>` wrappers
- Directory-named files (e.g., folders ending in `.js`) are ignored to prevent `EISDIR` errors
- Generated assets are committed to the repository — no separate build step required for deployment
- Dev dependencies (`sharp`, `postcss`, `cssnano`, `terser`) are only needed for local asset generation

---

## 📦 Deployment

### Vercel (Recommended)

The site is live at [https://d-labs.vercel.app/](https://d-labs.vercel.app/). A [`vercel.json`](vercel.json) configuration file is included. Connect your repository to Vercel and it will deploy automatically.

### GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Branch**, select `main`
3. Set folder to `/ (root)`
4. Click **Save**

The site will be available at `https://<username>.github.io/<repository>/`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for the full contribution guidelines.

---


## 👤 Author

**Denis Munene**

- GitHub: [@denismunene2006-lab](https://github.com/denismunene2006-lab)
- Website: [D-LABS](https://d-labs.vercel.app/)

---

<p align="center">
  Built with ❤️ using vanilla HTML, CSS & JavaScript.
</p>
