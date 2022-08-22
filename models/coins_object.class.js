class CoinsObject extends MovableObject {
    height = 50;
    width = 50;


    constructor() {
        super().loadImage('./img/marcadores/coins/3.png');
        this.coinsPosition();
        // this.animate();
    }


    animate() {
        setInterval(() => {
            this.swimmingAnimation(ENEMIES_PUFFER_GREEN_IMAGES.SWIMMING);
        }, 100);
    }


    coinsPosition() {
        if (this.x < 2880 || this.y < 330) {
            this.x = -500 + Math.random() * 1500;
            this.y = 20 + Math.random() * 400; 
        }
    }
}