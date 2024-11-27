// Select DOM elements
const rollButton = document.querySelector('.roll-button');
const player1Roll = document.querySelector('.player1 .roll');
const player2Roll = document.querySelector('.player2 .roll');
const resultDisplay = document.querySelector('.result');

// Roll the dice and determine the winner
rollButton.addEventListener('click', () => {
  // Generate random rolls for both players
  const player1Value = rollDice();
  const player2Value = rollDice();

  // Update the UI with the roll values
  player1Roll.textContent = `🎲 ${player1Value}`;
  player2Roll.textContent = `🎲 ${player2Value}`;

  // Determine and display the winner
  if (player1Value > player2Value) {
    resultDisplay.textContent = "🎉 Player 1 Wins!";
    resultDisplay.style.color = "#00FF00"; // Green for winning
  } else if (player2Value > player1Value) {
    resultDisplay.textContent = "🎉 Player 2 Wins!";
    resultDisplay.style.color = "#00BFFF"; // Blue for winning
  } else {
    resultDisplay.textContent = "🤝 It's a Draw!";
    resultDisplay.style.color = "#FFD700"; // Gold for a draw
  }
});

// Dice roll logic (random number 1–6)
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
