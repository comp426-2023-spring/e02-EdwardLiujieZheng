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
