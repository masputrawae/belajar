// SIDEBAR 
const toggleSidebar = document.getElementById('toggleSidebar');
const sideBar = document.getElementById('container');

// Fungsi untuk toggle sidebar
const toggleSidebarState = () => {
    if (window.innerWidth > 1024) {
        if (sideBar.classList.contains('open')) {
            sideBar.classList.remove('open');
        } else {
            sideBar.classList.add('open');
        }
    } else {
        sideBar.classList.toggle('open');
    }
};

toggleSidebar.addEventListener('click', toggleSidebarState);
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        sideBar.classList.remove('open');
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
