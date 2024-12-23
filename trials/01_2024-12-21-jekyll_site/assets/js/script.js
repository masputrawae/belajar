// Fungsi Buka Tutup Left Side
const btnLeftSideOpen = document.getElementById('btnLeftSideOpen');
const btnLeftSideClose = document.getElementById('btnLeftSideClose');
const desktopLeftSide = document.querySelector('.container');
const leftSide = document.querySelector('.leftside');
let mobileOpenListener, mobileCloseListener, desktopOpenListener;
function setEventListeners() {
    const isMobile = window.innerWidth <= 1024;
    if (mobileOpenListener) {
        btnLeftSideOpen.removeEventListener('click', mobileOpenListener);
    }
    if (mobileCloseListener) {
        btnLeftSideClose.removeEventListener('click', mobileCloseListener);
    }
    if (desktopOpenListener) {
        btnLeftSideOpen.removeEventListener('click', desktopOpenListener);
    }

    if (isMobile) {
        leftSide.classList.remove('leftside--open');
        mobileOpenListener = () => {
            leftSide.classList.add('leftside--open');
        };
        btnLeftSideOpen.addEventListener('click', mobileOpenListener);

        mobileCloseListener = () => {
            leftSide.classList.remove('leftside--open');
        };
        btnLeftSideClose.addEventListener('click', mobileCloseListener);
    } else {
        leftSide.classList.remove('leftside--open');
        desktopOpenListener = () => {
            desktopLeftSide.classList.toggle('leftside--open');
        };
        btnLeftSideOpen.addEventListener('click', desktopOpenListener);
    }
}
setEventListeners();
window.addEventListener('resize', () => {
    setEventListeners();
});