class BubbleObject extends MovableObject {
    height = 25;
    width = 25;


    constructor(x, y) {
        super().loadImage('../img/sharkie/attack/bubble_trap/bubble.png');
        this.x = x;
        this.y = y;
        this.throwUpBubble();

    }

    
    throwUpBubble() {
        this.speedY = 10;
        if (keyboard.KEY_LEFT) {
            setInterval(() => {
                this.x -= 10;
            }, 25);
        } else {
            setInterval(() => {
                this.x += 10;
            }, 25);
        }
    }
}