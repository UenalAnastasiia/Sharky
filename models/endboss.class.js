class Endboss extends MovableObject {
    height = 350;
    width = 350;
    
    IMAGES_SWIMMING = [
        '../img/enemy/final_enemy/floating/1.png',
        '../img/enemy/final_enemy/floating/2.png',
        '../img/enemy/final_enemy/floating/3.png',
        '../img/enemy/final_enemy/floating/4.png',
        '../img/enemy/final_enemy/floating/5.png',
        '../img/enemy/final_enemy/floating/6.png'
    ];

    constructor() {
        super().loadImage('../img/enemy/final_enemy/floating/1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.x = 2400;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.swimmingAnimation(this.IMAGES_SWIMMING);
        }, 100);
    }
}