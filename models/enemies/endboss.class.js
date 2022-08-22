class Endboss extends MovableObject {
    height = 350;
    width = 350;


    constructor() {
        super().loadImage('./img/enemy/final_enemy/floating/1.png');
        this.loadImages(ENEMIES_ENDBOSS_IMAGES.SWIMMING);
        this.loadImages(ENEMIES_ENDBOSS_IMAGES.DEAD);

        this.x = 2400;
        this.animate();
    }


    animate() {
        setInterval(() => {
            if (level1.endboss.endbossLife == 0) {
                console.log('Endboss dead IMAGES');  
                this.swimmingAnimation(ENEMIES_ENDBOSS_IMAGES.DEAD);
            } else {
                this.swimmingAnimation(ENEMIES_ENDBOSS_IMAGES.SWIMMING);
            }
        }, 100);
    }
}