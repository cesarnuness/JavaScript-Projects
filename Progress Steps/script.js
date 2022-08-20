"use strict";

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
progress.style.width = "0%";

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
    if (currentActive === 1) {
      prev.disabled = true;
    } else {
      prev.disabled = false;
    }
    if (currentActive === 4) {
      next.disabled = true;
    } else {
      next.disabled = false;
    }
    if (currentActive === 1) {
      progress.style.width = "0%";
    } else if (currentActive === 2) {
      progress.style.width = "33%";
    } else if (currentActive === 3) {
      progress.style.width = "66%";
    } else if (currentActive === 4) {
      progress.style.width = "100%";
    }
  });
}

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});
