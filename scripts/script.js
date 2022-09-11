const navbar = document.querySelector("#header");
window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("header-active");
  } else {
    navbar.classList.remove("header-active");
  }
};