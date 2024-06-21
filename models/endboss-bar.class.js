class EndbossBar extends Drawableobject {
  IMAGES_ENDBOSSBAR = [
    "./img/7_statusbars/2_statusbar_endboss/orange/orange0.png",
    "./img/7_statusbars/2_statusbar_endboss/orange/orange20.png",
    "./img/7_statusbars/2_statusbar_endboss/blue/blue40.png",
    "./img/7_statusbars/2_statusbar_endboss/blue/blue60.png",
    "./img/7_statusbars/2_statusbar_endboss/green/green80.png",
    "./img/7_statusbars/2_statusbar_endboss/green/green100.png",
  ];

  percentage = 100;

  /**
   * Constructor function for initializing EndbossBar properties.
   *
   * @param {void}
   * @return {void}
   */
  constructor() {
    super();
    this.loadImages(this.IMAGES_ENDBOSSBAR);
    this.x = 500;
    this.y = 8;
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
    let path = this.IMAGES_ENDBOSSBAR[this.resolveImageIndex()];
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
