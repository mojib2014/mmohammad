// Highlight active link on click
export const highlightNavLinkOnClick = function (domElement) {
  for (let i = 0; i < domElement.length; i++) {
    domElement[i].addEventListener("click", function () {
      const current = document.querySelectorAll(".mobile .active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
};

// Hide mobile navbar and change humberger icon when the document body is clicked
export const hideMobileMenu = (domElement, humburgerIcon) => {
  domElement.style.marginLeft = "-100%";
  humburgerIcon.classList.replace("fa-times", "fa-bars");
};

// Toggle mobile navbar when humberger icon is clicked
export const toggleMobileNav = (mobile, humburgerIcon) => {
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
};

// Back to top button
export const backToTop = () => {
  let timeout;
  if (
    document.body.scrollTop !== 0 ||
    document.documentElement.scrollTop !== 0
  ) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    timeout = setTimeout("scrollToTop()", 30);
  } else clearTimeout(timeout);
};
