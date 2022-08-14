class Fish_Puffer_Green extends MovableObject {
    height = 50;
    width = 70;
    x = 1200;

    IMAGES_SWIMMING_PUFFER_GREEN = [
        '../img/enemy/puffer_fish/bubbleeswim/1.bubbleswim1.png',
        '../img/enemy/puffer_fish/bubbleeswim/1.bubbleswim2.png',
        '../img/enemy/puffer_fish/bubbleeswim/1.bubbleswim3.png',
        '../img/enemy/puffer_fish/bubbleeswim/1.bubbleswim4.png',
        '../img/enemy/puffer_fish/bubbleeswim/1.bubbleswim5.png'
    ];

    constructor() {
        super().loadImage('../img/enemy/puffer_fish/bubbleeswim/1.bubbleswim1.png');
        this.loadImages(this.IMAGES_SWIMMING_PUFFER_GREEN);
        this.pufferSwimmDirection();
        this.animate();
    }


    animate() {
        this.moveLeft();

        setInterval(() => {
            this.swimmingAnimation(this.IMAGES_SWIMMING_PUFFER_GREEN);
        }, 100);
    }


    pufferSwimmDirection() {
        if (this.x < 2880 || this.y < 330) {
            this.x = 800 + Math.random() * 800;
            this.y = 20 + Math.random() * 500;         // Math.random() gibt eine zufällige Zahl zwischen 0 und 1 
            this.speed = 0.2 + Math.random() * 0.5;
        }
    }

}