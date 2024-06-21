class Drawableobject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 120;
  y = 280;
  height = 150;
  width = 100;

  /**
   * Loads an image from the specified path.
   *
   * @param {string} path - The path of the image to load.
   * @return {void} No return value.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * Draws the image on the canvas at the specified position and dimensions.
   *
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
   * @return {void} No return value.
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * Draws a frame on the canvas based on the object type.
   *
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
   * @return {void} No return value.
   */
  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Chicken ||
      this instanceof Endboss ||
      this instanceof ThrowableObject ||
      this instanceof ChickenSmall ||
      this instanceof Bottle ||
      this instanceof Coin
    ) {
      ctx.beginPath();
      ctx.lineWidth = "3";
      ctx.strokeStyle = "red";
      ctx.rect(
        this.x + this.offset.left,
        this.y + this.offset.top,
        this.width - this.offset.left - this.offset.right,
        this.height - this.offset.top - this.offset.bottom
      );
      ctx.stroke();
    }
  }

  /**
   * Loads images into the image cache from the provided array of image paths.
   *
   * @param {array} array - An array of image paths to load.
   * @return {void} No return value.
   */
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }
}
