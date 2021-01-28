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
  // Render Projects in to the DOM
  filtered.map((project) => {
    // Card elements
    const card = document.createElement("div");
    const img = document.createElement("img");
    const cardBody = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const techStackTitle = document.createElement("h3");
    const techStackDescription = document.createElement("p");
    const cardLinksContainer = document.createElement("div");
    const githubBtn = document.createElement("a");
    const liveProjectBtn = document.createElement("a");
    const githubIcon = document.createElement("i");

    // Elements inner content
    title.textContent = project.title;
    description.textContent = project.description;
    techStackTitle.textContent = project.techStackTitle;
    techStackDescription.textContent = project.techStack;
    liveProjectBtn.textContent = "Live Project";

    // Elements attributes
    card.className = "card";
    cardBody.className = "card-body";
    cardLinksContainer.className = "card-link";
    img.alt = project.title;
    img.src = project.projectImg;
    githubBtn.href = project.githubUrl;
    githubIcon.className = "fab fa-github-square";
    liveProjectBtn.href = project.projectUrl;

    // Appending all the elements
    card.appendChild(img);
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(techStackTitle);
    cardBody.appendChild(techStackDescription);
    githubBtn.appendChild(githubIcon);
    cardLinksContainer.appendChild(githubBtn);
    cardLinksContainer.appendChild(liveProjectBtn);
    cardBody.appendChild(cardLinksContainer);
    card.appendChild(cardBody);
    // portfolioCardContainer.appendChild(card);
  });
};
