class Endboss extends MovableObject {
    height = 350;
    width = 350;
    endbossLife;


    constructor() {
        super().loadImage('./img/enemy/final_enemy/floating/1.png');
        this.loadImages(ENEMIES_ENDBOSS_IMAGES.SWIMMING);
        this.loadImages(ENEMIES_ENDBOSS_IMAGES.DEAD);
        this.loadImages(ENEMIES_ENDBOSS_IMAGES.HURT);

        this.x = 2400;
        this.animate();
    }

    
    animate() {
        setInterval(() => {
            this.showAnimation(ENEMIES_ENDBOSS_IMAGES.SWIMMING);
        }, 500);
    }


    showHurtImages() {
        this.firstCurrentImage = 0;
        let endbossHurtImages = setInterval(() => {
            this.showOneInterval(ENEMIES_ENDBOSS_IMAGES.HURT, endbossHurtImages, "endboss_hurt");
        }, 100);
    }


    showDeadImages() {
        new Audio('./audio/hurt.mp3').pause();
        this.firstCurrentImage = 0;
        let endbossDeadImages = setInterval(() => {
            this.showOneInterval(ENEMIES_ENDBOSS_IMAGES.DEAD, endbossDeadImages, "endboss_dead");
        }, 200);
        setTimeout(() => {
            stopIntervals();
            showEndScreen();
        }, 1500);
    }
}