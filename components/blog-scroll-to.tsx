'use client';

import { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';

// Clearance below the sticky header so the card isn't hidden behind it.
const HEADER_OFFSET = 96;

/**
 * When the blog page loads with a `#slug` hash in the URL (e.g. after a reader
 * clicks "Back to blog" from an article), smoothly scrolls the matching article
 * card into view so they can continue reading where they left off.
 *
 * We scroll to an explicitly computed absolute position (element top + window
 * scroll) rather than handing Lenis the node directly. Lenis's node-based
 * math reads its internal lerped scroll and can conflict with Next.js's own
 * native hash jump, which made the landing land on the wrong card.
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

    const scrollToArticle = () => {
      const target = document.getElementById(id);
      if (!target) return false;

      const top = target.getBoundingClientRect().top + window.scrollY;

      if (lenis) {
        lenis.scrollTo(top, { offset: -HEADER_OFFSET, duration: 1.1 });
      } else {
        // Reduced-motion / no-Lenis fallback.
        window.scrollTo({ top: top - HEADER_OFFSET, behavior: 'smooth' });
      }
      return true;
    };

    // Try right away, and keep retrying briefly in case the card mounts late.
    if (!scrollToArticle()) {
      let attempts = 0;
      const timer = window.setInterval(() => {
        if (scrollToArticle() || ++attempts >= 50) window.clearInterval(timer);
      }, 100);
      return () => window.clearInterval(timer);
    }
  }, [hash, lenis]);

  return null;
}