// Ambil elemen-elemen dari DOM
const toggleBtn = document.getElementById('toggleOffcanvasBtn');
const offcanvas = document.getElementById('offcanvas');
const body = document.body;

// Fungsi untuk toggle offcanvas (buka atau tutup)
toggleBtn.addEventListener('click', () => {
  const isOpen = offcanvas.style.left === '0px'; // Cek apakah offcanvas sudah terbuka
  
  if (isOpen) {
    offcanvas.style.left = '-100%'; // Kembalikan offcanvas ke luar layar
    offcanvas.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    body.classList.remove('offcanvas-open'); // Kembalikan konten utama
  } else {
    offcanvas.style.left = '0'; // Pindahkan offcanvas ke layar
    offcanvas.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    body.classList.add('offcanvas-open'); // Geser konten utama
  }
});

//TABS
// Ambil semua tombol tab dan semua konten tab
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Fungsi untuk menampilkan konten tab yang dipilih
function switchTab(event) {
  // Ambil nilai data-tab dari tombol yang diklik
  const selectedTab = event.target.getAttribute('data-tab');

  // Hapus kelas 'active' dari semua tombol dan konten
  tabButtons.forEach(button => button.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));

  // Tambahkan kelas 'active' pada tombol yang diklik
  event.target.classList.add('active');

  // Tambahkan kelas 'active' pada konten tab yang sesuai
  document.querySelector(`.tab-${selectedTab}`).classList.add('active');
}

// Tambahkan event listener untuk setiap tombol tab
tabButtons.forEach(button => {
  button.addEventListener('click', switchTab);
});

// Set tab pertama agar aktif saat halaman pertama kali dimuat
document.querySelector('.tab-btn').click(); // Klik pertama kali untuk menampilkan tab pertama
