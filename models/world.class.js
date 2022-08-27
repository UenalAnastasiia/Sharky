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
        this.clearCanvas();
        this.ctx.translate(this.camera_x, 0);      // translate - switched the object for x-coordinate and y-coordinate 

        this.addObjectsToClasses();

        this.fixStatusBarToMap();

        this.addToMap(this.character);
        this.addObjectsToMap(this.bubbleObject);
        this.ctx.translate(-this.camera_x, 0);
        this.repeateDraw();
    }


    /**
     * clear all context-objects
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    addObjectsToClasses() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.sunlights);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.coinsObject);
        this.addObjectsToMap(this.level.lifeObject);
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
        // moveObj.drawFrame(this.ctx);

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


    /**
     * Help-Function to check different options 
     */
    check() {
        setInterval(() => {
            this.checkThrowUpBubble();
            this.checkCollisionsWithEnemies();
            this.checkCollisionsWithCoins();
            this.checkCollisionsWithLifeObject();
            this.checkCollisionEndbossWithAttack()
            this.checkCollisionEnemieWithSlap();
        }, 200);
    }


    checkThrowUpBubble() {
        if (this.keyboard.KEY_D && this.character.collectedCoins >= 100) {
            let bubble = new BubbleObject(this.character.x + 120, this.character.y + 120);
            this.bubbleObject.push(bubble);
        }
    }


    /**
     * If Endboss collides with bubble => bubble-object will be delete and hurt-animations from endboss and sound will be played
     */
    checkCollisionEndbossWithAttack() {
        if (this.bubbleObject.length > 0) {
            this.level.endboss.forEach((endboss, index) => {
                for (let i = 0; i < this.bubbleObject.length; i++) {
                    if (this.bubbleObject[i].isColliding(endboss)) {
                        new Audio('./audio/endboss_hurt.mp3').play();
                        this.bubbleObject.splice(index, 1);
                        this.character.attackEndboss();
                        this.level.endboss[0].showHurtImages();
                    }
                }
            });
        }
    }


    /**
     * If Character slap the enemie => enemie will be delete from map
     * Character Energie will be not reduced
     */
    checkCollisionEnemieWithSlap() {
        this.level.enemies.forEach((index) => {
            for (let i = 0; i < this.level.enemies.length; i++) {
                if (this.character.collisionSlapEnemie(this.level.enemies[i]) && this.keyboard.KEY_SPACE) {
                    this.level.enemies.splice(index, 1);
                    this.character.notHurtBySlap = true;
                    setTimeout(() => {
                        this.character.notHurtBySlap = false;
                    }, 500)
                };
            }
        });
    }


    checkCollisionsWithLifeObject() {
        this.level.lifeObject.forEach((life, index) => {
            if (this.character.isColliding(life)) {
                this.character.collectLife();
                new Audio('./audio/coin.mp3').play();
                this.statusBar_life.setPercentage(this.character.collectedLifes);
                this.level.lifeObject.splice(index, 1);
            }
        });
    }


    checkCollisionsWithCoins() {
        this.level.coinsObject.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoin();
                new Audio('./audio/coin.mp3').play();
                this.statusBar_coin.setPercentage(this.character.collectedCoins);
                this.level.coinsObject.splice(index, 1);
            }
        });
    }


    checkCollisionsWithEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isImmuneAfterFinslap) {
                this.collidingWithEnemie();
            }
        });

        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.collidingWithEnemie();
            }
        });
    }


    collidingWithEnemie() {
        this.character.hit(2);
        new Audio('./audio/hurt.mp3').play();
        this.statusBar_life.setPercentage(this.character.energy);
    }
}