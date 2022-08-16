class StatusBar_Coin extends DrawableObject {
    percentage = 100;
    height = 50;
    width = 200;


    constructor() {
        super();
        this.loadImages(STATUSBAR_IMAGES.COIN);
        this.x = 5;
        this.y = 25;
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = STATUSBAR_IMAGES.COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        } 
    }
}