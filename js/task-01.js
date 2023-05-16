const list = document.querySelector("#categories");
console.dir(list);
console.dir(list.children);
console.log("Number of categories:", list.children.length);
let namCategories = list.children.length;
console.log("Number of categories:", namCategories);

// const item = document.querySelector("h2");
// console.dir(item);

[...list.children].forEach((item) => {console.dir(item);});

const item = document.querySelector(".item");
console.dir(item);