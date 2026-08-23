'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 h-[3px] pointer-events-none z-[9999] origin-left bg-gradient-to-r from-primary to-accent transition-transform duration-75 ease-out"
      style={{ transform: `scaleX(${scrollProgress})` }}
      aria-hidden="true"
    />
  );
}
