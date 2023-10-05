const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
// const btnPopup = document.querySelector(".login");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

iconClose.addEventListener("click", () => {
  window.location.href = "index.html";
});

// btnPopup.addEventListener("click", () => {
//   wrapper.classList.add("active-popup");
// });

// iconClose.addEventListener("click", () => {
//   wrapper.classList.remove("active-popup");
// });


