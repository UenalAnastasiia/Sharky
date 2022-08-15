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
    speedY = 0;
    acceleration = 0.01;
    energy = 100;
    lastHit = 0;


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


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * Blue rectangle
     * this instanceof - draw image just by listed objects, not by all moveble objects
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Fish_Puffer_Green || this instanceof Fish_Puffer_Red || this instanceof Jelly_Dangerous || this instanceof Jelly_Regular || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
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


    /**
     * Character sinks slowly to the ground if doesn´t click KEY_UP
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        return this.y < 310;
    }



    // Colliding
    isColliding(moveObj) {
        return this.x + this.width > moveObj.x &&
            this.y + this.height > moveObj.y &&
            this.x < moveObj.x  &&
            this.y < moveObj.y + moveObj.height;
    }


    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * if timepassed < 5 => returns true
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;   // Differenz in ms
        timepassed = timepassed / 1000; // Differenz in Sec
        return timepassed < 1;
    }


    isDead() {
        return this.energy == 0;
    }
}