//
function  computerPlay() {
    let a = Math.floor(Math.random() * 3) + 1;
     
    return (
        a == 1 ? "Rock"
        : a == 2 ? "Paper"
        : "Scissors"
    )
}
//
function gameOfRockPaperScissors(playerSelection, computerSelection) {
    let playerPlay = prompt("Rock, Paper, or Scissors", "?");
    playerSelection = playerPlay;
    computerSelection = computerPlay();
    return winSchema(playerSelection, computerSelection);
}

function winSchema(a, b) {
    return ( 
    //Rock POV
    a == "Rock" && b == "Scissors" ? "Rock beats Scissors, You Win!"
    : a == "Rock" && b == "Paper" ? "Rock loses to  Paper, You Lose!"
    : a == "Rock" && b == "Rock" ? "Rock can't beat Rock, it's a Tie!"
    //Paper POV
    : a === "Paper" && b === "Scissors" ? "Paper loses Scissors, You Lose!"
    : a === "Paper" && b === "Rock" ? "Paper beats Rock, You Win!"
    : a === "Paper" && b === "Paper" ? "Paper can't beat Paper, it's a Tie!"
    //Scissors POV
    : a === "Scissors" && b === "Scissors" ? "Scissors cant beat Scissors, it's a tie!"
    : a === "Scissors" && b === "Rock" ? "Scissors loses to Rock, You Lose!"
    : a === "Scissors" && b === "Paper" ? "Scissors beats Paper, You Win!!"
    : "Enter a valid value of either Rock, Paper or Scissors"
    )    
}

console.log(gameOfRockPaperScissors());

