/**
 * Ultra-Optimized Smooth Scrolling for 60fps Performance
 * Uses GPU acceleration, requestAnimationFrame, and paint batching
 */
(function() {
  'use strict';

  // High-performance easing function
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // Smooth scroll with hardware acceleration
  function smoothScroll(target, duration = 600) {
    if (!target) return;

    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (!element) return;

    const startPosition = window.scrollY || window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + startPosition - 80;
    const distance = targetPosition - startPosition;
    
    if (distance === 0) return;

    const startTime = performance.now();

    function frame(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      const position = startPosition + distance * easeProgress;

      // Use scrollTo with GPU acceleration via requestAnimationFrame
      window.scrollTo(0, position);

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }

  // Smooth scroll anchor links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    
    if (target) {
      e.preventDefault();
      smoothScroll(target, 600);
      window.history.pushState(null, null, href);
    }
  }, { passive: false });

  // Optimize paint performance during scroll
  let paintScheduled = false;
  const scrollTargets = document.querySelectorAll('.card, .service-box, .home-section');

  window.addEventListener('scroll', () => {
    if (!paintScheduled) {
      paintScheduled = true;
      requestAnimationFrame(() => {
        scrollTargets.forEach(el => {
          const rect = el.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          
          // GPU acceleration for visible elements
          if (isInViewport) {
            el.style.willChange = 'transform';
            el.style.transform = 'translateZ(0)';
          } else {
            el.style.willChange = 'auto';
            el.style.transform = 'none';
          }
        });
        paintScheduled = false;
      });
    }
  }, { passive: true });

  // Scroll position tracking for CSS
  let lastScrollY = 0;
  let scrollTicking = false;

  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY || window.pageYOffset;

    if (!scrollTicking) {
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--scroll-position', `${lastScrollY}px`);
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true, capture: false });

  // Reduce motion for accessibility
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.style.scrollBehavior = 'auto';
    document.documentElement.classList.add('reduce-motion');
  } else {
    // Use CSS scroll-behavior for better performance
    if (CSS.supports('scroll-behavior', 'smooth')) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }

  // Expose scroll API
  window.D_LABS_SCROLL = {
    smoothScroll,
    easeInOutCubic,
    getScrollPosition: () => lastScrollY
  };
})();
