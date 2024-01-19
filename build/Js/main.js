const initApp = () => {
  // we get the hamburgerbtn
  const hamburgerBtn = document.getElementById("hamburger-menu");

  // we get the mobile menu
  const mobileMenu = document.getElementById("mobile-menu");

  // we create the toggle function to remove or add hidden & flex
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };

  // on click on the hamburger menu we toggle the function toggleMenu
  hamburgerBtn.addEventListener("click", toggleMenu);

  // on click on the mobile menu we toggle the function toggleMenu
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
