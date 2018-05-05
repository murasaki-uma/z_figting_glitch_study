import SceneManager from "./SceneManager";
import TestScene from "./TestScene";
declare function require(x: string): any;
const main = require('../css/main');
console.log("hello wold");


document.addEventListener("DOMContentLoaded", (event)=> {
    const scenemanager = new SceneManager("mainCanvas");
    const testScene = new TestScene(scenemanager);
    scenemanager.addScene(testScene);

    scenemanager.update();
    scenemanager.desableDebugMode();
});