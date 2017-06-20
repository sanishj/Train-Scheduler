// will need to create an array of all possible letters

var machineChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//initialize variables
var wins = 0;

var losses = 0;

var guesses = 9;

var maxGuessesLeft = 9;

var defaultGuessMessage = "Choose any Alphabetical key";

var userGuessedLetters = [];

function myFunction() {
    var x = document.getElementById('showHide');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

// display initial values for the wins, losses, and a default message for the guesses so far area
var displayWins = function() {
    document.querySelector('#wins').innerHTML = wins;
};

var displayLosses = function() {
    document.querySelector('#losses').innerHTML = losses;
};

var guessesDefaultMessage = function() {
    document.querySelector('#playerChoicesDisplay').innerHTML = defaultGuessMessage;
};

// create variable for the computer to pickup random numbers
var machineGuess = machineChoices[Math.floor(Math.random() * machineChoices.length)];
console.log(machineGuess);


var remainingGuesses = function() {
    document.querySelector('#maxGuessesLeft').innerHTML = maxGuessesLeft;
};

var updateLetterToGuess = function() {
    this.defaultGuessMessage = this.machineChoices[Math.floor(Math.random() * this.machineChoices.length)];
};

// user choices so far will be displayed below 
var updateGuessesSoFar = function() {
    document.querySelector('#playerChoicesDisplay').innerHTML = userGuessedLetters.join(' & ');
};


// reset values area
var reset = function() {
    totalGuesses = 9;
    maxGuessesLeft = 9;
    userGuessedLetters = [];
    // defaultGuessMessage = "Choose any Alphabetical key";

    updateLetterToGuess();
    remainingGuesses();
    updateGuessesSoFar();
    // guessesDefaultMessage();
}

displayWins();
displayLosses();
// guessesDefaultMessage();
updateLetterToGuess();
remainingGuesses();



//User input area and checker
document.onkeyup = function(event) {
    maxGuessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // var userGuess = event.keyCode;
    // return ((userGuess >= 65 && userGuess <= 90) || userGuess == 8);

    userGuessedLetters.push(userGuess);
    remainingGuesses();
    updateGuessesSoFar();

    if (maxGuessesLeft > 0) {
        if (userGuess == defaultGuessMessage) {
            wins++;
            document.querySelector('#wins').innerHTML = wins;
            //alert user has won this round
            alert("Yeah! You are a better psychic than the computer!");
            reset(); //calling the reset function
        }
    } else if (maxGuessesLeft == 0) {
        document.querySelector('#losses').innerHTML = losses;
        losses++;
        document.querySelector('#losses').innerHTML = losses;
        //alert user has won this round
        alert("Sorry, looks like the computer is a better psychic, maybe try again?");
        reset(); //calling the reset function
    }
};
