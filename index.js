// Utility functions
import {
  fixedHeaderOnScroll,
  hightlightNavOnScroll,
} from "./utilities/scrollEvents.js";
import {
  highlightNavLinkOnClick,
  hideMobileMenu,
  toggleMobileNav,
  backToTop,
} from "./utilities/clickEvents.js";
import { greet } from "./utilities/greeting.js";

// DOM Elements references
const backToTopBtn = document.querySelector(".back-to-top");
const header = document.getElementById("header");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".mobile .nav-link");
const mainContent = document.querySelector("#main-content");
const mobile = document.querySelector(".mobile");
const humburgerIcon = document.querySelector(".humburger i");
const humburger = document.querySelector(".humburger");
const greetingMessage = document.querySelector(".greeting-message");

// Greeting
greet(greetingMessage);

// Scroll events
window.onscroll = function () {
  // Fixed header on scroll
  fixedHeaderOnScroll(header);
  // Highlight nav link on scroll
  hightlightNavOnScroll(sections);
};

// Click events
highlightNavLinkOnClick(navLinks);
// when main content is clicked hide the mobile navbar and change humberger icon
mainContent.onclick = function () {
  hideMobileMenu(mobile, humburgerIcon);
};

//
humburger.onclick = function () {
  toggleMobileNav(mobile, humburgerIcon);
};

backToTopBtn.onclick = function () {
  backToTop();
};
