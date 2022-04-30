'use strict';

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
let userPlay = prompt('rock, paper or scissor?').toLowerCase();

//Creating the lost and won phrases, in case you want to change it on all ocurrences afterwards. It`s good practice to not repeat yourself.
const lost = 'You have lost against the machine!';
const won = 'You have won against the machine!';

// Now the if else statement for all possible outcomes, I couldn't think about a simplier way than writing down everything. 
if (machinePlay == userPlay) {
    console.log('You should try again! It was a draw! Refresh the Page!');
} else if (machinePlay === "paper" && userPlay === "scissor") {
    console.log(won);
} else if (userPlay === "paper" && machinePlay === "rock") {
    console.log(won);
} else if (machinePlay === "scissor" && userPlay === "rock") {
    console.log(won);
} else if (userPlay === "rock" && machinePlay === "scissor") {
    console.log(won);
} else if (machinePlay === "scissor" && userPlay === "rock") {
    console.log(won);
} else if (userPlay === "rock" && machinePlay === "scissor") {
    console.log(lost);
} else if (userPlay === "rock" && machinePlay === "paper") {
    console.log(lost);
} else if (userPlay === "paper" && machinePlay === "scissor") {
    console.log(lost);
} else if (userPlay === "scissor" && machinePlay === "rock") {
    console.log(lost);
} else console.log('Your input is probably not valid!');