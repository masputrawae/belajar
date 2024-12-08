function toggleOffCanvas() {
    const offCanvas = document.getElementById('offCanvas');
    offCanvas.classList.toggle('open');
}
function showTab(tab) {
    // Hapus kelas aktif dari semua tombol dan konten
    document.querySelectorAll('.nav-tab button').forEach(button => button.classList.remove('active'));
    document.querySelectorAll('.tabs-content article').forEach(article => article.classList.remove('active'));

    // Tambahkan kelas aktif ke tombol yang dipilih
    document.getElementById('tab-' + tab).classList.add('active');

    // Tampilkan konten tab yang sesuai
    document.getElementById(tab + 'Tabs').classList.add('active');
}

// Menampilkan tab pertama (Read) secara default
window.onload = function() {
    showTab('read');
};
