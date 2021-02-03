const navOpen = document.querySelector(".menu-open");
const navClose = document.querySelector(".menu-close");
const navLinks = document.querySelector("nav ul");
const logo = document.querySelector(".logo");

navOpen.addEventListener("click", () => {
  navClose.style.display = "block";
  navClose.style.pointerEvents = "all";
  navClose.style.position = "fixed";
  navLinks.style.display = "flex";
  logo.style.position = "fixed";
});

navClose.addEventListener("click", () => {
  navOpen.style.display = "block";
  navClose.style.display = "none";
  navLinks.style.display = "none";
  logo.style.position = "initial";
});
