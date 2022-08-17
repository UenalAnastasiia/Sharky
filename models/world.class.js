class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar_life = new StatusBar_Life();
    statusBar_coin = new StatusBar_Coin();
    bubbleObject = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.check();
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

        this.addObjectsToClasses();
        this.fixStatusBarToMap();

        this.addToMap(this.character);
        this.addObjectsToMap(this.bubbleObject);
        this.ctx.translate(-this.camera_x, 0);
        this.repeateDraw();
    }


    addObjectsToClasses() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.sunlights);
        this.addObjectsToMap(this.level.enemies);
    }


    fixStatusBarToMap() {
        this.ctx.translate(-this.camera_x, 0);
        /* ----- Space for fixed object ----- */
        this.addToMap(this.statusBar_life);
        this.addToMap(this.statusBar_coin);
        this.ctx.translate(this.camera_x, 0);
    }


    /**
     * draw() will be called again and again
     */
    repeateDraw() {
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }


    /**
     * Load to the map all exist objects from the game 
     * @param {object} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }


    /**
     * @param {object} moveObj 
     * Character-Images will be turned in mirror direction, if you press LEFT and return 
     */
    addToMap(moveObj) {
        if (moveObj.mirrorImage) {
            this.turnImage(moveObj);
        }

        moveObj.draw(this.ctx);
        moveObj.drawFrame(this.ctx);

        if (moveObj.mirrorImage) {
            this.turnImageBack(moveObj);
        }
    }


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


    check() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowUpBubble();
        }, 200);
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar_life.setPercentage(this.character.energy)
                // console.log('Collision with Character, energy ', this.character.energy);
            }
        });
    }


    checkThrowUpBubble() {
        if (this.keyboard.KEY_D) {
            let bubble = new BubbleObject(this.character.x + 100, this.character.y + 100);
            this.bubbleObject.push(bubble);
        }
    }
}