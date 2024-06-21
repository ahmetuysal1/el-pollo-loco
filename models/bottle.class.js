class Bottle extends MovableObject {
    height = 80;
    width = 80;

    IMAGES_BOTTLE_GROUND = [
        './img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        './img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    IMAGES_BOTTLE_SPLASH = [
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        './img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png'
    ];
    
        /**
     * Constructor for creating a Bottle object.
     *
     * @param {number} x - The x-coordinate of the bottle.
     * @param {number} y - The y-coordinate of the bottle.
     * @return {void}
     */
    constructor(x,y) {
        super();
        this.loadImage(this.IMAGES_BOTTLE_GROUND[0]);
        this.x = x;
        this.y = y;
        this.offset.top = 0;
        this.offset.bottom = 0;
        this.offset.left = 0;
        this.offset.right = 0;
    }
}
