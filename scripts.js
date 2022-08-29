const rock = document.getElementById('rock-pic');
const paper = document.getElementById('paper-pic');
const scissors = document.getElementById('scissors-pic');

rock.addEventListener('click', () => {
    rpsGame("rock"); // it should take input and choose rock
    updateScore(winNumber,loseNumber,drawNumber,eachRound);
});

paper.addEventListener('click', () => {
    rpsGame("paper");
    updateScore(winNumber,loseNumber,drawNumber,eachRound);
});

scissors.addEventListener('click', () => {
    rpsGame("scissors");
    updateScore(winNumber,loseNumber,drawNumber,eachRound);
});

function rpsGame(inputChoice){    
    function rockPaperScissors(userThrow) {
        
        // take random number between 1 - 3 in computerThrow
        let computerThrow = Math.floor(Math.random()*3);
        // * 0 is rock 1 is paper 2 is scissors *

        // start switch using the computerThrow
        switch(computerThrow){

            case 0:
                if(userThrow === "rock"){
                    drawNumber++;
                    eachRound =  "The computer chose ROCK and you also chose ROCK! It's a TIE!";
                } else if (userThrow === "paper"){
                    winNumber++;
                    eachRound = "The computer chose ROCK and you chose PAPER! You WIN! Way to go!";
                } else if (userThrow === "scissors"){
                    loseNumber++;
                    eachRound = "The computer chose ROCK and you chose SCISSORS! You LOSE! Get got.";
                } else {
                    eachRound = "Rock Error: Something unexpected rockurred.";
                }
                break;

            case 1:
                if(userThrow === "paper"){
                    drawNumber++;
                    eachRound = "The computer chose PAPER and you also chose PAPER! It's a TIE!";
                } else if (userThrow === "scissors"){
                    winNumber++;
                    eachRound = "The computer chose PAPER and you chose SCISSORS! You WIN! Way to go!";
                } else if (userThrow === "rock"){
                    loseNumber++;
                    eachRound = "The computer chose ROCK and you chose PAPER! You LOSE! Get got.";
                } else {
                    eachRound = "Paper Error: Something tear-able has happened.";
                }
                break;
      
            case 2:
                if(userThrow === "scissors"){
                    drawNumber++
                    eachRound = "The computer chose SCISSORS and you also chose SCISSORS! It's a TIE!";
                } else if (userThrow === "rock"){
                    winNumber++
                    eachRound = 'The computer chose SCISSORS and you chose ROCK! You WIN! Way to go!';
                } else if (userThrow === "paper"){
                    loseNumber++
                    eachRound = "The computer chose SCISSORS and you chose PAPER! You LOSE! Get got.";
                } else {
                    eachRound = "Scissor Error: Scissor me timbers! Something untoward occurred!";
                }
                break;
           
            default:
                eachRound = "Something horribly wrong has happened. (default)";
                break;
        }
    // end rockPaperScissors
    }
    // defined above, called here
    rockPaperScissors(inputChoice);    
    }

function updateScore(wins, losses, draws, announcement){
        document.querySelector('#win-id').textContent = wins;
        document.querySelector('#lose-id').textContent = losses;
        document.querySelector('#draw-id').textContent = draws;
        document.querySelector('#scroll').textContent = announcement;
    }

const roundAnnouncement = document.getElementById('scroll');
let eachRound;    // default message

const winScore = document.getElementById('win-id');
let winNumber = 0; // default score

const loseScore = document.getElementById('lose-id');
let loseNumber = 0; // default score

const drawScore = document.getElementById('draw-id');
let drawNumber = 0; // default score
