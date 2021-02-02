// DOM Eelments
const filterBtns = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");
const loading = document.querySelector(".portfolio-loading");

// Filter Button's active class handler
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let filterValue = btn.attributes[1].nodeValue;

    filterProjects(filterValue);

    const current = document.querySelectorAll(".filter.active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
});

// Filtering Projects by data attribute(language/library/framework)
function filterProjects(filterValue) {
  loading.style.display = "block";
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
    setTimeout(() => {
      if (cards[i].classList.contains(filterValue)) {
        loading.style.display = "none";
        cards[i].style.display = "block";
      }
    }, 200);
  }
}
