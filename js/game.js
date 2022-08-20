let canvas;
let world;
let keyboard = new Keyboard();
let modal = false;


function loadGame() {
    document.getElementById('game').classList.remove('d-none');
    document.getElementById('start-page').classList.add('d-none');
    init();
}


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character);
}


/* RULES */
function RulesModal() {
    if (modal === false) {
      document.getElementById("popUpBox").style.display = "block";
      modal = true;
    } else {
      document.getElementById("popUpBox").style.display = "none";
      modal = false;
    }
  }

/**
 * Show Music settings in Infobar to play or stop background music
 */
function showMusicSet() {
    document.getElementById('audio').classList.remove('d-none');
}

function hiddeMusicSet() {
    document.getElementById('audio').classList.add('d-none');
}


/**
 * Show Infobar 
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
 * Keyboard Event
 */
window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "ArrowRight":
            keyboard.KEY_RIGHT = true;
            break;
        case "ArrowLeft":
            keyboard.KEY_LEFT = true;
            break;
        case "ArrowDown":
            keyboard.KEY_DOWN = true;
            break;
        case "ArrowUp":
            keyboard.KEY_UP = true;
            break;
        case " ":
            keyboard.KEY_SPACE = true;
            break;
        case "d":
            keyboard.KEY_D = true;
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);


window.addEventListener("keyup", (event) => {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case "ArrowRight":
            keyboard.KEY_RIGHT = false;
            break;
        case "ArrowLeft":
            keyboard.KEY_LEFT = false;
            break;
        case "ArrowDown":
            keyboard.KEY_DOWN = false;
            break;
        case "ArrowUp":
            keyboard.KEY_UP = false;
            break;
        case " ":
            keyboard.KEY_SPACE = false;
            break;
        case "d":
            keyboard.KEY_D = false;
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, false);