 let gameScore = {};
function startNewGame(players) {

    if (players) {
        let maincontent = document.querySelector('.mainContent');
        maincontent.innerHTML = '';
        let hero = document.querySelector('.hero');
        hero.innerHTML = '';

        for (let i = 0; i < players.length; i++) {
            gameScore[players[i]] = { name: players[i], scores: []};
        }

        console.log(gameScore);
    }   
}




export {startNewGame};