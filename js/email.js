const form = document.querySelector("#contact-form");
const loadingElement = document.querySelector(".loading");

// Form submit event listener
loadingElement.style.display = "none";
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const userEmail = {
    name,
    email,
    message,
  };

  form.style.display = "none";
  loadingElement.style.display = "";

  try {
    const res = await fetch("/emails", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
    if (res.ok) showSnack(res);
  } catch (err) {
    console.log(err);
    showSnack(err);
  }
}

function showSnack(res) {
  const snackbar = document.getElementById("snackbar");
  const p = document.createElement("p");
  p.textContent = res.message;
  snackbar.append(p);
  snackbar.classList.add("show");
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 3000);
}
