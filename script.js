"use strict";

//* ELEMENTS
const counterElm = document.getElementById("counter");
const btnsContainerElm = document.querySelector(".main__buttons");

//* FEATURES
const counts = function (e) {
  const selectedBtn = e.target;
  if (selectedBtn.classList.contains("decrease")) count--;
  else if (selectedBtn.classList.contains("reset")) count = 0;
  else if (selectedBtn.classList.contains("increase")) count++;

  counterElm.innerText = count;
  changeCounterColor();
};

const changeCounterColor = function () {
  counterElm.style.color = count > 0 ? "green" : count < 0 ? "red" : "black";
};

//* EVENTS
btnsContainerElm.addEventListener("click", counts);

//* MAIN
let count = 0;
