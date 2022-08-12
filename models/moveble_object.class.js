class MovableObject {
    x = -35;
    y = 50;
    img;
    height = 200;
    width = 200;
    canvasHeight = 480;
    canvasWidth = 720;
    imageCache = {};
    speed = 0.15;
    mirrorImage = false;


    loadImage(path) {
        this.img = new Image();             // this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    /***
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ....]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    moveRight() {
        console.log('moving right');
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}