//switch between screens
let startScreen = document.querySelector('.start-screen');
let playScreen = document.querySelector('.play-screen');
let startBtn = document.getElementById('start');
startBtn.addEventListener('click', (e) => {
    startScreen.classList.add('hidden');
    playScreen.classList.remove('hidden');

});

//create field
function createField() {
    let square = document.createElement('div');
    
};