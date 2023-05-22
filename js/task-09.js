function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSwitch = document.querySelector(".change-color");
const changeColorWidget = document.querySelector(".widget");
const backgroundColorValue = document.querySelector(".color");
colorSwitch.addEventListener("click", changeColor, getRandomHexColor);
function changeColor(evt) {
  const colorCode = getRandomHexColor();
  changeColorWidget.parentNode.style.backgroundColor = colorCode;
  backgroundColorValue.textContent = colorCode;
}
