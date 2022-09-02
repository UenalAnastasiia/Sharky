class CoinsObject extends MovableObject {
    height = 50;
    width = 50;


    constructor() {
        super().loadImage('./img/marcadores/coins/3.png');
        this.coinsPosition();
    }


    coinsPosition() {
        if (this.x < 2880 || this.y < 330) {
            this.x = -500 + Math.random() * 2000;
            this.y = 20 + Math.random() * 400; 
        }
    }
}