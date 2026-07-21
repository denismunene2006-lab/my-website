import Link from 'next/link';
import { ArrowUpRight, BriefcaseBusiness, Sparkles } from 'lucide-react';

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
      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
                Portfolio
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Web development projects designed for clarity and confidence.
                </h1>
                <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                  The portfolio focuses on usability, performance, and clear business outcomes so each build feels purposeful.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Start a similar project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/pricing">See pricing</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <Card className="border-border/70 bg-card shadow-soft">
              <CardContent className="space-y-5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Portfolio approach</p>
                    <p className="text-lg font-semibold tracking-tight">Real builds, not filler visuals</p>
                  </div>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  Each project card includes the goal, the outcome, and the primary route to the live site so the story is easy to follow.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Performance</Badge>
                  <Badge variant="outline">UX</Badge>
                  <Badge variant="outline">Responsive</Badge>
                  <Badge variant="outline">Trust</Badge>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Featured project"
              title="The strongest example of the studio direction."
              description="D-LABS Education shows how clear structure, strong hierarchy, and practical learning flows can feel polished without unnecessary noise."
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
              title="Additional projects that show range."
              description="From marketplaces to shopping experiences, the builds stay focused on the user journey and the final action."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/70 bg-slate-950 text-white shadow-2xl">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12">
              <div className="space-y-4">
                <Badge variant="glass" className="border-white/15 bg-white/10 text-white">
                  Next build
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Want a project that looks this intentional?
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/72">
                  We can take your idea, sharpen the structure, and turn it into a polished digital experience.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                  <Link href="/contact">Start now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <Link href="/blog">Read the blog</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
