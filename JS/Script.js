// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Diklik Luar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
