class Character extends MovableObject {
    world;
    height = 200;
    width = 200;
    speed = 5;
    IMAGES_SWIMMING = [
        '../img/sharkie/swim/1.png',
        '../img/sharkie/swim/2.png',
        '../img/sharkie/swim/3.png',
        '../img/sharkie/swim/4.png',
        '../img/sharkie/swim/5.png',
        '../img/sharkie/swim/6.png'
    ];

    IMAGES_ATTACK = [
        '../img/sharkie/attack/fin_slap/1.png',
        '../img/sharkie/attack/fin_slap/2.png',
        '../img/sharkie/attack/fin_slap/3.png',
        '../img/sharkie/attack/fin_slap/4.png',
        '../img/sharkie/attack/fin_slap/5.png',
        '../img/sharkie/attack/fin_slap/6.png',
        '../img/sharkie/attack/fin_slap/7.png',
        '../img/sharkie/attack/fin_slap/8.png'
    ];

    swimmming_sound = new Audio('audio/swimming.mp3');

    constructor() {
        super().loadImage('../img/sharkie/idle/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.applyGravity();
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
    }


    /**
     * Show animations if you press keyboards
     */
    animate() {
        setInterval(() => {
            this.swimmming_sound.pause();
            this.keyboardMoves();
            this.world.camera_x = -this.x + 10;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.KEY_SPACE) {
                this.characterAttack();
            } else {
                this.showSwimmImages();
            }
        }, 75);
    }


    showSwimmImages() {
        if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT || this.world.keyboard.KEY_DOWN || this.world.keyboard.KEY_UP) {
            this.swimmingAnimation(this.IMAGES_SWIMMING);
        }
    }


    keyboardMoves() {
        if (this.world.keyboard.KEY_RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRightKey();
        }
        if (this.world.keyboard.KEY_LEFT && this.x > -620) {
            this.moveLeftKey();
        }
        if (this.world.keyboard.KEY_UP && this.y > -90) {
            this.moveUpKey();
        }
        if (this.world.keyboard.KEY_DOWN && this.y < this.world.level.level_end_y) {
            this.moveDownKey();
        }
    }


    moveRightKey() {
        this.x += this.speed;
        this.mirrorImage = false;
        this.swimmming_sound.play();
    }


    moveLeftKey() {
        this.x -= this.speed;
        this.mirrorImage = true;
        this.swimmming_sound.play();
    }


    moveUpKey() {
        this.y -= this.speed;
        this.swimmming_sound.play();
    }


    moveDownKey() {
        this.y += this.speed;
        this.swimmming_sound.play();
    }


    /**
     * If Spacebar pressed => Character attacked
     */
    characterAttack() {
        this.swimmingAnimation(this.IMAGES_ATTACK);
    }
}
