
// Add an event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for the game-type and opponent-type select elements
    document.getElementById('game-type').addEventListener('change', updateMoveOptions);
    document.getElementById('opponent-type').addEventListener('change', showMoveSelection);
  
    // Add event listener for the play button
    document.getElementById('play-button').addEventListener('click', playGame);
  });

function showMoveSelection() {
    const gameType = document.getElementById('game-type').value;
    const opponentType = document.getElementById('opponent-type').value;
    const playButton = document.getElementById('play-button');

    if (gameType && opponentType) {
        document.querySelector('.move-choice').style.display = 'block';
        playButton.disabled = false;
    } else {
        document.querySelector('.move-choice').style.display = 'none';
        playButton.disabled = true;
    }
}

function updateMoveOptions() {
    const gameType = document.getElementById('game-type').value;
    const moveSelect = document.getElementById('player-move');
    let moveOptions = [];

    if (gameType === 'rps') {
        moveOptions = ['rock', 'paper', 'scissors'];
    } else if (gameType === 'rpsls') {
        moveOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    }

    moveSelect.innerHTML = '';
    for (const move of moveOptions) {
        const option = document.createElement('option');
        option.value = move;
        option.textContent = move.charAt(0).toUpperCase() + move.slice(1);
        moveSelect.appendChild(option);
    }

    // Call showMoveSelection() to update the Play button state
    showMoveSelection();
}

function playGame() {
    let gameResult;
    const playerChoice = document.querySelector('input[name="move"]:checked').value;
    const game = document.querySelector('input[name="game"]:checked').value;
    const opponent = document.querySelector('input[name="opponent"]:checked').value;
    
    if (game === 'rps') {
      gameResult = rps(playerChoice);
    } else if (game === 'rpsls') {
      gameResult = rpsls(playerChoice);
    }
  
    // Save gameResult to localStorage to access it in results.html
    localStorage.setItem('gameResult', JSON.stringify(gameResult));
  }