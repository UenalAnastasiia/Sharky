class Level {
    enemies;
    sunlights;
    backgroundObjects;
    coinsObject;
    level_end_x = 2880;
    level_end_y = 330;

    
    constructor(enemies, sunlights, backgroundObjects, coinsObject) {
        this.enemies = enemies;
        this.sunlights = sunlights;
        this.backgroundObjects = backgroundObjects;
        this.coinsObject = coinsObject;
    }
}