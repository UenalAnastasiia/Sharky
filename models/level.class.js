class Level {
    enemies;
    sunlights;
    backgroundObjects;
    level_end_x = 2880;
    level_end_y = 330;

    
    constructor(enemies, sunlights, backgroundObjects) {
        this.enemies = enemies;
        this.sunlights = sunlights;
        this.backgroundObjects = backgroundObjects;
    }
}