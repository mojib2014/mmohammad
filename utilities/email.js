const form = document.querySelector("#contact-form");

// Form submit event listener
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    if (res.ok) {
      showSnack("Form successfully submitted");
    }
  } catch (err) {
    console.log(err);
    showSnack(err);
  }
}

function showSnack(res) {
  const snackbar = document.getElementById("snackbar");
  const p = document.createElement("p");
  p.textContent = res;
  snackbar.append(p);
  snackbar.classList.add("show");
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
}
