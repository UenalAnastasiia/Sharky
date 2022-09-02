/**
 * Keyboard Events
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
            return;
    }
    event.preventDefault();
}, false);


/**
 * Keyboard Events for mobile devices
 */
function btnTouchEventStart() {
    document.getElementById('btn-left').addEventListener('touchstart', e => {
        keyboard.KEY_LEFT = true;
    });

    document.getElementById('btn-right').addEventListener('touchstart', e => {
        keyboard.KEY_RIGHT = true;
    });

    document.getElementById('btn-up').addEventListener('touchstart', e => {
        keyboard.KEY_UP = true;
    });

    document.getElementById('btn-down').addEventListener('touchstart', e => {
        keyboard.KEY_DOWN = true;
    });

    document.getElementById('btn-attack').addEventListener('touchstart', e => {
        keyboard.KEY_D = true;
    });
}


function btnTouchEventEnd() {
    document.getElementById('btn-left').addEventListener('touchend', e => {
        keyboard.KEY_LEFT = false;
    });

    document.getElementById('btn-right').addEventListener('touchend', e => {
        keyboard.KEY_RIGHT = false;
    });

    document.getElementById('btn-up').addEventListener('touchend', e => {
        keyboard.KEY_UP = false;
    });

    document.getElementById('btn-down').addEventListener('touchend', e => {
        keyboard.KEY_DOWN = false;
    });

    document.getElementById('btn-attack').addEventListener('touchend', e => {
        keyboard.KEY_D = false;
    });
}