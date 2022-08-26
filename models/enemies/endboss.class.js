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
        }, 1000);
    }


    showHurtImages() {
        this.showAnimation(ENEMIES_ENDBOSS_IMAGES.HURT);
    }


    showDeadImages() {
        setInterval(() => {
            this.showAnimation(ENEMIES_ENDBOSS_IMAGES.DEAD);
        }, 500);

        setTimeout(() => {
            showEndScreen();
        }, 2000);
    }

}