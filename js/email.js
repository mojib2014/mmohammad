const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const apiUrl = "http://localhost:5000/sendemail";

// Form submit event listener
loadingElement.style.display = "none";
form.addEventListener("submit", async (event) => {
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

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(userEmail),
    headers: {
      "content-type": "aplication/json",
    },
  }).then((res) => {
    console.log(res);
    form.reset();
    form.style.display = "";
    loadingElement.style.display = "none";
  });
});
