class Character extends MovableObject {
    world;
    height = 200;
    width = 200;
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
            if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT || this.world.keyboard.KEY_DOWN || this.world.keyboard.KEY_UP) {
                this.swimmingAnimation(this.IMAGES_SWIMMING);
            }
        }, 100);
    }

    
    keyboardMoves() {
        if (this.world.keyboard.KEY_RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed;
            this.mirrorImage = false;
            this.swimmming_sound.play();
        }

        if (this.world.keyboard.KEY_LEFT && this.x > -620) {
            this.x -= this.speed;
            this.mirrorImage = true;
            this.swimmming_sound.play();
        }

        if (this.world.keyboard.KEY_UP && this.y > -90) {
            this.y -= this.speed;
            this.swimmming_sound.play();
        }

        if (this.world.keyboard.KEY_DOWN && this.y < this.world.level.level_end_y) {
            this.y += this.speed;
            this.swimmming_sound.play();
        }
    }
}
