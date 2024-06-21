class Character extends MovableObject {
  width = 100;
  height = 250;
  y = 55;
  speed = 10;
  offset = {
    top: 90,
    bottom: 10,
    left: 20,
    right: 30,
  };

  IMAGES_WALKING = [
    './img/2_character_pepe/2_walk/W-21.png',
    './img/2_character_pepe/2_walk/W-22.png',
    './img/2_character_pepe/2_walk/W-23.png',
    './img/2_character_pepe/2_walk/W-24.png',
    './img/2_character_pepe/2_walk/W-25.png',
    './img/2_character_pepe/2_walk/W-26.png'
  ];

  IMAGES_JUMPING = [
    './img/2_character_pepe/3_jump/J-31.png',
    './img/2_character_pepe/3_jump/J-32.png',
    './img/2_character_pepe/3_jump/J-33.png',
    './img/2_character_pepe/3_jump/J-34.png',
    './img/2_character_pepe/3_jump/J-35.png',
    './img/2_character_pepe/3_jump/J-36.png',
    './img/2_character_pepe/3_jump/J-37.png',
    './img/2_character_pepe/3_jump/J-38.png',
    './img/2_character_pepe/3_jump/J-39.png'
  ];

  IMAGES_HURT = [
    './img/2_character_pepe/4_hurt/H-41.png',
    './img/2_character_pepe/4_hurt/H-42.png',
    './img/2_character_pepe/4_hurt/H-43.png'
  ];

  IMAGES_DEAD = [
    './img/2_character_pepe/5_dead/D-51.png',
    './img/2_character_pepe/5_dead/D-52.png',
    './img/2_character_pepe/5_dead/D-53.png',
    './img/2_character_pepe/5_dead/D-54.png',
    './img/2_character_pepe/5_dead/D-55.png',
    './img/2_character_pepe/5_dead/D-56.png',
    './img/2_character_pepe/5_dead/D-57.png'
  ];

  IMAGES_IDLE = [
    './img/2_character_pepe/1_idle/idle/I-1.png',
    './img/2_character_pepe/1_idle/idle/I-2.png',
    './img/2_character_pepe/1_idle/idle/I-3.png',
    './img/2_character_pepe/1_idle/idle/I-4.png',
    './img/2_character_pepe/1_idle/idle/I-5.png',
    './img/2_character_pepe/1_idle/idle/I-6.png',
    './img/2_character_pepe/1_idle/idle/I-7.png',
    './img/2_character_pepe/1_idle/idle/I-8.png',
    './img/2_character_pepe/1_idle/idle/I-9.png',
    './img/2_character_pepe/1_idle/idle/I-10.png'
  ];

  IMAGES_LONGIDLE = [
    './img/2_character_pepe/1_idle/long_idle/I-11.png',
    './img/2_character_pepe/1_idle/long_idle/I-12.png',
    './img/2_character_pepe/1_idle/long_idle/I-13.png',
    './img/2_character_pepe/1_idle/long_idle/I-14.png',
    './img/2_character_pepe/1_idle/long_idle/I-15.png',
    './img/2_character_pepe/1_idle/long_idle/I-16.png',
    './img/2_character_pepe/1_idle/long_idle/I-17.png',
    './img/2_character_pepe/1_idle/long_idle/I-18.png',
    './img/2_character_pepe/1_idle/long_idle/I-19.png',
    './img/2_character_pepe/1_idle/long_idle/I-20.png'
  ];

  world;
  idleTime = new Date().getTime();
  killed = false;
  playSound = false
  walking_sound = new Audio('./audio/audio_running.mp3');
  jumping_sound = new Audio('./audio/audio_jump.mp3');
  hurt_sound = new Audio('./audio/audio_hurt.mp3');
  snoring_sound = new Audio('./audio/audio_snoring.mp3');

  /**
   * Constructor for initializing a Character object with various images and animations.
   *
   * @param {void} 
   * @return {void}
   */
  constructor() {
    super().loadImage('img/2_character_pepe/2_walk/W-21.png');
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_LONGIDLE);
    this.applyGravity();
    this.animate();
  }

    /**
   * Function that handles the animation of the character.
   *
   */
  animate() {
    setInterval(() => {
    }, 50);

    setInterval(() => {
      this.walking_sound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
        this.walking_sound.play();
      }
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.walking_sound.play();
        this.otherDirection = true;
      }
      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
        this.jumping_sound.play();
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      const currentTime = new Date().getTime();
      const timeSinceLastMove = currentTime - this.idleTime;

      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
        document.getElementById('gameOver').style.display = 'block';
        this.clearAllIntervals();
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
        this.hurt_sound.play().then(() => this.playSound = true);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          this.playAnimation(this.IMAGES_WALKING);
          this.idleTime = currentTime;  
      } else if (timeSinceLastMove > 5000) {
        this.playAnimation(this.IMAGES_LONGIDLE);
        this.snoring_sound.play().then(() => this.playSound = true);
      } else if (!this.isAboveGround()) {
        this.playAnimation(this.IMAGES_IDLE);
      }
    }, 1000 / 10);
  }
  
   /**
   * Sets the vertical speed of the character to 30.
   *
   */
  jump() {
    this.speedY = 30;
  }
}
