import Link from 'next/link';
import { ArrowRight, Mail, MapPin, MessageSquareMore, PhoneCall } from 'lucide-react';

import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { createPageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/json-ld';
import { contactMethods, faqItems, site } from '@/data/site';

export const metadata = createPageMetadata({
  title: 'Contact D-LABS | Web Developer in Embu, Kenya',
  description:
    'Contact D-LABS in Embu, Kenya for website development, redesign, deployment, or training. Reach us by WhatsApp, email, or phone.',
  path: '/contact',
});

const responseNotes = [
  'Usually respond within a few hours',
  'Remote work across Kenya',
  'Best for business websites & web apps',
  'Straightforward process, no clutter',
];

export default function ContactPage() {
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
        <div className="container-shell relative z-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              <Badge variant="accent" className="px-3 py-1 text-xs uppercase font-semibold">
                Get In Touch
              </Badge>
              <div className="space-y-3">
                <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
                  Let&apos;s build software that <span className="text-primary font-black">grows your brand</span>.
                </h1>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Ready to launch or redesign? Reach out to discuss goals, timelines, and pricing for your website or digital product.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href={`mailto:${site.email}`}>
                    Email us
                    <Mail className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                    WhatsApp
                    <MessageSquareMore className="h-4 w-4 ml-1 text-primary" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <Card className="border-border/60 bg-card/80 backdrop-blur-xl shadow-md p-6">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground">Response time</p>
                    <p className="text-base font-bold font-heading text-foreground">Usually within a few hours</p>
                  </div>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2 pt-1">
                  {responseNotes.map((note) => (
                    <div key={note} className="rounded-xl border border-border/50 bg-muted/30 px-3.5 py-2.5 text-xs font-semibold text-foreground/90">
                      {note}
                    </div>
                  ))}
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
              eyebrow="Direct contact"
              title="Choose your preferred channel."
              description="Reach out directly via email, phone, WhatsApp, or location."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Reveal key={method.title} delay={index * 60}>
                  <Card className="h-full border-border/60 bg-card p-5 shadow-sm hover:border-primary/40 hover-lift">
                    <CardContent className="space-y-3 p-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-lg font-bold font-heading tracking-tight text-foreground">{method.title}</h2>
                      {method.href !== '#' ? (
                        <Link
                          href={method.href}
                          className="text-xs leading-relaxed text-muted-foreground transition hover:text-primary font-medium block truncate"
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                        >
                          {method.value}
                        </Link>
                      ) : (
                        <p className="text-xs leading-relaxed text-muted-foreground font-medium">{method.value}</p>
                      )}
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Card className="relative overflow-hidden border-border/60 bg-card shadow-sm p-6 sm:p-8">
              <CardContent className="relative space-y-4 p-0 text-center">
                <Badge variant="accent" className="w-fit mx-auto text-[10px] uppercase font-semibold">
                  Start a project
                </Badge>
                <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground sm:text-3xl">Tell us about your project</h2>
                <p className="mx-auto max-w-md text-xs leading-relaxed text-muted-foreground">
                  Have a business website or digital product you want to build? Share your ideas and timeline.
                </p>
                <Button asChild size="lg" className="mt-2 w-full rounded-xl sm:w-auto">
                  <Link href="https://tally.so/r/ODZx98" target="_blank" rel="noopener noreferrer">
                    Start Your Project
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <p className="text-[11px] text-muted-foreground pt-1">
                  Takes less than 2 minutes to submit.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={90}>
            <div className="space-y-5">
              <Card className="border-border/60 bg-card p-6 shadow-sm">
                <CardContent className="space-y-3 p-0">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold font-heading tracking-tight text-foreground">How we work</h2>
                  <ol className="space-y-2 text-xs leading-relaxed text-muted-foreground">
                    <li className="flex gap-2"><span className="font-semibold text-primary">01.</span> You share goals and scope requirements.</li>
                    <li className="flex gap-2"><span className="font-semibold text-primary">02.</span> We recommend the best package and timeline.</li>
                    <li className="flex gap-2"><span className="font-semibold text-primary">03.</span> We design, build, and deploy together.</li>
                  </ol>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <Badge variant="outline" className="text-[10px]">Embu</Badge>
                    <Badge variant="outline" className="text-[10px]">Nairobi</Badge>
                    <Badge variant="outline" className="text-[10px]">Remote Kenya</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/60 bg-card p-6 shadow-sm">
                <CardContent className="space-y-3 p-0">
                  <h2 className="text-xl font-bold font-heading tracking-tight text-foreground">Quick FAQ</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.slice(0, 4).map((item, index) => (
                      <AccordionItem key={item.question} value={`contact-faq-${index}`}>
                        <AccordionTrigger className="text-xs font-semibold">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-xs leading-relaxed text-muted-foreground">{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-muted/20 border-t border-border/40">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/60 bg-card shadow-md p-8 sm:p-10">
            <CardContent className="grid gap-6 p-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-3">
                <Badge variant="accent" className="text-xs uppercase font-semibold">
                  Ready when you are
                </Badge>
                <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground sm:text-3xl">
                  Let&apos;s map out your project together.
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  D-LABS handles full website builds, portfolio showcases, and product redesigns.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button asChild size="lg" className="rounded-xl">
                  <Link href="/projects">View portfolio</Link>
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
