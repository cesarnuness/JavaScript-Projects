'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;

}

document.querySelector('.again').addEventListener('click', function () {
    number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

});


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        displayMessage('Not a Number!');
    } else if (number === guess) {
        if (score > 1) {
            displayMessage('You are correct!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = number;
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        } else {
            displayMessage('You lost the game!');
        }
    } else if (number !== guess) {
        displayMessage(guess < number ? 'The number is too Low' : 'The number is too high!');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('You lost the game!');
    }
});




//     else if (number > guess) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'The number is too Low';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You lost the game!';
//         }
//     } else if (number < guess) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'The number is too high!'
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You lost the game!';
//         }
//     } else {
//         console.log('Not sure what happened!');
//     }
// }