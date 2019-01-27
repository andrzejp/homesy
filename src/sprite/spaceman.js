class Spaceman extends Phaser.Physics.Impact.Sprite {


    constructor(world, x, y, scene) {
        super(world, x, y, 'spaceman');
        this.setDepth(1).setMaxVelocity(400).setFriction(800, 600).setPassiveCollision();
        this.createAnimations();
        this.scene = scene;
        this.humanityPercent = 0;
    }

    update(cursors) {
        if (cursors.left.isDown)
        {
            this.setAccelerationX(-500);
            this.turnedLeft = true;
            this.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            this.setAccelerationX(500);
            this.turnedLeft = false;
            this.anims.play('right', true);
        }
        else
        {
            this.setAccelerationX(0);
            this.anims.play('turn');
        }

        if (cursors.up.isDown)
        {
            this.setAccelerationY(-500);
        }
        else if (cursors.down.isDown)
        {
            this.setAccelerationY(500);
        }
        else
        {
            this.setAccelerationY(0);
        }
    }

    createAnimations () {
        this.scene.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers('spaceman', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        });

        this.scene.anims.create({
            key: 'turn',
            frames: [ { key: 'spaceman', frame: 2 } ],
            frameRate: 20
        });

        this.scene.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers('spaceman', { start: 3, end: 4 }),
            frameRate: 5,
            repeat: -1
        });
    }
}
export default Spaceman;