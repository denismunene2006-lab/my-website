import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import type { Product } from '@/data/products';
import { cn } from '@/lib/utils';

type ProductFeatureProps = {
  feature: Product['features'][number];
  className?: string;
};

/**
 * A product screenshot presented like a device preview: padded frame, soft
 * shadow, and a green-tinted border that matches the Lipa/D-LABS palette.
 * `object-contain` keeps the screenshot's true aspect ratio — never cropped
 * or stretched — which matters because the source images are portrait.
 */
export function ProductFeature({ feature, className }: ProductFeatureProps) {
  const Icon = feature.icon;

  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md hover-lift',
        className
      )}
    >
      {/* Screenshot frame */}
      <div className="relative border-b border-border/50 bg-gradient-to-b from-primary/[0.07] via-muted/30 to-muted/40 p-5 sm:p-7">
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(16,185,129,0.14),transparent_70%)]" />
        </div>

        <div className="relative mx-auto flex h-[320px] w-full max-w-[260px] items-center justify-center sm:h-[380px] lg:h-[420px]">
          <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-primary/20 bg-background/70 p-2.5 shadow-soft backdrop-blur-sm transition-colors duration-300 group-hover:border-primary/40 sm:p-3">
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              className="h-full w-full object-contain"
              placeholder="blur"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
            />
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className="flex flex-1 flex-col space-y-3 p-6">
        <div className="flex items-center gap-3">
          <Badge variant="accent" className="font-mono text-[11px]">
            {feature.number}
          </Badge>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>

        <h3 className="text-lg font-bold font-heading tracking-tight text-foreground">
          {feature.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
      </div>
    </article>
  );
}
