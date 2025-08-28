const hamburgerMenu = document.querySelector(".header");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.add("menu-open");
});
closeIcon.addEventListener("click", () => {
  hamburgerMenu.classList.remove("menu-open");
});
