// ROCK PAPER SCISSORS

const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0
let computerScore = 0

function playGame(playerChoice) {
    
    const computerChocie = choices[Math.floor(Math.random() * 3)]
    let result = ""

    if(playerChoice === computerChocie){
        result = "It's a Tie"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChocie === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChocie === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChocie === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`
    computerDisplay.textContent = `Computer: ${computerChocie}`
    resultDisplay.textContent = result

    resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++
            playerScoreDisplay.textContent = playerScore
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScore++
            computerScoreDisplay.textContent = computerScore
            break;
    }
}