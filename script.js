
//Constants
const choices = Array.from(document.getElementsByClassName("play-game"));
const reset = document.getElementById("reset");
const display = document.getElementById("display");
const score = {
    user: document.getElementById("user-score"),
    computer: document.getElementById("computer-score")
};
//return random number between two values; may equal min but NOT max
const randomNumber = () => Math.round(Math.random()*(3));

//Event Listeners: Actions that occur on webpage 
choices.forEach(choice => choice.addEventListener("click",play));
reset.addEventListener("click", newGame);
//play & newGame are functions 

//Functions 
function play() {
    console.log(this.id)
    const roundResult = playGame(this.id);
    
    display.innerHTML = playResult; 
    incrementScore(playResult);
    //if (checkEnd(scores)) toggleHiddenButton(); 
}

function newGame() {
    display.innerHTML = "Click to play!";
    score.user.innerText = 0; 
    score.computer.innerText = 0; 
}

//function toggleHiddenButtons()
//probs won't need this 

function computerPlay(randomNumber) { 
    
    if (randomNumber <= 1) {
        return "rock"; }
    else if (randomNumber > 1  && randomNumber < 2) { 
        return "paper"; }
    else {
        return "scissors"; }
}

let computerSelection = computerPlay();  
let userSelection = userPlay(); 

function playGame(userSelection, computerSelection) {
    const user = String(userSelection).toLowerCase();
        
        if (user === computerSelection) {
            return "Tie";
        }
        else if (user === "rock"){ 
             if (computerSelection === "paper") {
                 return "Computer wins";
             }
            else { 
                 return "Player wins";
            }
        }
        else if (user === "paper"){
            if (computerSelection === "rock"){
                return "Player wins";
            }
            else { 
                return "Computer wins";
            }
        }
        else if (user === "scissors") {
            if (computerSelection === "rock"){
                return "Computer wins";
            }
            else {
                return "Player wins";
            }
        }        
    }

function incScore(roundResult, currentScore = score) {
  if (roundResult.includes('tie')) return;
  const winner = roundResult.includes('Win') ? "player" : "computer";
  let winScore = parseInt(currentScore[winner].innerText);
  currentScore[winner].innerText = winScore += 1;    
}

function newGame (score, endDisplay = display) {
    const user = parseInt(score.player.innerText);
    const computer = parseInt(score.computer.innerText);
    let result = false; 
    
    if (user === 5 || computer === 5) {
        endDisplay.innerHTML = user >computer ?
            "You win!" : "You lose!";
        result = true;
    }
    return result;
}
            





