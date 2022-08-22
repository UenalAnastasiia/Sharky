class Fish_Puffer_Red extends MovableObject {
    height = 50;
    width = 70;
    x = 600;


    constructor() {
        super().loadImage('./img/enemy/puffer_fish/bubbleeswim/3.bubbleswim1.png');
        this.loadImages(ENEMIES_PUFFER_RED_IMAGES.SWIMMING);
        this.pufferSwimmDirection();
        this.animate();
    }


    animate() {
        this.moveLeft();

        setInterval(() => {
            this.swimmingAnimation(ENEMIES_PUFFER_RED_IMAGES.SWIMMING);
        }, 100);
    }


    pufferSwimmDirection() {
        if (this.x < 2880 || this.y < 330) {
            this.x = 600 + Math.random() * 700;
            this.y = 50 + Math.random() * 400;         // Math.random() gibt eine zufällige Zahl zwischen 0 und 1 
            this.speed = 0.15 + Math.random() * 0.5;
        }
    }

}