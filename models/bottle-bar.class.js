class BottleBar extends Drawableobject {

    IMAGES_BOTTLES = [
              './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png', // 0
              './img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
              './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
              './img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
              './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
              './img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png' // 5
    ];
    percentage = 0;

     /**
     * Constructor for creating a BottleBar object.
     *
     * @param {void}
     * @return {void}
     */
    constructor() {
        super();
        this.loadImage(this.IMAGES_BOTTLES[0]);
        this.loadImages(this.IMAGES_BOTTLES);
        this.x = 10;
        this.y = 95;
        this.width = 200;
        this.height = 60;
        this.setPercentage(this.percentage);
    }
    
    /**
     * Set the percentage value and update the image based on the percentage.
     *
     * @param {number} percentage - The new percentage value to set.
     * @return {void} No return value.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_BOTTLES[this.resolveImageIndex(percentage)];
        this.img = this.imageCache[path];
    }

     /**
     * A function to resolve the index of the image based on the current percentage.
     *
     * @param {void} No parameters needed.
     * @return {number} The index of the image based on the current percentage.
     */
     resolveImageIndex(){
        if (this.percentage === 0) {
            return 0;
        }
        if (this.percentage >= 1 && this.percentage <= 20) {
            return 1;
        }
        if (this.percentage >= 30 && this.percentage <= 40) {
            return 2;
        }
        if (this.percentage >= 50 && this.percentage <= 60) {
            return 3;
        }
        if (this.percentage >= 70 && this.percentage <= 90) {
            return 4;
        }
        if (this.percentage === 100) {
            return 5;
        }
    }
    
}