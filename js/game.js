let canvas;
let world;
let keyboard = new Keyboard();
let background_sound = new Audio('./audio/wild_west_background.mp3');
let playSound;

/**
 * Initializes the game by setting up the canvas and creating a new World instance.
 *
 * @param {void}
 * @return {void}
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * Hides the start screen element.
 *
 * @param {void}
 * @return {void}
 */
function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('iconAudio').style.display = 'block';
    document.getElementById('canvas').style.display = 'block';
    background_sound.play().then(() => this.playSound = true);
    initLevel();
    init();
    bindBtnsPressEvent();
}

/**
 * Mutes the audio by changing the display style of the 'iconAudioOff' element to block.
 *
 * @param {void}
 * @return {void}
 */
function muteAudio() {
    document.getElementById('iconAudioOff').style.display = 'block';
    background_sound.pause().then(() => this.playSound = false);
}

/**
 * A function that plays audio by displaying the 'iconAudio' element and hiding the 'iconAudioOff' element.
 *
 * @param {void}
 * @return {void}
 */
function playAudio() {
    document.getElementById('iconAudio').style.display = 'block';
    document.getElementById('iconAudioOff').style.display = 'none';
    background_sound.play().then(() => this.playSound = true);
}

/**
 * Opens the information screen and hides the mobile controller.
 *
 * @param {void} 
 * @return {void}
 */
function openInfo() {
    document.getElementById('infoScreen').style.display = 'block';
    document.getElementById('mobileController').style.display = 'none';
}

/**
 * Closes the information screen, hides the controller screen, and displays the start screen.
 *
 * @param {void} 
 * @return {void}
 */
function closeInfo() {
    document.getElementById('infoScreen').style.display = 'none';
    document.getElementById('controllerScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

/**
 * Hides the game over screen and displays the start screen, hiding the 'you win' screen.
 *
 * @param {void} 
 * @return {void}
 */
function backToMenu() {
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    document.getElementById('youWin').style.display = 'none';
}

/**
 * Sets the style display property of the 'controllerScreen' element to 'block'.
 *
 * @param {void} 
 * @return {void}
 */
function controllerInfo() {
    document.getElementById('controllerScreen').style.display = 'block';
}

/**
 * Restarts the game by adjusting the display styles of various elements.
 *
 * @param {void}
 * @return {void}
 */
function restartGame() {
    window.location.reload();
}

window.addEventListener("keydown", (event) => {
    if(event.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (event.keyCode == 38) {
        keyboard.UP = true;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if(event.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (event) => {
    if(event.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (event.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (event.keyCode == 38) {
        keyboard.UP = false;
    }

    if (event.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if(event.keyCode == 68) {
        keyboard.D = false;
    }
});

/**
 * Binds touchstart and touchend events to the buttons for left, right, throw, and jump actions.
 *
 * @param {void} 
 * @return {void}
 */
function bindBtnsPressEvent() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.LEFT = true;
    });
  
    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.LEFT = false;
    });
  
    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.RIGHT = true;
    });
  
    document.getElementById('btnRight').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.RIGHT = false;
    });
  

if(screen.orientation.type == 'landscape-primary') {
    rotateDeviceMessage.classList.add('d-none');
;
}    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.D = true;
    });
  
    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.D = false;
    });
  
    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.SPACE = true;
    });
  
    document.getElementById('btnJump').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.SPACE = false;
    });
}