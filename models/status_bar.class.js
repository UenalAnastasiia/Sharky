class StatusBar extends DrawableObject {
    IMAGES = [
        '../img/marcadores/orange/0_copia.png',
        '../img/marcadores/orange/20_copia.png',
        '../img/marcadores/orange/40_copia.png',
        '../img/marcadores/orange/60_copia.png',
        '../img/marcadores/orange/80_copia.png',
        '../img/marcadores/orange/100_copia.png'
    ];
    
    percentage = 100;
    height = 50;
    width = 200;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = -10;
        this.setPercentage(100);
    }


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
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