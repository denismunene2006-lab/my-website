document.addEventListener('DOMContentLoaded', () => {
    const whatsappNumber = '254710236087';
    const whatsappPrefill = 'Hey D-LABS, I am interested in your web services. Could we discuss my project?';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappPrefill)}`;
    const isContactPage = window.location.pathname.toLowerCase().endsWith('contact.html');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealTargets = document.querySelectorAll(
        '.hero-content, .home-photo-content, .home-section, .page h1, .page h2, .card, .service-box, .contact-form, .contact-buttons, .skills li, .blog-placeholder'
    );

    if (prefersReducedMotion) {
        revealTargets.forEach((element) => element.classList.add('show'));
    } else {
        revealTargets.forEach((element, index) => {
            element.classList.add('hidden');
            const stagger = Math.min((index % 10) * 85, 680);
            element.style.setProperty('--reveal-delay', `${stagger}ms`);
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

        revealTargets.forEach((element) => observer.observe(element));
    }

    const floatingButton = document.querySelector('.floating-whatsapp') || (() => {
        const button = document.createElement('a');
        button.className = 'floating-whatsapp';
        button.href = whatsappLink;
        button.target = '_blank';
        button.rel = 'noopener noreferrer';
        button.setAttribute('aria-label', 'Chat on WhatsApp');
        button.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(button);
        return button;
    })();

    floatingButton.href = whatsappLink;
    floatingButton.target = '_blank';
    floatingButton.setAttribute('aria-label', 'Chat on WhatsApp');
    floatingButton.setAttribute('rel', 'noopener noreferrer');

    const promptSeenKey = 'dlabs-whatsapp-prompt-seen';

    if (isContactPage || !sessionStorage.getItem(promptSeenKey)) {
        const prompt = document.createElement('div');
        prompt.className = 'whatsapp-prompt';
        prompt.setAttribute('role', 'status');
        const closeButtonMarkup = isContactPage
            ? ''
            : '<button class="whatsapp-prompt__close" type="button" aria-label="Dismiss WhatsApp prompt">&times;</button>';
        prompt.innerHTML = `
            ${closeButtonMarkup}
            <div class="whatsapp-prompt__icon" aria-hidden="true">
                <i class="fab fa-whatsapp"></i>
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

        const closePrompt = () => {
            prompt.classList.add('whatsapp-prompt--hidden');
            sessionStorage.setItem(promptSeenKey, 'true');
        };

        if (isContactPage) {
            prompt.classList.add('whatsapp-prompt--visible');
        } else {
            const closeButton = prompt.querySelector('.whatsapp-prompt__close');
            closeButton.addEventListener('click', closePrompt);

            window.setTimeout(() => {
                prompt.classList.add('whatsapp-prompt--visible');
            }, 900);

            window.setTimeout(() => {
                if (!prompt.classList.contains('whatsapp-prompt--hidden')) {
                    closePrompt();
                }
            }, 5000);
        }
    }

    const hero = document.querySelector('.hero');

    if (hero) {
        hero.classList.add('hero-3d');

        window.addEventListener('scroll', () => {
            const offset = window.scrollY * 0.12;
            hero.style.setProperty('--hero-shift', `${offset}px`);
        }, { passive: true });
    }
});