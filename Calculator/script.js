"use strict";

const calculationState = {
  firstNumber: 0,
  secondNumber: 0,
  operation: null,
};

const clear = () => {
  display.innerHTML = "";
  topDisplay.innerHTML = "";
  calculationState.firstNumber = 0;
  calculationState.secondNumber = 0;
  calculationState.operation = null;
};

const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const division = (a, b) => a / b;

const number = document.querySelectorAll(".data-number");
const operator = document.querySelectorAll(".data-operator");
const equal = document.querySelector(".data-equal");
const display = document.querySelector(".display");
const topDisplay = document.querySelector(".top-display");
const deleteLast = document.querySelector(".delete");
const clearAll = document.querySelector(".clear");

const guardClause = () => {
  if (display.innerHTML === "") {
    return;
  }
};

number.forEach((element) => {
  element.addEventListener("click", () => {
    display.innerHTML += element.innerHTML;
  });
});

const deleteLastNumber = () => {
  display.innerHTML = display.innerHTML.slice(0, -1);
};

const clearAllAfter = () => {
  display.innerHTML = "";
  topDisplay.innerHTML = "";
  calculationState.firstNumber = 0;
  calculationState.secondNumber = 0;
  calculationState.operation = null;
};

const performOperation = (operation, operatorText) => {
  guardClause();

  if (display.innerHTML === "" && topDisplay.innerHTML !== "") {
    // Use the previous result from top display as the first number
    calculationState.firstNumber = parseFloat(topDisplay.innerHTML);
  } else {
    calculationState.firstNumber = parseFloat(display.innerHTML);
  }

  calculationState.operation = operation;
  display.innerHTML = "";
  topDisplay.innerHTML = `${calculationState.firstNumber} ${operatorText}`;
};

const sumAfter = () => {
  performOperation(sum, "+");
};

const subtractionAfter = () => {
  performOperation(subtraction, "-");
};

const multiplyAfter = () => {
  performOperation(multiply, "*");
};

const divisionAfter = () => {
  performOperation(division, "/");
};

const equalize = () => {
  calculationState.secondNumber = parseFloat(display.innerHTML);
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
