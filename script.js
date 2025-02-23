const moonicon = document.getElementById("dark-icon");
const lightIcon = document.getElementById("light-icon");
const headerContainer = document.querySelector(".header-container");
const blackicon = document.getElementById("asaby-icon-b");
const whiteicon = document.getElementById("asaby-icon-w");


moonicon.addEventListener("click", () => {
    document.documentElement.style.setProperty('--primary-color', 'black');
    document.documentElement.style.setProperty('--secondary-color', 'white');
    moonicon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
    headerContainer.classList.add("dark-mode");
    blackicon.classList.add("hidden");
    whiteicon.classList.remove("hidden");
});

lightIcon.addEventListener("click", () => {
    document.documentElement.style.setProperty('--primary-color', 'white');
    document.documentElement.style.setProperty('--secondary-color', 'black');
    lightIcon.classList.add("hidden");
    moonicon.classList.remove("hidden");
    headerContainer.classList.remove("dark-mode");
    blackicon.classList.remove("hidden");
    whiteicon.classList.add("hidden");
});