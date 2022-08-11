class Fish extends MovableObject {
    height = 50;
    width = 70;

    constructor() {
        super().loadImage('../img/enemy/puffer_fish/bubbleeswim/3.bubbleswim1.png');

        this.x = 100 + Math.random() * 500;      // Math.random() gibt eine zufällige Zahl zwischen 0 und 1 
        this.y = 100 + Math.random() * 500;
    }

}