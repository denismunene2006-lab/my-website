document.addEventListener('DOMContentLoaded', () => {
    const whatsappNumber = '254710236087';
    const whatsappPrefill = 'Hey D-LABS, I am interested in your web services. Could we discuss my project?';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappPrefill)}`;
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
        '.contact-btn, .service-cta, .btn, .btn-primary, .btn-secondary, .section-jump-link, .floating-whatsapp, .whatsapp-prompt__action'
    );

    document.addEventListener('click', (event) => {
        const interactive = event.target.closest('a, button');

        if (!interactive || !isTrackableAction(interactive) || interactive.classList.contains('whatsapp-prompt__close')) {
            return;
        }

        const href = interactive.getAttribute('href') || '';
        const label = getActionLabel(interactive);

        let actionType = 'cta_click';

        if (interactive.matches('.contact-btn, .floating-whatsapp, .whatsapp-prompt__action') || href.includes('wa.me')) {
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
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
        const floatingButton = document.querySelector('.floating-whatsapp') || (() => {
            const button = document.createElement('a');
            button.className = 'floating-whatsapp';
            button.href = whatsappLink;
            button.target = '_blank';
            button.rel = 'noopener noreferrer';
            button.setAttribute('aria-label', 'Chat on WhatsApp');
            button.innerHTML = iconMarkup('whatsapp');
            document.body.appendChild(button);
            return button;
        })();

        floatingButton.href = whatsappLink;
        floatingButton.target = '_blank';
        floatingButton.setAttribute('aria-label', 'Chat on WhatsApp');
        floatingButton.setAttribute('rel', 'noopener noreferrer');
        floatingButton.hidden = true;
        floatingButton.classList.add('floating-whatsapp--hidden');

        const hideFloatingButton = () => {
            floatingButton.hidden = true;
            floatingButton.classList.remove('floating-whatsapp--visible');
            floatingButton.classList.add('floating-whatsapp--hidden');
        };

        const showFloatingButton = () => {
            floatingButton.hidden = false;
            floatingButton.classList.remove('floating-whatsapp--hidden');
            floatingButton.classList.add('floating-whatsapp--visible');
        };

        const prompt = document.createElement('div');
        prompt.className = 'whatsapp-prompt whatsapp-prompt--hidden';
        prompt.setAttribute('role', 'status');
        prompt.hidden = true;
        prompt.innerHTML = `
            <button class="whatsapp-prompt__close" type="button" aria-label="Dismiss WhatsApp prompt">&times;</button>
            <div class="whatsapp-prompt__icon" aria-hidden="true">
                ${iconMarkup('whatsapp')}
            </div>
            <div class="whatsapp-prompt__content">
                <p class="whatsapp-prompt__title">Need a quick reply?</p>
                <p class="whatsapp-prompt__text">Tap below and start your project chat with D-LABS in one click.</p>
            </div>
            <a class="whatsapp-prompt__action" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">
                Chat now
            </a>
        `;

        document.body.appendChild(prompt);

        let promptDismissed = false;
        let footerInView = false;
        let hasUserScrolled = false;

        const hidePrompt = () => {
            prompt.hidden = true;
            prompt.classList.remove('whatsapp-prompt--visible');
            prompt.classList.add('whatsapp-prompt--hidden');
        };

        const showPrompt = () => {
            prompt.hidden = false;
            prompt.classList.remove('whatsapp-prompt--hidden');
            prompt.classList.add('whatsapp-prompt--visible');
        };

        const updatePromptVisibility = () => {
            if (hasUserScrolled && footerInView && !promptDismissed) {
                document.body.classList.add('footer-whatsapp-active');
                showFloatingButton();
                showPrompt();
                return;
            }

            document.body.classList.remove('footer-whatsapp-active');
            hideFloatingButton();
            hidePrompt();
        };

        const closeButton = prompt.querySelector('.whatsapp-prompt__close');
        closeButton.addEventListener('click', () => {
            promptDismissed = true;
            hideFloatingButton();
            hidePrompt();
        });

        hideFloatingButton();
        hidePrompt();

        const footer = document.querySelector('.site-footer') || document.querySelector('footer');
        const updateFooterZoneState = () => {
            if (!footer) {
                footerInView = false;
                updatePromptVisibility();
                return;
            }

            const footerRect = footer.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const activationLine = viewportHeight - Math.min(120, viewportHeight * 0.18);

            footerInView = footerRect.top <= activationLine && footerRect.bottom >= 80;
            updatePromptVisibility();
        };

        window.addEventListener('scroll', () => {
            if (window.scrollY > 120) {
                hasUserScrolled = true;
            }
            updateFooterZoneState();
        }, { passive: true });
        window.addEventListener('resize', updateFooterZoneState);

        // Keep the prompt hidden on load; only actual scrolling can trigger it.
        document.body.classList.remove('footer-whatsapp-active');
        updateFooterZoneState();

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
