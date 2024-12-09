const toggleBtn = document.querySelector('.toggle-btn');
const offcanvas = document.querySelector('.offcanvas');

let isOpen = false;

// Fungsi untuk memeriksa ukuran layar
function checkScreenSize() {
  if (window.innerWidth > 1024) {
    // Jika layar lebih besar dari 1024px, matikan fungsionalitas offcanvas
    offcanvas.style.left = '0'; // Pastikan offcanvas selalu terbuka
    toggleBtn.removeEventListener('click', toggleOffcanvas); // Hapus event listener
  } else {
    // Jika layar lebih kecil dari 1024px, hidupkan fungsionalitas offcanvas
    toggleBtn.addEventListener('click', toggleOffcanvas); // Pasang event listener
  }
}

// Fungsi untuk membuka/menutup offcanvas
function toggleOffcanvas() {
  if (isOpen) {
    offcanvas.style.left = '-250px';
  } else {
    offcanvas.style.left = '0';
  }
  isOpen = !isOpen;
}

// Periksa ukuran layar saat pertama kali dimuat dan saat diubah ukurannya
checkScreenSize();
window.addEventListener('resize', checkScreenSize);


// TOGLE THEMES
const themeToggleBtn = document.querySelector('.theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Cek tema yang disimpan di localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.classList.replace('bi-lightbulb-fill', 'bi-lightbulb'); // Ganti ikon
}

// Fungsi untuk toggle tema
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  // Jika tema saat ini "dark", ubah menjadi "light", dan sebaliknya
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.classList.replace('bi-lightbulb', 'bi-lightbulb-fill'); // Ganti ikon
    localStorage.setItem('theme', 'light'); // Simpan pilihan tema di localStorage
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('bi-lightbulb-fill', 'bi-lightbulb'); // Ganti ikon
    localStorage.setItem('theme', 'dark'); // Simpan pilihan tema di localStorage
  }
});
