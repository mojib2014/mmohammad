// DOM Eelments
const projectsContainer = document.querySelector(".projects-container");
const filterBtns = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");
const loading = document.querySelector(".portfolio-loading");

// Filtering Projects by data attribute(language/library/framework)
function filterProjects(category) {
  cards.forEach((card) => {
    loading.style.display = "block";
    card.style.display = "none";
    if (card.classList.contains(category)) {
      console.log("IF statement", category);
      setTimeout(function () {
        card.style.display = "block";
        loading.style.display = "none";
      }, 300);
    }
    if (category === "all") {
      card.style.display = "block";
      loading.style.display = "none";
    }
  });
}

// Filter Button's active class handler
filterBtns.forEach(function (btn) {
  const category = btn.dataset.category;

  btn.addEventListener("click", function () {
    filterProjects(category);

    const current = document.querySelectorAll(".filter.active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
});
