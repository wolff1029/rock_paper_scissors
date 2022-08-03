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

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        console.log('playerSelection = ' + playerSelection);
        console.log(`computerSelection = ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();