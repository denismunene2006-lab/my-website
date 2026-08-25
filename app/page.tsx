import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

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
  title: 'D-LABS | Web Development Company in Embu, Kenya',
  description:
    'D-LABS builds fast, modern, SEO-friendly websites and web apps for businesses in Embu, Nairobi, and across Kenya.',
  path: '/',
});

function Hero() {
  return (
    <section className="premium-hero relative overflow-hidden border-b border-white/10 text-white">
      <div className="floating-orb absolute -left-10 top-28 h-56 w-56 rounded-full bg-[#6BEA32]/20 blur-3xl" />
      <div className="floating-orb absolute right-10 top-16 h-48 w-48 rounded-full bg-[#18A94B]/30 blur-3xl" />
      <div className="absolute inset-0 section-grid opacity-20" />

      <div className="container-shell relative py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <Reveal>
              <Badge variant="glass" className="inline-flex border-white/20 bg-white/10 text-white">
                Digital Solutions & Innovation
              </Badge>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Build the Future with D-LABS
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                We create modern digital solutions, innovative software, professional websites, mobile applications and
                technology that empowers businesses and individuals.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get Started
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/12">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={290}>
              <div className="flex flex-wrap gap-2">
                {heroHighlights.map((item) => (
                  <Badge key={item} variant="glass" className="gap-2 border-white/20 bg-white/10 text-white">
                    <CheckCircle2 className="h-4 w-4 text-[#6BEA32]" />
                    {item}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="glass-surface rounded-[2rem] p-6 shadow-soft">
              <HeroStatsGrid stats={heroStats} />
              <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4">
                <p className="text-sm leading-7 text-white/80">{site.aboutMission}</p>
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
                  <Card className="h-full border-border/70 bg-card/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{result.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{result.description}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/35">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Premium service cards for practical business outcomes."
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
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-x-20 lg:gap-y-6">
            <Reveal className="order-1 lg:col-start-1 lg:row-start-1">
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
              >
                Meet the Developer
              </Badge>
            </Reveal>

            <Reveal delay={90} className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-transparent to-accent/25 blur-2xl"
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card p-2.5 shadow-soft">
                  <Image
                    src={brandAssets.founderPortrait}
                    alt={`${site.founderName}, founder of D-Labs`}
                    width={1196}
                    height={1600}
                    priority
                    className="aspect-[3/4] w-full rounded-[1.6rem] object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={90} className="order-3 lg:col-start-1 lg:row-start-2">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    Hi, I&apos;m Denis Munene
                  </h2>
                  <p className="text-lg font-medium text-primary">Founder &amp; Developer of D-Labs</p>
                </div>

                <p className="max-w-xl text-base leading-8 text-muted-foreground">
                  I design and build modern digital products from the first line of code to the final
                  launch. I care about the small details that make software feel fast, reliable, and
                  genuinely useful — and I treat every project like it&apos;s my own.
                </p>

                <ul className="grid gap-3 sm:grid-cols-3">
                  {developerHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-2xl border border-border/70 bg-card px-4 py-3 text-sm font-medium text-foreground shadow-soft"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <blockquote className="border-l-2 border-primary/40 pl-5">
                  <p className="text-base italic leading-7 text-muted-foreground">
                    &ldquo;Code is how I bring ideas to life and create impact.&rdquo;
                  </p>
                  <footer className="mt-2 text-sm font-medium text-foreground">— Denis Munene</footer>
                </blockquote>

                <div className="pt-1">
                  <Button asChild size="lg" className="group gap-2">
                    <Link href="/contact">
                      Let&apos;s Connect
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/35">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What clients say after launch."
              description="Auto-sliding testimonial cards showcase outcomes while keeping motion subtle and accessible."
            />
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <TestimonialsCarousel testimonials={testimonials} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Card className="premium-hero overflow-hidden border-transparent text-white shadow-2xl">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12">
              <div className="space-y-4">
                <Badge variant="glass" className="border-white/20 bg-white/10 text-white">
                  Ready to build?
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let&apos;s design and launch a website that feels premium, modern, and conversion-ready.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/78">
                  Whether you need a fresh launch, a redesign, or product-level improvements, D-LABS can help you move
                  fast without sacrificing quality.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button asChild size="lg">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/12">
                  <Link href="/pricing">See pricing</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
