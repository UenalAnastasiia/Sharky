let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My Character is', world.character);
}


function backgroundMusic() {
    let audio = new Audio('../audio/background.mp3');
    audio.play();
}


/**
 * Show Infobar 
 */
function showHelpInfo() {
    document.getElementById('info-btn-open').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('info-btn-close').classList.remove('d-none');
    document.getElementById('infobar').classList.remove('d-none');
}


function closeHelpInfo() {
    document.getElementById('info-btn-open').classList.remove('d-none');
    document.getElementById('restart-btn').classList.remove('d-none');
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


/* document.addEventListener("keydown", (event) => {
    if(event.key == "ArrowRight") {
        keyboard.KEY_RIGHT = true;
    }

    if(event.key == "ArrowLeft") {
        keyboard.KEY_LEFT = true;
    }

    if(event.key == "ArrowDown") {
        keyboard.KEY_DOWN = true;
    }

    if(event.key == "ArrowUp") {
        keyboard.KEY_UP = true;
    }

    if(event.key === ' ') {
        keyboard.KEY_SPACE = true;
    } 

    if(event.key === "d") {
        keyboard.KEY_D = true;
    } 
});


document.addEventListener("keyup", (event) => {
    if(event.key == "ArrowRight") {
        keyboard.KEY_RIGHT = false;
    }

    if(event.key == "ArrowLeft") {
        keyboard.KEY_LEFT = false;
    }

    if(event.key == "ArrowDown") {
        keyboard.KEY_DOWN = false;
    }

    if(event.key == "ArrowUp") {
        keyboard.KEY_UP = false;
    }

    if(event.key === ' ') {
        keyboard.KEY_SPACE = false;
    } 

    if(event.key === "KeyD") {
        keyboard.KEY_D = false;
    } 
}); */