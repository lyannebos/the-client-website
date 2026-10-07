
// stap 1: zoek de menu-button en het hoofdmenu op
const deMenuButton = document.querySelector(".menu-button");
const deNav = document.querySelector(".hoofdmenu");

// stap 2: luister naar kliks op de button
deMenuButton.addEventListener("click", toggleMenu);

// stap 3: class erbij als hij er niet is, eraf als hij er wel is
function toggleMenu() {
  deNav.classList.toggle("is-open");
}