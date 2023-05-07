function showMoveSelection() {
    const gameType = document.getElementById('game-type').value;
    const opponentType = document.getElementById('opponent-type').value;

    if (gameType && opponentType) {
        document.querySelector('.move-choice').style.display = 'block';
    } else {
        document.querySelector('.move-choice').style.display = 'none';
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
}
