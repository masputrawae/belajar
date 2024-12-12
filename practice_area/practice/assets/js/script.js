// Fungsi untuk menampilkan tab yang dipilih
function showTab(tabName) {
    // Menyembunyikan semua tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Menghapus kelas 'active' dari semua tombol
    const buttons = document.querySelectorAll('btn-tab');
    buttons.forEach(button => button.classList.remove('active'));

    // Menampilkan tab yang dipilih
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    // Menambahkan kelas 'active' pada tombol yang dipilih
    document.querySelector(`.btn-tab:nth-child(${getTabIndex(tabName)})`).classList.add('active');
}

// Fungsi untuk mendapatkan indeks tab berdasarkan nama tab
function getTabIndex(tabName) {
    const tabNames = ['tos', 'categories', 'tags', 'related', 'history'];
    return tabNames.indexOf(tabName) + 1;
}

// Menampilkan tab default ketika halaman pertama kali dimuat
window.addEventListener('DOMContentLoaded', () => {
    showTab('tos'); // Menampilkan tab "Toc" secara default
    
    // Menambahkan event listener untuk setiap tombol
    document.getElementById('tocBtn').addEventListener('click', () => showTab('tos'));
    document.getElementById('categoriesBtn').addEventListener('click', () => showTab('categories'));
    document.getElementById('tagsBtn').addEventListener('click', () => showTab('tags'));
    document.getElementById('relatedBtn').addEventListener('click', () => showTab('related'));
    document.getElementById('historyBtn').addEventListener('click', () => showTab('history'));
});