// simply returns a random string - rock, paper or scissors

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

//prompt user and return string for rock, paper or scissors 

function getHumanChoice() {
    return prompt("Please enter your choice");
}

//global scope score variables

let humanScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];

//rock beats paper beats scissors 
//therefore, if the human chooses the choice `after` the computer choice (in the order RPS) the human wins
//the array is made to loop, i.e., if the index is 2+1, it will return 0, because its length is 3

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

//

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