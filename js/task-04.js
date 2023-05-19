const btnUp = document.querySelector('[data-action="increment"]');
const btnDown = document.querySelector('[data-action="decrement"]');
const value = document.querySelector("#value");
let val = 0;
btnUp.addEventListener("click", onClickUp);
function onClickUp(evt) {
  value.textContent = val += 1;
}
btnDown.addEventListener("click", onClickDown);
function onClickDown(evt) {
  value.textContent = val -= 1;
}
