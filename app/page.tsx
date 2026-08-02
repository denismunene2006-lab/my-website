import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Github, Linkedin, Mail } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import {
  brandAssets,
  heroHighlights,
  heroStats,
  results,
  services,
  site,
  testimonials,
} from '@/data/site';

export const metadata = createPageMetadata({
  title: 'D-LABS | Web Development Company in Embu, Kenya',
  description:
    'D-LABS builds fast, modern, SEO-friendly websites and web apps for businesses in Embu, Nairobi, and across Kenya.',
  path: '/',
});

const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Supabase',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'GitHub',
  'Tailwind CSS',
];

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
                Premium Digital Studio
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
              <div className="grid gap-4 sm:grid-cols-2">
                {heroStats.map((stat, index) => (
                  <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                    <p className="text-4xl font-bold text-[#6BEA32] [animation:fadeUp_600ms_cubic-bezier(0.22,1,0.36,1)_both]" style={{ animationDelay: `${index * 120}ms` }}>
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
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
  return (
    <div>
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

      <section className="page-section">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal>
              <div className="mx-auto w-full max-w-sm">
                <div className="relative overflow-hidden rounded-full border border-border/70 bg-card p-2 shadow-soft">
                  <Image
                    src={brandAssets.founderPhoto}
                    alt={site.founderName}
                    className="aspect-square w-full rounded-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="space-y-5">
                <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">
                  Meet the Developer
                </Badge>
                <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground">Hi, I&apos;m Denis Munene</h2>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                  I&apos;m a Computer Science student and Full Stack Developer passionate about building modern digital
                  products that solve real-world problems. My goal is to create technology that is simple, reliable and
                  impactful for businesses, students and communities.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="outline">
                    <Link href="https://github.com/denismunene2006-lab" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={`mailto:${site.email}`}>
                      <Mail className="h-4 w-4" />
                      Email
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
          <Reveal>
            <SectionHeading
              eyebrow="Technology"
              title="Modern stack, thoughtfully applied."
              description="These technologies support performance, maintainability, scalability, and long-term product quality."
            />
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <Reveal key={tech} delay={index * 35}>
                <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/10 px-4 py-2 text-sm text-foreground">
                  {tech}
                </Badge>
              </Reveal>
            ))}
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
