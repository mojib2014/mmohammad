// DOM Elements
const greetingMessage = document.querySelector(".greeting-message");
const header = document.getElementById("header");
const topnav = document.querySelectorAll(".topnav");
const mobile = document.querySelector(".mobile");
const humburger = document.querySelector(".humburger");

// Greeting Function
const greet = () => {
  let greeting;
  const time = new Date().getHours();
  if (time < 10) greeting = "Morning";
  else if (time < 20) greeting = "Day";
  else greeting = "Evening";
  greetingMessage.textContent = `Hello There, Good ${greeting}!`;
};

greet();

// ****************** Events *******************
// Scroll Events
window.onscroll = function () {
  stickyHeader();
};
function stickyHeader() {
  if (window.pageYOffset > 450) {
    header.classList.add("sticky");
    humburger.style.color = "#000";
  } else {
    header.classList.remove("sticky");
    humburger.style.color = "#fff";
  }
}

// ******************* Click Events *******************
// Mobile topnav click event
humburger.addEventListener("click", () => {
  if (mobile.style.display === "block") mobile.style.display = "none";
  else mobile.style.display = "block";
});

// Header active class function
for (let i = 0; i < topnav.length; i++) {
  topnav[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
