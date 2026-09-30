import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';
import { cn } from '@/lib/utils';

type ProductFeatureProps = {
  feature: Product['features'][number];
  /** Position in the list — even rows put the screenshot on the right, odd on the left. */
  index?: number;
  className?: string;
};

/**
 * A product screenshot shown at a readable size beside its copy.
 *
 * The screenshot is never cropped or stretched: `object-contain` renders it
 * inside the frame at its true aspect ratio, and the frame itself takes ~57% of
 * the row on desktop (full width on mobile) so the UI inside stays legible.
 */
export function ProductFeature({ feature, index = 0, className }: ProductFeatureProps) {
  const Icon = feature.icon;
  const isReversed = index % 2 === 1;

  return (
    <article
      className={cn(
        'group overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md hover-lift',
        className
      )}
    >
      <div
        className={cn(
          'grid lg:items-center',
          // The screenshot always sits in the wide column; `order` only decides
          // which side of the row it appears on.
          isReversed ? 'lg:grid-cols-[1.28fr_0.72fr]' : 'lg:grid-cols-[0.72fr_1.28fr]'
        )}
      >
        {/* Copy */}
        <div
          className={cn(
            'flex flex-col justify-center gap-4 p-6 sm:p-8 lg:p-10',
            isReversed && 'lg:order-2'
          )}
        >
          <div className="flex items-center gap-3">
            <Badge variant="accent" className="font-mono text-[11px]">
              {feature.number}
            </Badge>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>

          <h3 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            {feature.title}
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {feature.text}
          </p>
        </div>

        {/* Screenshot */}
        <div
          className={cn(
            'relative border-border/50 bg-gradient-to-br from-primary/[0.07] via-muted/30 to-muted/40 p-4 sm:p-6 lg:p-8',
            'border-t lg:border-t-0',
            isReversed ? 'lg:order-1 lg:border-r' : 'lg:border-l'
          )}
        >
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(16,185,129,0.14),transparent_70%)]" />
          </div>

          <div className="relative flex items-center justify-center rounded-xl border border-primary/20 bg-background/70 p-1.5 shadow-soft backdrop-blur-sm transition-colors duration-300 group-hover:border-primary/40 sm:p-2.5">
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              className="h-auto w-full object-contain"
              placeholder="blur"
              sizes="(max-width: 1024px) 92vw, 62vw"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

