import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import "./styles/main.scss";
import "./static/logo.png";

const newsletterForm = document.querySelector("#newsletter");
const newsletterInput = document.querySelector("#newsletter-input");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(newsletterInput.value);

  Toastify({
    text: `Gracias ${newsletterInput.value} por registrarte!`,
    className: "info",
  }).showToast();
});
