"use strict";

//* ELEMENTS
const counterElm = document.getElementById("counter");
const decreaseBtnElm = document.getElementById("btn-decrease");
const resetBtnElm = document.getElementById("btn-reset");
const increaseBtnElm = document.getElementById("btn-increase");

//* FEATURES
const increaseCounter = function () {
  count++;
  counterElm.innerText = count;
};

const decreaseCounter = function () {
  count--;
  counterElm.innerText = count;
};

const resetCounter = function () {
  count = 0;
  counterElm.innerText = count;
};

//* EVENTS
decreaseBtnElm.addEventListener("click", decreaseCounter);
resetBtnElm.addEventListener("click", resetCounter);
increaseBtnElm.addEventListener("click", increaseCounter);

//* MAIN
let count = 0;
