import {startHtmlGeneration} from './mod/startMenu.js';
import {startNewGame} from './mod/startGame.js';

let players = {};

document.getElementById('newGame').addEventListener('click', function() {
    startHtmlGeneration();
});
