const choices = document.querySelectorAll('button');

choices.forEach((button) => {

    button.addEventListener('click', () => {
        alert(button.id);
    });
});

const rock = document.getElementById('rock-pic');
const paper = document.getElementById('paper-pic');
const scissors = document.getElementById('scissors-pic');

rock.addEventListener('click', () => {
    rpsGame("rock"); // it should take input and choose rock
});

paper.addEventListener('click', () => {
    rpsGame("paper");
});

scissors.addEventListener('click', () => {
    rpsGame("scissors");
});



function rpsGame(userThrow){    
    // make function rockPaperScissors that takes input as "userThrow"
    function rockPaperScissors(userThrow) {
        
        // take random number between 1 - 3 in computerThrow
        let computerThrow = Math.floor(Math.random()*3);
        // * 0 is rock 1 is paper 2 is scissors *

        // start switch using the computerThrow
        switch(computerThrow){
            // in the event that computerThrow is 0:
            case 0:
                // if the userThrow is rock --> log "Tie" + increment score[1]
                // if the userThrow is paper --> log "Win" + increment score[0]
                // if the userThrow is scissors --> log "Lose" + increment score[2]
                if(userThrow === "rock"){
                    drawNumber++;
                    //return "Rock-Rock! It's a tie!";
                } else if (userThrow === "paper"){
                    winNumber++;
                    //return "Rock-Paper! You win! Way to go!";
                } else if (userThrow === "scissors"){
                    loseNumber++;
                    //return "Rock-Scissors! You lose! Get got.";
                } else {
                    return "Rock Error: Something unexpected rockurred.";
                }
                break;
            // in the event that computerThrow is 1:
            case 1:
                // if the userThrow is rock --> log "Lose" + increment score[2]
                // if the userThrow is paper --> log "Tie" + increment score[1]
                // if the userThrow is scissors --> log "Win" + increment score[0]
                if(userThrow === "paper"){
                    drawNumber++;
                    //return "Paper-Paper! It's a tie!";
                } else if (userThrow === "scissors"){
                    winNumber++;
                    //return "Paper-Scissors! You win! Way to go!";
                } else if (userThrow === "rock"){
                    loseNumber++;
                    //return "Paper-Rock! You lose! Get got.";
                } else {
                    return "Paper Error: Something tear-able has happened.";
                }
                break;
            // in the event that computerThrow is 2:
            case 2:
                // if the userThrow is rock --> log "Win" + increment score[0]
                // if the userThrow is paper --> log "Lose" + increment score[2]
                // if the userThrow is scissors --> log "Tie" + increment score[1]
                if(userThrow === "scissors"){
                    drawNumber++
                    //return "Scissors-Scissors! It's a tie!";
                } else if (userThrow === "rock"){
                    winNumber++
                    //return "Scissors-Rock! You win! Way to go!";
                } else if (userThrow === "paper"){
                    loseNumber++
                    //return "Scissors-Paper! You lose! Get got.";
                } else {
                    //return "Scissor Error: Scissor me timbers! Something untoward occurred!";
                }
                break;
            // set default message to "something horribly wrong has happened"
            default:
                return "Something horribly wrong has happened. (default)";
                break;
        }
    // end function
    }

    let result = rockPaperScissors(userThrow);
    alert(`${winNumber} + ${loseNumber} + ${drawNumber}`);
    
    }


const winScore = document.getElementById('win-id');
let winNumber = 0;
winScore.textContent = winNumber;

const loseScore = document.getElementById('lose-id');
let loseNumber = 0;
loseScore.textContent = loseNumber;

const drawScore = document.getElementById('draw-id');
let drawNumber = 0;
drawScore.textContent = drawNumber;
