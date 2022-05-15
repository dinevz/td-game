

game.startBtn.addEventListener('click', (e) => {
    if(!nickname.value) {
        alert('Please enter a nickname!')
    } else {
        game.startScreen.classList.add('hidden');
        game.playScreen.classList.remove('hidden');
        game.scoreScreen.classList.remove('hidden');

        let nicknameElement = document.querySelector('.nickname');
        nicknameElement.textContent = game.nickname.value;
        fSquare = game.square();
        
        for (let index = 0; index < directions.length; index++) {
            let element = directions[index];
            nSquare = game.square(fSquare, element);
            fSquare = nSquare;
        } 
    }

    
});