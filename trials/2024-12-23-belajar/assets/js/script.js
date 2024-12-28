// LEFT SIDE OPEN & CLOSE
const btnLeftOpen = document.getElementById('btnLeftOpen');
const btnLeftClose = document.getElementById('btnLeftClose');
const leftSide = document.querySelector('.left');
const leftSideDesktop = document.querySelector('.container');

if (window.innerWidth <= 1024 ){
    btnLeftOpen.addEventListener('click', () => {
        leftSide.classList.add('open');
    });
    btnLeftClose.addEventListener('click', () => {
        leftSide.classList.remove('open');
    });
} else {
    btnLeftOpen.addEventListener('click', () => {
        leftSideDesktop.classList.toggle('open');
    });
}