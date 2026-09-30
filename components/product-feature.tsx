import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';
import { cn } from '@/lib/utils';

type ProductFeatureProps = {
  feature: Product['features'][number];
  className?: string;
};

/**
 * A product screenshot shown at a readable size beside its copy.
 *
 * Every feature uses the same arrangement: copy on the left, screenshot on the
 * right, with the copy top-aligned to the start of the column on large screens.
 * The screenshot is never cropped or stretched: `object-contain` renders it at
 * its true aspect ratio, and the frame takes ~57% of the row on desktop.
 */
export function ProductFeature({ feature, className }: ProductFeatureProps) {
  const Icon = feature.icon;

  return (
    <article
      className={cn(
        'group overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-colors duration-200 hover:border-primary/40 hover:shadow-md',
        className
      )}
    >
      <div className="grid lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        {/* Copy — always left, top-aligned on large screens */}
        <div className="flex flex-col justify-start gap-4 p-6 sm:p-8 lg:p-10">
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

        {/* Screenshot — always right */}
        <div className="relative border-t border-border/50 bg-gradient-to-br from-primary/[0.07] via-muted/30 to-muted/40 p-4 sm:p-6 lg:border-l lg:border-t-0 lg:p-8">
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

