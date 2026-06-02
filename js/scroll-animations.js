/* Smooth scroll reveal animations - fade in elements as they come into view */
(function(){
  // Long-form article pages use a lighter reveal path in main.js to avoid mobile blank states.
  if(document.querySelector('.article-page')){
    return;
  }

  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
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
  const ANIMATION_THRESHOLD = 0.05;
  const ANIMATION_ROOT_MARGIN = '0px 0px -8% 0px';
  const ANIMATED_SELECTOR = '.home-photo-content, .home-section, .contact-form, .contact-buttons, .card, .service-box, .faq-item, .testimonial-card, .contact-detail-card, .blog-placeholder, [data-animate]';
  const OFFSCREEN_TRANSFORM = 'translate3d(0, 48px, 0)';

  function getAnimatedElements(){
    return Array.from(document.querySelectorAll(ANIMATED_SELECTOR)).filter(el => !el.classList.contains('no-scroll-reveal'));
  }

  function getHiddenTransform(el){
    if (el.dataset.animate === 'left') return 'translate3d(-80px, 0, 0)';
    if (el.dataset.animate === 'right') return 'translate3d(80px, 0, 0)';
    if (el.dataset.animate === 'zoom') return 'translate3d(0, 40px, 0) scale(0.92)';
    if (el.dataset.animate === 'flip') return 'perspective(1000px) translate3d(0, 50px, 0) rotateX(-15deg)';
    if (el.dataset.animate === 'tilt') return 'translate3d(0, 40px, 0) rotate(-3deg)';
    return OFFSCREEN_TRANSFORM;
  }

  function getVisibleTransform(){
    return 'translate3d(0, 0, 0) scale(1)';
  }

  // Mark elements for animation
  function markAnimatedElements(){
    getAnimatedElements().forEach((el) => {
      if(!el.classList.contains(ANIMATION_CLASS)){
        // Professional Auto-Reveal: If no animation is set, cards in grids 
        // get alternating directions for a high-end agency look.
        if ((el.classList.contains('card') || el.classList.contains('service-box')) && !el.dataset.animate) {
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children).filter(c => c.matches(ANIMATED_SELECTOR));
            const index = siblings.indexOf(el);
            const patterns = ['left', 'zoom', 'right', 'flip'];
            el.dataset.animate = patterns[index % patterns.length];
          }
        }

        el.classList.add(ANIMATION_CLASS);
        el.style.opacity = '0';
        el.style.backfaceVisibility = 'hidden';
        el.style.transform = getHiddenTransform(el);
        el.style.transition = 'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 1000ms cubic-bezier(0.22, 1, 0.36, 1), filter 600ms ease';
      }
    });
  }

  // Intersection observer callback
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !entry.target.classList.contains(REVEALED_CLASS)){
        const siblingIndex = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
        const delay = Math.min(Math.max(siblingIndex, 0) * 80, 400); // Faster stagger for snappier feel
        
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
