class World {
  level = level1;
  canvas;
  ctx;
  keyboard;
  character = new Character();
  statusBar = new StatusBar();
  coinBar = new CoinBar();
  bottleBar = new BottleBar();
  endbossBar = new EndbossBar();
  throwableObjects = [new ThrowableObject()];
  camera_x = 0;

  /**
   * Constructor for the World class.
   *
   * @param {Canvas} canvas - The canvas element to render on.
   * @param {Keyboard} keyboard - The keyboard input for controlling the game.
   * @return {void} No return value for the constructor.
   */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  /**
   * Sets the world property of the character to the current World instance.
   *
   * @param {void} No parameters for this function
   * @return {void} No return value for this function
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * Executes different collision checks at regular intervals to manage game dynamics.
   *
   * @param {void} No parameters for this function
   * @return {void} No return value for this function
   */
  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowableObjects();
      this.checkCollisionsCoins();
      this.checkCollisionsBottles();
      this.checkCollisionBottlesOnEnemies();
    }, 200);
    setInterval(() => {
      this.checkJumpOnEnemies();
    }, 40);
  }

  /**
   * Executes different collision checks on enemies and manages character actions.
   *
   * @param {void} No parameters for this function
   * @return {void} No return value for this function
   */
  checkJumpOnEnemies() {
    if (this.character.y < 110) {
      this.lastJumpTime = true;
    }
    if (this.character.y >= 180) {
      this.lastJumpTime = false;
    }
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.isAboveGround()) {
          if (this.lastJumpTime == true) {
            this.deadChicken(enemy, index);
            this.lastJumpTime = false;
            this.lastJump = true;
          }
        } else if (!enemy.isDead()) {
          this.character.hit(this.lastJump);
          this.statusBar.setPercentage(this.character.energy);
        }

        setTimeout(() => {
          this.lastJump = false;
        }, 700);
      }
    });
  }

  /**
   * A method to eliminate a chicken enemy from the game and remove it from the enemies list after a delay.
   *
   * @param {object} enemy - The enemy chicken object to be eliminated
   * @param {number} index - The index of the enemy object in the enemies list
   * @return {void} No return value for this method
   */
  deadChicken(enemy, index) {
    enemy.energy = 0;
    setTimeout(() => {
      this.level.enemies.splice(index, 1);
    }, 600);
  }

  /**
   * A method to check for throwable objects based on keyboard input.
   *
   */
  checkThrowableObjects() {
    if (this.keyboard.D && this.bottleBar.percentage > 0) {
      let bottle = new ThrowableObject(
        this.character.x + 100,
        this.character.y + 100
      );
      this.throwableObjects.push(bottle);
      this.bottleBar.percentage -= 10;
      this.bottleBar.setPercentage(this.bottleBar.percentage);
    }
  }

  /**
   * Executes collision checks between character and enemies, handling hits and status updates.
   *
   * @param {void} No parameters for this function
   * @return {void} No return value for this function
   */
  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (
        this.character.isColliding(enemy) &&
        !this.character.isAboveGround() &&
        !enemy.isDead()
      ) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
      }
    });

    this.throwableObjects.forEach((throwableObject, i) => {
      if (this.character.isColliding(throwableObject)) {
        this.throwableObjects.splice(i, 1);
      }
    });
  }

  /**
   * Executes collision checks for coins between character and coins, updating the coin bar.
   *
   * @param {void} No parameters for this function
   * @return {void} No return value for this function
   */
  checkCollisionsCoins() {
    this.level.coins.forEach((coins, i) => {
      if (this.character.isColliding(coins)) {
        this.coinBar.percentage += 10;
        this.coinBar.setPercentage(this.coinBar.percentage);
        this.level.coins.splice(i, 1);
      }
    });
  }

  /**
   * Executes collision checks for bottles between character and bottles, updating the bottle bar.
   *
   * @param {void} No parameters for this function
   * @return {void} No return value for this function
   */
  checkCollisionsBottles() {
    this.level.bottles.forEach((bottles, i) => {
      if (this.character.isColliding(bottles)) {
        this.bottleBar.percentage += 10;
        this.bottleBar.setPercentage(this.bottleBar.percentage);
        this.level.bottles.splice(i, 1);
      }
    });
  }

  /**
   * Executes collision checks between throwable objects and enemies, handling hits and status updates for Endboss enemies.
   *
   * @param {void} No parameters for this function
   * @return {void} No return value for this function
   */
  checkCollisionBottlesOnEnemies() {
    this.throwableObjects.forEach((throwableObject, i) => {
      this.level.enemies.forEach((enemy) => {
        if (throwableObject.isColliding(enemy) && enemy instanceof Endboss) {
          enemy.hit();
          this.endbossBar.setPercentage(enemy.energy);
          enemy.animate();
        }
        this.characterAndEndboss(enemy);
      });
    });
  }

  /**
   * Checks if the character has reached a certain position on the x-axis and if the enemy is an instance of the Endboss class.
   * If both conditions are met and the enemy has not had its first contact with the character, it sets the enemy's hadFirstContact property to true.
   *
   * @param {Object} enemy - The enemy object to check.
   * @return {void} This function does not return a value.
   */
  characterAndEndboss(enemy) {
    if (
      this.character.x > 2000 &&
      !enemy.hadFirstContact &&
      enemy instanceof Endboss
    ) {
      enemy.hadFirstContact = true;
    }
  }

  /**
   * Draws the game elements on the canvas including background, characters, and objects.
   * Handles translations for camera movement and animations.
   *
   * @param {void} No parameters for this function
   * @return {void} No return value for this function
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);

    this.ctx.translate(-this.camera_x, 0); // Back
    // ------ Space for fixed objects -----
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.endbossBar);
    this.ctx.translate(this.camera_x, 0); // Forward

    this.addToMap(this.character);

    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.throwableObjects);

    this.ctx.translate(-this.camera_x, 0);

    // draw() wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * Iterates over an array of objects and adds each object to the map using addToMap.
   *
   * @param {array} objacts - The array of objects to be added to the map
   * @return {void} No return value for this function
   */
  addObjectsToMap(objacts) {
    objacts.forEach((object) => {
      this.addToMap(object);
    });
  }

  /**
   * A method to add a movable object to the map.
   *
   * @param {MovableObject} mo - The movable object to be added to the map
   * @return {void} No return value for this method
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  /**
   * Saves the context, translates it by the width of the movable object, scales it to flip horizontally, and updates the x-coordinate of the movable object.
   *
   * @param {MovableObject} mo - The movable object to be flipped
   * @return {void} No return value for this method
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * Updates the x-coordinate of the movable object to flip it back horizontally and restores the canvas context.
   *
   * @param {MovableObject} mo - The movable object to be flipped back
   * @return {void} No return value for this method
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
