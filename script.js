const inputEl = document.getElementById("email-input");
const accessBtn = document.getElementById("request-access-btn");
const formContainer = document.getElementById("form-request-access");

accessBtn.addEventListener("click", function () {
  let emailValue = inputEl.value;
  if (validateEmail(emailValue)) {
    formContainer.innerHTML += `<p class="thank-you-message">Thank you for submitting!</p>`;
  } else if (validateEmail(emailValue) === "") {
    formContainer.innerHTML += `<p class="error-add">Oops! Please add your email!</p>`;
  } else {
    formContainer.innerHTML += `<p class="error-check">Oops! Please check your email!</p>`;
  }
});

function validateEmail(email) {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}
