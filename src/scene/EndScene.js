class EndScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'EndScene'
        });
    }

    preload() {
        // this.load.svg('title_bg', 'assets/title_bg.svg', {width: this.sys.game.config.width, height: this.sys.game.config.height}); already loaded from title
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create() {
        this.add.image(0, 0, 'title_bg').setOrigin(0);

        var add = this.add;
        var input = this.input;

        WebFont.load({
            google: {
                families: [ 'Freckle Face', 'Finger Paint', 'Nosifer' ]
            },
            active: function ()
            {
                add.text(400, 400, 'The End', { fontFamily: 'Freckle Face', fontSize: 80, color: '#ffffff' }).setShadow(2, 2, "#333333", 2, false, true);
            }
        });

    }

    update() {
    }
}
export default EndScene;