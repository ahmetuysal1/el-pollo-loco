class ChickenSmall extends MovableObject {
    height = 50;
    width = 50;
    y = 370;
    offest = {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
    };

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    /**
     * Constructor for the ChickenSmall class.
     *
     * @param {void} 
     * @return {void}
     */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }
    
     /**
     * A function to animate the chicken with different actions based on its state.
     *
     * @param {void} No parameters needed.
     * @return {void} No return value.
     */
    animate() {
        setInterval(() => {
            if  (!this.isDead()) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 400);

        setInterval(() => {
            if (!this.isDead())
                this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }
}