// Sticky header on scroll
let previouScrollPosition = window.pageYOffset;
export const fixedHeaderOnScroll = (domElement) => {
  const currentScrollPosition = window.pageYOffset;
  if (previouScrollPosition > currentScrollPosition) domElement.style.top = "0";
  else domElement.style.top = "-50px";

  previouScrollPosition = currentScrollPosition;
};

// Highlight nav links on scroll
export const hightlightNavOnScroll = (domElement) => {
  // Get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  domElement.forEach((section) => {
    const sectionHeight = section.getBoundingClientRect().height;
    const sectionTop = section.offsetTop - 60;
    const sectionId = section.getAttribute("id");
    const desktopnavLink = document.querySelector(
      `.desktop a[href*= ${sectionId}]`,
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
};

export const onScrollDownShowBackToTopBtn = (domElement) => {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800)
    domElement.style.display = "block";
  else domElement.style.display = "none";
};
