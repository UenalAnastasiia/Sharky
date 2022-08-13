let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world =  new World(canvas, keyboard);

    console.log('My Character is', world.character);
}


document.addEventListener("keydown", (event) => {
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

    if(event.key == " ") {
        keyboard.KEY_SPACE = true;
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

    if(event.key == " ") {
        keyboard.KEY_SPACE = false;
    } 
});