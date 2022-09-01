let canvas;
let world;
let keyboard = new Keyboard();
let modal = false;
let video_modal = false;
let fullscreenWindow = false;
let gameEnd;


function loadGame() {
    document.getElementById('game').classList.remove('d-none');
    document.getElementById('start-page').classList.add('d-none');
    document.getElementById('audio').play();
    init();
}


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    btnTouchEventStart();
    btnTouchEventEnd();
    // console.log('My Character is', world.character);
}


/**
 * Show Instruction Windoww
 */
function showDemo() {
    if (video_modal === false) {
        document.getElementById("video-popUp").style.display = "block";
        video_modal = true;
    } else {
        document.getElementById("video-popUp").style.display = "none";
        video_modal = false;
    }
}

function rulesModal() {
    if (modal === false) {
        document.getElementById("popUpBox").style.display = "block";
        modal = true;
    } else {
        document.getElementById("popUpBox").style.display = "none";
        modal = false;
    }
}


function fullScreenModus() {
    if (fullscreenWindow == false) {
        setTimeout(() => {
            canvas.requestFullscreen();
        }, 200);
    }
}


function showFullscreenName() {
    document.getElementById('fullscreen-span').classList.remove('d-none');
}

function hideFullscreenName() {
    document.getElementById('fullscreen-span').classList.add('d-none');
}


/**
 * Show Music settings to play or stop background music
 */
function showMusicSet() {
    document.getElementById('audio').classList.remove('d-none');
}

function hideMusicSet() {
    document.getElementById('audio').classList.add('d-none');
}


/**
 * Show Infobar in the Game
 */
function showHelpInfo() {
    document.getElementById('info-btn-open').classList.add('d-none');
    document.getElementById('lobby-btn').classList.add('d-none');
    document.getElementById('info-btn-close').classList.remove('d-none');
    document.getElementById('infobar').classList.remove('d-none');
}


function closeHelpInfo() {
    document.getElementById('info-btn-open').classList.remove('d-none');
    document.getElementById('lobby-btn').classList.remove('d-none');
    document.getElementById('info-btn-close').classList.add('d-none');
    document.getElementById('infobar').classList.add('d-none');
}


/**
 * Show Game Over Screen, if Character is dead and go back to lobby
 */
function showGameOverScreen() {
    if (gameEnd = 'GameOver') {
        document.getElementById('audio').pause();
        new Audio('./audio/hurt.mp3').pause();
        document.getElementById('gameover-img').classList.remove('d-none');
        document.getElementById('game').classList.add('d-none');
        document.getElementById('audio-gameover').play();

        setTimeout(() => {
            window.location.replace("index.html");
        }, 3000);
    }
}

function showEndScreen() {
    document.getElementById('audio').pause();
    new Audio('./audio/hurt.mp3').pause();
    document.getElementById('gamewin-img').classList.remove('d-none');
    document.getElementById('game').classList.add('d-none');
    document.getElementById('audio-gamewin').play();

    setTimeout(() => {
        window.location.replace("index.html");
    }, 3000);
}