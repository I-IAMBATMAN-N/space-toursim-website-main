"use strict";

const menuButtons = document.querySelectorAll(".mobile-menu-btn");
const nav = document.querySelector(".nav");

menuButtons.forEach((e) => {
  e.addEventListener("click", (e) => {
    // console.log("CLICKED");
    nav.classList.toggle("visible");
  });
});
if (window.innerWidth > 1199) {
  const techImg = document.querySelector(".body-technology .article-img");
  const attr2 = techImg.dataset.src;
  techImg.setAttribute("src", attr2);
}
