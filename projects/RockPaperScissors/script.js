const userChoice = document.getElementById('user-choice')
const computerChoice = document.getElementById('computer-choice')
const finalResult = document.getElementById('result')
const userScore = document.getElementById('user-score')
const computerScore = document.getElementById('computer-score')

userScore.innerHTML = 0
computerScore.innerHTML = 0

// if we want to add more buttons we should make a class name for each R/P/S button
const buttonChoices = document.querySelectorAll('button')

let userID
let computerID
let result

// we are getting the id of the button we pressed, then we display it's content/text
buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) => {
    userID = e.target.id
    userChoice.innerHTML = userID

    generateComputerChoice()
    displayResult()
}))

// generating a random computer choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * buttonChoices.length) + 1 // the number of choice buttons
    console.log(randomNumber)

    switch (randomNumber){
        case 1:
            computerID = 'rock'
            break
        case 2:
            computerID = 'paper'
            break
        case 3:
            computerID = 'scissors'
            break   
    }

    computerChoice.innerHTML = computerID
}

// gets the result and displays it
function displayResult() {
    switch (userID + computerID){
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            result = "You LOST!"
            computerScore.innerHTML++
            break
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            result = "You WON!"
            userScore.innerHTML++
            break
        default:
            result = "It's a DRAW!"
            break
    }       

    finalResult.innerHTML = result
}