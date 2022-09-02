class LifeObject extends MovableObject {
    height = 30;
    width = 30;


    constructor() {
        super().loadImage('./img/heart.png');
        this.lifePosition();
    }


    lifePosition() {
        if (this.x < 2880 || this.y < 330) {
            this.x = -500 + Math.random() * 2000;
            this.y = 20 + Math.random() * 400;     
        }
    }
}