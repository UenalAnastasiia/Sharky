class Fish_Puffer_Red extends MovableObject {
    height = 50;
    width = 70;
    x = 600;

    IMAGES_SWIMMING_PUFFER_RED = [
        '../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim1.png',
        '../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim2.png',
        '../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim3.png',
        '../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim4.png',
        '../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim5.png'
    ];


    constructor() {
        super().loadImage('../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim1.png');
        this.loadImages(this.IMAGES_SWIMMING_PUFFER_RED);
        this.pufferSwimmDirection();
        this.animate();
    }


    animate() {
        this.moveLeft();

        setInterval(() => {
            this.swimmingAnimation(this.IMAGES_SWIMMING_PUFFER_RED);
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