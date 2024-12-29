// MENU IN HEADER PAGE
const btnMenuOpen = document.getElementById('btnMenuOpen');
const btnMenuClose = document.getElementById('btnMenuClose');
const navMenu = document.querySelector('.page__header-nav--menu');
if (window.innerWidth <= 1024){
    btnMenuOpen.addEventListener('click', () => {
        navMenu.classList.add('open')
    });
    btnMenuClose.addEventListener('click', () => {
        navMenu.classList.remove('open')
    });
}
//