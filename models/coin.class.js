class Coin extends MovableObject {
  width = 100;
  height = 100;
  offset = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  }

  IMAGES = [
    './img/8_coin/coin_1.png', 
    './img/8_coin/coin_2.png'
  ];
  
    /**
   * Constructor for the Coin class.
   *
   * @param {number} x - The x-coordinate of the coin.
   * @param {number} y - The y-coordinate of the coin.
   * @return {void}
   */
  constructor(x, y) {
    super().loadImage("./img/8_coin/coin_1.png");
    this.loadImages(this.IMAGES);
    this.x = x + Math.random() * 100;
    this.y = y;
  }
}
