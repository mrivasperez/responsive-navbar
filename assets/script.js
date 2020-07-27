const hamburger = document.querySelector(".hamburger"),
  navLinks = document.querySelector(".nav-links"),
  links = document.querySelectorAll("nav-links li");

hamburger.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
});
