import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

import { HeroStatsGrid } from '@/components/hero-stats-grid';
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
                Digital Solutions &amp; Innovation
              </Badge>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
                Engineering modern digital solutions with <span className="text-primary font-black">D-LABS</span>
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
              <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-2 shadow-sm">
                  <Image
                    src={brandAssets.founderPortrait}
                    alt={`${site.founderName}, founder of D-Labs`}
                    width={1196}
                    height={1600}
                    priority
                    className="aspect-[3/4] w-full rounded-xl object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={90} className="order-3 lg:col-start-1 lg:row-start-2">
              <div className="space-y-5">
                <div className="space-y-2">
                  <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Hi, I&apos;m Denis Munene
                  </h2>
                  <p className="text-base font-semibold text-primary">Founder &amp; Lead Developer of D-LABS</p>
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
                    &ldquo;Code is how I bring ideas to life and solve real business problems.&rdquo;
                  </p>
                  <footer className="mt-1 text-xs font-semibold text-foreground">— Denis Munene</footer>
                </blockquote>

                <div className="pt-2">
                  <Button asChild size="lg" className="rounded-xl">
                    <Link href="/contact">
                      Let&apos;s Connect
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
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
                  Let&apos;s design and launch a website that feels modern, fast, and credible.
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
