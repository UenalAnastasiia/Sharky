class MovableObject extends DrawableObject {
    canvasHeight = 480;
    canvasWidth = 720;
    speed = 0.15;
    mirrorImage = false;
    speedY = 0;
    speedYBubble = 2;
    acceleration = 0.01;
    energy = 100;
    lastHit = 0;
    currentImage = 0;
    firstCurrentImage = 0;
    collectedCoins = 0;
    coins = 0;
    collectedLifes = 100;
    life = 0;
    endbossLife = 100;


    /**
     * Load images from each object and animeted it
     * @param {array} images 
     */
    showAnimation(images) {
        let i = this.currentImage % images.length;    // % is Modulu => means the math rest   // let i = 0 % 8;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    showOneInterval(images, interval, nextInterval) {
        let i = this.firstCurrentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.firstCurrentImage++;

        if (this.firstCurrentImage > images.length - 1) {
            clearInterval(interval);
            clearInterval(nextInterval);
        }
    }


    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }


    /**
     * Character sinks slowly to the ground if doesn´t click KEY_UP
     */
    applyGravity() {
        setInterval(() => {
            this.y += this.speedYBubble;
            this.speedYBubble -= this.acceleration;
            // if (this.isAboveGround()) {
            //     this.y -= this.speedYBubble;
            //     this.speedYBubble -= this.acceleration;
            // }
        }, 1000 / 25);
    }


    isAboveGround() {
        return this.y < 310;
    }


    /**
     * Colliding, if objects crash at certain points
     * @param {object} moveObj 
     * @returns true/false
     */
    isColliding(moveObj) {
        if (this instanceof Character || this instanceof Fish_Puffer_Green || this instanceof Fish_Puffer_Red || this instanceof Fish_Orange || this instanceof Jelly_Dangerous || this instanceof Jelly_Regular) {
            return  this.x + 35 + 130 > moveObj.x + 35 && this.y + 110 + 60 > moveObj.y && this.x + 35 < moveObj.x + 35 && this.y + 90 < moveObj.y + moveObj.height;   
        } else if (this instanceof Endboss) {
            return this.x + this.width > moveObj.x + 35 && this.y + this.height > moveObj.y - 110 && this.x + 35 < moveObj.x && this.y + 90 < moveObj.y - 110 + moveObj.height;
        } else {
            return this.x + this.width > moveObj.x && this.y + this.height > moveObj.y && this.x < moveObj.x + moveObj.width && this.y < moveObj.y + moveObj.height;
        }
    }


    collisionSlapEnemie(moveObj) {
        if (moveObj instanceof Fish_Puffer_Green || moveObj instanceof Fish_Puffer_Red || moveObj instanceof Fish_Orange || moveObj instanceof Jelly_Dangerous || moveObj instanceof Jelly_Regular) {
            return (
                (this.x + 35) + 130 > (moveObj.x + 35) &&
                (this.y + 110) + 60 > moveObj.y &&
                (this.x + 35) < (moveObj.x + 35) &&
                (this.y + 90) < moveObj.y + moveObj.height
            );
        }
    }


    hit(amount) {
        this.energy -= amount;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * if timepassed < 5 => returns true
     * @returns true/false
     */
    isHurt() {
        if (this.notHurtBySlap) {
            return false;
        } else {
            let timepassed = new Date().getTime() - this.lastHit;   // Differenz in ms
            timepassed = timepassed / 1000; // Differenz in Sec
            return timepassed < 1;
        }
    }


    /**
     * if energy = 0 => returns true
     * @returns true/false
     */
    isDead() {
        return this.energy == 0;
    }


    collectCoin() {
        this.collectedCoins += 20;
        if (this.collectedCoins > 100) {
            this.collectedCoins = 100;
        } else {
            this.coins = new Date().getTime();
        }
    }


    isCollectedCoin() {
        let timepassed = new Date().getTime() - this.coins;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    collectLife() {
        this.collectedLifes += 20;
        if (this.collectedLifes > 100) {
            this.collectedLifes = 100;
        } else {
            this.life = new Date().getTime();
        }
    }


    isCollectedLife() {
        let timepassed = new Date().getTime() - this.life;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }


    attackEndboss() {
        this.endbossLife -= 10;
        if (this.endbossLife <= 0) {
            this.endbossLife == 0;
            world.level.endboss[0].showDeadImages();
        }
    }
}