// DOM Elements
const greetingMessage = document.querySelector(".greeting-message");
const header = document.getElementById("header");
const topnav = document.querySelectorAll(".topnav");
const mobile = document.querySelector(".mobile");
const humburger = document.querySelector(".humburger");
const mainContent = document.querySelector("#main-content");

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

// Smooth scrolling
topnav.forEach((elem) => elem.addEventListener("click", smoothScroll));
function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const target = document.querySelector(targetId);
  const headerOffset = 10;
  const elementPosition = target.offsetTop;
  const offsetPosition = elementPosition - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  // When page has scrolled to target element hide the navbar
  hideMobileMenu();
}

// ******************* Click Events *******************
// If anywhere in main content has been clicked hide the mobile navbar
mainContent.onclick = function () {
  mobile.style.display = "none";
};

// When mobile nav menu has been clicked and page has scrolled
// to that part hide the mobile menu
function hideMobileMenu() {
  mobile.style.display = "none";
}

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
