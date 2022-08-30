class Fish_Orange extends MovableObject {
    height = 50;
    width = 70;
    x = 1700;


    constructor() {
        super().loadImage('./img/enemy/puffer_fish/transition/2.transition1.png');
        this.loadImages(ENEMIES_FISH_ORANGE_IMAGES.SWIMMING);
        this.fishSwimmDirection();
        this.animate();
    }


    animate() {
        this.moveLeft();

        setInterval(() => {
            this.showAnimation(ENEMIES_FISH_ORANGE_IMAGES.SWIMMING);
        }, 100);
    }


    fishSwimmDirection() {
        if (this.x < 2880 || this.y < 330) {
            this.x = 1000 + Math.random() * 800;
            this.y = 20 + Math.random() * 400;    
            this.speed = 0.2 + Math.random() * 0.5;
        }
    }

}