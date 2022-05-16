function gameFactory() {
    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');
    let scoreScreen = document.querySelector('.score-screen');
    let startBtn = document.getElementById('start');
    let nickname = document.getElementById('nickname');
    let castle = document.querySelector('.castle');

    let factory = {
        startScreen,
        playScreen,
        startBtn,
        nickname,
        scoreScreen,
        castle,
    }
    return factory;
}


