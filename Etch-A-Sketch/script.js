'use strict';

const container = document.querySelector('.container');

function divCreator() {
    for (let i = 0; i < 256; i++) {
        const piece = document.createElement('div');
        piece.className = `square piece${i}`;
        console.log(i);
        container.append(piece);
    }
}
divCreator();

const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
};

const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
    return `hsl(${h}deg, ${s}%, ${l}%)`;
};

function changeBackground(e) {
    if (e.type === 'mouseover' && !mousedown) return
    const randomColor = getRandomColor();
    e.target.style.backgroundColor = randomColor
}

const square = Array.from(document.querySelectorAll('.square'));
square.forEach(square => square.addEventListener('onmousedown', changeBackground))