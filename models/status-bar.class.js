class StatusBar extends Drawableobject {
  IMAGES = [
    './img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png', // 0
    './img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
    './img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
    './img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
    './img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
    './img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png' // 5
  ];

  percentage = 100;
   /**
   * Constructor for the StatusBar class.
   *
   * @param {void} 
   * @return {void}
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 10;
    this.y = 0;
    this.width = 200;
    this.height = 60;
    this.setPercentage(100);
  }
  /**
   * Set the percentage value and update the image based on the percentage.
   *
   * @param {number} percentage - The new percentage value to set.
   * @return {void} No return value.
   */
  setPercentage(percentage) {
    this.percentage = percentage; // => 0 ... 5
    let path = this.IMAGES[this.resolveImageIndex()];
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
