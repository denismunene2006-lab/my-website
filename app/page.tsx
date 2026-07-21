import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles, TimerReset } from 'lucide-react';

import { BlogCard } from '@/components/blog-card';
import { ProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import {
  brandAssets,
  heroHighlights,
  heroStats,
  homeProjectPreview,
  processSteps,
  results,
  services,
  site,
  testimonials,
  trustPills,
} from '@/data/site';
import { blogPreview } from '@/data/articles';

export const metadata = createPageMetadata({
  title: 'D-LABS | Web Development Company in Embu, Kenya',
  description:
    'D-LABS builds fast, modern, SEO-friendly websites and web apps for businesses in Embu, Nairobi, and across Kenya.',
  path: '/',
});

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_28%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.18),transparent_24%),linear-gradient(180deg,rgba(15,23,42,1)_0%,rgba(2,6,23,1)_100%)]" />
      <div className="absolute inset-0 section-grid opacity-20" />
      <div className="container-shell relative grid gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
        <div className="max-w-2xl">
          <Badge variant="glass" className="border-white/15 bg-white/10 text-white">
            AI-powered web studio
          </Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Modern websites for businesses that want to feel premium, trustworthy, and ready to grow.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            D-LABS designs and builds fast, SEO-ready websites and web apps for Embu, Nairobi, and clients across Kenya.
            We keep the experience clear, elegant, and easy to extend.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
              <Link href="/contact">
                Start your project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="/projects">View selected work</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300" />
                <span className="text-sm font-medium text-white/85">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustPills.map((pill) => {
              const Icon = pill.icon;
              return (
                <Badge key={pill.label} variant="glass" className="gap-2 border-white/15 bg-white/10 px-3 py-2 text-white">
                  <Icon className="h-3.5 w-3.5" />
                  {pill.label}
                </Badge>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
          <Card className="relative overflow-hidden border-white/10 bg-white/10 text-white shadow-2xl backdrop-blur-xl">
            <CardContent className="grid gap-0 p-0 md:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-6 p-6 sm:p-8">
                <Badge variant="glass" className="border-white/15 bg-white/10 text-white">
                  Studio snapshot
                </Badge>
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">Founder-led, detail-driven, and built for performance.</h2>
                  <p className="text-sm leading-7 text-white/72">
                    We build the kind of digital presence that makes a business feel organised before a visitor even reads the copy.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-semibold tracking-tight text-white">{stat.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/45 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                      <Image src={brandAssets.founderPhoto} alt={site.founderName} className="h-full w-full object-cover" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{site.founderName}</p>
                      <p className="text-xs text-white/60">{site.founderRole}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    {site.aboutMission}
                  </p>
                </div>
              </div>

              <div className="relative min-h-[420px] border-t border-white/10 md:min-h-full md:border-l md:border-t-0">
                <Image
                  src={brandAssets.heroProject}
                  alt="D-LABS education platform preview"
                  className="h-full w-full object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                <div className="absolute left-4 right-4 top-4 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/60">Current focus</p>
                      <p className="mt-1 text-sm font-semibold text-white">Clear systems, faster pages, premium presentation</p>
                    </div>
                    <Badge variant="glass" className="border-white/15 bg-white/10 text-white">
                      Strategy + Build
                    </Badge>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 shadow-soft backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/55">Design language</p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="border-b border-border/60 bg-background">
      <div className="container-shell py-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border/70 bg-card px-5 py-4 shadow-sm">
              <p className="text-2xl font-semibold tracking-tight text-foreground">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div>
      <Hero />
      <StatsStrip />

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Built for trust"
              title="The site should feel clear before it feels clever."
              description="We focus on layout, speed, and messaging first because those are the things visitors notice immediately."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {results.map((result, index) => {
              const Icon = result.icon;
              return (
                <Reveal key={result.title} delay={index * 70}>
                  <Card className="h-full border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
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

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="The core ways D-LABS helps brands move forward."
              description="Each service keeps the same goal: make the business feel more credible, more usable, and easier to convert."
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
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A simple process that keeps projects moving."
              description="The workflow stays collaborative, practical, and easy to follow from first conversation to launch."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 70}>
                  <Card className="h-full border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="Selected work that combines clean design with practical outcomes."
              description="These builds focus on clarity, responsiveness, and real user flows rather than decoration alone."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {homeProjectPreview.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/projects">
                Explore the portfolio
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Results"
              title="What clients typically value most."
              description="The work is built to make the business easier to understand, easier to trust, and easier to choose."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.meta} delay={index * 70}>
                <Card className="h-full border-border/70 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <p className="text-lg leading-8 text-foreground">“{testimonial.quote}”</p>
                  <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {testimonial.meta}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Insights"
              title="Practical writing about web development, SEO, and growth."
              description="The blog keeps the brand useful and credible by sharing the thinking behind the builds."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {blogPreview.map((post, index) => (
              <Reveal key={post.slug} delay={index * 70}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/blog">
                Read all articles
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/70 bg-slate-950 text-white shadow-2xl">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12">
              <div className="space-y-4">
                <Badge variant="glass" className="border-white/15 bg-white/10 text-white">
                  Ready when you are
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Let’s build a website that feels as polished as the business behind it.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/72">
                  Whether you need a fresh launch, a redesign, or a more strategic structure, D-LABS can help you move
                  faster without sacrificing quality.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                  <Link href="/contact">Start a conversation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
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

export default HomePage;
