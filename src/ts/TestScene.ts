import Scene from "./Scene";
import * as THREE from 'three'
import SceneManager from "./SceneManager";

export default class TestScene extends Scene {
    sceneManager:SceneManager;
    testPlane:THREE.Mesh;
    time:THREE.Clock;
    constructor(scenemanger:SceneManager)
    {
        super();
        this.sceneManager = scenemanger;
        this.init();
    }

    init()
    {

        this.time = new THREE.Clock();
        this.camera = new THREE.OrthographicCamera( this.sceneManager.width / - 2, this.sceneManager.width / 2, this.sceneManager.height / 2, this.sceneManager.height / - 2, 0.0001, 1000 );
        this.camera.position.set(0,0,0.0001);
        let pGeo = new THREE.PlaneBufferGeometry(400,400);
        let pMat = new THREE.MeshBasicMaterial({color:0xffffff*Math.random()});
        this.testPlane = new THREE.Mesh(pGeo,pMat);


        let bgGeo = new THREE.PlaneBufferGeometry(this.sceneManager.width,this.sceneManager.height);
        let bgMat = new THREE.MeshBasicMaterial({color:0xffffff*Math.random()});
        let bgmesh = new THREE.Mesh(bgGeo,bgMat);
        bgmesh.position.set(0,0,-0);

        this.scene.add(bgmesh)
        this.scene.add(this.testPlane);

        this.time.autoStart = true;
    }

    update()
    {

        // if(this.sceneManager.getDebugMode())
        // {
        //     this.sceneManager.desableDebugMode();
        // }


        this.testPlane.position.set(
            Math.sin(this.time.getElapsedTime()*0.8)* 500,
            Math.cos(this.time.getElapsedTime()*1.2)* 500,
            0,
        )

    }




}