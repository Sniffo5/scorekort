function startNewGame() {
    document.getElementsByClassName('mainContent')[0].innerHTML = '';
    generateStartHtml();
}
function generateStartHtml(){

    let main = document.querySelector('.mainContent');
    let form = document.createElement('form');
    form.className = 'nameForm';
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'playerName';
    input.placeholder = 'Ange Spelarnamn';
    form.appendChild(input);
    main.appendChild(form);
    let newPlayer = document.createElement('button');
    newPlayer.type = 'button';
    newPlayer.id = 'newGame';
    newPlayer.textContent = 'Ny Spelare';
    main.appendChild(newPlayer);


 
    newPlayer.addEventListener('click', function(event) {
        event.preventDefault();
        const formCount = main.querySelectorAll('input').length;
        const nextPlayerId = `player${formCount + 1}`;

       
        let input = document.createElement('input');
        input.type = 'text';
        input.name = 'playerName';
        input.placeholder = 'Ange Spelarnamn';
        form.appendChild(input);
       

        input.addEventListener('input', function(event) {
        event.preventDefault();
        const playerName = event.target.value;
        generateHeroHtml(nextPlayerId,playerName);
    });
      
    });

    input.addEventListener('input', function(event) {
        event.preventDefault();
        const playerName = event.target.value;
        generateHeroHtml('player1',playerName);

        if (playerName){
            players[playerName] = []
        }

       

    });

}

function generateHeroHtml(playerId,playerName){

    let hero = document.querySelector('.hero');
    let playerDiv = document.getElementById(playerId);

    if (!playerName) {
        
        if(playerDiv){
            playerDiv.remove();
        }

        return;
    }
    else{
      
       if(playerDiv){
           playerDiv.innerHTML = `<h2>${playerName}</h2>`;
       }
       else{
           playerDiv = document.createElement('div');
           playerDiv.className = 'playerDiv';
           playerDiv.id = playerId;
           playerDiv.innerHTML = `<h2>${playerName}</h2>`;
           hero.appendChild(playerDiv);
    }
    }
}



export {startNewGame};