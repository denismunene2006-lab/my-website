import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { ProductContactActions } from '@/components/product-contact-actions';
import { ProductFeature } from '@/components/product-feature';
import { ProductShare } from '@/components/product-share';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getProductHref, type Product } from '@/data/products';
import { cn } from '@/lib/utils';

type ProductPageProps = {
  product: Product;
};

/**
 * Shared layout for every "From D-Labs" product page, so each new product
 * automatically matches the D-LABS design language.
 *
 * A product page deliberately contains no links to other pages of the site —
 * the only actions are WhatsApp and Email, both with pre-written messages.
 */
export function ProductPage({ product }: ProductPageProps) {
  const Icon = product.icon;

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

              <ProductContactActions
                whatsappMessage={product.contact.whatsappMessage}
                emailSubject={product.contact.emailSubject}
                emailBody={product.contact.emailBody}
              />
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
                      Built in-house by D-LABS
                    </p>
                    <p className="text-base font-bold font-heading text-foreground">{product.name}</p>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  {product.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[11px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <ProductShare
              name={product.name}
              path={getProductHref(product)}
              className="w-full justify-between"
            />
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

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {product.challenges.map((challenge, index) => {
              const ChallengeIcon = challenge.icon;
              return (
                <Reveal key={challenge.title} delay={index * 60}>
                  <Card className="h-full border-border/60 bg-card shadow-sm hover:border-primary/40 hover-lift">
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

      {/* Introductory narrative — extend `product.sections` as the product grows */}
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
      {/* What you get */}
      <section className="page-section bg-muted/20 border-y border-border/40">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Features"
              title="What you get"
              description="Three core parts: sending the request, confirming the payment, and proving it afterwards."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {product.features.map((feature, index) => (
              <Reveal key={feature.id} delay={index * 60}>
                <ProductFeature feature={feature} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section className="page-section">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="The process"
              title="How we do it"
              description="We handle the setup with you, so the payment flow is ready to use for your business."
            />
          </Reveal>

          <ol className="mt-10 space-y-4">
            {product.process.map((step, index) => (
              <Reveal key={step.number} delay={index * 50}>
                <li className="group flex gap-5 rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md hover-lift sm:p-6">
                  <span className="font-heading text-2xl font-extrabold leading-none text-primary/40 transition-colors duration-200 group-hover:text-primary/70 sm:text-3xl">
                    {step.number}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold font-heading tracking-tight text-foreground sm:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="page-section bg-muted/20 border-t border-border/40">
        <div className="container-shell">
          <Card className="overflow-hidden border-border/60 bg-card shadow-md p-8 sm:p-10">
            <CardContent className="grid gap-6 p-0 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-3">
                <Badge variant="accent" className="text-xs uppercase font-semibold">
                  Get started
                </Badge>
                <h2 className="text-2xl font-bold font-heading tracking-tight text-foreground sm:text-3xl">
                  Ready to simplify your M-Pesa payments?
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Get in touch with D-Labs and let&apos;s get Lipa ready for your business.
                </p>
              </div>
              <ProductContactActions
                whatsappMessage={product.contact.whatsappMessage}
                emailSubject={product.contact.emailSubject}
                emailBody={product.contact.emailBody}
                align="end"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
