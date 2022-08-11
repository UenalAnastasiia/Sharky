class MovableObject {
    x = -35;
    y = 50;
    img;
    height = 200;
    width = 200;
    canvasHeight = 480;


    loadImage(path) {
        this.img = new Image();             // this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    moveRight() {
        console.log('moving right');
    }


    moveLeft() {
        
    }
}