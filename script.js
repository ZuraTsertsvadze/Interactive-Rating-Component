"use strict";

const value = document.querySelector(".value");
const numButton = document.querySelectorAll(".num");
const submit = document.querySelector(".but");
const mainBody = document.querySelector(".body");
const number = document.querySelector(".num");
const thanksBody = document.querySelector(".ty-body");

numButton.forEach((el) => {
  el.addEventListener("click", (e) => {
    numButton.forEach((el) => {
      el.style.backgroundColor = "#363f4b";
      el.classList.remove("active");
    });

    el.style.backgroundColor = "#959EAC";
    el.style.color = "white";
    value.innerHTML = parseInt(el.innerHTML);
    el.classList.add("active");
  });
});

// const rateShower = () => {
submit.addEventListener("click", (e) => {
  numButton.forEach((el) => {
    if (el.classList.contains("active")) {
      thanksBody.style.zIndex = "1";
    }
  });
});
// };

// rateShower();
