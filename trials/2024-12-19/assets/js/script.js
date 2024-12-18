const btnMenuOpen = document.getElementById('btnMenuOpen');
const btnMenuClose = document.getElementById('btnMenuClose');
const navMenu = document.getElementById('navMenuMobile');

let resizeTimeout;
const debounceResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 100);
};

btnMenuOpen.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
        navMenu.classList.add('header__nav-menu--open');
    }
});

btnMenuClose.addEventListener('click', () => {
    navMenu.classList.remove('header__nav-menu--open');
});
const handleResize = () => {
    if (window.innerWidth >= 1024) {
        navMenu.classList.remove('header__nav-menu--open');
    }
};

window.addEventListener('resize', debounceResize);