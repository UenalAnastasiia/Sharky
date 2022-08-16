class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = -35;
    y = 50;
    height;
    width;


    loadImage(path) {
        this.img = new Image();             // this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
    * @param {Array} arr - ['img/image1.png', 'img/image2.png', ....]
    */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
    * Blue rectangle
    * this instanceof - draw image just by listed objects, not by all moveble objects
    */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Fish_Puffer_Green || this instanceof Fish_Puffer_Red || this instanceof Jelly_Dangerous || this instanceof Jelly_Regular || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}