class MovableObject extends Drawableobject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2;
  energy = 100;
  lastHit = 0;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  /**
   * Apply gravity effect to the movable object by adjusting its position based on speed and acceleration.
   *
   * @param {void}
   * @return {void}
   */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /**
   * Determines if the object is above the ground level.
   *
   * @param {void}
   * @return {boolean} Returns true if the object is above ground, false otherwise.
   */
  isAboveGround() {
    if (this instanceof ThrowableObject) {
      return true;
    } else {
      return this.y < 180;
    }
  }

  /**
   * Checks if this object is colliding with the given movable object.
   *
   * @param {MovableObject} mo - The movable object to check collision with.
   * @return {boolean} Returns true if a collision is detected, false otherwise.
   */
  isColliding(mo) {
    return (
      this.x + this.width - this.offset.right > mo.x + mo.offset.left && // R -> L
      this.y + this.height - this.offset.bottom > mo.y + mo.offset.top && // T -> B
      this.x + this.offset.left < mo.x + mo.width - mo.offset.right && // L -> R
      this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom // B -> T
    );
  }

  /**
   * A function to reduce the energy level by 5 points and update the last hit timestamp if energy is above 0.
   *
   * @param {void}
   * @return {void}
   */
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * A function to check if the object has been hurt recently based on the last hit timestamp.
   *
   * @param {void}
   * @return {boolean} Returns true if the object has been hurt within the last second, false otherwise.
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
    timepassed = timepassed / 1000; // Difference in s
    return timepassed < 1;
  }

  /**
   * Checks if the object is dead based on its energy level.
   *
   * @param {void}
   * @return {boolean} Returns true if the object's energy is equal to 0, false otherwise.
   */
  isDead() {
    return this.energy == 0;
  }

  /**
   * Checks if the object is dead based on its energy level.
   *
   * @param {void}
   * @return {boolean} Returns true if the object's energy is equal to 0, false otherwise.
   */
  playAnimation(images) {
    let i = this.currentImage % images.length; // let i = 7 % 6; => 1, Rest 1
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  /**
   * A function to move the object to the right based on its speed.
   *
   * @param {void}
   * @return {void}
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * A function to move the object to the left based on its speed.
   *
   * @param {void}
   * @return {void}
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Sets the vertical speed of the object to 30 and updates the idle time.
   *
   * @param {void}
   * @return {void}
   */
  jump() {
    this.speedY = 30;
    this.idleTime = new Date().getTime();
  }

  /**
   * Clears all intervals set by window.clearInterval up to 9999.
   *
   * @param {void}
   * @return {void}
   */
  clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }
}
