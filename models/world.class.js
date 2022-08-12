class World {
    character = new Character();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish()
    ];
    sunlights = [
        new Sunlight()
    ];
    backgroundObjects = [
        new BackgroundObject('../img/background/layers/water/D2.png', -720),
        new BackgroundObject('../img/background/layers/fondo2/L2.png', -720),
        new BackgroundObject('../img/background/layers/fondo1/L2.png', -720),
        new BackgroundObject('../img/background/layers/floor/L2.png', -720),

        new BackgroundObject('../img/background/layers/water/D1.png', 0),
        new BackgroundObject('../img/background/layers/fondo2/L1.png', 0),
        new BackgroundObject('../img/background/layers/fondo1/L1.png', 0),
        new BackgroundObject('../img/background/layers/floor/L1.png', 0),
        
        new BackgroundObject('../img/background/layers/water/D2.png', 720),
        new BackgroundObject('../img/background/layers/fondo2/L2.png', 720),
        new BackgroundObject('../img/background/layers/fondo1/L2.png', 720),
        new BackgroundObject('../img/background/layers/floor/L2.png', 720),

        new BackgroundObject('../img/background/layers/water/D1.png', 720*2),
        new BackgroundObject('../img/background/layers/fondo2/L1.png', 720*2),
        new BackgroundObject('../img/background/layers/fondo1/L1.png', 720*2),
        new BackgroundObject('../img/background/layers/floor/L1.png', 720*2),
        
        new BackgroundObject('../img/background/layers/water/D2.png', 720*3),
        new BackgroundObject('../img/background/layers/fondo2/L2.png', 720*3),
        new BackgroundObject('../img/background/layers/fondo1/L2.png', 720*3),
        new BackgroundObject('../img/background/layers/floor/L2.png', 720*3)
    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }


    /**
     * World connected with Character
     */
    setWorld() {
        this.character.world = this;
    }


    /** 
     * Load all images from the objects to the map
     */
    draw() {
        // clear all context-objects
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);      // translate - switched the object for x-coordinate and y-coordinate 

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.sunlights);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

        this.ctx.translate(-this.camera_x, 0);

        // draw() will be called again and again
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }


    addToMap(moveObj) {
        if (moveObj.mirrorImage) {
            this.turnImage(moveObj);
        }
        this.ctx.drawImage(moveObj.img, moveObj.x, moveObj.y, moveObj.width, moveObj.height);

        if (moveObj.mirrorImage) {
            this.turnImageBack(moveObj);
        }
    }


    /**
     * @param {movableObjectImage} moveObj 
     * Character-Images will be turned in mirror direction, if you press LEFT and return 
     */
    turnImage(moveObj) {
        this.ctx.save();
        this.ctx.translate(moveObj.width, 0);   // return the image for 180 degree => mirror direction
        this.ctx.scale(-1, 1);
        moveObj.x = moveObj.x * -1;     // * -1 => returns x-coordinate 
    }


    turnImageBack(moveObj) {
        moveObj.x = moveObj.x * -1;
        this.ctx.restore();
    }
}