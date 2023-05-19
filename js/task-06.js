const inputText = document.querySelector("#validation-input");
const validLength = inputText.dataset.length;
inputText.addEventListener("blur", onInput);
function onInput(evt) {
  let inputValueLength = inputText.value.length;
  if (inputValueLength != validLength) {
    inputText.classList.remove("valid");
    inputText.classList.add("invalid");
  } else {
    inputText.classList.remove("invalid");
    inputText.classList.add("valid");
  }
}
