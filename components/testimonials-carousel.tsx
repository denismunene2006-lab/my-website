'use client';

import { useMemo } from 'react';

import { Card } from '@/components/ui/card';
import type { SiteTestimonial } from '@/data/site';

type TestimonialsCarouselProps = {
  testimonials: readonly SiteTestimonial[];
};

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const items = useMemo(() => [...testimonials, ...testimonials], [testimonials]);

  return (
    <div className="ticker-paused overflow-hidden">
      <div className="ticker-row gap-5 pr-5">
        {items.map((item, index) => (
          <Card
            key={`${item.meta}-${index}`}
            className="glass-surface w-[320px] shrink-0 border-white/25 bg-white/10 p-6 text-white shadow-soft"
          >
            <p className="text-base leading-7 text-white/90">"{item.quote}"</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/65">{item.meta}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
