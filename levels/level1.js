const level1 = new Level(
    [
        new Fish_Puffer_Red(),
        new Fish_Puffer_Red(),
        new Fish_Puffer_Red(),
        new Fish_Puffer_Red(),
        new Fish_Puffer_Green(),
        new Fish_Puffer_Green(),
        new Fish_Puffer_Green(),
        new Fish_Puffer_Green(),
        new Jelly_Dangerous(),
        new Jelly_Dangerous(),
        new Jelly_Dangerous(),
        new Jelly_Regular(),
        new Jelly_Regular(),
        new Jelly_Regular(),
        new Endboss()
    ],

    [
        new Sunlight()
    ],

    [
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
        new BarrierHorizontalObject('../img/background/barrier/2.png', 720),

        new BackgroundObject('../img/background/layers/water/D1.png', 720 * 2),
        new BackgroundObject('../img/background/layers/fondo2/L1.png', 720 * 2),
        new BackgroundObject('../img/background/layers/fondo1/L1.png', 720 * 2),
        new BackgroundObject('../img/background/layers/floor/L1.png', 720 * 2),
        new BarrierVertikalObject('../img/background/barrier/3.png', 720 * 2),

        new BackgroundObject('../img/background/layers/water/D2.png', 720 * 3),
        new BackgroundObject('../img/background/layers/fondo2/L2.png', 720 * 3),
        new BackgroundObject('../img/background/layers/fondo1/L2.png', 720 * 3),
        new BackgroundObject('../img/background/layers/floor/L2.png', 720 * 3),

        new BackgroundObject('../img/background/layers/water/D1.png', 720 * 4),
        new BackgroundObject('../img/background/layers/fondo2/L1.png', 720 * 4),
        new BackgroundObject('../img/background/layers/fondo1/L1.png', 720 * 4),
        new BackgroundObject('../img/background/layers/floor/L1.png', 720 * 4)
    ],

    [
        new CoinsObject(),
        new CoinsObject(),
        new CoinsObject(),
        new CoinsObject(),
        new CoinsObject(),
        new CoinsObject(),
        new CoinsObject(),
        new CoinsObject(),
        new CoinsObject(),
        new CoinsObject()
    ],

    [
        new LifeObject(),
        new LifeObject(),
        new LifeObject(),
        new LifeObject(),
        new LifeObject()
    ]

);