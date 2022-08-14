class Jelly_Dangerous extends MovableObject {
    height = 150;
    width = 120;
    x = 1200;

    IMAGES_SWIMMING_JELLY_DANGEROUS = [
        '../img/enemy/jelly_fish/super_dangerous/Pink 1.png',
        '../img/enemy/jelly_fish/super_dangerous/Pink 2.png',
        '../img/enemy/jelly_fish/super_dangerous/Pink 3.png',
        '../img/enemy/jelly_fish/super_dangerous/Pink 4.png',
    ];


    constructor() {
        super().loadImage('../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim1.png');
        this.loadImages(this.IMAGES_SWIMMING_JELLY_DANGEROUS);
        this.jellySwimmDirection();
        this.animate();
    }


    animate() {
        this.jellyMoveUp();

        setInterval(() => {
            this.swimmingAnimation(this.IMAGES_SWIMMING_JELLY_DANGEROUS);
        }, 100);
    }


    jellySwimmDirection() {
        if (this.x < 2880 || this.y < 330) {
            // this.x = 600 + Math.random() * 700;
            this.y = 50 + Math.random() * 400;         // Math.random() gibt eine zufällige Zahl zwischen 0 und 1 
            this.speed = 0.15 + Math.random() * 0.5;
        }
    }


    jellyMoveUp() {
        if ((this.x < 2880 || this.y < 250) || this.y > 150) {
            if (this.y > 300 - this.height) {
                setInterval(() => {
                    this.y -= this.speed;
                }, 1000 / 60);
            } else {
                setInterval(() => {
                    this.y += this.speed;
                }, 1000 / 60);
            }
        }
    }

}