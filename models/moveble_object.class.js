class MovableObject {
    x = 20;
    y = 10;
    img;
    height = 100;
    width = 200;


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