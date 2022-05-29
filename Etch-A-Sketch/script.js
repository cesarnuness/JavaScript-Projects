'use strict';

const container = document.querySelector('.container');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function divCreator() {
    for (let i = 0; i < 256; i++) {
        const piece = document.createElement('div');
        piece.className = `square piece${i}`;
        piece.addEventListener('mouseover', changeBackground)
        piece.addEventListener('mousedown', changeBackground)
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
    console.log('teste');
    if (e.type === 'mouseover' && !mouseDown) return
    const randomColor = getRandomColor();
    e.target.style.backgroundColor = randomColor
}