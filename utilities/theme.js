const themeButton = document.querySelector("#theme-btn");

const prefersDarkScheme = window.matchMedia("prefers-color-scheme-dark");

// Determining/toggling theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") document.body.classList.toggle("dark-theme");
else if (currentTheme === "light-theme")
  document.body.classList.toggle("light-theme");

// Theme button click event listener
themeButton.addEventListener("click", function () {
  let theme;
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");

    theme = document.body.classList.contains("light-theme") ? "light" : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
});
