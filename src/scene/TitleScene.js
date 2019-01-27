class TitleScene extends Phaser.Scene {
   // spaceMan;

    constructor() {
        super({
            key: 'TitleScene'
        });
    }

    preload() {
        // this.load.svg('title_bg', 'assets/title_bg.svg', {width: this.sys.game.config.width, height: this.sys.game.config.height});
        this.load.image('title_bg', 'assets/title_bg.png');
        this.load.svg('earthman', 'assets/earthMan.svg', {width: 250, height: 250});
        this.load.svg('title', 'assets/title.svg', {width: 741, height: 139});

        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create() {
        this.add.image(0, 0, 'title_bg').setOrigin(0).setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
        this.spaceMan = this.add.image(150, 200, 'earthman');
        this.add.image(this.centerX(), this.centerY(), 'title').setOrigin(0.5,1);

        this.input.manager.enabled = true;

        this.input.once('pointerdown', function () {

            this.scene.switch('SceneOne');

        }, this);

        // press F to go full-screen!
        document.onkeydown = (ev) => {
            if (ev.key === 'f') document.querySelector('canvas').requestFullscreen();
        };

        const add = this.add;

        WebFont.load({
            google: {
                families: [ 'Orbitron' ]
            },
            active: function ()
            {
                add.text(80, 400, 'The Journey Home...', { fontFamily: 'Orbitron', fontSize: 40, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                add.text(512, 560, 'F - Full Screen   SPACE - Start Game', {font: '16px Courier', fill: '#ffffff'}).setOrigin(0.5, 1);
            }
        });

        this.tweens.timeline({

            targets: this.spaceMan,
            loop: -1,

            tweens: [
                {
                    y: 120,
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

    centerX ()
    {
        return this.sys.game.config.width / 2;
    }
    centerY ()
    {
        return this.sys.game.config.height / 2;
    }
}
export default TitleScene;
