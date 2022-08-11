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
        new BackgroundObject('../img/background/layers/water/D1.png', 0),
        new BackgroundObject('../img/background/layers/fondo2/L1.png', 0),
        new BackgroundObject('../img/background/layers/fondo1/L1.png', 0),
        new BackgroundObject('../img/background/layers/floor/L1.png', 0)
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.sunlights);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        

        // Draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}