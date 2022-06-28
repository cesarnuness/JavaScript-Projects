"use strict";
//Initial Values
const calculationState = {
  firstNumber: 0,
  secondNumber: 0,
  operation: null,
};

// basic functions used in the calculator
const clear = function () {};
const sum = function (a, b) {
  return a + b;
};
const subtraction = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const division = function (a, b) {
  return a / b;
};

//Main selectors
const number = document.querySelectorAll(".data-number");
const operator = document.querySelectorAll(".data-operator");
const equal = document.querySelector(".data-equal");
const display = document.querySelector(".display");
const topDisplay = document.querySelector(".top-display");
const deleteLast = document.querySelector(".delete");
const clearAll = document.querySelector(".clear");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    display.innerHTML += this.innerHTML;
  });
}

const deleteLastNumber = function () {
  display.innerHTML = display.innerHTML.slice(0, -1);
};

const clearAllAfter = function () {
  display.innerHTML = "";
  calculationState.firstNumber = 0;
  calculationState.secondNumber = 0;
  calculationState.operation = null;
};

const sumAfter = function () {
  calculationState.firstNumber = parseInt(display.innerHTML);
  calculationState.operation = sum;
  display.innerHTML = "";
  topDisplay.innerHTML = `${calculationState.firstNumber} +`;
};

const subtractionAfter = function () {
  calculationState.firstNumber = parseInt(display.innerHTML);
  calculationState.operation = subtraction;
  display.innerHTML = "";
  topDisplay.innerHTML = `${calculationState.firstNumber} -`;
};

const multiplyAfter = function () {
  calculationState.firstNumber = parseInt(display.innerHTML);
  calculationState.operation = multiply;
  display.innerHTML = "";
  topDisplay.innerHTML = `${calculationState.firstNumber} *`;
};

const divisionAfter = function () {
  calculationState.firstNumber = parseInt(display.innerHTML);
  calculationState.operation = division;
  display.innerHTML = "";
  topDisplay.innerHTML = `${calculationState.firstNumber} /`;
};

const equalize = function () {
  calculationState.secondNumber = parseInt(display.innerHTML);
  display.innerHTML = calculationState.operation(
    calculationState.firstNumber,
    calculationState.secondNumber
  );
  topDisplay.innerHTML = display.innerHTML;
  display.innerHTML = "";
};

equal.addEventListener("click", equalize);

const sumOperation = document.querySelector(".sum");
const subOperation = document.querySelector(".minus");
const multOperation = document.querySelector(".multiply");
const divOperation = document.querySelector(".division");

sumOperation.addEventListener("click", sumAfter);
subOperation.addEventListener("click", subtractionAfter);
multOperation.addEventListener("click", multiplyAfter);
divOperation.addEventListener("click", divisionAfter);
deleteLast.addEventListener("click", deleteLastNumber);
clearAll.addEventListener("click", clearAllAfter);
