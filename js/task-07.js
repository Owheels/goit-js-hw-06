const fontSizeSlider = document.querySelector("#font-size-control");
const experimentalRabbit = document.querySelector("#text");
fontSizeSlider.addEventListener("input", fontResize);
function fontResize(evt) {
  let inputFontSize = fontSizeSlider.value;
  experimentalRabbit.style.fontSize = `${inputFontSize}px`;
}
