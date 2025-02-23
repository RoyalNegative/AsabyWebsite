const moonicon = document.getElementById("dark-icon");
const lightIcon = document.getElementById("light-icon");
const headerContainer = document.querySelector(".header-container");
const blackicon = document.getElementById("asaby-icon-b");
const whiteicon = document.getElementById("asaby-icon-w");
const menuicon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
let DarkMode = false; 


moonicon.addEventListener("click", () => {
    document.documentElement.style.setProperty("--primary-color", "black");
    document.documentElement.style.setProperty("--secondary-color", "white");
    moonicon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
    headerContainer.classList.add("dark-mode");
    blackicon.classList.add("hidden");
    whiteicon.classList.remove("hidden");
});

lightIcon.addEventListener("click", () => {
    document.documentElement.style.setProperty("--primary-color", "white");
    document.documentElement.style.setProperty("--secondary-color", "black");
    lightIcon.classList.add("hidden");
    moonicon.classList.remove("hidden");
    headerContainer.classList.remove("dark-mode");
    blackicon.classList.remove("hidden");
    whiteicon.classList.add("hidden");
});


menuicon.addEventListener("click", (event) => {
    setTimeout(() => {
        menu.style.width = "15vw";
    }, 5);
});



document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuicon.contains(event.target)) {
        setTimeout(() => {
            menu.style.width = "0";
        }, 10);
    }
});
