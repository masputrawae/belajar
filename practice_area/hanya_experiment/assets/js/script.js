// SIDEBAR 
const toggleSidebar = document.getElementById('toggleSidebar');
const sideBar = document.getElementById('container');

// Fungsi untuk toggle sidebar
const toggleSidebarState = () => {
    sideBar.classList.toggle('open');
};

// Listener untuk tombol toggle
toggleSidebar.addEventListener('click', toggleSidebarState);

// Listener untuk resize window
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && sideBar.classList.contains('open')) {
        sideBar.classList.remove('open'); // Pastikan kembali ke default pada layar besar
    }
});

// COLLAPSE 

const toggleButton = document.getElementById('toggleCollapse');
const navbar = document.getElementById('navbar');

// Menambahkan event listener untuk toggle collapse
toggleButton.addEventListener('click', (e) => {
    // Menambah atau menghapus kelas 'collapsed' pada navbar
    navbar.classList.toggle('collapsed');
    
    // Mencegah event klik untuk menutup navbar ketika tombol diklik
    e.stopPropagation();
});

// Event listener untuk klik di luar area navbar
document.addEventListener('click', (e) => {
    // Mengecek apakah klik terjadi di luar navbar dan tombol toggle
    if (!navbar.contains(e.target) && e.target !== toggleButton) {
        navbar.classList.remove('collapsed'); // Menutup sidebar
    }
});

// THEMES SWITCHER
// Ambil elemen yang diperlukan
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Fungsi untuk menyimpan tema ke localStorage
function saveThemeToLocalStorage(theme) {
    localStorage.setItem("theme", theme);
}

// Fungsi untuk memuat tema dari localStorage
function loadThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        htmlElement.setAttribute("data-theme", savedTheme);
        updateButtonUI(savedTheme);
    }
}

// Fungsi untuk memperbarui UI tombol
function updateButtonUI(theme) {
    if (theme === "dark") {
        themeIcon.classList.replace("bi-moon", "bi-sun");
        themeToggleBtn.prepend(themeIcon);
    } else {
        themeIcon.classList.replace("bi-sun", "bi-moon");
        themeToggleBtn.prepend(themeIcon);
    }
}

// Fungsi untuk toggle tema
function toggleTheme() {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Ubah tema dan simpan ke localStorage
    htmlElement.setAttribute("data-theme", newTheme);
    saveThemeToLocalStorage(newTheme);
    updateButtonUI(newTheme);
}

// Tambahkan event listener ke tombol
themeToggleBtn.addEventListener("click", toggleTheme);

// Muat tema saat halaman dimuat
loadThemeFromLocalStorage();