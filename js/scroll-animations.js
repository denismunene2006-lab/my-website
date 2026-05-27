/* Smooth scroll reveal animations - fade in elements as they come into view */
(function(){
  // Long-form article pages use a lighter reveal path in main.js to avoid mobile blank states.
  if(document.querySelector('.article-page')){
    return;
  }

  // Check if browser supports IntersectionObserver
  if(!('IntersectionObserver' in window)){
    console.log('IntersectionObserver not supported, skipping scroll animations');
    return;
  }

  // Configuration
  const ANIMATION_CLASS = 'scroll-reveal';
  const REVEALED_CLASS = 'revealed';
  const ANIMATION_THRESHOLD = 0.12;
  const ANIMATION_ROOT_MARGIN = '0px 0px -4% 0px';
  const ANIMATED_SELECTOR = '.home-photo-content, .home-section, .contact-form, .contact-buttons, .card, .service-box, .faq-item, .testimonial-card, .contact-detail-card, .blog-placeholder, [data-animate]';
  const OFFSCREEN_TRANSFORM = 'translate3d(0, 24px, 0)';
  let lastScrollY = window.scrollY;
  let lastScrollTime = performance.now();
  let isFastScrolling = false;

  function updateScrollSpeedState(){
    const now = performance.now();
    const distance = Math.abs(window.scrollY - lastScrollY);
    const elapsed = Math.max(now - lastScrollTime, 16);
    const velocity = distance / elapsed;
    isFastScrolling = velocity > 1.1;
    lastScrollY = window.scrollY;
    lastScrollTime = now;
  }

  // Get all elements that should be animated
  function getHiddenTransform(el){
    return el.classList.contains('grow-in') || el.dataset.grow === 'true'
      ? 'translate3d(0, 24px, 0) scale(0.98)'
      : OFFSCREEN_TRANSFORM;
  }

  function getVisibleTransform(){
    return 'translate3d(0, 0, 0) scale(1)';
  }

  // Mark elements for animation
  function markAnimatedElements(){
    getAnimatedElements().forEach(el => {
      if(!el.classList.contains(ANIMATION_CLASS)){
        el.classList.add(ANIMATION_CLASS);
        el.style.opacity = '0';
        el.style.transform = getHiddenTransform(el);
        el.style.transition = 'opacity 420ms cubic-bezier(0.22, 1, 0.36, 1), transform 520ms cubic-bezier(0.22, 1, 0.36, 1)';
      }
    });
  }

  // Intersection observer callback
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !entry.target.classList.contains(REVEALED_CLASS)){
        const siblingIndex = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
        const delay = isFastScrolling ? 0 : Math.min(Math.max(siblingIndex, 0) * 28, 120);
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = getVisibleTransform(entry.target);
          entry.target.classList.add(REVEALED_CLASS);
          observer.unobserve(entry.target);
        }, delay);
      }
    });
  };

  // Create observer
  const observer = new IntersectionObserver(observerCallback, {
    threshold: ANIMATION_THRESHOLD,
    rootMargin: ANIMATION_ROOT_MARGIN
  });

  window.addEventListener('scroll', updateScrollSpeedState, { passive: true });

  // Initialize on page load
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', () => {
      markAnimatedElements();
      getAnimatedElements().forEach(el => observer.observe(el));
    });
  } else {
    markAnimatedElements();
    getAnimatedElements().forEach(el => observer.observe(el));
  }

  // Expose observer for manual control if needed
  window.scrollAnimationObserver = observer;
})();
