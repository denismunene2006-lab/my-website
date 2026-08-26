'use client';

import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';

/**
 * When the blog page loads with a `#slug` hash in the URL (e.g. after a reader
 * clicks "Back to blog" from an article), smoothly scrolls the matching article
 * card into view so they can continue reading where they left off.
 */
export function BlogScrollTo() {
  const lenis = useLenis();
  const [hash, setHash] = useState<string | null>(null);

  // Capture the hash once the component mounts on the client.
  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    if (!id) return;

    let attempts = 0;
    const timer = window.setInterval(() => {
      const target = document.getElementById(id);

      if (!target) {
        // Element may not be mounted yet; give up after ~5s.
        if (++attempts >= 50) window.clearInterval(timer);
        return;
      }

      window.clearInterval(timer);
      if (lenis) {
        // Offset accounts for the sticky header (~64–72px).
        lenis.scrollTo(target, { offset: -96, duration: 1.1 });
      } else {
        // Reduced-motion / no-Lenis fallback (respects scroll-mt-24).
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    return () => window.clearInterval(timer);
  }, [hash, lenis]);

  return null;
}