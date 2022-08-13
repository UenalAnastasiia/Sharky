class MovableObject {
    x = -35;
    y = 50;
    img;
    canvasHeight = 480;
    canvasWidth = 720;
    imageCache = {};
    speed = 0.15;
    mirrorImage = false;
    currentImage = 0;

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


    /**
     * Load images from each object and animeted it
     * @param {object images} images 
     */
    swimmingAnimation(images) {
        let i = this.currentImage % images.length;    // % is Modulu => means the math rest   // let i = 0 % 8;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
    

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}