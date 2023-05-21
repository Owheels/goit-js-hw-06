function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const klacKlac = document.querySelectorAll("button");
[...klacKlac].forEach((item, idx) => {
  console.log(item);
  item.addEventListener("click", addText)
  function addText(evt) {
    console.log(evt);
    alert("Я обов'язково зроблю це трошки пізніше \u{1F614}");
  }
});


