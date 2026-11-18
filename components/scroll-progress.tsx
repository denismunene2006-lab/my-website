'use client';

import { useEffect, useState } from 'react';
import { useLenis } from './smooth-scroll-provider';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { lenis } = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = () => {
      const totalHeight = lenis.limit;
      if (totalHeight > 0) {
        setScrollProgress(lenis.scroll / totalHeight);
      }
    };

    lenis.on('scroll', handleScroll);
    handleScroll();

    return () => {
      lenis.off('scroll', handleScroll);
    };
  }, [lenis]);

  return (
    <div
      className="fixed inset-x-0 top-0 h-[3px] pointer-events-none z-[9999] origin-left bg-gradient-to-r from-primary to-accent"
      style={{ transform: `scaleX(${scrollProgress})` }}
      aria-hidden="true"
    />
  );
}
