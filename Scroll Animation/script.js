"use strict";

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  boxes.forEach((box) => {
    if (box.getBoundingClientRect().top < window.innerHeight) {
      box.classList.add("show");
    }
  });
}
