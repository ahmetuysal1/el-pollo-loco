class Cloud extends MovableObject {
  y = 25;
  height = 300;
  width = 700;

 /**
   * Constructor for the Cloud class.
   *
   * @param {void} 
   * @return {void}
   */
  constructor() {
    super().loadImage("img/5_background/layers/4_clouds/full.png");
    this.x = Math.random() * 500;
    this.animate();
  }
  
   /**
   * A function to animate the object by moving it left periodically.
   *
   * @param {void} No parameters needed.
   * @return {void} No return value.
   */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
