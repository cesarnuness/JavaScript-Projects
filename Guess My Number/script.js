'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

});


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        document.querySelector('.message').textContent = 'Not a Number!'
    } else if (number === guess) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'You are correct!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = number;
            if (score > highscore) {
                score = highscore;
                document.querySelector('.highscore').textContent = highscore;
            }


        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }
    } else if (number > guess) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'The number is too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }
    } else if (number < guess) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'The number is too high!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }
    } else {
        console.log('Not sure what happened!');
    }
})