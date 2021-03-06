console.log("javascript's working");

// variables for the game cards // 

var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
var numberOfCards;
var movesCount;
var gameCard;
var gameCardData;
var gameCardId;
var easyModeCardList;
var easyLevelArrayPairs;
var displayButtons;
var removeCard;
var grid = document.getElementsByClassName("grid");
var gridRow = document.getElementsByClassName("row");
var gridColumn = document.getElementsByClassName("col-sm-12");
var cardsForAllLevels = []

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

    var grid = document.querySelector('.grid');
    console.log("Selector Elements '.grid' found: " + grid.toString());


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

    // close modal when level is picked //


    $('#easyButton').attr("data-dismiss", "modal");
    $('#normalButton').attr("data-dismiss", "modal");
    $('hardButton').attr("data-dismiss", "modal");


    // restart game to bring modal back up  //

    $(document).ready(function () {
        $("#restartButton").click(function () {
            $(".modal").modal('show');
        });
    });

    // restart game button to remove all cards on click //

    document.getElementById("restartButton").addEventListener("click", removeDeck);
    function removeDeck() {
        document.getElementById("game-grid container-fluid").innerHTML = ""

        document.getElementById("game-grid container-fluid").innerHTML = `<div class="grid"></div>`

    }


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

    function easy() {
        for (i = 0; i < easyLevelArrayPairs.length; i++) {
            var gameCard = document.createElement('img');
            gameCard.setAttribute('src', "images/background.png");
            gameCard.setAttribute('data-id', easyLevelArrayPairs[i].img);
            gameCard.setAttribute('id', `cardImage${i}`);
            gameCard.addEventListener('click', flipCard);
            grid.appendChild(gameCard);
            console.log("Card id " + gameCard.getAttribute('data-id') + " added to board");
        }
    }
    //  normal level board //

    var normalModeCardList = cardList.slice(0, 10);

    // make normal level pairs //

    var normalLevelArrayPairs = normalModeCardList.concat(normalModeCardList);

    shuffle(normalLevelArrayPairs);

    // if normal mode button is clicked //

    normalButton.addEventListener('click', normal);

    function normal() {
        for (let i = 0; i < normalLevelArrayPairs.length; i++) {

            var gameCard = document.createElement('img');
            gameCard.setAttribute('src', "images/background.png");
            gameCard.setAttribute('data-id', normalLevelArrayPairs[i].img);
            gameCard.setAttribute('id', `cardImage${i}`);
            gameCard.addEventListener('click', flipCard);
            grid.appendChild(gameCard);
            console.log("Card id " + gameCard.getAttribute('data-id') + " added to board");
        }
    }

    //  hard level board //

    var hardModeCardList = cardList.slice(0, 15);


    // make hard level array pairs //


    var hardLevelArrayPairs = hardModeCardList.concat(hardModeCardList);

    var cardsForAllLevels = hardLevelArrayPairs;

    shuffle(hardLevelArrayPairs);

    // event listener for hard button //

    hardButton.addEventListener('click', hard);

    function hard() {
        for (let i = 0; i < hardLevelArrayPairs.length; i++) {

            var gameCard = document.createElement('img');
            gameCard.setAttribute('src', "images/background.png");
            gameCard.setAttribute('data-id', hardLevelArrayPairs[i].img);
            gameCard.setAttribute('id', `cardImage${i}`);
            gameCard.addEventListener('click', flipCard);
            grid.appendChild(gameCard);
            console.log("Card id " + gameCard.getAttribute('data-id') + " added to board");
        }
    }


    // count how many moves //

    var movesCount = 0;

    function checkForMatch() {

        movesCount++;
        console.log("I have been called " + movesCount + " times");
        document.getElementById("result").innerHTML=movesCount
    

    let cardOne = cardsChosenId[0]
    let cardTwo = cardsChosenId[1]

    console.log("checkForMatch function executing");

    var cardsMatch = cardsChosen[0] === cardsChosen[1]

    console.log(cardsMatch)

    // if there's a match //

    if (cardsMatch) {

        console.log(cardsChosen[0])
        console.log(cardsChosen[1])

        // there's a match //

        alert("Match!");
        cardsWon.push(cardsChosen)
        console.log(cardsWon)

        var removeCard = document.querySelectorAll(`[data-id="${cardsChosen[0]}"]`)

        console.log(removeCard)

        removeCard[0].classList.add('hidden')
        removeCard[1].classList.add('hidden')
        cardsChosen = [];
    }

    else {

        noMatch()

        // no match, try again //

        cardsChosen = [];
    }

    // alert to appear when all pairs are found //

    if ($('.grid').children(':visible').length == 0) {

        // action when all are hidden //

        alert("you've won")
        document.getElementById("result").innerHTML = "You've matched all of the pairs"

    }

    cardsChosenId = [];
}


function noMatch() {
    setTimeout(flipBack, 400);
}

function flipBack() {
    document.getElementById("cardImage0").setAttribute("src", "images/background.png");
    document.getElementById("cardImage1").setAttribute("src", "images/background.png");
    document.getElementById("cardImage2").setAttribute("src", "images/background.png");
    document.getElementById("cardImage3").setAttribute("src", "images/background.png");
    document.getElementById("cardImage4").setAttribute("src", "images/background.png");
    document.getElementById("cardImage5").setAttribute("src", "images/background.png");
    document.getElementById("cardImage6").setAttribute("src", "images/background.png");
    document.getElementById("cardImage7").setAttribute("src", "images/background.png");
    document.getElementById("cardImage8").setAttribute("src", "images/background.png");
    document.getElementById("cardImage9").setAttribute("src", "images/background.png");
    document.getElementById("cardImage10").setAttribute("src", "images/background.png");
    document.getElementById("cardImage11").setAttribute("src", "images/background.png");
    document.getElementById("cardImage12").setAttribute("src", "images/background.png");
    document.getElementById("cardImage13").setAttribute("src", "images/background.png");
    document.getElementById("cardImage14").setAttribute("src", "images/background.png");
    document.getElementById("cardImage15").setAttribute("src", "images/background.png");
    document.getElementById("cardImage16").setAttribute("src", "images/background.png");
    document.getElementById("cardImage17").setAttribute("src", "images/background.png");
    document.getElementById("cardImage18").setAttribute("src", "images/background.png");
    document.getElementById("cardImage19").setAttribute("src", "images/background.png");
    document.getElementById("cardImage20").setAttribute("src", "images/background.png");
    document.getElementById("cardImage21").setAttribute("src", "images/background.png");
    document.getElementById("cardImage22").setAttribute("src", "images/background.png");
    document.getElementById("cardImage23").setAttribute("src", "images/background.png");
    document.getElementById("cardImage24").setAttribute("src", "images/background.png");
    document.getElementById("cardImage25").setAttribute("src", "images/background.png");
    document.getElementById("cardImage26").setAttribute("src", "images/background.png");
    document.getElementById("cardImage27").setAttribute("src", "images/background.png");
    document.getElementById("cardImage28").setAttribute("src", "images/background.png");
    document.getElementById("cardImage29").setAttribute("src", "images/background.png");
}

// flip the cards //

function flipCard() {
    var gameCardData = this.getAttribute("data-id");
    var gameCardId = this.getAttribute("id");
    cardsChosen.push(gameCardData);
    cardsChosenId.push(gameCardId);
    this.setAttribute("src", [gameCardData]);
    this.setAttribute("id", [gameCardId]);

    //if (cardsChosenId[0] === cardsChosenId[1]) {

    //cardsChosen = [];
    //flipBack()

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 300);
    }
}}
