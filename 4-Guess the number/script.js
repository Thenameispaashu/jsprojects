const randomNum = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess); 
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please type a valid number')
    } else if(guess < 1){
        alert('Please type greator number then 1')
    }else if(guess > 100){
        alert('Please enter a  number less then 100')
    } else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMess(`Game Over. Random number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMess('You guess it right');
        endGame();
    } else if (guess < randomNum) {
        displayMess('Number is too low');
    } else if (guess > randomNum) {
        displayMess('Number is too high');
    }
}

function displayGuess(guess) {
    userInput.value = ' '
    guessSlot.innerHTML += `${guess} `
    numGuess++ ;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMess(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2> `
    
    
}

function endGame() {
    
}

function newGame() {
    
}
