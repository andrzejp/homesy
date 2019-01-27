class TitleScene extends Phaser.Scene {
   // spaceMan;

    constructor() {
        super({
            key: 'TitleScene'
        });
    }

    preload() {
        this.load.svg('bg', 'assets/bg.svg', {width: this.sys.game.config.width, height: this.sys.game.config.height});
        this.load.svg('earthman', 'assets/earthMan.svg', {width: 300, height: 300});
        this.load.svg('title', 'assets/title.svg', {width: 800, height: 285});

        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create() {
        this.add.image(0, 0, 'bg').setOrigin(0);
        this.spaceMan = this.add.image(150, 150, 'earthman');
        this.add.image(200,0, 'title').setOrigin(0);

        this.input.manager.enabled = true;

        this.input.once('pointerdown', function () {

            this.scene.switch('MainScene');

        }, this);

        var add = this.add;
        var input = this.input;

        WebFont.load({
            google: {
                families: [ 'Orbitron' ]
            },
            active: function ()
            {
                add.text(80, 400, 'The Journey Home...', { fontFamily: 'Orbitron', fontSize: 80, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
            }
        });

        this.tweens.timeline({

            targets: this.spaceMan,
            loop: -1,

            tweens: [
                {
                    y: 100,
                    ease: 'Sine.easeInOut',
                    duration: 3000,
                    yoyo: true
                }
            ]

        });
    }

    update() {
        this.spaceMan.rotation += 0.001;
    }
}
export default TitleScene;