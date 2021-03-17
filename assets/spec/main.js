console.log("javascript's working");

// variables for the game cards // 

var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
var numberOfCards;
var movesCount;
var gameCard;
var gameCardId;
var displayButtons;

// variables for the game information //

var result = document.querySelector('result');

// variables for each level //

var restartButton = document.getElementById("restartButton");
var easyButton = document.getElementById("easyButton");
var normalButton = document.getElementById("normalButton");
var hardButton = document.getElementById("hardButton");


// array and function to create the game board //

document.addEventListener('DOMContentLoaded', createBoard());

function createBoard() {
}
