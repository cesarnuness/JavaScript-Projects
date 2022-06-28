"use strict";

const calculationState = {
  firstNumber: 0,
  secondNumber: 0,
  operation: null,
};

const number = document.querySelectorAll(".data-number");
const operator = document.querySelectorAll(".data-operator");
const equal = document.querySelector(".data-equal");

const display = document.querySelector(".display");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    display.innerHTML += this.innerHTML;
  });
}

function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}
