import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import type { SitePricingPlan } from '@/data/site';

type PricingCardProps = {
  plan: SitePricingPlan;
  highlighted?: boolean;
};

export function PricingCard({ plan, highlighted = false }: PricingCardProps) {
  return (
    <Card
      className={[
        'flex h-full flex-col border-border/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft',
        highlighted ? 'border-primary/30 bg-primary/[0.03]' : 'bg-card',
      ].join(' ')}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <CardTitle>{plan.name}</CardTitle>
          {plan.badge ? <Badge>{plan.badge}</Badge> : null}
        </div>
        <CardDescription className="text-sm leading-6 text-muted-foreground">{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-5">
        <div className="space-y-1">
          <p className="text-3xl font-semibold tracking-tight text-foreground">{plan.price}</p>
          <p className="text-sm text-muted-foreground">{plan.note}</p>
        </div>
        <ul className="space-y-3 text-sm text-foreground/90">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full rounded-full" variant={highlighted ? 'default' : 'outline'}>
          <Link href="/contact">Get a quote</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
