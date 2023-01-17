class Character extends MovableObject {
    world;
    height = 200;
    width = 200;
    speed = 5;
    swimmming_sound = new Audio('./audio/swimming.mp3');
    notHurtBySlap = false;
    slapAttack = false;
    bubbleAttack = false;


    constructor() {
        super().loadImage('./img/sharkie/idle/1.png');
        this.loadImages(CHARACTER_IMAGES.SWIMMING);
        this.loadImages(CHARACTER_IMAGES.ATTACK);
        this.loadImages(CHARACTER_IMAGES.DEAD);
        this.loadImages(CHARACTER_IMAGES.HURT);
        this.loadImages(CHARACTER_IMAGES.BUBBLEATTACK);
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

        this.intervalAnimations();
    }


    intervalAnimations() {
        setInterval(() => {
            if (this.isDead()) {
                this.characterDead();
            } else if (this.world.keyboard.KEY_D) {
                this.bubbleAttackImages();
            } else if (this.isHurt() && !this.slapAttack && !this.world.keyboard.KEY_SPACE) {
                this.showAnimation(CHARACTER_IMAGES.HURT);
            } else if (this.world.keyboard.KEY_SPACE && this.slapAttack == false) {
                this.characterAttack();
            } else {
                this.showSwimmImages();
            }
        }, 100);
    }


    showSwimmImages() {
        if (this.world.keyboard.KEY_RIGHT || this.world.keyboard.KEY_LEFT || this.world.keyboard.KEY_DOWN || this.world.keyboard.KEY_UP) {
            this.showAnimation(CHARACTER_IMAGES.SWIMMING);
        }
    }


    bubbleAttackImages() {
        this.firstCurrentImage = 0;
        let showBubbleAttack = setInterval(() => {
            this.showOneInterval(CHARACTER_IMAGES.BUBBLEATTACK, showBubbleAttack, "bubble_attack");
            console.log('Images: ', CHARACTER_IMAGES.BUBBLEATTACK);
        }, 100);
        this.bubbleAttack = true;
        setTimeout(() => {
            this.bubbleAttack = false;
        }, 120);
    }


    characterAttack() {
        this.firstCurrentImage = 0;
        let showSlap = setInterval(() => {
            this.showOneInterval(CHARACTER_IMAGES.ATTACK, showSlap, "slap");
        }, 100);
        this.slapAttack = true;
        setTimeout(() => {
            this.slapAttack = false;
        }, 150);
    }


    characterDead() {
        new Audio('./audio/hurt.mp3').pause();
        this.firstCurrentImage = 0;
        let deadImages = setInterval(() => {
            this.showOneInterval(CHARACTER_IMAGES.DEAD, deadImages, "dead");
        }, 100);
        setTimeout(() => {
            stopIntervals();
            showGameOverScreen();
        }, 1500);
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
}