// Offcanvas
const toggleButton = document.getElementById('toggleSideBar');
const sidebar = document.getElementById('left-side');
toggleButton.addEventListener('click', (e) => {
    sidebar.classList.toggle('open');
    e.stopPropagation();
});
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== toggleButton) {
        sidebar.classList.remove('open');
    }
});

// DropDown
const toggleDropDown = document.getElementById('toggleDropDown');
const dropDownContainer = document.getElementById('dropDownContainer');


toggleDropDown.addEventListener('click', (e) => {
    dropDownContainer.classList.toggle('dropDown');
    e.stopPropagation();
});

document.addEventListener('click', (e) => {
    if (!dropDownContainer.contains(e.target) && e.target !== toggleDropDown) {
        dropDownContainer.classList.remove('dropDown');
    }
});

// THEMES SWITCHER
// Ambil elemen yang diperlukan
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById("switchTheme");
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