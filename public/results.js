// Retrieve gameResult from localStorage
const gameResult = JSON.parse(localStorage.getItem('gameResult'));
console.log(gameResult)
// Update the page content with the game results
document.getElementById('player-move').textContent = gameResult.player;
document.getElementById('opponent-move').textContent = gameResult.opponent;
document.getElementById('game-result').textContent = gameResult.result;