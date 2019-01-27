import MainScene from "./scene/MainScene.js";

const game = new Phaser.Game({
    width: 1024,
    height: 600,
    autoResize: true,
    scene: [MainScene] //Reference scene classes here
});