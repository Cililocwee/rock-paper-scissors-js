function rpsGame(){    
    // make function rockPaperScissors that takes input as "userChoice"
    function rockPaperScissors(userChoice) {
        // take userChoice in variable 'userThrow'
        let userThrow = userChoice;
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
                    score[1]++;
                    return "Rock-Rock! It's a tie!";
                } else if (userThrow === "paper"){
                    score[0]++;
                    return "Rock-Paper! You win! Way to go!";
                } else if (userThrow === "scissors"){
                    score[2]++;
                    return "Rock-Scissors! You lose! Get got.";
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
                    score[1]++;
                    return "Paper-Paper! It's a tie!";
                } else if (userThrow === "scissors"){
                    score[0]++;
                    return "Paper-Scissors! You win! Way to go!";
                } else if (userThrow === "rock"){
                    score[2]++;
                    return "Paper-Rock! You lose! Get got.";
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
                    score[1]++
                    return "Scissors-Scissors! It's a tie!";
                } else if (userThrow === "rock"){
                    score[0]++
                    return "Scissors-Rock! You win! Way to go!";
                } else if (userThrow === "paper"){
                    score[2]++
                    return "Scissors-Paper! You lose! Get got.";
                } else {
                    return "Scissor Error: Scissor me timbers! Something untoward occurred!";
                }
                break;
            // set default message to "something horribly wrong has happened"
            default:
                return "Something horribly wrong has happened. (default)";
                break;
        }
    // end function
    }

    // set variable keepGoing to True
    let keepGoing = true;

    // keep track of wins, draws, loses
    let score =[0,0,0]

    // start while loop (as long as keepGoing is true)
    while(keepGoing){
        
        
        // (prompt user "rock - paper - scissors? >") in variable gamePrompt
        // make sure gamePrompt string is all lower case
        let gamePrompt = prompt("rock - paper - scissors? >").toLowerCase();
        
        // put gamePrompt in rockPaperScissors
        let result = rockPaperScissors(gamePrompt);
        alert(result);

        // ask if user would like to continue or not
        let continuePrompt = prompt("Would you like to continue? >");
        if(continuePrompt === 'n'){
            alert(`You won ${score[0]} times, drew ${score[1]} times, and lost ${score[2]} times! Try again next time.`);
            keepGoing = false;
        }
    }
}