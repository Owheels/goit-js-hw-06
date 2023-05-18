const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const container = document.querySelector(".gallery");
container.style.display = "flex";
container.style.gap = "8px";
const image = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-img"><img src="${url}" alt="${alt}">
  </li>`
  )
  .join("");
container.insertAdjacentHTML("beforeend", image);
const galleryImg = document.querySelectorAll(".gallery-img");
galleryImg.forEach((item) => {
  item.style.listStyle = "none";
});
const imgGall = container.querySelectorAll("img");
imgGall.forEach((picture) => {
  picture.style.maxWidth = "100%";
});
