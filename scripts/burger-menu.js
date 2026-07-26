document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.querySelector('.header__menu');
    const burgerMenu = document.getElementById('burgerMenu');
    const closeBtn = burgerMenu?.querySelector('.burger-menu__close');
    const overlay = burgerMenu?.querySelector('.burger-menu__overlay');
    const body = document.body;

    if (!burgerBtn || !burgerMenu) return;

    function openMenu() {
        burgerMenu.classList.add('is-open');
        burgerMenu.setAttribute('aria-hidden', 'false');
        burgerBtn.setAttribute('aria-expanded', 'true');
        body.classList.add('menu-open');

        setTimeout(() => closeBtn?.focus(), 400);
    }

    function closeMenu() {
        burgerMenu.classList.remove('is-open');
        burgerMenu.setAttribute('aria-hidden', 'true');
        burgerBtn.setAttribute('aria-expanded', 'false');
        body.classList.remove('menu-open');
        burgerBtn.focus();
    }

    burgerBtn.addEventListener('click', function () {
        if (burgerMenu.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    closeBtn?.addEventListener('click', closeMenu);
    overlay?.addEventListener('click', closeMenu);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && burgerMenu.classList.contains('is-open')) {
            closeMenu();
        }
    });

    burgerMenu.querySelectorAll('.burger-menu__item, .burger-menu__link, .burger-menu__phone').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});