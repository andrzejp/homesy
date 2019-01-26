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
    }
}
export default MainScene;