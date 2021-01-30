// DOM Elements
const greetingMessage = document.querySelector(".greeting-message");
const header = document.getElementById("header");
const sections = document.querySelectorAll("section[id]");
const topnav = document.querySelectorAll(".topnav");
const mobile = document.querySelector(".mobile");
const humburger = document.querySelector(".humburger");
const mainContent = document.querySelector("#main-content");
const backToTopBtn = document.querySelector(".back-to-top");

// Greeting Function
const greet = () => {
  let greeting;
  const time = new Date().getHours();
  if (time < 11) greeting = "Morning";
  else if (time < 20) greeting = "Day";
  else greeting = "Evening";
  greetingMessage.textContent = `Hello There, Good ${greeting}!`;
};

greet();

// ****************** Events *******************

// ********* Scroll Events *********
// Sticky header on scroll
window.onscroll = function () {
  stickyHeader();
};

function stickyHeader() {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    header.classList.add("sticky");
    humburger.style.color = "#000";
    backToTopBtn.style.display = "block";
  } else {
    header.classList.remove("sticky");
    humburger.style.color = "#fff";
    backToTopBtn.style.display = "none";
  }
}

// Smooth scrolling
topnav.forEach((elem) => elem.addEventListener("click", smoothScroll));

function smoothScroll(event) {
  event.preventDefault();
  const targetHref = this.getAttribute("href");
  const target = document.querySelector(targetHref);
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

// When mobile nav menus has been clicked and page has scrolled
// to that part hide the mobile menu
function hideMobileMenu() {
  mobile.style.display = "none";
}

// Humburger menu click event
humburger.addEventListener("click", () => {
  if (mobile.style.display === "block") mobile.style.display = "none";
  else mobile.style.display = "block";
});

// Header menus active class function
determinActiveClass(topnav);

function determinActiveClass(element) {
  for (let i = 0; i < element.length; i++) {
    topnav[i].addEventListener("click", function () {
      const current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

// Menus active class on scroll
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".desktop a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("header .desktop a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// Back To Top button Click event
backToTopBtn.onclick = function () {
  window.requestAnimationFrame(scrollToTop);
};

function scrollToTop() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.requestAnimationFrame(() =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
  }
}
