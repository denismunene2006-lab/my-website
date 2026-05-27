document.addEventListener('DOMContentLoaded', () => {
    const tawkEmbedUrl = window.DLabsTawkEmbedUrl
        || document.body?.dataset?.tawkEmbedUrl
        || 'https://embed.tawk.to/6a145cc50a1a801c31cd5819/1jpfokp7b';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isArticlePage = Boolean(document.querySelector('.article-page'));
    const tawkActionQueue = [];
    let tawkLoadHookInstalled = false;
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

    const splitMessageForTawk = (message, chunkSize = 220) => {
        const normalizedMessage = message.trim();

        if (!normalizedMessage) {
            return [];
        }

        const chunks = [];

        for (let index = 0; index < normalizedMessage.length; index += chunkSize) {
            chunks.push(normalizedMessage.slice(index, index + chunkSize));
        }

        return chunks;
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

    const flushQueuedTawkActions = () => {
        while (tawkActionQueue.length > 0) {
            const action = tawkActionQueue.shift();
            action();
        }
    };

    const ensureTawkLoadHook = () => {
        if (tawkLoadHookInstalled) {
            return;
        }

        tawkLoadHookInstalled = true;
        window.Tawk_API = window.Tawk_API || {};
        const previousOnLoad = window.Tawk_API.onLoad;

        window.Tawk_API.onLoad = function onLoad() {
            if (typeof previousOnLoad === 'function') {
                previousOnLoad();
            }

            flushQueuedTawkActions();
        };
    };

    const runWhenTawkReady = (action) => {
        if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
            action();
            return;
        }

        tawkActionQueue.push(action);
        ensureTawkLoadHook();
        loadTawkWidget();
    };

    const sendProjectDetailsToTawk = ({ name, email, message }) => {
        const chunks = splitMessageForTawk(message);

        runWhenTawkReady(() => {
            const tawkAttributes = {
                name,
                email,
                source_page: window.location.pathname,
                enquiry_type: 'project-contact-form',
            };

            if (chunks.length > 0) {
                chunks.forEach((chunk, index) => {
                    tawkAttributes[`project_message_${index + 1}`] = chunk;
                });
            }

            if (window.Tawk_API && typeof window.Tawk_API.setAttributes === 'function') {
                window.Tawk_API.setAttributes(tawkAttributes, () => {});
            } else if (window.Tawk_API) {
                window.Tawk_API.visitor = {
                    name,
                    email,
                };
            }

            if (window.Tawk_API && typeof window.Tawk_API.addEvent === 'function') {
                window.Tawk_API.addEvent('project-contact-form', {
                    name,
                    email,
                    message: chunks[0] || '',
                    message_parts: String(chunks.length),
                }, () => {});
            }

            if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
                window.Tawk_API.maximize();
            }
        });
    };

    const sendProjectDetailsToWhatsApp = ({ name, message }) => {
        const whatsappNumber = '254710236087';
        const prewrittenMessage = [
            `Hello D-LABS. I am ${name}.`,
            'I have a project inquiry.',
            `Message: ${message}`,
        ].join('\n');
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prewrittenMessage)}`;

        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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

        if (href.includes('wa.me')) {
            actionType = 'whatsapp_click';
        } else if (interactive.matches('.contact-btn, .floating-tawk, .tawk-launcher, .open-tawk, .tawk-chat-link')) {
            actionType = 'tawk_click';
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
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameField = contactForm.querySelector('input[type="text"]');
            const messageField = contactForm.querySelector('textarea');

            const name = nameField ? nameField.value.trim() : '';
            const message = messageField ? messageField.value.trim() : '';

            if (!name || !message) {
                return;
            }

            trackConversion('contact_form_submit', {
                action_label: 'Contact form submit',
                destination: window.location.pathname,
                visitor_name: name,
            });

            sendProjectDetailsToWhatsApp({ name, message });
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

    const initScrollProgress = () => {
        if (document.getElementById('scroll-progress')) {
            return;
        }

        const progress = document.createElement('div');
        progress.id = 'scroll-progress';
        progress.setAttribute('aria-hidden', 'true');
        document.body.appendChild(progress);

        let ticking = false;
        let scrollingClassTimer;
        let lastScrollY = window.scrollY;
        let lastTimestamp = performance.now();

        const updateProgress = () => {
            const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
            const ratio = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
            const timestamp = performance.now();
            const distance = Math.abs(window.scrollY - lastScrollY);
            const elapsed = Math.max(timestamp - lastTimestamp, 16);
            const velocity = Math.min(distance / elapsed, 2.4);

            document.documentElement.style.setProperty('--scroll-progress', ratio.toFixed(4));
            document.documentElement.style.setProperty('--scroll-y', `${window.scrollY.toFixed(1)}px`);
            document.documentElement.style.setProperty('--scroll-velocity', velocity.toFixed(3));

            lastScrollY = window.scrollY;
            lastTimestamp = timestamp;
            ticking = false;
        };

        const onScroll = () => {
            document.body.classList.add('is-scrolling');
            window.clearTimeout(scrollingClassTimer);
            scrollingClassTimer = window.setTimeout(() => {
                document.body.classList.remove('is-scrolling');
                document.documentElement.style.setProperty('--scroll-velocity', '0');
            }, 140);

            if (!ticking) {
                window.requestAnimationFrame(updateProgress);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        onScroll();
    };

    const initMagicalSmoothScroll = () => {
        if (prefersReducedMotion) {
            return;
        }

        document.documentElement.classList.add('enhanced-scroll');
    };

    const openTawkChat = () => {
        runWhenTawkReady(() => {
            if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
                window.Tawk_API.maximize();
            }
        });

        return true;
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
                '.home-photo-content, .home-section, .contact-form, .contact-buttons, .skills li'
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
        initScrollProgress();
        initMagicalSmoothScroll();

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
