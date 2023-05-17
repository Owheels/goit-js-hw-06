const list = document.querySelector("#categories");
console.log("Number of categories:", list.children.length);
const item = document.querySelectorAll(".item");
[...item].forEach((item, idx) => {
    console.log("Category:",item.firstElementChild.innerText);
    console.log("Elements:", item.lastElementChild.childElementCount);
});