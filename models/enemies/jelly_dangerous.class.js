class Jelly_Dangerous extends MovableObject {
    height = 100;
    width = 70;
    x = 1200;


    constructor() {
        super().loadImage('../img/enemy/jelly_fish/super_dangerous/Pink 1.png');
        this.loadImages(ENEMIES_JELLY_DANGEROUS_IMAGES.SWIMMING);
        this.animate();
    }


    animate() {
        this.jellySwimmDirection();
        setInterval(() => {
            this.swimmingAnimation(ENEMIES_JELLY_DANGEROUS_IMAGES.SWIMMING);
        }, 100);
    }


    jellySwimmDirection() {
        this.x = this.x + Math.random() * 800;
        setInterval(() => {
            if (this.y < 200) {
                this.jellyMoveDown();
            } else {
                this.jellyMoveUp();
            }
        }, 1000 / 60);
    }


    jellyMoveDown() {
        this.y -= this.speedY  + Math.random() * 0.5;
        this.speedY -= this.acceleration;
    }


    jellyMoveUp() {
        this.y -= this.speedY  + Math.random() * 0.5;
        this.speedY += this.acceleration;
    }
}