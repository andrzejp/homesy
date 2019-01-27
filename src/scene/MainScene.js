class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'MainScene'
        });
    }

    preload() {
        this.load.svg('bg', 'assets/bg.svg', {width: this.sys.game.config.width, height: this.sys.game.config.height});
    }

    create() {
        this.bg = this.add.image(0, 0, 'bg').setOrigin(0);

        this.input.manager.enabled = true;

        this.input.once('pointerdown', function () {

            this.scene.switch('EndScene');

        }, this);
    }
}
export default MainScene;