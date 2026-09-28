import Link from 'next/link';
import { ArrowUpRight, Layers3, Lock, Rocket, ShieldCheck, Sparkles } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { founderStory, site } from '@/data/site';

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
  {
    title: 'Secure',
    description:
      'We build secure digital solutions by following modern security best practices, protecting user data, and designing systems that businesses can trust.',
    icon: Lock,
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
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-muted/30 to-background py-16 lg:py-24 tech-grid-pattern">
        <div className="container-shell relative z-10">
          <div className="max-w-3xl space-y-6">
            <Reveal>
              <Badge variant="accent" className="px-3 py-1 text-xs uppercase font-semibold">
                About D-LABS
              </Badge>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
                Designing digital experiences that feel <span className="text-primary font-black">premium &amp; practical</span>.
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>{site.aboutIntro}</p>
                <p>{founderStory}</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contact">
                    Start a project
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/projects">View portfolio</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="grid gap-3 sm:grid-cols-3 pt-4">
                {['Founder-led studio', 'Kenya-focused', '2026 tech design'].map((item) => (
                  <div key={item} className="rounded-xl border border-border/60 bg-card/80 px-3.5 py-2.5 text-xs font-semibold text-foreground/90 backdrop-blur shadow-sm text-center">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-b border-border/40">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Development Steps"
              title="Our structured approach to digital growth."
              description="D-LABS is guided by standards that align engineering quality with real business goals."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aboutTimeline.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <Card className="border-border/60 bg-card shadow-sm hover:border-primary/40 hover-lift">
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="accent" className="text-[10px] font-semibold uppercase tracking-wider">
                      {item.year}
                    </Badge>
                    <div>
                      <h3 className="text-lg font-bold font-heading tracking-tight text-foreground">{item.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
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
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Reveal key={principle.title} delay={index * 60}>
                  <Card className="h-full border-border/60 bg-card shadow-sm hover:border-primary/40 hover-lift">
                    <CardContent className="space-y-3 p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold font-heading tracking-tight text-foreground">{principle.title}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-t border-border/40">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/60 bg-card shadow-md p-8 sm:p-10">
            <CardContent className="grid gap-6 p-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-3">
                <Badge variant="accent" className="text-xs uppercase font-semibold">
                  Let’s collaborate
                </Badge>
                <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground sm:text-3xl">
                  Ready for a website that feels polished, modern, and trustworthy?
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  We keep the process focused and practical so you can get a better website without unnecessary friction.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contact">Start a conversation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
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
