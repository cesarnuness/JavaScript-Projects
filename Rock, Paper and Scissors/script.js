'use strict';
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let images = ['play1.png', 'play2.png', 'play3.png'];

let index = 0;
const imgElement = document.querySelector('.play4');

function change() {
    imgElement.src = images[index];
    index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 500);
};

const button1 = document.querySelector('.play1');
const button2 = document.querySelector('.play2');
const button3 = document.querySelector('.play3');

button1.addEventListener('mouseover', mOver, false);
button2.addEventListener('mouseover', mOver, false);
button3.addEventListener('mouseover', mOver, false);
button1.addEventListener('mouseout', mOut, false);
button2.addEventListener('mouseout', mOut, false);
button3.addEventListener('mouseout', mOut, false);

function mOver() {
    this.classList.add('movered');
}

function mOut() {
    this.classList.remove('movered');
}

function playRound() {
    const img = this.querySelector("img");
    playerSelection = this.alt; // this.classList.add('clicked');
    console.log(playerSelection);
    if (machinePlay == playerSelection) {
        alert('You should try again! It was a draw! Refresh the Page!');
    } else if (machinePlay === "paper" && playerSelection === "scissor") {
        alert(won);
    } else if (playerSelection === "paper" && machinePlay === "rock") {
        alert(won);
    } else if (machinePlay === "scissor" && playerSelection === "rock") {
        alert(won);
    } else if (playerSelection === "rock" && machinePlay === "scissor") {
        alert(won);
    } else if (machinePlay === "scissor" && playerSelection === "rock") {
        alert(won);
    } else if (playerSelection === "rock" && machinePlay === "scissor") {
        alert(lost);
    } else if (playerSelection === "rock" && machinePlay === "paper") {
        alert(lost);
    } else if (playerSelection === "paper" && machinePlay === "scissor") {
        alert(lost);
    } else if (playerSelection === "scissor" && machinePlay === "rock") {
        alert(lost);
    } else alert('Your input is probably not valid!');

    computerPlay;

}
button1.addEventListener('click', playRound, false);
button2.addEventListener('click', playRound, false);
button3.addEventListener('click', playRound, false);





// const buttons = Array.from(document.querySelectorAll(".play"));
// buttons.forEach(play => {
//         play.addEventListener("mouseover", mOver)
//     },
//     buttons.forEach(play => {
//         play.addEventListener("mouseout", mOut)

//     }));


// var target = document.querySelector(".button");
// target.addEventListener("mouseover", mOver, false);
// target.addEventListener("mouseout", mOut, false);

// function mOver() {
//     target.setAttribute("style", "background-color:blue;")
// }

// function mOut() {
//     target.setAttribute("style", "background-color:green;")
// }



// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

// Now we should create an array with the rock, paper and scissor values
const possiblePlays = ['rock', 'paper', 'scissor'];

// Now the function to use said array to output a random value
const computerPlay = function (arrayOfPlays) {
    let machineInput = arrayOfPlays[Math.floor(Math.random() * arrayOfPlays.length)];
    return machineInput
}

const machinePlay = computerPlay(possiblePlays);

console.log(machinePlay);

//You have to actually call it's function at least once in order for it to exist in the Global scope

// Now we prompt the user which of the following plays he wants and make sure the output is all lower case, so we can compare in our ifelse function afterwards to give the outcome


// let userPlay = prompt('rock, paper or scissor?').toLowerCase();

//Creating the lost and won phrases, in case you want to change it on all ocurrences afterwards. It`s good practice to not repeat yourself.

// Now the if else statement for all possible outcomes, I couldn't think about a simplier way than writing down everything. 


const lost = 'You have lost against the machine!';
const won = 'You have won against the machine!';