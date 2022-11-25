"use strict";

const menuButtons = document.querySelectorAll(".mobile-menu-btn");
const nav = document.querySelector(".nav");

menuButtons.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log("CLICKED");
    nav.classList.toggle("visible");
  });
});
