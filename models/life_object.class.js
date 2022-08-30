class LifeObject extends MovableObject {
    height = 30;
    width = 30;


    constructor() {
        super().loadImage('./img/heart.png');
        // this.x = x;
        // this.y = y;
        this.lifePosition();
        // this.animate();
    }


    animate() {
        setInterval(() => {
            this.showAnimation(ENEMIES_PUFFER_GREEN_IMAGES.SWIMMING);
        }, 100);
    }


    lifePosition() {
        if (this.x < 2880 || this.y < 330) {
            this.x = -500 + Math.random() * 2000;
            this.y = 20 + Math.random() * 400;         // Math.random() gibt eine zufällige Zahl zwischen 0 und 1 
        }
    }
}