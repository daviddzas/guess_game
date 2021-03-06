let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, TargetGuess) => {
  const humanDifference = Math.abs(TargetGuess - humanGuess);
  const computerDifference = Math.abs(TargetGuess - computerGuess);
return humanDifference <= computerDifference;
};

const updateScore = winner => {
  if (winner === 'human'){
    humanScore += 1;
  } else if (winner === 'computer'){
    computerScore += 1;
  }
};

function advanceRound() {
    currentRoundNumber += 1;
};
