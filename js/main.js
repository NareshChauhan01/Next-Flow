/* ==========================================
   Next Flow
   Main JavaScript File
========================================== */

/* ==========================================
   Hamburger Menu
========================================== */
const hamburgerMenu = document.querySelector(".hamburger");
const header = document.querySelector(".header")

hamburgerMenu.addEventListener("click", () => {
   hamburgerMenu.classList.toggle("active");
   header.classList.toggle("active")
});
