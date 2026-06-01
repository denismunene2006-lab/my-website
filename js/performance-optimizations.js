/* Ultra-Optimized Performance for 60fps Scrolling and Fast Rendering */
(function() {
  'use strict';

  // Use RequestAnimationFrame for 60fps scrolling
  let ticking = false;
  let scrollY = 0;
  let lastScrollY = 0;
  let scrollVelocity = 0;

  function updateScrollValues() {
    scrollY = window.scrollY || window.pageYOffset;
    scrollVelocity = Math.abs(scrollY - lastScrollY);
    lastScrollY = scrollY;
    
    // Use CSS custom properties for efficient updates
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
    document.documentElement.style.setProperty('--scroll-velocity', scrollVelocity);
    
    ticking = false;
  }

  // Passive scroll listener for 60fps performance
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollValues);
      ticking = true;
    }
  }, { passive: true, capture: false });

  // Optimized Intersection Observer for lazy loading
  function initIntersectionObserver() {
    if (!('IntersectionObserver' in window)) return;

    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.01
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.srcset = img.dataset.srcset || '';
            img.classList.add('image-loaded');
            imageObserver.unobserve(img);
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  }

  // Optimized font loading strategy
  function optimizeFontLoading() {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      }).catch(() => {
        // Fallback if fonts fail to load
        document.documentElement.classList.add('fonts-error');
      });
    }
  }

  // Efficient event delegation with passive listeners
  function setupEventOptimization() {
    // Use event delegation for better performance
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-action]');
      if (!target) return;
      // Minimal processing for clicks
    }, { passive: false, capture: false });

    // Passive touch events for scroll-jank prevention
    document.addEventListener('touchmove', () => {}, { passive: true });
    document.addEventListener('touchstart', () => {}, { passive: true });
  }

  // Debounce resize with minimal overhead
  function setupResizeOptimization() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        document.documentElement.style.setProperty('--viewport-width', `${window.innerWidth}px`);
        document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
      }, 150);
    }, { passive: true });
  }

  // Initialize optimizations on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initIntersectionObserver();
      optimizeFontLoading();
      setupEventOptimization();
      setupResizeOptimization();
    });
  } else {
    initIntersectionObserver();
    optimizeFontLoading();
    setupEventOptimization();
    setupResizeOptimization();
  }

  // Preload critical resources for next navigation
  function prefetchNextPage() {
    const links = document.querySelectorAll('a[data-prefetch]');
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        links.forEach(link => {
          const prefetch = document.createElement('link');
          prefetch.rel = 'prefetch';
          prefetch.href = link.href;
          document.head.appendChild(prefetch);
        });
      });
    }
  }

  // Monitor Core Web Vitals
  function monitorPerformance() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log(`[D-Labs Performance] ${entry.name}: ${entry.duration.toFixed(2)}ms`);
          }
        });
        observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
      } catch (e) {
        // PerformanceObserver not supported
      }
    }
  }

  // Initialize performance monitoring
  monitorPerformance();
  prefetchNextPage();

  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduce-motion');
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
  }

  // Expose utilities for debugging
  window.D_LABS_PERF = {
    scrollY: () => scrollY,
    scrollVelocity: () => scrollVelocity,
    isReducedMotion: prefersReducedMotion
  };
})();
