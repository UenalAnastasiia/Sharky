class Jelly_Regular extends MovableObject {
    height = 100;
    width = 70;
    x = 1200;
    y = 350;


    IMAGES_SWIMMING_JELLY_REGULAR = [
        '../img/enemy/jelly_fish/regular_damage/Yellow 1.png',
        '../img/enemy/jelly_fish/regular_damage/Yellow 2.png',
        '../img/enemy/jelly_fish/regular_damage/Yellow 3.png',
        '../img/enemy/jelly_fish/regular_damage/Yellow 4.png',
    ];


    constructor() {
        super().loadImage('../img/enemy/jelly_fish/regular_damage/Yellow 1.png');
        this.loadImages(this.IMAGES_SWIMMING_JELLY_REGULAR);
        this.animate();
    }


    animate() {
        this.jellySwimmDirection();
        setInterval(() => {
            this.swimmingAnimation(this.IMAGES_SWIMMING_JELLY_REGULAR);
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
        this.y -= this.speedY + Math.random() * 0.5;
        this.speedY -= this.acceleration;
    }


    jellyMoveUp() {
        this.y -= this.speedY  + Math.random() * 0.5;
        this.speedY += this.acceleration;
    }
}