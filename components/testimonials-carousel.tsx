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

  // Autoplay functionality: advances every 9 seconds
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

  // Dynamically measure the tallest card and set the viewport height to match
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

    // Measure after initial render
    const rafId = requestAnimationFrame(measureHeights);

    // Re-measure on window resize
    window.addEventListener('resize', measureHeights);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', measureHeights);
    };
  }, [testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div
      className="relative mx-auto w-full max-w-3xl px-4 py-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Sliding viewport with dynamic height matching the tallest card */}
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
              <Card className="relative flex h-full flex-col justify-between overflow-hidden border border-[#6BEA32]/30 bg-[#162231] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] md:p-10">
                <Quote className="pointer-events-none absolute right-6 top-6 h-20 w-20 text-[#6BEA32]/15" />
                <div className="relative z-10">
                  <p className="text-lg font-medium leading-relaxed text-white md:text-xl">
                    "{item.quote}"
                  </p>
                </div>
                <div className="relative z-10 mt-6 flex items-center gap-3">
                  <div className="h-1 w-8 rounded bg-[#6BEA32]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6BEA32]">
                    {item.meta}
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-between gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6BEA32]/35 bg-[#162231] text-white transition hover:border-[#6BEA32]/60 hover:bg-[#1e2d3d] focus:outline-none focus:ring-2 focus:ring-[#6BEA32]"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-7 bg-[#6BEA32]'
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6BEA32]/35 bg-[#162231] text-white transition hover:border-[#6BEA32]/60 hover:bg-[#1e2d3d] focus:outline-none focus:ring-2 focus:ring-[#6BEA32]"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
