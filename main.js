import {startNewGame} from './mod/start.js';

let players = {};

document.getElementById('newGame').addEventListener('click', function() {
    startNewGame();
});

