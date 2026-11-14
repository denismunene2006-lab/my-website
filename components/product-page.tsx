import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { type Product } from '@/data/products';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

type ProductPageProps = {
  product: Product;
};

/**
 * Shared layout for every "From D-Labs" product page, so each new product
 * automatically matches the D-LABS design language.
 *
 * This page introduces Lipa Biz, explains the problems it solves, and
 * directs visitors to the official Lipa Biz landing page.
 */
export function ProductPage({ product }: ProductPageProps) {
  const Icon = product.icon;
  const LIPI_BIZ_URL = 'https://lipa-biz.dlabskenya.com/';

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-muted/30 to-background py-16 lg:py-24 tech-grid-pattern">
        <div className="container-shell relative z-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <div className="max-w-2xl space-y-6">
              <div>
                <Badge variant="accent" className="px-3 py-1 text-xs uppercase font-semibold">
                  From D-Labs
                </Badge>
              </div>

              <div className="space-y-3">
                <h1 className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
                  <span className="text-primary font-black">{product.name}</span> — {product.tagline}
                </h1>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[11px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="space-y-4">
            <Card className="border-border/60 bg-card/80 backdrop-blur-xl shadow-md p-6">
              <CardContent className="space-y-4 p-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground">
                      Built in-house by <span className="whitespace-nowrap">D-LABS</span>
                    </p>
                    <p className="text-base font-bold font-heading text-foreground">{product.name}</p>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  {product.summary}
                </p>
              </CardContent>
            </Card>
            </div>
          </Reveal>
        </div>
      </section>
      {/* The problem this product answers */}
      <section className="page-section bg-muted/20 border-b border-border/40">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="The problem"
              title="Payments you cannot confirm are payments you cannot trust."
              description="Most businesses still confirm M-Pesa by hand, which is slow, repetitive, and easy to get wrong."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {product.challenges.map((challenge, index) => {
              const ChallengeIcon = challenge.icon;
              return (
                <Reveal key={challenge.title} delay={index * 60}>
                  <Card className="h-full interactive-card border-border/60 bg-card shadow-sm hover:border-primary/40">
                    <CardContent className="space-y-3 p-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <ChallengeIcon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold font-heading tracking-tight text-foreground">
                        {challenge.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{challenge.text}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introducing Lipa Biz */}
      {product.sections.map((section, index) => (
        <section
          key={section.id}
          className={cn('page-section', index % 2 === 1 && 'bg-muted/20 border-y border-border/40')}
        >
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.paragraphs.join(' ')}
              />
            </Reveal>
          </div>
        </section>
      ))}

      {/* CTA: Explore Lipa Biz */}
      <section className="page-section bg-muted/20 border-t border-border/40">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/60 bg-card shadow-md p-8 sm:p-10">
            <CardContent className="grid gap-6 p-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-3 text-center lg:text-left">
                <Badge variant="accent" className="text-xs uppercase font-semibold inline-block">
                  Explore Lipa Biz
                </Badge>
                <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground sm:text-3xl">
                  Ready to manage your M-Pesa payments from one platform?
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground mx-auto lg:mx-0">
                  Discover how Lipa Biz helps businesses track payments, generate receipts, and manage multiple entities — all in one place.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <a
                  href={LIPI_BIZ_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Explore Lipa Biz
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
