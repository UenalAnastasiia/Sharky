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
    swimmming_sound = new Audio('audio/swimming.mp3');


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
            this.world.camera_x = -this.x + 10;
        }, 1000 / 60);

        setInterval(() => {
            this.swimmming_sound.pause();
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.DOWN || this.world.keyboard.UP) {
                let i = this.currentImage % this.IMAGES_SWIMMING.length;    // % is Modulu => means the math rest   // let i = 0 % 8;
                let path = this.IMAGES_SWIMMING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 150);
    }

    keyboardMoves() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed;
            this.mirrorImage = false;
            this.swimmming_sound.play();
        }

        if (this.world.keyboard.LEFT && this.x > -620) {
            this.x -= this.speed;
            this.mirrorImage = true;
            this.swimmming_sound.play();
        }

        if (this.world.keyboard.UP && this.y > -90) {
            this.y -= this.speed;
            this.swimmming_sound.play();
        }

        if (this.world.keyboard.DOWN && this.y < this.world.level.level_end_y) {
            this.y += this.speed;
            this.swimmming_sound.play();
        }
    }
}
