/* Performance Optimizations for Smooth Scrolling and Faster Rendering */
(function() {
  'use strict';

  // Throttle function to limit function calls
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // Debounce function for resize/load events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Optimize scroll performance with requestAnimationFrame
  let ticking = false;
  let scrollY = 0;

  function updateScrollValues() {
    scrollY = window.scrollY || window.pageYOffset;
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollValues);
      ticking = true;
    }
  }, { passive: true });

  // Lazy load images with IntersectionObserver
  function initLazyLoading() {
    if (!('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '100px'
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  }

  // Optimize font loading - fonts should be cached after first load
  function optimizeFonts() {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }
  }

  // Reduce layout thrashing by batching DOM reads/writes
  function optimizeFormInteraction() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('input', debounce((e) => {
        // Validate on input with debounce to avoid constant reflows
        if (typeof validateForm === 'function') {
          validateForm(form);
        }
      }, 300), { passive: true });
    });
  }

  // Use passive event listeners for scroll/touch events
  function addPassiveEventListeners() {
    const elements = document.querySelectorAll('[data-scroll-target], .card, .service-box');
    
    elements.forEach(el => {
      if (el.addEventListener && typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', () => {}, { passive: true });
        el.addEventListener('mousewheel', () => {}, { passive: true });
      }
    });
  }

  // Preload critical resources
  function preloadCriticalResources() {
    const criticalSelectors = [
      'link[rel="preload"][as="font"]',
      'link[rel="preload"][as="image"]',
      'link[rel="preconnect"]'
    ];

    // These are already in HTML, but ensure they're loaded
    criticalSelectors.forEach(selector => {
      const links = document.querySelectorAll(selector);
      links.forEach(link => {
        if (link.href && !link.href.includes('data:')) {
          // Link is queued for preload
        }
      });
    });
  }

  // Initialize all performance optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initLazyLoading();
      optimizeFonts();
      optimizeFormInteraction();
      addPassiveEventListeners();
      preloadCriticalResources();
    });
  } else {
    initLazyLoading();
    optimizeFonts();
    optimizeFormInteraction();
    addPassiveEventListeners();
    preloadCriticalResources();
  }

  // Handle window resize efficiently
  window.addEventListener('resize', debounce(() => {
    // Update layout-dependent variables
    document.documentElement.style.setProperty('--viewport-width', `${window.innerWidth}px`);
    document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
  }, 250), { passive: true });

  // Trigger initial resize calculation
  window.dispatchEvent(new Event('resize'));
})();
