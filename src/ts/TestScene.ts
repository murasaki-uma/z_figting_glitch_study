import Scene from "./Scene";
import * as THREE from 'three'
import SceneManager from "./SceneManager";

export default class TestScene extends Scene {
    sceneManager:SceneManager;
    constructor(scenemanger:SceneManager)
    {
        super();
        this.sceneManager = scenemanger;
        this.init();
    }

    init()
    {
        this.camera = new THREE.PerspectiveCamera(50,this.sceneManager.width/this.sceneManager.height,0.1,10000);
    }

    update()
    {

    }


}