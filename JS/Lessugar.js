const navbarClick = document.querySelector(".Navbar-click");
const tombol = document.querySelector(".menu-toggle");

document.querySelector(".menu-toggle").onclick = () => {
  navbarClick.classList.toggle("active");
  tombol.classList.toggle("active");
};

document.querySelector(".login").addEventListener("click", () => {
  window.location.href = "login.html";
});
document.querySelector("#btn-cek").addEventListener("click", () => {
  window.location.href = "soal_diabetes.html";
});

// const menuToggle = document.querySelector(".menu-toggle");
// const nav = document.querySelector("nav-ul");

// menuToggle.addEventListener("click", function () {
//   nav.classList.toggle("slide");
// });
