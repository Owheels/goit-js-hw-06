const inputName = document.querySelector("#name-input");
const nameValue = document.querySelector("#name-output");
inputName.addEventListener("input", onInput);
function onInput(evt) {
  if (inputName.value === "") {
    nameValue.textContent = "Anonymous";
  } else {
    nameValue.textContent = inputName.value;
  }
}
