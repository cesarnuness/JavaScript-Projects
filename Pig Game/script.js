'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const nome0 = document.querySelector('#name--0');
const nome1 = document.querySelector('#name--1');

const nomeJogador1 = prompt('Qual o nome do jogador 1?')
nome0.textContent = nomeJogador1;

const nomeJogador2 = prompt('Qual o nome do jogador 2?')
nome1.textContent = nomeJogador2;

//Starting conditions
let currentScore, activePlayer, playing, scores;

const resetGame = function () {
    score0.textContent = 0;
    score1.textContent = 0;
    dice.classList.add('hidden');
    playing = true;
    scores = [0, 0];
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner')
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    score0.textContent = 0;
    score1.textContent = 0;
    dice.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
}

resetGame();

newGame.addEventListener('click', resetGame);

const swapPlayers = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}
rollDice.addEventListener('click', function () {
    if (playing) {
        const diceRoll = Math.trunc(Math.random() * 6) + 1;
        dice.classList.remove('hidden');
        dice.src = `dice-${diceRoll}.png`
        console.log(diceRoll);

        //Implementing rule of 1; if true switch player else add to the current score 
        if (diceRoll !== 1) {
            currentScore += diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            swapPlayers();
        };
    }
});

holdScore.addEventListener('click', function () {
    //Add score to the current score of the active player!
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //Check if It's higher than 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
            swapPlayers();
        }
    }
    // Finish the Game!
});






// if (activePlayer !== 0) {
//     player2.classList.add('player--active');
//     player1.classList.remove('player--active');
// } else {
//     player1.classList.add('player--active');
//     player2.classList.remove('player--active');


// score0.textContent = number;
// dice.classList.remove('hidden');
// if (number === 1) {
//     dice.src = 'dice-1.png';
// } else if (number === 2) {
//     dice.src = 'dice-2.png';

// } else if (number === 3) {
//     dice.src = 'dice-3.png';

// } else if (number === 4) {
//     dice.src = 'dice-4.png';

// } else if (number === 5) {
//     dice.src = 'dice-5.png';

// } else {
//     dice.src = 'dice-6.png';
// }