// Retrieve gameResult from localStorage
const gameResult = JSON.parse(localStorage.getItem('gameResult'));

// Update the page content with the game results
document.getElementById('player-move').textContent = gameResult.player;
document.getElementById('opponent-move').textContent = gameResult.opponent;
document.getElementById('game-result').textContent = gameResult.result;

// Add an event listener for the reset button
document.getElementById('reset-button').addEventListener('click', () => {
  // Redirect to the main game page
  window.location.href = 'index.html';
});
