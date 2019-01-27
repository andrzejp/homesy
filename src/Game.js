import SceneOne from "./scene/SceneOne.js";
import TitleScene from "./scene/TitleScene.js";
import EndScene from "./scene/EndScene.js";
import SceneTwo from "./scene/SceneTwo.js";
import SceneThree from "./scene/SceneThree.js";

const game = new Phaser.Game({
    width: 1024,
    height: 600,
    autoResize: true,
    scene: [TitleScene, SceneOne, SceneTwo, SceneThree, EndScene] //Reference scene classes here
});