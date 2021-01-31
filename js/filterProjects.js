window.onload = function () {
  // DOM Eelments
  const filterBtns = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".card");

  // Filter Button's active class handler
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let filterValue = btn.attributes[1].nodeValue;

      filterProjects(filterValue);

      const current = document.getElementsByClassName("filter active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  });

  // Filtering Projects by data attribute(language/library/framework)
  function filterProjects(filterValue) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
      if (cards[i].classList.contains(filterValue)) {
        cards[i].style.display = "block";
      }
    }
  }
};
