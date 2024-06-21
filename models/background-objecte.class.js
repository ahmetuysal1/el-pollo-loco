class BackgroundObject extends MovableObject { 

        width = 720;
        height = 480;
        
        /**
         * Constructor for creating a BackgroundObject.
         *
         * @param {string} imagePath - The path to the image file.
         * @param {number} x - The x-coordinate of the object.
         */
        constructor(imagePath, x) {
            super().loadImage(imagePath);
            this.x = x;
            this.y = 480 - this.height;
    }
}