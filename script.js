const toggle = document.querySelector(".toggle");
const toggle_label = document.querySelector(".toggle-label");
const body = document.querySelector("body");
const inverts = document.querySelectorAll(".invert");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggle.classList.toggle("toggle-switch");
  toggle_label.innerHTML = toggle_label.innerHTML === "dark" ? "light" : "dark";
  inverts.forEach((node) => node.classList.toggle("dark-mode"));
});

const input = document.querySelector(".search-input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

input.addEventListener("change", (event) => {
  const search = event.target.value.replace(/[\s\d]/g, "+");
  window.location.href = `https://www.google.com/search?q=${search}`;
});
