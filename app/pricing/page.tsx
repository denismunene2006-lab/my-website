import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Star } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { pricingComparison, pricingPlans } from '@/data/site';
import { PricingCard } from '@/components/pricing-card';

export const metadata = createPageMetadata({
  title: 'Website Development Pricing in Embu, Kenya | D-LABS',
  description:
    'View affordable website development packages in Embu, Kenya. Choose Starter, Growth, or Premium based on your business goals.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <div>
      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
                Pricing
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Transparent website pricing for business growth.
                </h1>
                <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                  Choose a package that matches your goals and growth stage. We support businesses in Embu and beyond with
                  scalable website solutions.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Get a quote
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/projects">See examples</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <Card className="border-border/70 bg-card shadow-soft">
              <CardContent className="space-y-5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What is included</p>
                    <p className="text-lg font-semibold tracking-tight">Clear pricing, no guesswork</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    Detailed package scopes aligned to your business goals.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    Mobile-first builds with SEO foundations built in.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    Optional maintenance and support after launch.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Packages"
              title="Three package tiers for different stages of growth."
              description="Each tier keeps the same quality bar while scaling the scope to match the kind of site you need."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 70}>
                <PricingCard plan={plan} highlighted={index === 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Comparison"
              title="Compare the packages side by side."
              description="Use the table below to compare the feature coverage and decide which level is the best fit."
            />
          </Reveal>
          <Reveal delay={90}>
            <Card className="mt-10 overflow-hidden border-border/70 bg-card shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-muted/60">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Feature</th>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Starter</th>
                      <th className="px-6 py-4 text-sm font-semibold text-primary">Growth</th>
                      <th className="px-6 py-4 text-sm font-semibold text-foreground">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingComparison.map((row, index) => (
                      <tr key={row.feature} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                        <th scope="row" className="px-6 py-4 text-sm font-medium text-foreground">
                          {row.feature}
                        </th>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.starter}</td>
                        <td className="px-6 py-4 text-sm font-medium text-foreground">{row.growth}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/70 bg-slate-950 text-white shadow-2xl">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12">
              <div className="space-y-4">
                <Badge variant="glass" className="border-white/15 bg-white/10 text-white">
                  Need a custom scope?
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  If your project is more complex, we can shape a custom plan around it.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/72">
                  The goal is to give you a build that feels right for your business without adding features you do not need.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                  <Link href="/contact">Discuss your project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <Link href="/services">Review services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
