import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

import { HeroStatsGrid } from '@/components/hero-stats-grid';
import { PersonalConnectionCard } from '@/components/personal-connection-card';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/json-ld';
import {
  brandAssets,
  developerHighlights,
  heroHighlights,
  heroStats,
  results,
  services,
  site,
  siteUrl,
  testimonials,
} from '@/data/site';

export const metadata = createPageMetadata({
  title: 'D-LABS | Modern Software & Web Development Studio in Embu, Kenya',
  description:
    'D-LABS builds fast, modern, SEO-friendly websites and web apps for businesses in Embu, Nairobi, and across Kenya.',
  path: '/',
});

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-muted/30 to-background py-16 lg:py-28 tech-grid-pattern">
      <div className="container-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Reveal>
              <Badge variant="accent" className="gap-1.5 py-1 px-3">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                Digital Solutions & Innovation
              </Badge>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Engineering modern digital solutions with <span className="text-primary font-black whitespace-nowrap">D-LABS</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                We design and engineer high-performance web applications, modern business platforms, and conversion-focused websites for ambitious clients.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contact">
                    Start a project
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/services">Explore services</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="flex flex-wrap gap-2 pt-2">
                {heroHighlights.map((item) => (
                  <Badge key={item} variant="glass" className="gap-1.5 py-1 px-2.5 text-xs text-foreground/90 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    {item}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-border/60 bg-card/80 p-6 backdrop-blur-xl shadow-md space-y-5">
              <HeroStatsGrid stats={heroStats} />
              <div className="rounded-xl border border-border/50 bg-muted/40 p-4">
                <p className="text-xs leading-relaxed text-muted-foreground">{site.aboutMission}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#professional-service`,
    name: site.name,
    url: siteUrl,
    description: site.description,
    image: `${siteUrl}/opengraph-image`,
    priceRange: 'KES',
    founder: { '@type': 'Person', name: site.founderName },
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Embu',
      addressCountry: 'KE',
    },
    areaServed: site.serviceArea.map((name) => ({ '@type': 'Place', name })),
    knowsAbout: services.map((service) => service.title),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'D-LABS services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  return (
    <div>
      <JsonLd data={servicesJsonLd} />
      <Hero />

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose D-LABS"
              title="Digital experiences built to perform and convert."
              description="Every project balances speed, visual elegance, and conversion clarity so your visitors know what to do next."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {results.map((result, index) => {
              const Icon = result.icon;
              return (
                <Reveal key={result.title} delay={index * 70}>
                  <Card className="h-full border-border/60 bg-card p-6 transition-all duration-200 hover:border-primary/40 hover-lift">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold font-heading tracking-tight text-foreground">{result.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{result.description}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-y border-border/40">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Built for practical business outcomes."
              description="Each offering keeps your existing goals intact while elevating quality, performance, and user trust."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section overflow-hidden">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-x-16">
            <Reveal className="order-1 lg:col-start-1 lg:row-start-1">
              <Badge variant="accent" className="px-3 py-1 text-xs uppercase font-semibold tracking-wider">
                Meet the Developer
              </Badge>
            </Reveal>

            <Reveal delay={90} className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <div className="group relative mx-auto w-full max-w-sm lg:max-w-md">
                {/* Ambient emerald aura glow */}
                <div
                  className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/30 via-primary/15 to-transparent opacity-60 blur-2xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:blur-3xl dark:from-primary/25 dark:via-primary/10"
                  aria-hidden="true"
                />

                {/* Rotating conic gradient border ring */}
                <div className="portrait-ring" aria-hidden="true" />

                {/* Framed card with lift & glow on hover */}
                <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card/90 p-2 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-primary/50 group-hover:shadow-glow">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={brandAssets.founderPortrait}
                      alt={`${site.founderName}, founder of D-Labs`}
                      width={1196}
                      height={1600}
                      priority
                      className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle bottom vignette for badge contrast */}
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                      aria-hidden="true"
                    />

                    {/* Live status badge */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/20 bg-background/85 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:translate-x-0.5 dark:border-white/10 dark:bg-card/90">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <span>Open to projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90} className="order-3 lg:col-start-1 lg:row-start-2">
              <div className="space-y-5">
                <div className="space-y-2">
                  <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Hi, I'm Denis Munene
                  </h2>
                  <p className="text-base font-semibold text-primary">Founder & Lead Developer of <span className="whitespace-nowrap">D-LABS</span></p>
                </div>

                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
                  I design and build modern digital products from the first line of code to final deployment. I care about the technical details that make software feel fast, reliable, and genuinely useful.
                </p>

                <ul className="grid gap-2.5 sm:grid-cols-3">
                  {developerHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-border/60 bg-card px-3.5 py-2.5 text-xs font-semibold text-foreground shadow-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <blockquote className="border-l-2 border-primary/50 pl-4 py-1">
                  <p className="text-sm italic text-muted-foreground">
                    "Code is how I bring ideas to life and solve real business problems."
                  </p>
                  <footer className="mt-1 text-xs font-semibold text-foreground">— Denis Munene</footer>
                </blockquote>

                <div className="pt-2">
                  <PersonalConnectionCard />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-y border-border/40">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What clients say after launch."
              description="Real feedback from small businesses, startups, and clients across Kenya."
            />
          </Reveal>
          <div className="mt-8">
            <Reveal>
              <TestimonialsCarousel testimonials={testimonials} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/60 bg-gradient-to-r from-card via-muted/30 to-card shadow-lg p-8 sm:p-10">
            <CardContent className="grid gap-6 p-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-3">
                <Badge variant="accent" className="text-xs uppercase font-semibold">
                  Ready to build?
                </Badge>
                <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground sm:text-3xl">
                  Let's design and launch a website that feels modern, fast, and credible.
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Whether you need a fresh launch, a redesign, or technical improvements, D-LABS will help you ship with confidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contact">Get started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/pricing">View pricing</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}