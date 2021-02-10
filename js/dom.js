// Selecting DOM Elements
const header = document.getElementById("header");
const navContainer = document.querySelector("header .content");
const navLinks = document.querySelectorAll(".nav-link");
const mobile = document.querySelector(".mobile");
const humburger = document.querySelector(".humburger");
const humburgerIcon = document.querySelector(".humburger i");
const sections = document.querySelectorAll("section[id]");
const backToTopBtn = document.querySelector(".back-to-top");
const mainContent = document.querySelector("#main-content");

// ******* Greeting Function *********
const greet = () => {
  const greetingMessage = document.querySelector(".greeting-message");
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
window.addEventListener("scroll", stickyHeader);

function stickyHeader() {
  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  if (scrollHeight > headerHeight) {
    header.classList.add("sticky");
    humburger.style.color = "#000";
    backToTopBtn.style.display = "block";
  } else {
    header.classList.remove("sticky");
    humburger.style.color = "#fff";
    backToTopBtn.style.display = "none";
  }
}

// ******** Adding active class to navbar links on scroll *******
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((section) => {
    const sectionHeight = section.getBoundingClientRect().height;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");
    const desktopnavLink = document.querySelector(
      "nav.desktop a[href*=" + sectionId + "]",
    );

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      desktopnavLink.classList.add("active");
    } else {
      desktopnavLink.classList.remove("active");
    }
  });
}

// ******************* Click Events *******************

// On click adding active class to the navbar's links
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    const current = document.querySelectorAll(".mobile .active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    hideMobileMenu();
  });
});

// Hidding mobile navbar when clicked in documnet's body
mainContent.onclick = function () {
  mobile.style.display = "none";
};

// When mobile navbar links has been clicked and page has scrolled
// to that part hide the mobile menu
function hideMobileMenu() {
  mobile.style.display = "none";
}

// Humburger menu click event to display/hide the navbar and chage the humburger icon
humburger.addEventListener("click", () => {
  if (
    mobile.style.marginLeft === "-100%" &&
    humburgerIcon.classList.contains("fa-bars")
  ) {
    mobile.style.marginLeft = "0";
    mobile.style.opacity = "1";
    humburgerIcon.classList.remove("fa-bars");
    humburgerIcon.classList.add("fa-times");
  } else {
    mobile.style.marginLeft = "-100%";
    mobile.style.opacity = "0";
    humburgerIcon.classList.remove("fa-times");
    humburgerIcon.classList.add("fa-bars");
  }
});

// Back To Top button Click event
backToTopBtn.onclick = function () {
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
};
