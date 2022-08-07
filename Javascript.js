//Base Values for counting and score keeping
let rock = 0;
let paper = 0;
let scissors = 0;
let npcrock = 0;
let npcpaper = 0;
let npcscissors = 0;
let ties = 0;
let playerScore = 0; 
let npcScore = 0;
let thisHolder = "" ;


//starts or restarts the game setting all values to 0
function restart() {
    enableButtons();
    playerScore = 0;
    npcScore = 0;
    playerScore2.innerText = ""
    npcScore2.innerText = "";
    lastRound.textContent = ""
}

//checks the id of the clicked event and runs a round based on the clicked event
function playRound(computerSelection) {
    computerSelection = computerPlay();

 if (this.id == "rock") {
         winSchema("Rock", computerSelection)
    } else  if (this.id == "paper") {
         winSchema("Paper", computerSelection)
    } else  if (this.id == "scissors") {
         winSchema("Scissors", computerSelection)
    }

    thisHolder = this.innerText;
    lastRound.textContent = `Player Choice: ${thisHolder} | NPC Choice: ${computerSelection}`


}

//Defines the parameters for the NPC's choices
// returns a string based on the randomzied number between 1 and 3
function  computerPlay() {
    let a = Math.floor(Math.random() * 3) + 1;
    return (
        a == 1 ? "Rock"
        : a == 2 ? "Paper"
        : "Scissors" 
    )
    
} 

//Determines if the player or npce has won 5 rounds yet. If the player wins...., if the npc wins ...
function winSchema(a, b) {




    
    //Rock POV        
    a == "Rock" && b == "Scissors" ? rockCount()
    : a == "Rock" && b == "Paper" ? npcPaperCount()
    : a === "Paper" && b === "Scissors" ? npcScissorCount()
    : a === "Paper" && b === "Rock" ? paperCount()
    : a === "Scissors" && b === "Rock" ? npcRockCount()
    : a === "Scissors" && b === "Paper" ? scissorCount()
    : "eh"


    playerScore2.innerText = `Player Score: ${playerScore}`;
    npcScore2.innerText = `Computer Score: ${npcScore}`;

    if (playerScore == 5) {
        playerScore2.innerText = "You won the game! Great job! :D"
        npcScore2.innerText = "";
        disableButtons();

    } else if (npcScore == 5) {
        npcScore2.innerText = "The NPC won the game, better luck next time :("
        playerScore2.innerText = ""
        disableButtons();

    }
}

//disables the Rock, Paper, and Scissors Buttons
function disableButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

//re-enables the Rock Paper and Scissor buttons
function enableButtons() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}


//counter functions 
//player Rock Win Counter

function rockCount() {
    playerScore += 1;
}

//player Paper Win Counter
function paperCount() {
    playerScore +=1;
}

//player Scissor Win Counter
function scissorCount() {
    playerScore +=1;
}

//npc Rock Win Counter
function npcRockCount() {
    npcScore += 1;
}


//npc Paper Win Counter
function npcPaperCount() {
    npcScore += 1;
}

//npc Paper Win Counter
function npcScissorCount() {
}





//DOM Element
//References the buttons created in the html
const rockButton = document.querySelector ("#rock")
const paperButton = document.querySelector ("#paper")
const scissorsButton = document.querySelector ("#scissors")
const restartButton = document.querySelector ("#restart")

//listens for the clicks and runs playRound after each click
rockClick = rockButton.addEventListener("click", playRound);
paperClick = paperButton.addEventListener("click", playRound);
scissorClick = scissorsButton.addEventListener("click", playRound);
restartClick = restartButton.addEventListener("click", restart);


//references previosly created score element.
const score = document.querySelector (".score")

//references previously created content element
const content = document.querySelector (".content")

//Creates Player Score Bucket
const playerScore2 = document.createElement("playerScore");
playerScore2.setAttribute("id", "playerScore2")
//Creates Ai Score Bucket
const npcScore2 = document.createElement("npcScore");
npcScore2.setAttribute("id", "npcScore2")
score.append(playerScore2,npcScore2);

//creates Last Round Element
const lastRound = document.createElement("div");
lastRound.classList.add ("lastRound");
content.append(lastRound);
lastRound.style.cssText = "margin: 20px";

const playerChoice = document.createElement("SPAN")
playerChoice.textContent = thisHolder;
const npcChoice = document.createElement("SPAN");
npcChoice.textContent = computerPlay();










/*
function colorWin() {
    if (npcScore < playerScore) {
        npcChoice.style.cssText = "color:red"
        playerChoice.style.cssText = "color:green";
        return lastRound.textContent = `Player Choice: ${playerChoice.innerText}  NPC Choice: ${npcChoice.innerText}`


    } else if (npcScore > playerScore) {
        npcChoice.style.cssText = "color:green"
        playerChoice.style.cssText = "color:red";
        return lastRound.textContent = `Player Choice: ${playerChoice.innerText}  NPC Choice: ${npcChoice.innerText}`
    }
}
*/


