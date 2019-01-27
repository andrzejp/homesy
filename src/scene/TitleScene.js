class TitleScene extends Phaser.Scene {
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
        this.add.image(-50,0, 'earthman').setOrigin(0);
        this.add.image(200,0, 'title').setOrigin(0);

        this.input.manager.enabled = true;

        this.input.once('pointerdown', function () {

            this.scene.switch('MainScene');

        }, this);
    }
}
export default TitleScene;