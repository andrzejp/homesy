import Spaceman from "../sprite/spaceman.js";

class SceneTwo extends Phaser.Scene {
    constructor() {
        super({
            key: 'SceneTwo',
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
        this.goal = 12;
        this.collected = 0;
        this.textBottom = 'Bring all of your loved ones home to finish your journey!'
    }

    preload() {
        this.load.svg('bgBack', 'assets/bg_back.svg', {height: 600, width: 3200});
        this.load.svg('bgFront', 'assets/bg_front.svg', {height: 600, width: 3200});
        this.load.spritesheet('spaceman', 'assets/sm.png', {frameWidth: 75, frameHeight: 100});
        this.load.svg('planetGreen', 'assets/planet_green.svg', {height: 200, width: 200});
        this.load.svg('planetPurple', 'assets/planet_purple.svg');
        this.load.svg('bigStar', 'assets/star.svg', {height: 30, width: 30});
        this.load.svg('smallStar', 'assets/star.svg', {height: 10, width: 10});
        this.load.svg('person', 'assets/heart.svg');
        this.load.image('earth', 'assets/earth.png');
    }

    create() {
        this.cameras.main.setBounds(0, 0, 3200, 600);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.add.image(0, 0, 'bgBack').setOrigin(0);
        this.spaceman = this.add.existing(new Spaceman(this.impact.world, 100, 200, this));
        this.createPlanets();
        this.createStarfield();
        this.add.image(1250, 189, 'earth').setOrigin(0);
        this.createPeople();

        this.textTop = this.add.text(10, 10, '', {font: '16px Courier', fill: '#00ff00'}).setDepth(1).setScrollFactor(0);
        this.add.text(470, 10, this.textBottom, {font: '16px Courier', fill: '#ffffff'}).setDepth(1).setScrollFactor(0);
        this.input.manager.enabled = true;

    }

    createPeople() {
        this.spaceman.setTypeA().setCheckAgainstB().setActiveCollision();

        for (let i = 0; i < this.goal; i++)
        {
            const x = Phaser.Math.Between(200, 3100);
            const y = Phaser.Math.Between(150, 300);

            const person = this.impact.add.image(x, y, 'person').setOrigin(0);

            person.setLiteCollision();
            person.setTypeB().setCheckAgainstA().setLiteCollision().setFriction(1);
            person.setCollideCallback(this.checkPosition, this);
        }
    }

    checkPosition(a, b) {
        a.gameObject.setVelocity(0);
        if (b.gameObject != null) {
            if (a.gameObject.x > 1400 && a.gameObject.x < 1800 && a.gameObject.y > 500) {
                this.collected++;
                a.gameObject.setX(Phaser.Math.Between(1500, 1700));
                a.gameObject.setY(540);
                a.destroy();

            }
        }
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

    update() {
        this.spaceman.update(this.cursors);

        this.textTop.setText('People at home: ' + this.collected + ' / ' + this.goal);
        if (this.collected > 0 && this.collected === this.goal) {
            this.scene.switch('SceneThree');
        }

        this.cameras.main.scrollX = this.spaceman.x - 512;
    }
}
export default SceneTwo;
