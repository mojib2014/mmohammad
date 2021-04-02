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
      console.log("res status text", res.statusText);
      showSnack("Form successfully submited!", "success");
    }
  } catch (err) {
    console.log("error message", err.message);
    showSnack(err.message, "error");
  }
}

function showSnack(text, type) {
  const snackbar = document.getElementById("snackbar");
  const p = document.createElement("p");
  p.textContent = text;
  snackbar.append(p);
  if (type === "success") snackbar.classList.add("show", "success");
  if (type === "error") snackbar.classList.add("show", "error");
  setTimeout(() => {
    snackbar.classList.remove("show");
  }, 7000);
}
