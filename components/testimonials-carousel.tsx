'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { SiteTestimonial } from '@/data/site';

type TestimonialsCarouselProps = {
  testimonials: readonly SiteTestimonial[];
};

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);
  const totalSlides = testimonials.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 9000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, handleNext]);

  useEffect(() => {
    const measureHeights = () => {
      let tallest = 0;
      cardRefs.current.forEach((card) => {
        if (card) {
          const height = card.offsetHeight;
          if (height > tallest) tallest = height;
        }
      });
      if (tallest > 0) {
        setViewportHeight(tallest);
      }
    };

    const rafId = requestAnimationFrame(measureHeights);
    window.addEventListener('resize', measureHeights);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', measureHeights);
    };
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div
      className="relative mx-auto w-full max-w-3xl px-4 py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        ref={viewportRef}
        className="relative overflow-hidden w-full transition-[height] duration-300 ease-in-out"
        style={viewportHeight ? { height: `${viewportHeight}px` } : undefined}
      >
        {testimonials.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={`${item.meta}-${index}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                isActive
                  ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
                  : 'opacity-0 scale-95 pointer-events-none ' + (index < activeIndex ? '-translate-x-full' : 'translate-x-full')
              }`}
            >
              <Card className="relative flex h-full flex-col justify-between overflow-hidden border border-border/60 bg-card p-6 sm:p-8 shadow-sm">
                <Quote className="pointer-events-none absolute right-6 top-6 h-16 w-16 text-primary/10" />
                <div className="relative z-10">
                  <p className="text-base sm:text-lg font-medium leading-relaxed text-foreground/90">
                    "{item.quote}"
                  </p>
                </div>
                <div className="relative z-10 mt-6 flex items-center gap-3">
                  <div className="h-1 w-6 rounded bg-primary" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.meta}
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background text-foreground transition hover:border-primary/40 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background text-foreground transition hover:border-primary/40 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
