const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let pscore = 0;
let cscore = 0;


function playGame(playerChoice)
{
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result;

    if (playerChoice === compChoice)
    {
        result = "It's a TIE!";
    }
    else
    {
        switch (playerChoice){
            case "rock":
                if (compChoice === 'paper')
                {
                    result = "Computer Wins!";
                    cscore++;
                }
                else
                {
                    result = "Player Wins!";
                    pscore++;
                }
            break;
            case "paper":
                if (compChoice === 'rock')
                    {
                        result = "Player Wins!";
                        pscore++;
                    }
                    else
                    {
                        result = "Computer Wins!";
                        cscore++;
                    }
            break;
            case "scissors":
                if (compChoice === 'paper')
                    {
                        result = "Player Wins!";
                        pscore++;
                    }
                    else
                    {
                        result = "Computer Wins!";
                        cscore++;
                    }
            break;

        }
    }


    resultDisplay.classList.remove("greenText", "redText");
    if (result === "Player Wins!")
    {
        resultDisplay.classList.add("greenText");
    }
    else if (result === "Computer Wins!") 
    {
        resultDisplay.classList.add("redText");
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${compChoice}`;
    resultDisplay.textContent = result;
    playerScore.textContent = pscore;
    computerScore.textContent = cscore;


}