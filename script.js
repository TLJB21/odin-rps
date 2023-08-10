

function getComputerChoice () {
    const choice = ['rock', 'paper', 'scissors'];
    return choice [(Math.floor(Math.random() * choice.length))];
}

getComputerChoice ();

function playRound (playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return ('Its a tie!');
    }

    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You win! ${playerSelection} beats  ${computerSelection}`;
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You win! ${playerSelection} beats ${computerSelection}`;

    }

    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }

    else {
        return `You Lose! ${playerSelection} is beaten by ${computerSelection}`;
    }
}

const playerSelection = prompt('Choose Rock, Paper or Scissors').toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))