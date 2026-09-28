import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';

import { ProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { projects } from '@/data/site';

export const metadata = createPageMetadata({
  title: 'Web Development Portfolio in Embu, Kenya | D-LABS',
  description:
    'Browse real web development projects by D-LABS, including business websites and modern responsive designs for growing brands.',
  path: '/projects',
});

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-muted/30 to-background py-16 lg:py-24 tech-grid-pattern">
        <div className="container-shell relative z-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              <Badge variant="accent" className="px-3 py-1 text-xs uppercase font-semibold">
                Portfolio &amp; Showcase
              </Badge>
              <div className="space-y-3">
                <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
                  Projects engineered for <span className="text-primary font-black">clarity &amp; impact</span>.
                </h1>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Explore real work built by D-LABS for education, campus marketplaces, e-commerce, and digital platforms.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contact">
                    Start a project
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/pricing">See pricing</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <Card className="border-border/60 bg-card/80 backdrop-blur-xl shadow-md p-6">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground">Portfolio approach</p>
                    <p className="text-base font-bold font-heading text-foreground">Real software &amp; active platforms</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Each showcase project details the specific business goal, technical stack, outcome, and direct link to the live production site.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Badge variant="outline" className="text-[11px]">Performance</Badge>
                  <Badge variant="outline" className="text-[11px]">UI / UX</Badge>
                  <Badge variant="outline" className="text-[11px]">Responsive</Badge>
                  <Badge variant="outline" className="text-[11px]">Production Live</Badge>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-b border-border/40">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Featured project"
              title="D-LABS Education"
              description="A structured platform built with interactive roadmaps, curated lessons, and guided paths for beginner web developers."
            />
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <ProjectCard project={featured} featured />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="More work"
              title="Additional featured builds."
              description="From campus marketplaces to modern e-commerce experiences, each project is optimized for usability and performance."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={index * 60}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-t border-border/40">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/60 bg-card shadow-md p-8 sm:p-10">
            <CardContent className="grid gap-6 p-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-3">
                <Badge variant="accent" className="text-xs uppercase font-semibold">
                  Next build
                </Badge>
                <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground sm:text-3xl">
                  Want a website built with this level of quality?
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  We take your vision and transform it into a sleek, responsive, modern digital product.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contact">Start now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/blog">Read blog</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
