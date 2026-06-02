// Modern smooth scrolling with Lenis for high-performance, buttery scroll experience
(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log('Smooth scroll disabled: user prefers reduced motion');
    return;
  }

  // Dynamically import Lenis
  const initSmoothScroll = async () => {
    try {
      // Check if Lenis is already loaded
      if (window.Lenis) {
        setupLenis(window.Lenis);
        return;
      }

      // Load Lenis from node_modules via unpkg as fallback
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js';
      script.async = true;
      
      script.onload = () => {
        if (window.Lenis) {
          setupLenis(window.Lenis);
        }
      };
      
      script.onerror = () => {
        console.log('Lenis failed to load, using native smooth scroll');
      };
      
      document.head.appendChild(script);
    } catch (error) {
      console.log('Error initializing smooth scroll:', error);
    }
  };

  const setupLenis = (LenisConstructor) => {
    // Initialize Lenis smooth scroll
    const lenis = new LenisConstructor({
      duration: 1.2,
      easing: (t) => {
        // Custom easing: smooth acceleration and deceleration
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      touchInertiaMultiplier: 1.5,
      infinite: false,
    });

    // Mark html element with lenis class for CSS support
    document.documentElement.classList.add('lenis', 'enhanced-scroll');
    document.documentElement.style.scrollBehavior = 'auto';

    // Sync Lenis with RAF for smooth animation
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Update scroll progress indicator
    lenis.on('scroll', ({ velocity, direction, progress }) => {
      document.documentElement.style.setProperty('--scroll-progress', progress);
      document.documentElement.style.setProperty('--scroll-velocity', Math.min(Math.abs(velocity) / 1000, 1));
      
      // Add scrolling class for scroll-dependent styles
      if (velocity !== 0) {
        document.body.classList.add('is-scrolling');
      } else {
        document.body.classList.remove('is-scrolling');
      }
    });

    // Store lenis instance globally for external access
    window.lenisInstance = lenis;

    // Log success
    console.log('[v0] Lenis smooth scrolling initialized');
  };

  // Initialize when DOM is ready or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
  } else {
    initSmoothScroll();
  }

  // Expose global function to update scroll position
  window.scrollToElement = (selector, options = {}) => {
    const element = typeof selector === 'string' 
      ? document.querySelector(selector) 
      : selector;
    
    if (!element) return;

    if (window.lenisInstance) {
      window.lenisInstance.scrollTo(element, {
        offset: options.offset || 80,
        duration: options.duration || 1.2,
        ...options
      });
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
})();
