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
            img: "assets/images/bear.png"
        },
        {
            name: "bull",
            img: "assets/images/bull.png"
        },
        {
            name: "dog",
            img: "assets/images/dog.png"
        },
        {
            name: "duck",
            img: "assets/images/duck.png"
        },
        {
            name: "hare",
            img: "assets/images/hare.png"
        },
        {
            name: "hedgehog",
            img: "assets/images/hedgehog.png"
        },
        {
            name: "hippo",
            img: "assets/images/hippo.png"
        },
        {
            name: "koala",
            img: "assets/images/koala.png"
        },
        {
            name: "leopard",
            img: "assets/images/leopard.png"
        },
        {
            name: "lion",
            img: "assets/images/lion.png"
        },
        {
            name: "monkey",
            img: "assets/images/monkey.png"
        },
        {
            name: "panda",
            img: "assets/images/panda.png"
        },
        {
            name: "penguin",
            img: "assets/images/penguin.png"
        },
        {
            name: "pig",
            img: "assets/images/pig.png"
        },
        {
            name: "rabbit",
            img: "assets/images/rabbit.png"
        },
        {
            name: "racoon",
            img: "assets/images/racoon.png"
        },
        {
            name: "sheep",
            img: "assets/images/sheep.png"
        },
        {
            name: "badger",
            img: "assets/images/badger.png"
        },
        {
            name: "snake",
            img: "assets/images/snake.png"
        },
        {
            name: "whale",
            img: "assets/images/whale.png"
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
            gameCard.setAttribute('src', "assets/images/background.png");
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
            gameCard.setAttribute('src', "assets/images/background.png");
            gameCard.setAttribute('data-id', normalLevelArrayPairs[i].img);
            gameCard.addEventListener('click', flipCard);
            grid.appendChild(gameCard);
            console.log("Card id " + gameCard.getAttribute('data-id') + " added to board");
        }
    }


    function checkForMatch() {

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

            alert("Try again");
            cardsChosen = [];
        }

        cardsChosenId = [];
    }

    function noMatch() {
        setTimeout(flipBack, 7);
    }

    function flipBack() {
        document.getElementById("cardImage0").setAttribute("src", "assets/images/background.png");
        document.getElementById("cardImage1").setAttribute("src", "assets/images/background.png");
        document.getElementById("cardImage2").setAttribute("src", "assets/images/background.png");
        document.getElementById("cardImage3").setAttribute("src", "assets/images/background.png");
        document.getElementById("cardImage4").setAttribute("src", "assets/images/background.png");
        document.getElementById("cardImage5").setAttribute("src", "assets/images/background.png");
        document.getElementById("cardImage6").setAttribute("src", "assets/images/background.png");
        document.getElementById("cardImage7").setAttribute("src", "assets/images/background.png");
        document.getElementById("cardImage8").setAttribute("src", "assets/images/background.png");
        document.getElementById("cardImage9").setAttribute("src", "assets/images/background.png");
    }


    // flip the cards //

    function flipCard() {
        var gameCardData = this.getAttribute("data-id");
        var gameCardId = this.getAttribute("id");
        cardsChosen.push(gameCardData);
        cardsChosenId.push(gameCardId);
        this.setAttribute("src", [gameCardData]);
        this.setAttribute("id", [gameCardId]);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 300);
        }
    }
}