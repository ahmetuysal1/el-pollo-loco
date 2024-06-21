class ThrowableObject extends MovableObject {
  bottleSplashed = false;
  deletable = false;
  bottleShooted = false;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  IMAGES_ROTATION = [
    "./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "./img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGES_BOTTLE_SPLASH = [
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "./img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  /**
   * Constructor for creating a ThrowableObject.
   *
   * @param {number} x - The x-coordinate of the object.
   * @param {number} y - The y-coordinate of the object.
   * @return {void} Constructor does not return anything.
   */
  constructor(x, y) {
    super().loadImage("./img/6_salsa_bottle/salsa_bottle.png");
    this.loadImages(this.IMAGES_ROTATION);
    this.loadImages(this.IMAGES_BOTTLE_SPLASH);
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.throw();
    this.animateBottle();
  }

  /**
   * Initiates the throwing action of the object, setting its vertical speed, applying gravity, and moving it horizontally.
   *
   * @param {void}
   * @return {void}
   */
  throw() {
    this.speedY = 30;
    this.applyGravity();
    let moveInterval = setInterval(() => {
      this.x += 10;
      if (this.deletable) {
        clearInterval(moveInterval);
      }
    }, 25);
  }

  /**
   * Sets the bottle as splashed, plays the bottle splash animation, sets vertical speed to 0, and marks the object as deletable.
   *
   */
  breakAndSplash() {
    this.bottleSplashed = true;
    this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
    this.speedY = 0;
    this.deletable = true;
  }

  /**
   * Checks if the animation of the throwable object is finished based on the images of the bottle splash.
   *
   * @param {void}
   * @return {boolean} Returns true if the current image index is at the last image of the bottle splash, false otherwise.
   */
  animationFinished() {
    if (this.IMAGES_BOTTLE_SPLASH && this.IMAGES_BOTTLE_SPLASH.length > 0) {
      return this.currentImage >= this.IMAGES_BOTTLE_SPLASH.length - 1;
    }
    return false;
  }

  /**
   * Initiates the bottle animation interval, playing the rotation animation until the bottle is splashed,
   * then stops the interval once the animation is finished.
   *
   * @param {void}
   * @return {void}
   */
  animateBottle() {
    let animationInterval = setInterval(() => {
      if (!this.bottleSplashed) {
        this.playAnimation(this.IMAGES_ROTATION);
      }
      if (this.animationFinished()) {
        clearInterval(animationInterval);
      }
    }, 25);
  }
}
