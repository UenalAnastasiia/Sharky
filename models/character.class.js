class Character extends MovableObject {
    currentImage = 0;
    world;
    speed = 5;
    IMAGES_SWIMMING = [
        '../img/sharkie/idle/1.png',
        '../img/sharkie/idle/2.png',
        '../img/sharkie/idle/3.png',
        '../img/sharkie/idle/4.png',
        '../img/sharkie/idle/5.png',
        '../img/sharkie/idle/6.png',
        '../img/sharkie/idle/7.png',
        '../img/sharkie/idle/8.png'
    ];


    constructor() {
        super().loadImage('../img/sharkie/idle/1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.animate();
    }


    /**
     * Walk Animation if you press keyboards
     */
    animate() {
        setInterval(() => {
            this.keyboardMoves();
            this.world.camera_x = -this.x
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.DOWN || this.world.keyboard.UP) {
                let i = this.currentImage % this.IMAGES_SWIMMING.length;    // % is Modulu => means the math rest   // let i = 0 % 8;
                let path = this.IMAGES_SWIMMING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 150);
    }

    keyboardMoves() {
        if (this.world.keyboard.RIGHT) {
            this.x += this.speed;
            this.mirrorImage = false;
        }

        if (this.world.keyboard.LEFT) {
            this.x -= this.speed;
            this.mirrorImage = true;
        }

        if (this.world.keyboard.UP) {
            this.y -= this.speed;
        }
        
        if (this.world.keyboard.DOWN) {
            this.y += this.speed;
        }
    }
}
