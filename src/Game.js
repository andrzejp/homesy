import MainScene from "./scene/MainScene.js";
import TitleScene from "./scene/TitleScene.js";

const game = new Phaser.Game({
    width: 1024,
    height: 768,
    autoResize: true,
    scene: [TitleScene, MainScene] //Reference scene classes here
});