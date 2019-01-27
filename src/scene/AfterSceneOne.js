class AfterSceneOne extends Phaser.Scene {

    constructor() {
        super({
            key: 'AfterSceneOne'
        });
    }

    preload() {
        // this.load.svg('title_bg', 'assets/title_bg.svg', {width: this.sys.game.config.width, height: this.sys.game.config.height}); already loaded from title
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create() {
        this.add.image(0, 0, 'title_bg').setOrigin(0).setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

        var add = this.add;
        var input = this.input;

        this.input.manager.enabled = true;

        this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        WebFont.load({
            google: {
                families: [ 'Orbitron' ]
            },
            active: function ()
            {
                add.text(80, 400, 'The Journey Home...', { fontFamily: 'Orbitron', fontSize: 40, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
                add.text(512, 560, 'SPACE - Continue to level 2', {font: '16px Courier', fill: '#ffffff'}).setOrigin(0.5, 1);
            }
        });

    }

    update() {
        if (this.keySpace.isDown) {
            this.scene.switch('SceneTwo');
        }
    }
}
export default AfterSceneOne;
