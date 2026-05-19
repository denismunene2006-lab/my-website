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

  // Get all elements that should be animated
  function getAnimatedElements(){
    return document.querySelectorAll('section, h1, h2, h3, h4, h5, h6, p, img, button, a.btn, .button, li, article, .card, .feature, .testimonial, [data-animate]');
  }

  // Mark elements for animation
  function markAnimatedElements(){
    getAnimatedElements().forEach(el => {
      if(!el.classList.contains(ANIMATION_CLASS)){
        el.classList.add(ANIMATION_CLASS);
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
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
          entry.target.style.transform = 'translateY(0)';
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
        el.style.transform = 'translateY(30px)';
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
