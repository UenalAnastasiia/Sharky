class Character extends MovableObject {
    world;
    height = 200;
    width = 200;
    speed = 5;
    swimmming_sound = new Audio('audio/swimming.mp3');

    constructor() {
        super().loadImage('../img/sharkie/idle/1.png');
        this.loadImages(CHARACTER_IMAGES.SWIMMING);
        this.loadImages(CHARACTER_IMAGES.ATTACK);
        this.loadImages(CHARACTER_IMAGES.DEAD);
        this.loadImages(CHARACTER_IMAGES.HURT);
        this.applyGravity();
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
            if (this.isDead()) {
                this.swimmingAnimation(CHARACTER_IMAGES.DEAD);
            } else if (this.isHurt()) {
                this.swimmingAnimation(CHARACTER_IMAGES.HURT);
            } else if (this.world.keyboard.KEY_SPACE) {
                this.characterAttack();
            } else {
                this.showSwimmImages();
            }
        }, 75);
    }


    showSwimmImages() {
        if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT || this.world.keyboard.KEY_DOWN || this.world.keyboard.KEY_UP) {
            this.swimmingAnimation(CHARACTER_IMAGES.SWIMMING);
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
        this.swimmingAnimation(CHARACTER_IMAGES.ATTACK);
    }
}
