'use client';

import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reduceMotion.matches) {
      return;
    }

    let cancelled = false;
    let frameId = 0;
    let lenis: import('lenis').default | null = null;

    void import('lenis').then(({ default: Lenis }) => {
      if (cancelled || reduceMotion.matches) {
        return;
      }

      lenis = new Lenis({
        autoRaf: false,
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
      });

      const frame = (time: number) => {
        lenis?.raf(time);
        frameId = window.requestAnimationFrame(frame);
      };

      frameId = window.requestAnimationFrame(frame);
    });

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) {
        lenis?.destroy();
        lenis = null;
        window.cancelAnimationFrame(frameId);
      }
    };

    reduceMotion.addEventListener('change', handleMotionPreference);

    return () => {
      cancelled = true;
      reduceMotion.removeEventListener('change', handleMotionPreference);
      window.cancelAnimationFrame(frameId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
