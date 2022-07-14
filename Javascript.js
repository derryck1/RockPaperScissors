//Base Values for counting
let rock = 0;
let paper = 0;
let scissors = 0;
let npcrock = 0;
let npcpaper = 0;
let npcscissors = 0;
let ties = 0;
let playerScore = 0; 
let npcScore = 0;
let totalRounds;


//runs 5 Rounds of Rock Paper Scissors and Returns the winner of the game,  the amount of rounds played, 
//how many games the player won, and how many games the npc won.
function game() {
    for (i = 0; i < 5; i++) {
        playRound()
        playerScore = rock + paper + scissors
        npcScore = npcrock + npcpaper + npcscissors
        totalRounds = npcScore + playerScore + ties;
        console.log(`Current Score; Player: ${playerScore}, NPC: ${npcScore}, ${ties} Ties`)
    }
    
    return (
        playerScore > npcScore ? `YOU WIN THE ENTIRE GAME. GREAT JOB. There were ${totalRounds} rounds,
you won ${playerScore} of them, the npc won ${npcScore} of them, and there were ${ties} ties.`
        
        : npcScore > playerScore ?`THE NPC WON THE ENTIRE GAME. TOUGH LUCK. There were ${totalRounds} rounds, 
you won ${playerScore} of them, the npc won ${npcScore} of them, and there were ${ties} ties.`
    
        : `Game cancelled. The player didn't enter Rock, Paper or Scissors`
        )
}


//runs a single game of rock paper scissors
function playRound(playerSelection, computerSelection) {
    let playerPlay = prompt("Rock, Paper, or Scissors", "?");
    playerSelection = playerPlay;
    computerSelection = computerPlay();
    return winSchema(playerSelection, computerSelection);
}

//Defines the paramters for the NPC's choices
// returns a string based on the randomzied number between 1 and 3
function  computerPlay() {
    let a = Math.floor(Math.random() * 3) + 1;
    return (
        a == 1 ? "Rock"
        : a == 2 ? "Paper"
        : a == 3 ? "Scissors" 
        : "Computer Error"
    )
}

//creates the parameters for what a win looks like through boolean comparisons

function winSchema(a, b) {
    return ( 
    //Rock POV        
    a == "Rock" && b == "Scissors" ? rockCount()
    : a == "Rock" && b == "Paper" ? npcPaperCount()
    : a == "Rock" && b == "Rock" ? tieCount() 
    //Paper POV
    : a === "Paper" && b === "Scissors" ? npcScissorCount()
    : a === "Paper" && b === "Rock" ? paperCount()
    : a === "Paper" && b === "Paper" ? tieCount()
    //Scissors POV
    : a === "Scissors" && b === "Scissors" ? tieCount()
    : a === "Scissors" && b === "Rock" ? npcRockCount()
    : a === "Scissors" && b === "Paper" ? scissorCount()
    : invalidRound()
    )
}

//counter functions

//Tie counter. Adds to counter when there is a tie, and re-runs the game of Rock Paper Scissors
function tieCount() {
    console.log("This round was a tie! Go again!")
    ties += 1;
    console.log(`Current Score; Player: ${playerScore}, NPC: ${npcScore}, ${ties} Ties`)
    playRound();
    
}

//player Rock Win Counter
function rockCount() {
    console.log("You won this round with Rock! Nice!")
    rock += 1;
}

//player Paper Win Counter
function paperCount() {
    console.log("You won this round with Paper! Nice!")
    paper += 1;

}

//player Scissor Win Counter
function scissorCount() {
    console.log("You won this round with Scissors! Nice!")
    scissors += 1;

}

//npc Rock Win Counter
function npcRockCount() {
    console.log("The computer won this round with Rock! Damn")
    npcrock += 1;
}

//npc Paper Win Counter
function npcPaperCount() {
    console.log("The computer won this round with Paper! Damn")
    npcpaper += 1;
}

//npc Scissor Win Counter
function npcScissorCount() {
    console.log("The computer won this round with Scissors! Damn")
    npcscissors += 1;
}

//invalid game function

function invalidRound() {
    console.log("Enter a valid value of either Rock, Paper or Scissors")
    playRound();
    
}

    console.log(game());