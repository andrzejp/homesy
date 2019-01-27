import SceneOne from "./scene/SceneOne.js";
import TitleScene from "./scene/TitleScene.js";
import EndScene from "./scene/EndScene.js";
import SceneTwo from "./scene/SceneTwo.js";
import AfterSceneOne from "./scene/AfterSceneOne.js";

const game = new Phaser.Game({
    width: 1024,
    height: 600,
    autoResize: true,
    scene: [TitleScene, SceneOne, AfterSceneOne, SceneTwo, EndScene] //Reference scene classes here
});
