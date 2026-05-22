(function () {
    var iconPaths = {
        'arrow-left': '<path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path>',
        blog: '<path d="M7 3h8l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M15 3v5h5"></path><path d="M9 12h6"></path><path d="M9 16h8"></path>',
        briefcase: '<path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"></path><rect x="4" y="6" width="16" height="14" rx="2"></rect><path d="M4 11h16"></path>',
        brush: '<path d="M14 4l6 6"></path><path d="M6 16l8-8 4 4-8 8"></path><path d="M5 15c-1.7 0-3 1.4-3 3 0 .9.3 1.7.8 2.3.5.1 1 .2 1.5.2 2.1 0 3.7-1.2 3.7-3.4 0-.8-.2-1.5-.6-2.1"></path>',
        calendar: '<rect x="3" y="5" width="18" height="16" rx="2"></rect><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path>',
        check: '<path d="M5 12.5 10 17l9-10"></path>',
        code: '<path d="M9 18 3 12l6-6"></path><path d="m15 6 6 6-6 6"></path><path d="M13 4 11 20"></path>',
        'git-branch': '<path d="M7 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm10 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM7 11v6a3 3 0 0 0 3 3h4"></path><path d="M7 8h5a3 3 0 0 1 3 3v3"></path>',
        home: '<path d="M3 10.5 12 3l9 7.5"></path><path d="M5 9.5V20a1 1 0 0 0 1 1h4.5v-6h3v6H18a1 1 0 0 0 1-1V9.5"></path>',
        'laptop-code': '<rect x="4" y="5" width="16" height="11" rx="2"></rect><path d="M2 19h20"></path><path d="m10 9-2 2 2 2"></path><path d="m14 9 2 2-2 2"></path>',
        layers: '<path d="M12 4 3 8.5 12 13l9-4.5L12 4Z"></path><path d="M3 12.5 12 17l9-4.5"></path><path d="M3 16.5 12 21l9-4.5"></path>',
        mail: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path>',
        phone: '<path d="M6.6 3.8c.6-.6 1.6-.6 2.2 0l1.7 1.7c.6.6.6 1.6 0 2.2L9 9.4a15 15 0 0 0 5.6 5.6l1.7-1.5c.6-.6 1.6-.6 2.2 0l1.7 1.7c.6.6.6 1.6 0 2.2l-1.5 1.5c-.8.8-2 1.1-3.1.8A20.6 20.6 0 0 1 4.2 8.4c-.3-1.1 0-2.3.8-3.1Z"></path>',
        tag: '<path d="M20 10 10 20l-7-7V4h9Z"></path><path d="M7.5 8.5h.01"></path>',
        user: '<path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"></path><path d="M5 20a7 7 0 0 1 14 0"></path>',
        whatsapp: '<path d="M12 21a8.8 8.8 0 0 1-4.2-1.1L3.5 21l1.2-4A8.9 8.9 0 1 1 12 21Z"></path><path d="M9.2 8.7c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.2 1.2 3.4c.2.2 2.1 3.4 5.1 4.6 2.4.9 2.9.7 3.4.7s1.7-.7 1.9-1.4c.2-.7.2-1.3.2-1.4-.1-.1-.4-.2-.9-.4l-1.5-.8c-.2-.1-.5-.1-.7.1l-.6.8c-.2.2-.4.3-.8.1a11.8 11.8 0 0 1-3.5-3.1c-.3-.4 0-.6.2-.8l.5-.6c.2-.2.2-.4.3-.6 0-.2 0-.4-.1-.6Z"></path>',
        xmark: '<path d="m6 6 12 12"></path><path d="M18 6 6 18"></path>'
    };

    function getSvgMarkup(name) {
        var iconBody = iconPaths[name];

        if (!iconBody) {
            return '';
        }

        return [
            '<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">',
            iconBody,
            '</svg>'
        ].join('');
    }

    function renderMarkup(name, extraClass, label) {
        var classes = ['icon'];
        var ariaAttributes = label
            ? ' role="img" aria-label="' + label + '"'
            : ' aria-hidden="true"';

        if (extraClass) {
            classes.push(extraClass);
        }

        return '<span class="' + classes.join(' ') + '"' + ariaAttributes + '>' + getSvgMarkup(name) + '</span>';
    }

    function hydrate(root) {
        var scope = root && root.querySelectorAll ? root : document;
        var nodes = scope.querySelectorAll('[data-icon]');

        nodes.forEach(function (node) {
            var name = node.getAttribute('data-icon');

            if (!name || node.dataset.iconHydrated === 'true') {
                return;
            }

            if (!node.classList.contains('icon')) {
                node.classList.add('icon');
            }

            node.innerHTML = getSvgMarkup(name);
            node.dataset.iconHydrated = 'true';
        });
    }

    window.DLabsIcons = {
        hydrate: hydrate,
        renderMarkup: renderMarkup
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            hydrate(document);
        });
    } else {
        hydrate(document);
    }
})();
