document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".header-hamburger img");
  const dropdown = document.querySelector(".dropdown-menu");

  hamburger.addEventListener("click", () => {
    dropdown.classList.toggle("show");

    if (dropdown.classList.contains("show")) {
      hamburger.src = "/NewFolder/assets/closeicon.svg";
    } else {
      hamburger.src = "/NewFolder/assets/hamBurger.svg";
    }
  });
});
