class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = -35;
    y = 50;
    height;
    width;


    /**
     * Load Images from JSON
     * @param {string} path 
     */
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



    // ------------------------- Rectangle  ------------------------- //
    // Help-Funktion to see the points when objects are crashing
    // this instanceof - draw image just by listed objects, not by all moveble objects
    drawFrame(ctx) {
        if (this instanceof Character) {
            this.drawFrameCharacter(ctx);
        } else if (this instanceof Fish_Puffer_Green || this instanceof Fish_Puffer_Red || this instanceof Jelly_Dangerous || this instanceof Jelly_Regular) {
                this.drawFrameEnemies(ctx);
            } else if (this instanceof Endboss) {
                    this.drawFrameEndboss(ctx);
                } else if (this instanceof BarrierHorizontalObject) {
                        this.drawFrameBarrierHorizont(ctx);
                    } else if (this instanceof BubbleObject || this instanceof CoinsObject || this instanceof LifeObject) {
                        this.drawFrameObjects(ctx);
                    }
    }


    drawFrameCharacter(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'red';
        ctx.rect(this.x + 35, this.y + 90, 130, 60);
        ctx.stroke();
    }


    drawFrameEnemies(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    
    drawFrameObjects(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'orange';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }


    drawFrameEndboss(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'yellow';
        ctx.rect(this.x + 20, this.y + 110, 310, 180);
        ctx.stroke();
    }


    drawFrameBarrierHorizont(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'green';
        // ctx.rect(this.x + 5, this.y, 440, 250);
        ctx.moveTo(650, 250);
        ctx.quadraticCurveTo(80, 200, 230, 500);
        ctx.moveTo(650, 600)
        ctx.lineTo(650, 250);
        ctx.stroke();
    }

    // ------------------------- Rectangle END  ------------------------- //

}