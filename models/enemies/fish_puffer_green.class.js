class Fish_Puffer_Green extends MovableObject {
    height = 50;
    width = 70;
    x = 1200;


    constructor() {
        super().loadImage('./img/enemy/puffer_fish/bubbleeswim/1.bubbleswim1.png');
        this.loadImages(ENEMIES_PUFFER_GREEN_IMAGES.SWIMMING);
        this.pufferSwimmDirection();
        this.animate();
    }


    animate() {
        this.moveLeft();

        setInterval(() => {
            this.showAnimation(ENEMIES_PUFFER_GREEN_IMAGES.SWIMMING);
        }, 100);
    }


    pufferSwimmDirection() {
        if (this.x < 2880 || this.y < 330) {
            this.x = 800 + Math.random() * 800;
            this.y = 20 + Math.random() * 400;         // Math.random() gibt eine zufällige Zahl zwischen 0 und 1 
            this.speed = 0.2 + Math.random() * 0.5;
        }
    }

}