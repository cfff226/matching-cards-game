console.log("javascript's working");

// variables for the game cards // 

var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
var numberOfCards;
var movesCount;
var gameCard;
var gameCardId;
var easyModeCardList;
var easyLevelArrayPairs;
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
    console.log("createBoard called");

    let cardList = [
        {
            name: "bear",
            img: "images/bear.png"
        },
        {
            name: "bull",
            img: "images/bull.png"
        },
        {
            name: "dog",
            img: "images/dog.png"
        },
        {
            name: "duck",
            img: "images/duck.png"
        },
        {
            name: "hare",
            img: "images/hare.png"
        },
        {
            name: "hedgehog",
            img: "images/hedgehog.png"
        },
        {
            name: "hippo",
            img: "images/hippo.png"
        },
        {
            name: "koala",
            img: "images/koala.png"
        },
        {
            name: "leopard",
            img: "images/leopard.png"
        },
        {
            name: "lion",
            img: "images/lion.png"
        },
        {
            name: "monkey",
            img: "images/monkey.png"
        },
        {
            name: "panda",
            img: "images/panda.png"
        },
        {
            name: "penguin",
            img: "images/penguin.png"
        },
        {
            name: "pig",
            img: "images/pig.png"
        },
        {
            name: "rabbit",
            img: "images/rabbit.png"
        },
        {
            name: "racoon",
            img: "images/racoon.png"
        },
        {
            name: "sheep",
            img: "images/sheep.png"
        },
        {
            name: "badger",
            img: "images/badger.png"
        },
        {
            name: "snake",
            img: "images/snake.png"
        },
        {
            name: "whale",
            img: "images/whale.png"
        }
    ];
    console.log("image list created");


    // shuffle function //

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    // modal //

    $(window).on('load', function () {
        $('.modal').modal('show');
    });

    // disable clicking outside of modal //

    $('.modal').modal({
        backdrop: 'static',
        keyboard: false
    });

    // enable buttons once modal has been restarted //

    document.getElementById("restartButton").addEventListener("click", displayButtons);

    function displayButtons() {
        $('#easyButton').attr("disabled", false);
        $('#normalButton').attr("disabled", false);
        $('#hardButton').attr("disabled", false);
    }

    // easy level board //

    var easyModeCardList = cardList.slice(0, 5);

    var easyLevelArrayPairs = easyModeCardList.concat(easyModeCardList);

    shuffle(easyLevelArrayPairs);


    // if easy mode button is clicked //

    easyButton.addEventListener('click', easy);






}
