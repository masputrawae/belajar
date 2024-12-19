//btn nav menu
const btnMenuOpen = document.getElementById('btnMenuOpen');
const btnMenuClose = document.getElementById('btnMenuClose');
//nav menu
const navMenuMobile = document.getElementById('navMenuMobile');

btnMenuOpen.addEventListener('click', () => navMenuMobile.classList.add('nav__menu--open'));
btnMenuClose.addEventListener('click', () => navMenuMobile.classList.remove('nav__menu--open'));

let resizeTimeout;
const debounceResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 100);
};
const handleResize = () => {
    if (window.innerWidth >= 1024 && navMenuMobile.classList.contains('nav__menu--open')) {
        navMenuMobile.classList.remove('nav__menu--open');
    }
};
window.addEventListener('resize', debounceResize);