let game = gameFactory();

game.startBtn.addEventListener('click', (e) => {
    if(!nickname.value) {
        alert('Please enter a nickname!')
    } else {
        game.startScreen.classList.add('hidden');
        game.playScreen.classList.remove('hidden');
        game.scoreScreen.classList.remove('hidden');

        let nicknameElement = document.querySelector('.nickname');
        nicknameElement.textContent = game.nickname.value; 
        
    }

    
});
