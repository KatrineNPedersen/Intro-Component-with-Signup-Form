"use strict";
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const emailErrorText = document.querySelector(".email");
const passwordInput = document.getElementById("password");
const inputs = [firstNameInput, lastNameInput, emailInput, passwordInput];

function tryAgain() {
  inputs.forEach((input, i) => {
    input.addEventListener("input", function () {
      input.style.border = "1px solid rgb(224, 221, 221)";
      input.style.color = "black";
      document.querySelector(`.${input.id}`).classList.add("hidden");
      document.querySelector(`.error-icon-${i + 1}`).classList.add("hidden");
    });
  });
}
tryAgain();

function checkValidity() {
  inputs.forEach((input, i) => {
    input.addEventListener("invalid", function (e) {
      e.preventDefault();
      let validityState = e.target.validity;

      for (let state in validityState) {
        if (validityState[state]) {
          if (validityState.valueMissing) {
            document.querySelector(`.${input.id}`).classList.remove("hidden");
            document
              .querySelector(`.error-icon-${i + 1}`)
              .classList.remove("hidden");
            input.style.border = "1px solid hsl(0, 100%, 74%)";
            input.placeholder = "";
            if (inputs[i].id == "email") {
              emailErrorText.innerHTML = "<em>Email cannot be empty</em>";
            }
          } else {
            document.querySelector(`.${input.id}`).classList.remove("hidden");
            document
              .querySelector(`.error-icon-${i + 1}`)
              .classList.remove("hidden");
            input.style.border = "1px solid hsl(0, 100%, 74%)";
            input.style.color = "hsl(0, 100%, 74%)";
            if (inputs[i].id == "email") {
              emailErrorText.innerHTML =
                "<em>Looks like this is not an email<em>";
            }
          }
        }
      }
    });
  });
}

checkValidity();
