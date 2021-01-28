import { projects } from "./projects.js";

window.onload = function () {
  let filtered = projects;
  // DOM Eelments
  const portfolioCardContainer = document.querySelector(
    ".portfolio-card-container",
  );
  const filterBtns = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".card");
  const javascript = document.querySelectorAll(".javascript");
  const react = document.querySelectorAll(".react");
  const MERN = document.querySelectorAll(".MERN");
  // Filter Button's active class handler
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let filterValue = btn.attributes[1].nodeValue;
      filterProjects(filterValue);
      const current = document.getElementsByClassName("filter active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  });

  // Filtering Projects by data attribute(language/library/framework)
  function filterProjects(filterValue) {
    cards.forEach((c) => (c.style.display = "none"));
    if (filterValue === "javascript")
      javascript.forEach((j) => (j.style.display = "block"));
    else if (filterValue === "react")
      react.forEach((r) => (r.style.display = "block"));
    else if (filterValue === "MERN")
      MERN.forEach((mern) => (mern.style.display = "block"));
    else if (filterValue === "all")
      cards.forEach((card) => (card.style.display = "block"));
  }
};
