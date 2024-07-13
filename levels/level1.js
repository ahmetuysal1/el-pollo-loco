let level1;

/**
 * Creates a level with chickens, clouds, background objects, coins, and bottles.
 *
 * @return {Level} The generated level
 */
function initLevel() {
    level1 = new Level (
        [
        new Chicken(),
        new ChickenSmall(),
        new Chicken(),
        new ChickenSmall(),
        new Chicken(),
        new ChickenSmall(),
        new Endboss(),
    ],
    [
        new Cloud(),
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', -719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
    
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
    
        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
    
        new BackgroundObject('img/5_background/layers/air.png', 719*2),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719*2),
    
        new BackgroundObject('img/5_background/layers/air.png', 719*3),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719*3),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719*3),
    ],
    [
        new Coin(150, 280),
        new Coin(300, 280),
        new Coin(450, 280),
        new Coin(530, 280),
        new Coin(650, 280),
        new Coin(700, 280),
        new Coin(950, 280),
        new Coin(1500, 280),
        new Coin(1800, 280),
        new Coin(2000, 280),
    ],
    [
        new Bottle(350, 350),
        new Bottle(410, 350),
        new Bottle(510, 350),
        new Bottle(700, 350),
        new Bottle(800, 350),
        new Bottle(900, 350),
        new Bottle(1000, 350),
        new Bottle(1200, 350),
        new Bottle(1500, 350),
        new Bottle(1800, 350),
    ],
);
}
 

