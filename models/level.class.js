class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    level_end_x = 2200;
    
     /**
     * Constructor function for initializing Level properties.
     *
     * @param {type} enemies - description of enemies parameter
     * @param {type} clouds - description of clouds parameter
     * @param {type} backgroundObjects - description of backgroundObjects parameter
     * @param {type} coins - description of coins parameter
     * @param {type} bottles - description of bottles parameter
     * @return {type} description of return value
     */
    constructor(enemies, clouds, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}