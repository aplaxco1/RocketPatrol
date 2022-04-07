class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        // add object to existing scene
        scene.add.existing(this);
        // store point value of spaceship
        this.points = pointValue;
        // movement pixels per frame
        this.moveSpeed = 3;
    }

    update() {
        // move spaceship left across scene
        this.x -= this.moveSpeed;
        if (this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }
}