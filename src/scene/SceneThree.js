class SceneThree extends Phaser.Scene {
    constructor() {
        super({
            key: 'SceneThree',
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
    create() {
        this.input.manager.enabled = true;

        this.input.once('pointerdown', function () {
            this.scene.switch('EndScene');
        }, this);
    }
}
export default SceneThree;