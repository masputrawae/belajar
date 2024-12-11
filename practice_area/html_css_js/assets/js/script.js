// General toggle function
function toggleClassOnClick(toggleButton, targetElement, className) {
    toggleButton.addEventListener('click', (e) => {
        targetElement.classList.toggle(className);
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
        if (!targetElement.contains(e.target) && e.target !== toggleButton) {
            targetElement.classList.remove(className);
        }
    });
}

// Offcanvas
const toggleButton = document.getElementById('toggleSideBar');
const sidebar = document.getElementById('left-side');
toggleClassOnClick(toggleButton, sidebar, 'open');

// DropDown
const toggleDropDown = document.getElementById('toggleDropDown');
const dropDownContainer = document.getElementById('dropDownContainer');
toggleClassOnClick(toggleDropDown, dropDownContainer, 'dropDown');

// THEMES SWITCHER
const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById("switchTheme");
const themeIcon = document.getElementById("themeIcon");

function saveThemeToLocalStorage(theme) {
    localStorage.setItem("theme", theme);
}

function loadThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        htmlElement.setAttribute("data-theme", savedTheme);
        updateButtonUI(savedTheme);
    }
}

function updateButtonUI(theme) {
    themeIcon.classList.replace(theme === "dark" ? "bi-moon" : "bi-sun", theme === "dark" ? "bi-sun" : "bi-moon");
    themeToggleBtn.prepend(themeIcon);
}

function toggleTheme() {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
    saveThemeToLocalStorage(newTheme);
    updateButtonUI(newTheme);
}

themeToggleBtn.addEventListener("click", toggleTheme);

// Load theme when page loads
loadThemeFromLocalStorage();