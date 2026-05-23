# D-LABS Website

Modern, professionally designed multi-page business website for D-LABS, focused on web development services, conversion-ready content, and technical SEO.

**Latest Update (May 2026):** Refined splash screen timing, shared header/footer layout rendering, footer-triggered WhatsApp prompt behavior, and SEO cleanup with a single real H1 per page.

## Live Site

- https://denismunene2006-lab.github.io/my-website/

## What This Project Includes

- Responsive multi-page site for Home, About, Projects, Services, Pricing, Blog, and Contact
- Conversion-focused sections: service cards, pricing CTA flow, FAQ blocks, and direct contact paths
- Pricing comparison table with 3-column feature matrix (Starter, Growth, Premium)
- Updated pricing: Starter (KES 10,000), Growth (KES 20,000), Premium (KES 35,000)
- Back to Home navigation links on all secondary pages for improved user flow
- Premium splash screen shown on first visit with logo, welcome message, and smooth transition into content
- Shortened splash timing so the intro still feels readable without slowing down entry into the site
- Smooth scroll reveal animations for sections, headings, images, and interactive elements
- Blog hub plus individual SEO-focused article pages
- Project and article image support with organized image folders
- Stable app-style navbar with icon labels and modern hover effects
- Shared header/footer renderer to reduce repeated page shell markup across the site
- Premium gradient hero section with animated background elements
- Modern card designs with hover animations and visual depth
- Professional contact forms with focus states and smooth transitions
- Footer-triggered WhatsApp prompt and floating CTA

## Main Pages

- `index.html` - Homepage and featured services
- `about.html` - Brand/company overview
- `projects.html` - Recent project showcase
- `services.html` - Service breakdown and full FAQ
- `service-pricing.html` - Detailed pricing packages
- `blog.html` - Blog listing page
- `article-20-unshakable-rules-modern-web-development.html` - Web development best practices and core principles
- `article-modern-web-development.html`
- `article-business-website-mistakes.html`
- `article-seo-basics-for-small-business.html`
- `article-online-growth-strategy.html`
- `article-content-marketing-tech-companies.html`
- `article-website-performance-page-speed.html`
- `contact.html` - Contact options and quick FAQ

## SEO Setup

The site is optimized for search engines without changing visual appearance:

- Unique page titles and meta descriptions
- Canonical URLs on core pages
- Open Graph and Twitter Card metadata for social sharing
- Structured data (JSON-LD) for Organization, WebSite, WebPage, Blog, and BlogPosting entities
- Single real H1 per page for a cleaner content outline
- Corrected text encoding in page content to avoid broken search snippets
- `lang="en"` and UTF-8 charset declarations on all HTML pages
- Robots directives (`index,follow,max-image-preview:large`) on all HTML pages
- `robots.txt` at project root
- `sitemap.xml` with all public pages

## Design & Features

### Modern UI (May 2026 Update)
- **Premium Color Palette:** Purple (#5B21B6) primary, Cyan (#06B6D4) accent with sophisticated gradients
- **Enhanced Typography:** Larger, bold headings with proper letter-spacing and hierarchy
- **Glass-Morphism Effects:** Modern frosted glass buttons and navigation elements
- **Micro-interactions:** Smooth cubic-bezier animations, hover effects with depth
- **Splash Screen:** Premium first-visit splash with circular logo, glow effect, and welcome text
- **Scroll Reveal Animations:** Clean fade-and-slide motion as content enters the viewport
- **Professional Shadows:** Sophisticated shadow system (sm, md, lg, xl) for visual hierarchy
- **Gradient Accents:** Subtle gradient backgrounds on cards and sections
- **Modern Buttons:** Gradient buttons with shine effects and smooth transitions
- **Service Icons:** Gradient text effects on icons with scale animations

## Tech Stack

- HTML5
- CSS3 (Advanced: CSS Variables, Gradients, Animations, Backdrop Filters)
- Vanilla JavaScript
- Font Awesome (Icons)

## Project Structure

```text
.
|-- index.html
|-- about.html
|-- projects.html
|-- services.html
|-- service-pricing.html
|-- blog.html
|-- article-modern-web-development.html
|-- article-business-website-mistakes.html
|-- article-seo-basics-for-small-business.html
|-- article-online-growth-strategy.html
|-- article-content-marketing-tech-companies.html
|-- article-website-performance-page-speed.html
|-- contact.html
|-- robots.txt
|-- sitemap.xml
|-- README.md
|-- CONTRIBUTING.md
|-- css/
|   |-- style.css
|   `-- splash.css
|-- js/
|   |-- shared-layout.js
|   |-- main.js
|   |-- splash.js
|   `-- scroll-animations.js
|-- splash-assets/
|   |-- logo.png
|   `-- logo-tight.png
`-- images/
	|-- bookshop-website/
	|-- ecommerce-website/
	|-- d-labs-education/
	|-- student-hustle-hub/
	|-- article-modern-web-development/
	|-- article-business-website-mistakes/
	|-- article-seo-basics-for-small-business/
	|-- article-online-growth-strategy/
	|-- article-content-marketing-tech-companies/
	`-- article-website-performance-page-speed/
```

## Run Locally

Open `index.html` directly in your browser, or serve the folder locally.

### Option 1: Python

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

### Option 2: Node.js

```bash
npx serve
```

## Build & Optimization (added)

This project includes a small build pipeline to generate optimized images (WebP/AVIF), minified CSS and JS, and HTML updates that reference the optimized assets.

Install dev dependencies and run the optimizer:

```bash
npm install
npm run build
```

What the build does:
- Converts `images/` and `splash-assets/` to WebP and AVIF variants.
- Produces `css/*.min.css` and `js/*.min.js` and rewrites HTML to reference them.
- Adds preload hints for the splash logo and sets image dimensions where possible.

Notes:
- The build uses `sharp`, `postcss`/`cssnano`, and `terser`. These are dev dependencies and only required for generating assets locally.
- After running, review generated assets before deploying. The repo already contains the generated optimized files committed to `main`.

## Deployment (GitHub Pages)

1. Open repository settings.
2. Open Pages.
3. Select branch `main`.
4. Select folder `/ (root)`.
5. Save.

## Contributing

Contributions are welcome.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Author

Denis Munene
