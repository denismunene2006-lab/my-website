import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Code2, Layers3, Rocket, ShieldCheck, Sparkles } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { brandAssets, founderStory, skills, site } from '@/data/site';

export const metadata = createPageMetadata({
  title: 'About D-LABS | Web Development Company in Embu, Kenya',
  description:
    'Learn about D-LABS, a modern web development company focused on secure, fast, and SEO-optimized digital products.',
  path: '/about',
});

const principles = [
  {
    title: 'Fast',
    description:
      'We build lightweight interfaces and keep the codebase focused so the experience feels quick from the first click.',
    icon: Rocket,
  },
  {
    title: 'Clear',
    description:
      'We prefer simple hierarchy, strong wording, and direct calls to action over cluttered layouts and vague messaging.',
    icon: Sparkles,
  },
  {
    title: 'Reliable',
    description:
      'We plan for real-world use cases, so the final product feels sturdy on mobile, desktop, and slower connections.',
    icon: ShieldCheck,
  },
  {
    title: 'Maintainable',
    description:
      'The system is built with reusable components and a consistent structure, which keeps future updates easier.',
    icon: Layers3,
  },
];

const aboutTimeline = [
  { year: 'Step 01', title: 'Mission', text: 'Build practical digital products that are clean, scalable, and useful.' },
  { year: 'Step 02', title: 'Vision', text: 'Help businesses and individuals grow through technology that feels effortless.' },
  { year: 'Step 03', title: 'Innovation', text: 'Use modern tooling, automation, and thoughtful architecture for better outcomes.' },
  { year: 'Step 04', title: 'Quality', text: 'Ship polished interfaces with strong performance, maintainability, and clarity.' },
  { year: 'Step 05', title: 'Technology', text: 'Combine frontend craftsmanship with dependable backend systems.' },
  { year: 'Step 06', title: 'Customer Focus', text: 'Design around real goals, real users, and measurable business impact.' },
];

export default function AboutPage() {
  return (
    <div>
      <section className="premium-hero relative overflow-hidden border-b border-white/10 text-white py-20 lg:py-32">
        <div className="absolute inset-0 section-grid opacity-20" />
        <div className="container-shell relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <Card className="overflow-hidden border-white/10 shadow-2xl backdrop-blur-xl">
                <Image
                  src={brandAssets.founderPhoto}
                  alt={`${site.founderName}, founder of D-LABS`}
                  className="h-[420px] w-full object-cover object-top"
                  priority
                />
              </Card>
            </Reveal>

            <Reveal delay={90}>
              <div className="max-w-2xl space-y-6">
                <Badge variant="glass" className="border-white/20 bg-white/10 text-white">
                  About D-LABS
                </Badge>
                <div className="space-y-4">
                  <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
                    Designing digital experiences that feel premium and practical.
                  </h1>
                  <p className="text-lg leading-8 text-white/80">{site.aboutIntro}</p>
                  <p className="text-lg leading-8 text-white/80">{founderStory}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Start a project
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/12">
                    <Link href="/projects">View the portfolio</Link>
                  </Button>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {['Founder-led studio', 'Kenya-focused', 'Startup-quality UI'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 backdrop-blur">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="What we do best"
              title="A focused stack that keeps the work practical."
              description="The studio leans on familiar, dependable technologies that make it easier to build, maintain, and improve."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="border-border/70 bg-card shadow-sm">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight">Frontend</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    We keep the interface crisp, responsive, and easy to navigate with modern component-driven builds.
                  </p>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={90}>
              <Card className="border-border/70 bg-card shadow-sm">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Layers3 className="h-5 w-5" />
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight">Backend</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    We use practical backend building blocks for forms, APIs, authentication, and future scaling.
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Development Steps"
              title="Our structured approach to digital growth."
              description="D-LABS is guided by standards that align engineering quality with real business goals."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aboutTimeline.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <Card className="border-border/70 bg-card shadow-sm">
                  <CardContent className="p-6 space-y-4">
                    <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {item.year}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Principles"
              title="The standards that shape every D-LABS project."
              description="The site should be fast to scan, pleasant to use, and easy to extend long after launch."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal key={principle.title} delay={index * 70}>
                  <Card className="h-full border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <CardContent className="space-y-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">{principle.title}</h3>
                      <p className="text-sm leading-7 text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Card className="premium-hero overflow-hidden border-transparent text-white shadow-2xl">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:p-12">
              <div className="space-y-4">
                <Badge variant="glass" className="border-white/20 bg-white/10 text-white">
                  Let’s collaborate
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready for a website that feels more polished, clear, and trustworthy?
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/72">
                  We keep the process focused and practical so you can get a better website without unnecessary friction.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild size="lg">
                  <Link href="/contact">Start a conversation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/12">
                  <Link href="/services">View services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
