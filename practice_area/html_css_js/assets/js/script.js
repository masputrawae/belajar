document.addEventListener('DOMContentLoaded', () => {
    // Sidebar dan tombol referensi
    const leftSidebar = document.querySelector('.left-side');
    const rightSidebar = document.querySelector('.right-side');
    const toggleLeftButton = document.getElementById('toggle-left');
    const toggleRightButton = document.getElementById('toggle-right');
    
    // Fungsi untuk menutup sidebar
    const closeSidebar = (sidebar) => {
        sidebar.classList.remove('open');
    };

    // Fungsi untuk membuka sidebar
    const openSidebar = (sidebar) => {
        sidebar.classList.add('open');
    };

    // Fungsi untuk menutup sidebar lain jika satu sidebar dibuka
    const closeOtherSidebar = (sidebarToClose) => {
        if (sidebarToClose === 'left') {
            closeSidebar(rightSidebar);
        } else {
            closeSidebar(leftSidebar);
        }
    };

    // Event listener untuk toggle sidebar kiri
    toggleLeftButton.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah event lain yang tidak diperlukan
        closeOtherSidebar('left');
        leftSidebar.classList.toggle('open'); // Toggle sidebar kiri
    });

    // Event listener untuk toggle sidebar kanan
    toggleRightButton.addEventListener('click', (event) => {
        event.preventDefault();
        closeOtherSidebar('right');
        rightSidebar.classList.toggle('open'); // Toggle sidebar kanan
    });

    // Tutup sidebar jika klik di luar sidebar
    document.addEventListener('click', (event) => {
        if (!leftSidebar.contains(event.target) && !rightSidebar.contains(event.target) &&
            event.target !== toggleLeftButton && event.target !== toggleRightButton) {
            closeSidebar(leftSidebar);
            closeSidebar(rightSidebar);
        }
    });
});
