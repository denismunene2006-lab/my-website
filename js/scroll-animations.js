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
  const ANIMATION_THRESHOLD = 0.1;
  const ANIMATION_ROOT_MARGIN = '0px 0px -80px 0px';
  const SIDE_REVEAL_SELECTOR = '.card, .service-box, .faq-item, .testimonial-card, .contact-detail-card, .blog-placeholder';
  let sideRevealIndex = 0;

  // Get all elements that should be animated
  function getAnimatedElements(){
    return document.querySelectorAll('section, h1, h2, h3, h4, h5, h6, p, img, button:not(.floating-tawk):not(.tawk-launcher):not(.open-tawk):not(.tawk-chat-link), a.btn, .button, li, article, .card, .feature, .testimonial, [data-animate]');
  }

  function isSideRevealElement(el){
    return el.matches(SIDE_REVEAL_SELECTOR);
  }

  function getRevealDirection(el){
    if (!isSideRevealElement(el)) {
      return 'up';
    }

    if (!el.dataset.revealDirection) {
      el.dataset.revealDirection = sideRevealIndex % 2 === 0 ? 'left' : 'right';
      sideRevealIndex += 1;
    }

    return el.dataset.revealDirection;
  }

  function getHiddenTransform(el){
    const wantsGrow = el.classList.contains('grow-in') || el.dataset.grow === 'true';
    const direction = getRevealDirection(el);

    if (direction === 'left') {
      return wantsGrow ? 'translateX(-72px) scale(0.98)' : 'translateX(-72px)';
    }

    if (direction === 'right') {
      return wantsGrow ? 'translateX(72px) scale(0.98)' : 'translateX(72px)';
    }

    return wantsGrow ? 'translateY(18px) scale(0.98)' : 'translateY(30px)';
  }

  function getVisibleTransform(el){
    const direction = getRevealDirection(el);

    if (direction === 'left' || direction === 'right') {
      return 'translateX(0) scale(1)';
    }

    return 'translateY(0)';
  }

  // Mark elements for animation
  function markAnimatedElements(){
    getAnimatedElements().forEach(el => {
      if(!el.classList.contains(ANIMATION_CLASS)){
        el.classList.add(ANIMATION_CLASS);
        el.style.opacity = '0';
        el.style.transform = getHiddenTransform(el);
        el.style.transition = 'opacity 600ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)';
      }
    });
  }

  // Intersection observer callback
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !entry.target.classList.contains(REVEALED_CLASS)){
        // Add small delay for staggered effect
        const delay = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target) * 50;
        
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = getVisibleTransform(entry.target);
          entry.target.classList.add(REVEALED_CLASS);
          observer.unobserve(entry.target);
        }, Math.min(delay, 300));
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

  // Handle dynamically added content
  const mutationObserver = new MutationObserver(() => {
    getAnimatedElements().forEach(el => {
      if(!el.classList.contains(ANIMATION_CLASS)){
        el.classList.add(ANIMATION_CLASS);
        el.style.opacity = '0';
        el.style.transform = getHiddenTransform(el);
        el.style.transition = 'opacity 600ms cubic-bezier(0.34, 1.56, 0.64, 1), transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)';
        observer.observe(el);
      }
    });
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false
  });

  // Expose observer for manual control if needed
  window.scrollAnimationObserver = observer;
})();
