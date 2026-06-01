/* Smooth Scrolling and Performance Enhancements */
(function() {
  'use strict';

  // Enhanced smooth scroll with momentum and performance
  function smoothScroll(target) {
    if (!target) return;

    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) return;

    const startPosition = window.scrollY || window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + startPosition;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (elapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // Scroll link handling for internal navigation
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link || link.hostname !== window.location.hostname) return;

    const href = link.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      smoothScroll(target);
    }
  });

  // Optimize paint during scroll by batching updates
  let paintScheduled = false;
  const scrollTargets = document.querySelectorAll('.card, .service-box, .home-section');

  window.addEventListener('scroll', () => {
    if (!paintScheduled) {
      paintScheduled = true;
      requestAnimationFrame(() => {
        // Update visible elements efficiently
        scrollTargets.forEach(el => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          
          if (isVisible) {
            el.style.willChange = 'transform';
          } else {
            el.style.willChange = 'auto';
          }
        });
        paintScheduled = false;
      });
    }
  }, { passive: true });

  // Optimize navigation scroll performance
  const navLinks = document.querySelectorAll('nav a, [data-scroll-link]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        smoothScroll(href);
      }
    });
  });

  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
  }

  // Monitor and optimize scrollbar position
  let lastScrollY = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY || window.pageYOffset;

    if (!ticking) {
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--scroll-position', `${lastScrollY}px`);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();
