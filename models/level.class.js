class Level {
    enemies;
    endboss;
    sunlights;
    backgroundObjects;
    coinsObject;
    lifeObject;
    level_end_x = 2880;
    level_end_y = 330;

    
    constructor(enemies, endboss, sunlights, backgroundObjects, coinsObject, lifeObject) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.sunlights = sunlights;
        this.backgroundObjects = backgroundObjects;
        this.coinsObject = coinsObject;
        this.lifeObject =  lifeObject;
    }
}