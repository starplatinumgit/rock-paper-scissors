function getComputerChoice() {
    randomVal = Math.random() * 100;
    console.log(randomVal);
    if (randomVal <= 100/3) {
        return "rock";
    }
    else if (randomVal > (100/3)*2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Please enter your choice");
}

let humanScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];

//rock loses to paper loses to scissors loses to (loop around - rock)
//thus if the human chooses the choice `after` the computer choice (in the order RPS) the human wins

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    humanChoiceIndex = options.indexOf(humanChoice);
    computerChoiceIndex = options.indexOf(computerChoice);

    if (humanChoice === computerChoice) {
        console.log(`${humanChoice} and ${computerChoice}... It's a tie! Try again:`)
        playRound(getHumanChoice(), getComputerChoice());
        }
    
    else if (humanChoiceIndex === (computerChoiceIndex+1) % options.length) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
    }

}

function playGame() {
    console.log("Welcome to Rock Paper Scissors! Try your luck...");
    for (let step = 0; step < 5; step++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`The score is ${humanScore} to ${computerScore}! You win, human!`);
    }
    else {
        console.log(`The score is ${computerScore} to ${humanScore}! You lose, human...`);
    }
}

playGame();