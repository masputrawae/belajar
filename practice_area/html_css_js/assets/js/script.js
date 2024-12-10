document.addEventListener("DOMContentLoaded", () => {
    const leftToggle = document.querySelector("#toggle-left");
    const rightToggle = document.querySelector("#toggle-right");
    const mainContainer = document.querySelector(".main-container");

    // Toggle left sidebar
    leftToggle.addEventListener("click", () => {
        const currentGrid = getComputedStyle(mainContainer).gridTemplateColumns;
        if (currentGrid === "1fr") { 
            mainContainer.style.gridTemplateColumns = "250px 1fr"; // Tampilkan left-side
        } else if (currentGrid === "250px 1fr") {
            mainContainer.style.gridTemplateColumns = "1fr"; // Sembunyikan left-side
        }
    });

    // Toggle right sidebar
    rightToggle.addEventListener("click", () => {
        const currentGrid = getComputedStyle(mainContainer).gridTemplateColumns;
        if (currentGrid === "1fr") { 
            mainContainer.style.gridTemplateColumns = "1fr 250px"; // Tampilkan right-side
        } else if (currentGrid === "1fr 250px") {
            mainContainer.style.gridTemplateColumns = "1fr"; // Sembunyikan right-side
        }
    });
});
