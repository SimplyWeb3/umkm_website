const menuBar = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener("click", function() {
    navMenu.classList.toggle("active");
});