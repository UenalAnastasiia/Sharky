class Sunlight extends MovableObject {
    x = 0;
    y = 0;
    height = 300;
    width = this.canvasWidth;


    constructor() {
        super().loadImage('../img/background/layers/light/completo.png');

        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}