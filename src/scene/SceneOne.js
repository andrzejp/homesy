import Spaceman from '../sprite/spaceman.js'

class SceneOne extends Phaser.Scene {
    constructor() {
        super({
            key: 'SceneOne',
            physics: {
                default: 'impact',
                impact: {
                    setBounds: {
                        x: 0,
                        y: 0,
                        width: 3200,
                        height: 600,
                        thickness: 32
                    }
                }
            }
        });
    }

    preload() {
        this.load.svg('bgBack', 'assets/bg_back.svg', {height: 600, width: 3200});
        this.load.svg('bgFront', 'assets/bg_front.svg', {height: 600, width: 3200});
        this.load.spritesheet('spaceman', 'assets/sm.png', {frameWidth: 75, frameHeight: 100});
        this.load.svg('planetGreen', 'assets/planet_green.svg', {height: 200, width: 200});
        this.load.svg('planetPurple', 'assets/planet_purple.svg');
        this.load.svg('bigStar', 'assets/star.svg', {height: 30, width: 30});
        this.load.svg('smallStar', 'assets/star.svg', {height: 10, width: 10});

    }

    create() {

        this.cameras.main.setBounds(0, 0, 3200, 600);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.add.image(0, 0, 'bgBack').setOrigin(0);
        console.info(this);
        this.spaceman = this.add.existing(new Spaceman(this.impact.world, 100, 200, this));
        this.createPlanets();
        this.createStarfield();

        // this.add.image(0, 106, 'bgFront').setOrigin(0); //Uncomment for extra background

        this.text = this.add.text(10, 10, '', {font: '16px Courier', fill: '#00ff00'}).setDepth(1).setScrollFactor(0);

        this.input.manager.enabled = true;

        this.input.once('pointerdown', function () {
            this.scene.switch('SceneTwo');
        }, this);
    }

    update() {
        this.spaceman.update(this.cursors);

        this.text.setText('Found way home: ' + this.spaceman.humanityPercent);

        this.cameras.main.scrollX = this.spaceman.x - 512;
    }

    createPlanets() {
        let greenPlanet = this.add.image(200, 50, 'planetGreen').setOrigin(0);
        greenPlanet.setScrollFactor(0.1);

        let purplePlanet = this.add.image(600, 70, 'planetPurple').setOrigin(0);
        purplePlanet.setScrollFactor(0.1);
    }

    createStarfield() {
        const group = this.add.group({key: 'smallStar', frameQuantity: 120});

        group.createMultiple({key: 'bigStar', frameQuantity: 20});

        const rect = new Phaser.Geom.Rectangle(0, 0, 3200, 550);

        Phaser.Actions.RandomRectangle(group.getChildren(), rect);

        group.children.iterate(function (child, index) {

            let scrollFactor = Math.max(0.3, Math.random());

            if (child.texture.key === 'bigStar') {
                scrollFactor = 0.2;
            }

            child.setScrollFactor(scrollFactor);
        });
    }
}

export default SceneOne;