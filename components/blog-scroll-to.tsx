'use client';

import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';

// Clearance below the sticky header so the card isn't hidden behind it.
const HEADER_OFFSET = 96;

/**
 * When the blog page loads with a `#slug` hash in the URL (e.g. after a reader
 * clicks "Back to blog" from an article), brings the matching article card into
 * view so they can continue reading where they left off.
 *
 * We scroll instantly (no smooth animation) to an explicitly computed absolute
 * position. Browser + Next.js both start their own smooth "hash" scroll on
 * navigation, and running a competing Lenis animation over them can be cut
 * short mid-flight — leaving the user parked partway down the page (typically
 * on the middle row of cards) instead of on their article. A single, exact,
 * instantaneous scroll is immune to that race and always lands on the target.
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
    const id = decodeURIComponent(hash.replace(/^#/, ''));
    if (!id) return;

    // Bump any in-flight/native navigation out of the way by scrolling to the
    // top first, so only our exact position is the final resting spot.
    window.scrollTo(0, 0);

    const scrollToArticle = () => {
      const target = document.getElementById(id);
      if (!target) return false;

      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);

      if (lenis) {
        lenis.scrollTo(top, { immediate: true, force: true });
      } else {
        // Reduced-motion / no-Lenis fallback.
        window.scrollTo(0, top);
      }
      return true;
    };

    // Try on the next frame so layout/images settle, retrying briefly in case
    // the card mounts late.
    const frame = requestAnimationFrame(() => {
      if (!scrollToArticle()) {
        let attempts = 0;
        const timer = window.setInterval(() => {
          if (scrollToArticle() || ++attempts >= 30) window.clearInterval(timer);
        }, 100);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, lenis]);

  return null;
}