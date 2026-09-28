'use client';

import { useEffect, useRef, useState } from 'react';

type HeroStat = {
  label: string;
  value: string;
};

type HeroStatsGridProps = {
  stats: readonly HeroStat[];
};

function parseStatValue(value: string) {
  const match = value.match(/^(\d+)(\+?)$/);
  if (!match) {
    return { target: 0, suffix: value };
  }

  return { target: Number(match[1]), suffix: match[2] };
}

function AnimatedStatValue({ value, animate }: { value: string; animate: boolean }) {
  const { target, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);
  const [showSuffix, setShowSuffix] = useState(false);

  useEffect(() => {
    if (!animate) {
      return;
    }

    setDisplay(0);
    setShowSuffix(false);

    const duration = 1500;
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(eased * target);

      setDisplay(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
        return;
      }

      setDisplay(target);
      setShowSuffix(Boolean(suffix));
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [animate, suffix, target]);

  return (
    <>
      {animate ? display : 0}
      {showSuffix ? suffix : ''}
    </>
  );
}

export function HeroStatsGrid({ stats }: HeroStatsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="grid gap-3.5 sm:grid-cols-2">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl border border-border/60 bg-card/80 p-4 backdrop-blur-md transition-all hover:border-primary/40 shadow-sm">
          <p className="text-3xl font-bold font-heading text-primary">
            <AnimatedStatValue value={stat.value} animate={hasAnimated} />
          </p>
          <p className="mt-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
