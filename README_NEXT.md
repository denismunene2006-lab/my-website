# D-LABS Website - Next.js 16 Edition

A modern, high-performance website for D-LABS web development and design agency built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 16 App Router, React 19, TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Performance Optimized**: 
  - Zero layout shift with Tailwind
  - Image optimization with Next.js Image component
  - Automatic code splitting and lazy loading
  - Fast page loads with optimized CSS
- **SEO Ready**:
  - Dynamic meta tags and Open Graph
  - Structured data (Schema.org)
  - XML sitemap and robots.txt
  - Semantic HTML structure
- **Accessibility**: WCAG AA compliant with proper ARIA labels and semantic elements
- **Dark Mode**: Premium dark aesthetic with orange and cyan accents

## Project Structure

```
/app                 # Next.js App Router pages
  ├── page.tsx       # Homepage
  ├── layout.tsx     # Root layout
  ├── globals.css    # Global styles with design tokens
  ├── projects/      # Projects pages
  ├── services/      # Services page
  ├── about/         # About page
  ├── contact/       # Contact page
  ├── blog/          # Blog pages

/components          # Reusable React components
  ├── header.tsx     # Navigation header
  ├── footer.tsx     # Footer
  ├── hero.tsx       # Hero section
  └── ...

/public             # Static assets
  ├── robots.txt
  └── images/

/lib                # Utilities and helpers
  └── utils.ts
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/denismunene2006-lab/my-website.git
cd my-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Styling

The project uses Tailwind CSS v4 with custom design tokens defined in `app/globals.css`. Key colors:

- **Primary**: `#ff4500` (Orange) - Main brand color
- **Secondary**: `#00d4ff` (Cyan) - Accent color
- **Background**: `#000000` (Black)
- **Foreground**: `#ffffff` (White)

### Components

Custom components are in `/components`:
- `header.tsx` - Sticky navigation with mobile menu
- `footer.tsx` - Site footer with links and contact info
- `hero.tsx` - Hero section with CTA buttons
- `services-section.tsx` - Services showcase
- `projects-section.tsx` - Projects preview

## Performance

The site is optimized for performance:

- **Lighthouse Score Target**: 90+
- **Core Web Vitals**: All green
- **CSS Size**: ~15KB (minified with Tailwind)
- **Image Optimization**: Automatic with Next.js Image
- **Code Splitting**: Per-route with App Router

## SEO

- Dynamic metadata on all pages
- Open Graph tags for social sharing
- Structured data (Organization, LocalBusiness)
- XML sitemap at `/sitemap.xml`
- Robots.txt for search engines
- Semantic HTML with proper heading hierarchy

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms

Build and run:
```bash
npm run build
npm start
```

## Content Structure

### Pages

- **Home** (`/`) - Landing page with hero, services, and projects
- **Projects** (`/projects`) - Portfolio grid
- **Services** (`/services`) - Service offerings with details
- **About** (`/about`) - Company information
- **Blog** (`/blog`) - Articles listing
- **Contact** (`/contact`) - Contact form and info

### Data

Blog articles and project data can be moved to:
- `/content/blog/` - Blog posts
- `/content/projects/` - Project details

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Configuration

### Next.js Config
Edit `next.config.js` to:
- Configure image domains
- Add environment variables
- Set up redirects or rewrites

### TypeScript
Strict mode is enabled. Update `tsconfig.json` if needed.

## Analytics

To add Google Analytics:
1. Get your GA ID from Google Analytics
2. Add `NEXT_PUBLIC_GA_ID` to `.env.local`
3. Implement tracking script in layout.tsx

## Contact

- **Email**: dlabs.ke@gmail.com
- **Phone**: +254 710 236 087
- **Location**: Embu, Kenya

## License

ISC License - See LICENSE file for details

## Migration Notes

This is a complete rebuild from the original static HTML version. All content has been preserved and enhanced. URLs remain the same for SEO continuity.

### Key Changes:
- Splash screen removed (instant content access)
- Dynamic components with React
- Improved performance metrics
- Better mobile experience
- Enhanced accessibility
- Modern design system

## Future Enhancements

- [ ] CMS integration for blog
- [ ] Newsletter subscription
- [ ] Project filtering
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Chat integration
- [ ] Analytics dashboard

---

Built with love by D-LABS Web Development Team
