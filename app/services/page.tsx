import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, HelpCircle, Sparkles } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/json-ld';
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
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <div>
      <JsonLd data={faqJsonLd} />

      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-muted/30 to-background py-16 lg:py-24 tech-grid-pattern">
        <div className="container-shell relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <Reveal>
              <div className="max-w-2xl space-y-6">
                <Badge variant="accent" className="px-3 py-1 text-xs uppercase font-semibold">
                  Services
                </Badge>
                <div className="space-y-3">
                  <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
                    Web development services built for <span className="text-primary font-black">growth</span>.
                  </h1>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    D-LABS helps businesses launch cleaner websites, refresh outdated experiences, and build stronger digital foundations without unnecessary friction.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-xl">
                    <Link href="/pricing">
                      View pricing
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-xl">
                    <Link href="/contact">Request a quote</Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <Card className="border-border/60 bg-card/80 backdrop-blur-xl shadow-md p-6">
                <CardContent className="space-y-4 p-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground">Included in all projects</p>
                      <p className="text-base font-bold font-heading text-foreground">A cleaner experience from top to bottom</p>
                    </div>
                  </div>
                  <div className="grid gap-2.5 sm:grid-cols-2 pt-2">
                    {serviceNotes.map((note) => (
                      <div key={note} className="flex items-center gap-2 rounded-xl border border-border/50 bg-muted/30 px-3.5 py-2.5 text-xs font-semibold text-foreground/90">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-b border-border/40">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Core services"
              title="Four service paths that cover your digital needs."
              description="Each offering keeps the brand identity intact while improving how the site feels, performs, and converts."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 60}>
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
              title="A clear 3-step execution workflow."
              description="From the first consultation to final deployment, our process stays transparent and easy to follow."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 60}>
                  <Card className="h-full border-border/60 bg-card p-6 shadow-sm hover:border-primary/40 hover-lift">
                    <CardContent className="space-y-3 p-0">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold font-heading tracking-tight text-foreground">{step.title}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-y border-border/40" id="services-faq">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions."
              description="Common questions answered clearly to help you make informed decisions."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <Card className="border-border/60 bg-card p-6 shadow-sm">
                <CardContent className="space-y-4 p-0">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold font-heading tracking-tight">Why transparency matters</h2>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Clear answers reduce hesitation. Understanding our scope, process, and pricing makes working together smooth and predictable.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <Badge variant="outline" className="text-[11px]">Timelines</Badge>
                    <Badge variant="outline" className="text-[11px]">Pricing</Badge>
                    <Badge variant="outline" className="text-[11px]">SEO</Badge>
                    <Badge variant="outline" className="text-[11px]">Mobile</Badge>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={90}>
              <Card className="border-border/60 bg-card p-6 shadow-sm">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={item.question} value={`faq-${index}`}>
                        <AccordionTrigger className="text-sm font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-xs leading-relaxed text-muted-foreground">{item.answer}</AccordionContent>
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
          <Card className="overflow-hidden border-border/60 bg-card shadow-md p-8 sm:p-10">
            <CardContent className="grid gap-6 p-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-3">
                <Badge variant="accent" className="text-xs uppercase font-semibold">
                  Next step
                </Badge>
                <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground sm:text-3xl">
                  Ready to elevate your online presence?
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  We can keep your best content, improve visual structure, and deliver a modern 2026 tech finish.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/pricing">See packages</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
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
