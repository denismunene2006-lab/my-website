(function () {
    var body = document.body;

    if (!body) {
        return;
    }

    var page = body.dataset.page || 'home';
    var isHomePage = page === 'home';

    var navItems = [
        { key: 'home', label: 'Home', icon: 'fa-house', homeHref: '#home-page', innerHref: 'index.html' },
        { key: 'about', label: 'About', icon: 'fa-user', homeHref: '#about-page', innerHref: 'about.html' },
        { key: 'projects', label: 'Projects', icon: 'fa-briefcase', homeHref: '#projects-page', innerHref: 'projects.html' },
        { key: 'services', label: 'Services', icon: 'fa-layer-group', homeHref: '#services-page', innerHref: 'services.html' },
        { key: 'blog', label: 'Blog', icon: 'fa-blog', homeHref: '#blog-page', innerHref: 'blog.html' },
        { key: 'contact', label: 'Contact', icon: 'fa-envelope', homeHref: '#contact-page', innerHref: 'contact.html' }
    ];

    var footerLinks = isHomePage
        ? [
            { label: 'Services', href: '#services-page' },
            { label: 'Projects', href: '#projects-page' },
            { label: 'Blog', href: '#blog-page' }
        ]
        : [
            { label: 'Services', href: 'services.html' },
            { label: 'Projects', href: 'projects.html' },
            { label: 'Blog', href: 'blog.html' }
        ];

    function renderHeader() {
        var navMarkup = navItems.map(function (item) {
            var href = isHomePage ? item.homeHref : item.innerHref;
            var isActive = item.key === page;
            var activeClass = isActive ? ' active' : '';
            var ariaCurrent = isActive ? ' aria-current="page"' : '';

            return [
                '            <li>',
                '                <a href="' + href + '" class="nav-link' + activeClass + '"' + ariaCurrent + '>',
                '                    <i class="fa-solid ' + item.icon + ' nav-icon" aria-hidden="true"></i>',
                '                    <span class="nav-label">' + item.label + '</span>',
                '                </a>',
                '            </li>'
            ].join('\n');
        }).join('\n');

        return [
            '<header>',
            '    <div class="logo">',
            '        <img src="images/name.jpeg" alt="D-LABS" width="1024" height="559" decoding="async">',
            '    </div>',
            '    <nav class="main-nav" aria-label="Primary navigation">',
            '        <ul>',
            navMarkup,
            '        </ul>',
            '    </nav>',
            '</header>'
        ].join('\n');
    }

    function renderFooter() {
        var quickLinksMarkup = footerLinks.map(function (link) {
            return '            <p><a href="' + link.href + '">' + link.label + '</a></p>';
        }).join('\n');

        return [
            '<footer class="site-footer">',
            '    <div class="footer-inner">',
            '        <div class="footer-brand">',
            '            <h2>D-LABS</h2>',
            '            <p>Web development, redesign, and digital support for businesses that want a stronger online presence.</p>',
            '        </div>',
            '',
            '        <div class="footer-contact">',
            '            <h3>Contact</h3>',
            '            <p><a href="mailto:dlabs.ke@gmail.com">dlabs.ke@gmail.com</a></p>',
            '            <p><a href="tel:+254710236087">+254 710 236 087</a></p>',
            '            <p><a href="https://wa.me/254710236087" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></p>',
            '        </div>',
            '',
            '        <div class="footer-links">',
            '            <h3>Quick Links</h3>',
            quickLinksMarkup,
            '        </div>',
            '    </div>',
            '    <p class="footer-note">&copy; 2026 D-LABS | All Rights Reserved</p>',
            '</footer>'
        ].join('\n');
    }

    function replaceSlot(selector, html) {
        var slot = document.querySelector(selector);

        if (!slot) {
            return;
        }

        slot.insertAdjacentHTML('afterend', html);
        slot.remove();
    }

    replaceSlot('[data-site-header]', renderHeader());
    replaceSlot('[data-site-footer]', renderFooter());
})();
