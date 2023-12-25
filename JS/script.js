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

let isLogin = false;

document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // Gather user input
    const username = document.getElementById("username-login").value;
    const password = document.getElementById("password-login").value;

    // Make a POST request to your API
    const response = await fetch(
      "https://backend-capstone-lessugar.vercel.app/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    if (response.status === 200) {
      isLogin = true;
      alert("Login successful");
      // Optionally, redirect the user to the login page
      window.location.href = "/index.html";
    } else if (response.status === 401) {
      alert("Invalid username or password");
    } else {
      alert("Registration failed. Please try again later.");
    }
  });

document
  .getElementById("registration-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    // Gather user input
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const agreeTerms = document.getElementById("agree-terms").checked;

    // Validate input
    if (!username || !email || !password || !confirmPassword || !agreeTerms) {
      alert("Please fill in all fields and agree to the terms & conditions.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Make a POST request to your API
    const response = await fetch(
      "https://backend-capstone-lessugar.vercel.app/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    );

    if (response.status === 201) {
      alert("Registration successful");
      // Optionally, redirect the user to the login page
      window.location.href = "/login.html";
    } else if (response.status === 409) {
      alert("Username already exists");
    } else {
      alert("Registration failed. Please try again later.");
    }
  });
// btnPopup.addEventListener("click", () => {
//   wrapper.classList.add("active-popup");
// });

// iconClose.addEventListener("click", () => {
//   wrapper.classList.remove("active-popup");
// });
