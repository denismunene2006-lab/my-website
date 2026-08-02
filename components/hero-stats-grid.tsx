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

    const duration = 1750;
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
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={gridRef} className="grid gap-4 sm:grid-cols-2">
      {stats.map((stat, index) => (
        <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
          <p
            className="text-4xl font-bold text-[#6BEA32] [animation:fadeUp_600ms_cubic-bezier(0.22,1,0.36,1)_both]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <AnimatedStatValue value={stat.value} animate={hasAnimated} />
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/70">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
