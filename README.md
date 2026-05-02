# D-LABS Website

Modern multi-page business website for D-LABS, focused on web development services, conversion-ready content, and technical SEO.

## Live Site

- https://denismunene2006-lab.github.io/my-website/

## What This Project Includes

- Responsive multi-page site for Home, About, Projects, Services, Pricing, Blog, and Contact
- Conversion-focused sections: service cards, pricing CTA flow, FAQ blocks, and direct contact paths
- Pricing comparison table with 3-column feature matrix (Starter, Growth, Premium)
- Updated pricing: Starter (KES 10,000), Growth (KES 20,000), Premium (KES 35,000)
- Back to Home navigation links on all secondary pages for improved user flow
- Blog hub plus individual SEO-focused article pages
- Project and article image support with organized image folders
- Stable app-style navbar with icon labels and reduced layout shift behavior

## Main Pages

- `index.html` - Homepage and featured services
- `about.html` - Brand/company overview
- `projects.html` - Recent project showcase
- `services.html` - Service breakdown and full FAQ
- `service-pricing.html` - Detailed pricing packages
- `blog.html` - Blog listing page
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
- `lang="en"` and UTF-8 charset declarations on all HTML pages
- Robots directives (`index,follow,max-image-preview:large`) on all HTML pages
- `robots.txt` at project root
- `sitemap.xml` with all public pages

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Font Awesome

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
|   `-- style.css
|-- js/
|   `-- main.js
`-- images/
	|-- bookshop-website/
	|-- ecommerce-website/
	|-- portfolio-website/
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
