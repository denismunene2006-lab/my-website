import Link from 'next/link';
import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { SitePricingPlan } from '@/data/site';

type PricingCardProps = {
  plan: SitePricingPlan;
  highlighted?: boolean;
};

export function PricingCard({ plan, highlighted = false }: PricingCardProps) {
  return (
    <Card
      className={cn(
        'flex h-full flex-col border transition-all duration-200 hover-lift',
        highlighted
          ? 'border-primary/40 bg-card/90 shadow-md ring-1 ring-primary/20'
          : 'border-border/60 bg-card/80 shadow-sm hover:border-border'
      )}
    >
      <CardHeader className="space-y-3 p-6 pb-4">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="text-xl font-bold font-heading">{plan.name}</CardTitle>
          {plan.badge ? (
            <Badge variant={highlighted ? 'default' : 'accent'} className="text-[10px] uppercase font-semibold tracking-wider">
              {plan.badge}
            </Badge>
          ) : null}
        </div>
        <CardDescription className="text-xs leading-relaxed text-muted-foreground">{plan.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 space-y-5 p-6 pt-0">
        <div className="py-2 border-y border-border/40 space-y-1">
          <p className="text-3xl font-extrabold font-heading tracking-tight text-foreground">{plan.price}</p>
          <p className="text-xs text-muted-foreground">{plan.note}</p>
        </div>

        <ul className="space-y-2.5 text-xs text-foreground/90">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3 stroke-[2.5]" />
              </span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full" variant={highlighted ? 'default' : 'outline'}>
          <Link href="/contact">Get started</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
