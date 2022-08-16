class Endboss extends MovableObject {
    height = 350;
    width = 350;
    

    constructor() {
        super().loadImage('../img/enemy/final_enemy/floating/1.png');
        this.loadImages(ENEMIES_ENDBOSS_IMAGES.SWIMMING);

        this.x = 200;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.swimmingAnimation(ENEMIES_ENDBOSS_IMAGES.SWIMMING);
        }, 100);
    }
}