

function getComputerChoice () {
    const choice = ['rock', 'paper', 'scissors'];
    return choice [(Math.floor(Math.random() * choice.length))];
}

function game () {

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
    return playRound(playerSelection,computerSelection);
}


const playerSelection = prompt('Choose Rock, Paper or Scissors').toLowerCase();
const computerSelection = getComputerChoice();

console.log(game());