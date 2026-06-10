console.log("test2");


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

function getHumanChoice() {
    prompt = ("Please enter your choice");
    return prompt;
}

console.log(getComputerChoice());

choice = getHumanChoice();
console.log(choice);
