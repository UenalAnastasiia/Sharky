class Fish extends MovableObject {
    height = 50;
    width = 70;

    IMAGES_SWIMMING = [
        '../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim1.png',
        '../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim2.png',
        '../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim3.png',
        '../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim4.png',
        '../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim5.png'
    ];

    constructor() {
        super().loadImage('../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        if (this.x < 2880 || this.y < 330) {
            this.x = this.canvasWidth - Math.random() * 700;
            this.y = 50 + Math.random() * 400;         // Math.random() gibt eine zufällige Zahl zwischen 0 und 1 
            this.speed = 0.15 + Math.random() * 0.5;
        }        
        this.animate();
    }


    animate() {
        this.moveLeft();

        setInterval(() => {
            this.swimmingAnimation(this.IMAGES_SWIMMING);
        }, 100);
    }

}