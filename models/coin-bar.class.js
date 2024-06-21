class CoinBar extends Drawableobject {

    IMAGES_COINS = [
              './img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png', // 0
              './img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
              './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
              './img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
              './img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
              './img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png' // 5
    ];

    percentage = 0;

     /**
     * Constructor for the CoinBar class.
     *
     * @param {void} 
     * @return {void}
     */
    constructor() {
      super();
      this.loadImages(this.IMAGES_COINS);
      this.x = 10;
      this.y = 45;
      this.width = 200;
      this.height = 60;
      this.setPercentage(0);
    }

    /**
     * Set the percentage value and update the image based on the percentage.
     *
     * @param {number} percentage - The new percentage value to set.
     * @return {void} No return value.
     */
    setPercentage(percentage) {
      this.percentage = percentage; // => 0 ... 5
      let path = this.IMAGES_COINS[this.resolveImageIndex(percentage)];
      this.img = this.imageCache[path];
    }
    
     /**
     * A function to resolve the index of the image based on the current percentage.
     *
     * @param {void} No parameters needed.
     * @return {number} The index of the image based on the current percentage.
     */
    resolveImageIndex() {
      if (this.percentage == 100) {
        return 5;
      } else if (this.percentage > 80) {
        return 4;
      } else if (this.percentage > 60) {
        return 3;
      } else if (this.percentage > 40) {
        return 2;
      } else if (this.percentage > 20) {
        return 1;
      } else {
        return 0;
      }
    }
}