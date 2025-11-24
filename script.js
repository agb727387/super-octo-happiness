console.info('ʀᴏᴄᴋ ᴘᴀᴘᴇʀ ꜱᴄɪꜱꜱᴏʀꜱ ᴄᴏɴꜱᴏʟᴇ ɢᴀᴍᴇ');

/*

Computer generates a random value from 1-3 (inclusive), and the numbers represent the following:

1 = rock
2 = paper
3 = scissors

*/

function getHumanChoice()
{
    let choice = prompt('Make a choice: Rock, Paper, or Scissors');
    let humanChoice = choice.toLowerCase();

    if (humanChoice === 'rock')
    {
        console.log('You chose Rock');
        return humanChoice;
    }
    else if (humanChoice === 'paper')
    {
        console.log('You chose paper');
        return humanChoice;
    }
    else if (humanChoice === 'scissors')
    {
        console.log('You chose Scissors')
        return humanChoice;
    }
}
    
function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3) + 1; // Randum number generator between 1-3 (inclusive)
    let computerChoice = randomNumber;

    if (computerChoice === 1)
    {
        console.log('Computer chose Rock');
        return computerChoice;
    }
    else if (computerChoice === 2)
    {
        console.log('Computer chose Paper');
        return computerChoice;
    }
    else
    {
        console.log('Computer chose Scissors');
        return computerChoice;
    }
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        if (humanChoice === 'rock' && computerChoice === 1 || 
            humanChoice === 'paper' && computerChoice === 2 || 
            humanChoice === 'scissors' && computerChoice === 3)
            console.log('Tie!');
        else if (humanChoice === 'rock' && computerChoice === 2)
        {
            console.log('You lose! Paper beats rock');
            computerScore++;
        }
        else if (humanChoice === 'rock' && computerChoice === 3)
        {
            console.log('You win! Rock beats scissors');
            humanScore++;
        }
        else if (humanChoice === 'paper' && computerChoice === 1)
        {
            console.log('You win! Paper beats rock');
            humanScore++;
        }
        else if (humanChoice === 'paper' && computerChoice === 3)
        {
            console.log('You lose! Scissors beats paper');
            computerScore++;
        }
        else if (humanChoice === 'scissors' && computerChoice === 1)
        {
            console.log('You lose! Rock beats scissors');
            computerScore++;
        }
        else if (humanChoice === 'scissors' && computerChoice === 2)
        {
            console.log('You win! Scissors beats paper');
            humanScore++;
        }
    }

    function showScore()
    {
        console.info('Your score: ' + humanScore);
        console.info('Computer score: ' + computerScore);
    }

    console.log('ROUND 1');
    playRound(getHumanChoice(), getComputerChoice());
    showScore();

    console.log('ROUND 2');
    playRound(getHumanChoice(), getComputerChoice());
    showScore();

    console.log('ROUND 3');
    playRound(getHumanChoice(), getComputerChoice());
    showScore();

    console.log('ROUND 4');
    playRound(getHumanChoice(), getComputerChoice());
    showScore();

    console.log('ROUND 5');
    playRound(getHumanChoice(), getComputerChoice());
    showScore();

    if (humanScore > computerScore)
    {
        console.log('YOU WIN!');
    }
    else if (humanScore < computerScore)
    {
        console.log('COMPUTER WINS!');
    }
    else
    {
        console.log('DRAW!');
    }
}

playGame();