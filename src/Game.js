import MainScene from "./scene/MainScene.js";
import TitleScene from "./scene/TitleScene.js";
import EndScene from "./scene/EndScene.js";

const game = new Phaser.Game({
    width: 1024,
    height: 600,
    autoResize: true,
    scene: [TitleScene, MainScene, EndScene] //Reference scene classes here
});