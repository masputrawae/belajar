// NAV MENU
const btnMenuOpen = document.getElementById('btnMenuOpen');
const btnMenuClose = document.getElementById('btnMenuClose');
const navMenu = document.querySelector('.nav-menu');

if (window.innerWidth <= 1024 ){
    btnMenuOpen.addEventListener('click', ()=>{
        navMenu.classList.add('open');
    });
    btnMenuClose.addEventListener('click', ()=>{
        navMenu.classList.remove('open');
    });
}

// HEADER STICKY
let lastScroll = 0;
const header = document.querySelector('header');
let isThrottled = false;
const scrollThreshold = 550; // Atur ambang batas scroll untuk trigger

window.addEventListener('scroll', () => {
  if (isThrottled) return;
  isThrottled = true;

  setTimeout(() => {
    const currentScroll = window.scrollY;

    // Gunakan scrollThreshold untuk mengatur di mana perubahan posisi terjadi
    if (currentScroll > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
    isThrottled = false;
  }, 100); // Eksekusi hanya setiap 100ms
});
