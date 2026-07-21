import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, HelpCircle, Layers3, Sparkles } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { faqItems, processSteps, services } from '@/data/site';
import { ServiceCard } from '@/components/service-card';

export const metadata = createPageMetadata({
  title: 'Website Development Services in Embu, Kenya | D-LABS',
  description:
    'Explore D-LABS services in Embu: website development, redesign, deployment, and beginner web development training.',
  path: '/services',
});

const serviceNotes = [
  'Conversion-focused layouts',
  'Responsive and mobile-first',
  'SEO-ready foundations',
  'Maintainable component systems',
];

export default function ServicesPage() {
  return (
    <div>
      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary">
                Services
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Web development services built for growth.
                </h1>
                <p className="text-base leading-8 text-muted-foreground sm:text-lg">
                  D-LABS helps businesses launch cleaner websites, refresh outdated experiences, and build stronger digital
                  foundations without adding unnecessary weight.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/pricing">
                    View pricing
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/contact">Request a quote</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <Card className="border-border/70 bg-card shadow-soft">
              <CardContent className="space-y-5 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What is included</p>
                    <p className="text-lg font-semibold tracking-tight">A cleaner experience from top to bottom</p>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {serviceNotes.map((note) => (
                    <div key={note} className="flex items-center gap-3 rounded-2xl border border-border/70 bg-muted/35 px-4 py-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm font-medium text-foreground">{note}</span>
                    </div>
                  ))}
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
              eyebrow="Core services"
              title="Four service paths that cover the most common needs."
              description="Each offering keeps the brand identity intact while improving how the site feels, performs, and converts."
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
              eyebrow="Process"
              title="A process that makes the project feel manageable."
              description="From the first call to the final launch, the workflow stays simple enough to follow and strong enough to trust."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 70}>
                  <Card className="h-full border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <CardContent className="space-y-4 p-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">{step.title}</h3>
                      <p className="text-sm leading-7 text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/30" id="services-faq">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions, answered clearly."
              description="These are the things clients usually want to know before they commit to a new website."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <Card className="border-border/70 bg-card shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight">Why the FAQ matters</h2>
                  <p className="text-sm leading-7 text-muted-foreground">
                    Clear answers reduce hesitation. The better the visitor understands the process, the easier it becomes to
                    move forward confidently.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Timelines</Badge>
                    <Badge variant="outline">Pricing</Badge>
                    <Badge variant="outline">SEO</Badge>
                    <Badge variant="outline">Mobile</Badge>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={90}>
              <Card className="border-border/70 bg-card shadow-sm">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={item.question} value={`faq-${index}`}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/70 bg-slate-950 text-white shadow-2xl">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12">
              <div className="space-y-4">
                <Badge variant="glass" className="border-white/15 bg-white/10 text-white">
                  Next step
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Want us to modernize your site without losing what already works?
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/72">
                  We can keep your best content, improve the structure, and give the site a more polished startup-level finish.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                  <Link href="/pricing">See packages</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <Link href="/contact">Contact D-LABS</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
