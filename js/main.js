document.addEventListener('DOMContentLoaded', () => {
    const tawkEmbedUrl = window.DLabsTawkEmbedUrl
        || document.body?.dataset?.tawkEmbedUrl
        || 'https://embed.tawk.to/6a145cc50a1a801c31cd5819/1jpfokp7b';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isArticlePage = Boolean(document.querySelector('.article-page'));
    const iconMarkup = (name, className = '') => {
        if (window.DLabsIcons && typeof window.DLabsIcons.renderMarkup === 'function') {
            return window.DLabsIcons.renderMarkup(name, className);
        }

        return `<span class="icon ${className}" aria-hidden="true"></span>`;
    };

    const trackConversion = (eventName, payload = {}) => {
        const eventPayload = {
            event: eventName,
            page_path: window.location.pathname,
            page_title: document.title,
            ...payload,
        };

        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, payload);
        }

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(eventPayload);
    };

    const getActionLabel = (element) => {
        const text = element.textContent.replace(/\s+/g, ' ').trim();
        const ariaLabel = element.getAttribute('aria-label');
        return ariaLabel || text || element.getAttribute('href') || element.tagName.toLowerCase();
    };

    const isTrackableAction = (element) => element.closest(
        '.contact-btn, .service-cta, .btn, .btn-primary, .btn-secondary, .section-jump-link, .floating-tawk, .tawk-launcher'
    );

    document.addEventListener('click', (event) => {
        const interactive = event.target.closest('a, button');

        if (!interactive || !isTrackableAction(interactive) || interactive.classList.contains('whatsapp-prompt__close')) {
            return;
        }

        const href = interactive.getAttribute('href') || '';
        const label = getActionLabel(interactive);

        let actionType = 'cta_click';

        if (interactive.matches('.contact-btn, .floating-tawk, .tawk-launcher, .open-tawk, .tawk-chat-link')) {
            actionType = 'tawk_click';
        } else if (href.includes('wa.me')) {
            actionType = 'whatsapp_click';
        } else if (href.startsWith('mailto:')) {
            actionType = 'email_click';
        } else if (href.startsWith('tel:')) {
            actionType = 'call_click';
        } else if (interactive.matches('.service-cta')) {
            actionType = 'service_cta_click';
        } else if (interactive.matches('.section-jump-link')) {
            actionType = 'section_link_click';
        } else if (interactive.tagName.toLowerCase() === 'button') {
            actionType = 'form_button_click';
        }

        trackConversion(actionType, {
            action_label: label,
            destination: href,
        });
    }, true);

    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            trackConversion('contact_form_submit', {
                action_label: 'Contact form submit',
                destination: window.location.pathname,
            });
        });
    }

    const scheduleNonCriticalTask = (callback) => {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(callback, { timeout: 1500 });
            return;
        }

        const runAfterLoad = () => window.setTimeout(callback, 1);

        if (document.readyState === 'complete') {
            runAfterLoad();
            return;
        }

        window.addEventListener('load', runAfterLoad, { once: true });
    };

    const loadTawkWidget = () => {
        if (!tawkEmbedUrl) {
            console.warn('Tawk.to is not configured. Set window.DLabsTawkEmbedUrl or body[data-tawk-embed-url].');
            return;
        }

        if (window.Tawk_API && window.Tawk_API.__dlabsLoaded) {
            return;
        }

        window.Tawk_API = window.Tawk_API || {};
        window.Tawk_LoadStart = new Date();
        window.Tawk_API.__dlabsLoaded = true;

        const script = document.createElement('script');
        script.async = true;
        script.charset = 'UTF-8';
        script.crossOrigin = '*';
        script.src = tawkEmbedUrl;

        const firstScript = document.getElementsByTagName('script')[0];
        if (firstScript && firstScript.parentNode) {
            firstScript.parentNode.insertBefore(script, firstScript);
            return;
        }

        document.head.appendChild(script);
    };

    const openTawkChat = () => {
        if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
            window.Tawk_API.maximize();
            return true;
        }

        return false;
    };

    document.addEventListener('click', (event) => {
        const trigger = event.target.closest('.open-tawk, .floating-tawk, .tawk-launcher, .tawk-chat-link');

        if (!trigger) {
            return;
        }

        event.preventDefault();
        openTawkChat();
    }, true);

    const runAfterNextPaint = (callback) => {
        if ('requestAnimationFrame' in window) {
            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(callback);
            });
            return;
        }

        window.setTimeout(callback, 16);
    };

    if (!isArticlePage) {
        runAfterNextPaint(() => {
            const revealTargets = Array.from(document.querySelectorAll(
                '.home-photo-content, .home-section, .page h1, .page h2, .card, .service-box, .contact-form, .contact-buttons, .skills li, .blog-placeholder'
            ));

            if (prefersReducedMotion) {
                revealTargets.forEach((element) => element.classList.add('show'));
                return;
            }

            const initialViewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const revealStates = revealTargets.map((element, index) => ({
                element,
                stagger: Math.min((index % 10) * 85, 680),
                isInitiallyVisible: element.getBoundingClientRect().top < initialViewportHeight * 0.92,
            }));
            const deferredRevealTargets = [];

            revealStates.forEach(({ element, stagger, isInitiallyVisible }) => {
                if (isInitiallyVisible) {
                    element.classList.add('show');
                    return;
                }

                element.classList.add('hidden');
                element.style.setProperty('--reveal-delay', `${stagger}ms`);
                deferredRevealTargets.push(element);
            });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.18,
                rootMargin: '0px 0px -8% 0px',
            });

            deferredRevealTargets.forEach((element) => {
                observer.observe(element);
            });
        });
    }

    scheduleNonCriticalTask(() => {
        loadTawkWidget();

        if (!document.querySelector('.floating-tawk')) {
            const launcher = document.createElement('button');
            launcher.type = 'button';
            launcher.className = 'floating-tawk no-scroll-reveal';
            launcher.setAttribute('aria-label', 'Open live chat');
            launcher.innerHTML = iconMarkup('chat', 'floating-tawk__icon');
            document.body.appendChild(launcher);
        }

        const hero = document.querySelector('.hero');
        const canRunHeroParallax = hero
            && !prefersReducedMotion
            && window.matchMedia('(min-width: 768px)').matches
            && window.matchMedia('(pointer: fine)').matches;

        if (!canRunHeroParallax) {
            return;
        }

        hero.classList.add('hero-3d');
        let heroTicking = false;

        const updateHeroParallax = () => {
            const offset = window.scrollY * 0.12;
            hero.style.setProperty('--hero-shift', `${offset}px`);
            heroTicking = false;
        };

        window.addEventListener('scroll', () => {
            if (!heroTicking) {
                window.requestAnimationFrame(updateHeroParallax);
                heroTicking = true;
            }
        }, { passive: true });

        updateHeroParallax();
    });
});
