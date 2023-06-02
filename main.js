const WIN_TEXT = 'You beat the computer - congrats!';
const LOSE_TEXT = 'You lose - game over!';

function getComputerChoice() {
    let number = Math.random();
    let choice = 'scissors'
    if (number <= 0.33) {
        choice = 'rock';
    } else if (number <= 0.66) {
        choice = 'paper';
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock!';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors!';
    }
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return 'Tie!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper!';
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return 'Tie!';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper!';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors!';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return 'Tie!';
    }
}
function updateResult(result) {
    let resultDiv = document.querySelector('.result')
    if (resultDiv.textContent != LOSE_TEXT && resultDiv.textContent != WIN_TEXT) {
        resultDiv.textContent = result;
    }
    return resultDiv;
}
function handleOnClick(e) {
    //console.log(e);
    let playerSelection = e.target.innerHTML;
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);
    let resultDiv = updateResult(result);


    let playerScoreDiv = document.querySelector('.player-score')
    let compScoreDiv = document.querySelector('.computer-score')

    if (result.includes('Win') && resultDiv.textContent != LOSE_TEXT &&  resultDiv.textContent != WIN_TEXT) {
        let currentScoreArray = playerScoreDiv.textContent.split(':');
        let newScore = +currentScoreArray[currentScoreArray.length - 1] + 1;
        console.log(`PlayerScore = ${newScore}`);
        playerScoreDiv.textContent = `Player Score: ${newScore}`;
        if (newScore == 5) {
            resultDiv.textContent = WIN_TEXT;
        }

    }
    if (result.includes('Lose') && resultDiv.textContent != LOSE_TEXT && resultDiv.textContent != WIN_TEXT) {
        let currentScoreArray = compScoreDiv.textContent.split(':');
        let newScore = +currentScoreArray[currentScoreArray.length - 1] + 1;
        console.log(`ComputerScore = ${newScore}`);
        compScoreDiv.textContent = `Computer Score: ${newScore}`;
        if (newScore == 5) {
            resultDiv.textContent = LOSE_TEXT;
        }
    }

}


const buttons = Array.from(document.querySelectorAll('.button'));
buttons.forEach(button => button.addEventListener('click', handleOnClick));
let playerScoreDiv = document.querySelector('.player-score')
let compScoreDiv = document.querySelector('.computer-score')
playerScoreDiv.textContent = 'Player Score: 0';
compScoreDiv.textContent = 'Computer Score: 0';