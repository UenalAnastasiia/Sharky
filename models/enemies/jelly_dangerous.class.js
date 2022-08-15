class Jelly_Dangerous extends MovableObject {
    height = 100;
    width = 70;
    x = 1200;


    IMAGES_SWIMMING_JELLY_DANGEROUS = [
        '../img/enemy/jelly_fish/super_dangerous/Pink 1.png',
        '../img/enemy/jelly_fish/super_dangerous/Pink 2.png',
        '../img/enemy/jelly_fish/super_dangerous/Pink 3.png',
        '../img/enemy/jelly_fish/super_dangerous/Pink 4.png',
    ];


    constructor() {
        super().loadImage('../img/enemy/jelly_fish/super_dangerous/Pink 1.png');
        this.loadImages(this.IMAGES_SWIMMING_JELLY_DANGEROUS);
        this.animate();
    }


    animate() {
        this.jellySwimmDirection();
        setInterval(() => {
            this.swimmingAnimation(this.IMAGES_SWIMMING_JELLY_DANGEROUS);
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