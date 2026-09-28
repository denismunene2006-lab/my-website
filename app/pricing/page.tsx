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
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-muted/30 to-background py-16 lg:py-24 tech-grid-pattern">
        <div className="container-shell relative z-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              <Badge variant="accent" className="px-3 py-1 text-xs uppercase font-semibold">
                Pricing &amp; Packages
              </Badge>
              <div className="space-y-3">
                <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
                  Transparent website pricing for <span className="text-primary font-black">business growth</span>.
                </h1>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Choose a package tailored to your goals and stage. Transparent pricing in KES with no hidden fees.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contact">
                    Get a quote
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href="/projects">See examples</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <Card className="border-border/60 bg-card/80 backdrop-blur-xl shadow-md p-6">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground">What to expect</p>
                    <p className="text-base font-bold font-heading text-foreground">Transparent pricing, zero guesswork</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span>Detailed package scopes aligned to your business goals.</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span>Mobile-first builds with SEO foundations built in.</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span>Optional maintenance and priority developer support.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-b border-border/40">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Packages"
              title="Three package tiers for different stages of growth."
              description="Each tier keeps the same quality bar while scaling the scope to match your requirements."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 60}>
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
              title="Compare packages side by side."
              description="Review features across packages to decide which plan matches your project needs."
            />
          </Reveal>
          <Reveal delay={90}>
            <Card className="mt-10 overflow-hidden border-border/60 bg-card shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-muted/40 border-b border-border/50">
                    <tr>
                      <th className="px-5 py-3.5 text-xs font-bold font-heading text-foreground">Feature</th>
                      <th className="px-5 py-3.5 text-xs font-bold font-heading text-foreground">Starter</th>
                      <th className="px-5 py-3.5 text-xs font-bold font-heading text-primary">Growth</th>
                      <th className="px-5 py-3.5 text-xs font-bold font-heading text-foreground">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {pricingComparison.map((row) => (
                      <tr key={row.feature} className="hover:bg-muted/20 transition-colors">
                        <th scope="row" className="px-5 py-3.5 text-xs font-medium text-foreground">
                          {row.feature}
                        </th>
                        <td className="px-5 py-3.5 text-xs text-muted-foreground">{row.starter}</td>
                        <td className="px-5 py-3.5 text-xs font-semibold text-primary">{row.growth}</td>
                        <td className="px-5 py-3.5 text-xs text-muted-foreground">{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-t border-border/40">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/60 bg-card shadow-md p-8 sm:p-10">
            <CardContent className="grid gap-6 p-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-3">
                <Badge variant="accent" className="text-xs uppercase font-semibold">
                  Custom scope?
                </Badge>
                <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground sm:text-3xl">
                  Need a custom solution tailored to your exact workflow?
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  We shape custom engineering plans based on your specific requirements.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/contact">Discuss your project</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
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
