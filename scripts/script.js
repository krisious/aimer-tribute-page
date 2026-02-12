const header = document.querySelector("#header");
const yearElement = document.querySelector("#currentYear");

const toggleHeaderState = () => {
  if (window.scrollY > 40) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active");
  }
};

window.addEventListener("scroll", toggleHeaderState, { passive: true });
window.addEventListener("load", toggleHeaderState);

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
