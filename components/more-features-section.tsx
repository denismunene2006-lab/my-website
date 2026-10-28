import { Reveal } from '@/components/reveal';
import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Product } from '@/data/products';

type MoreFeaturesSectionProps = {
  product: Product;
};

export function MoreFeaturesSection({ product }: MoreFeaturesSectionProps) {
  if (!product.moreFeatures || product.moreFeatures.length === 0) {
    return null;
  }

  return (
    <section className="page-section bg-muted/20 border-y border-border/40">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="More features"
            title="Built for how your business runs"
            description="Additional tools that make M-Pesa payments smoother, from remote collection to customer records."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {product.moreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.id} delay={index * 60}>
                <Card className="h-full border-border/60 bg-card shadow-sm hover:border-primary/40 hover:shadow-md hover-lift">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold font-heading tracking-tight text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.text}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}