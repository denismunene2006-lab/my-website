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
  'Best for business websites and redesigns',
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
      <section className="premium-hero relative overflow-hidden border-b border-white/10 py-20 text-white lg:py-32">
        <div className="absolute inset-0 section-grid opacity-20" />
        <div className="container-shell relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <Reveal>
              <div className="max-w-2xl space-y-6">
                <Badge variant="glass" className="border-white/20 bg-white/10 text-white">
                  Contact
                </Badge>
                <div className="space-y-4">
                  <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
                    Let&apos;s build a website that grows your business.
                  </h1>
                  <p className="text-base leading-8 text-white/80 sm:text-lg">
                    Ready to improve your online presence? D-LABS helps brands in Embu and across Kenya launch websites that
                    look professional, load quickly, and guide visitors toward action.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href={`mailto:${site.email}`}>
                      Email us
                      <Mail className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/12">
                    <Link href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                      WhatsApp
                      <MessageSquareMore className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <Card className="glass-surface border-white/20 bg-white/10 text-white shadow-soft">
                <CardContent className="space-y-5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-[#6BEA32]">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/65">Response time</p>
                      <p className="text-lg font-semibold tracking-tight text-white">Usually within a few hours</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {responseNotes.map((note) => (
                      <div key={note} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white/85">
                        {note}
                      </div>
                    ))}
                  </div>
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
              eyebrow="Direct contact"
              title="Choose the channel that feels easiest."
              description="The goal is to make the first step painless, whether you want to email, call, or start a chat."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Reveal key={method.title} delay={index * 70}>
                  <Card className="h-full border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <CardContent className="space-y-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-semibold tracking-tight text-foreground">{method.title}</h2>
                      {method.href !== '#' ? (
                        <Link
                          href={method.href}
                          className="text-sm leading-7 text-muted-foreground transition hover:text-foreground"
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                        >
                          {method.value}
                        </Link>
                      ) : (
                        <p className="text-sm leading-7 text-muted-foreground">{method.value}</p>
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
            <Card className="relative overflow-hidden border-border/70 bg-card shadow-sm">
              <div className="pointer-events-none absolute -inset-x-20 -top-24 h-64 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10 blur-2xl" aria-hidden="true" />
              <CardContent className="relative space-y-5 p-6 text-center sm:p-8">
                <Badge variant="outline" className="w-fit border-primary/20 bg-primary/10 text-primary">
                  Start a project
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">Tell us about your project.</h2>
                <p className="mx-auto max-w-md text-sm leading-7 text-muted-foreground">
                  Have an idea, a business, or a digital product you want to bring to life? Tell us what you have in mind
                  and we'll take it from there.
                </p>
                <Button asChild size="lg" className="mt-2 w-full rounded-full sm:w-auto">
                  <Link href="https://tally.so/r/ODZx98" target="_blank" rel="noopener noreferrer">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-xs leading-6 text-muted-foreground">
                  Share your idea, goals, and what you need. It only takes a minute.
                </p>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={90}>
            <div className="space-y-6">
              <Card className="border-border/70 bg-card shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">How we work</h2>
                  <ol className="space-y-3 text-sm leading-7 text-muted-foreground">
                    <li>1. You share your goals and requirements.</li>
                    <li>2. We recommend the best package and timeline.</li>
                    <li>3. We build, review, and launch the project together.</li>
                  </ol>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Embu</Badge>
                    <Badge variant="outline">Nairobi</Badge>
                    <Badge variant="outline">Remote Kenya</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/70 bg-card shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">Quick FAQ</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.slice(0, 4).map((item, index) => (
                      <AccordionItem key={item.question} value={`contact-faq-${index}`}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-section bg-muted/30">
        <div className="container-shell">
          <Card className="premium-hero overflow-hidden border-transparent text-white shadow-2xl">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-12">
              <div className="space-y-4">
                <Badge variant="glass" className="border-white/20 bg-white/10 text-white">
                  Ready when you are
                </Badge>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  If you are planning a launch, redesign, or rebuild, let&apos;s map it out together.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-white/78">
                  D-LABS is set up to handle focused websites, portfolio builds, and business sites that need to feel much
                  more credible online.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild size="lg">
                  <Link href="/projects">View the portfolio</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 bg-white/5 text-white hover:bg-white/12">
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
