let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const resetButton = document.querySelector('.reset');

const playGame = (playerChoice) => {
    console.log("userChoise is " + playerChoice);
    const computerChoice = computerchoice();
    console.log("computerChoice is " + computerChoice);

    if (playerChoice === computerChoice) {
        draw();
    } else {
        let userWin = true;
        if (playerChoice == 'rock') {
            userWin = computerChoice == 'scissors' ? true : false;
        }
        else if (playerChoice == 'paper') {
            userWin = computerChoice == 'rock' ? true : false;
        }
        else if (playerChoice == 'scissors') {
            userWin = computerChoice == 'paper' ? true : false;
        }

        if (userWin) {
            playerScore++;
            console.log("You win! Score: " + playerScore + " - " + computerScore);
            document.querySelector('#player-score').textContent = playerScore;
            document.querySelector('#computer-score').textContent = computerScore;
            document.querySelector('.winannounce').textContent = "You win!";
        } else {
            computerScore++;
            console.log("You lose! Score: " + playerScore + " - " + computerScore);
            document.querySelector('#player-score').textContent = playerScore;
            document.querySelector('#computer-score').textContent = computerScore;
            document.querySelector('.winannounce').textContent = "You lose!";
        }
    }
};

const computerchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const choiceId=choice.getAttribute("id");
        playGame(choiceId);
    });
});

const draw = () => {
    console.log("It's a draw!");
    document.querySelector('winannounce').textContent = "It's a draw!";
};

const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('#computer-score').textContent = computerScore;
    document.querySelector('.winannounce').textContent = "Game reset. Make your choice!";
    console.log("Game reset. Scores are now Player: " + playerScore + " - Computer: " + computerScore);
}

resetButton.addEventListener('click', resetGame);
