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
        square: (square, direction) => {
            let pathElement = document.createElement('div');
            pathElement.classList.add('square');
            // add first square
            if(!square) { 
                pathElement.style.left = `${castle.getBoundingClientRect().left + 60}px`;
                pathElement.style.top = `${castle.getBoundingClientRect().bottom - 7}px`;
                playScreen.appendChild(pathElement);
                console.log('!square');
            } else {
                if(direction == 'bottom') {
                    pathElement.style.left = `${square.getBoundingClientRect().left}px`;
                    pathElement.style.top = `${square.getBoundingClientRect().top + 35}px`;
                    playScreen.appendChild(pathElement);

                } else if (direction == 'left') {
                    pathElement.style.left = `${square.getBoundingClientRect().left - 35}px`;
                    pathElement.style.top = `${square.getBoundingClientRect().top}px`;
                    playScreen.appendChild(pathElement);
                }
            }
            return pathElement;
        },
        castle,
    }
    return factory;
}


let game = gameFactory();
let fSquare;
let nSquare;
directions = ['bottom', 'bottom', 'bottom', 'bottom', 'bottom', 
              'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left',
              'bottom', 'bottom', 'bottom', 'bottom',
              'left', 'left', 'left', 'left',
              'left', 'left', 'left', 'left',
              'left', 'left', 'left', 'left',
              'left', 'left', 'left', 'left',
              'left', 'left', 'left', 'left', 'left',
              ]