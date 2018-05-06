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
        this.camera = new THREE.PerspectiveCamera(50,this.sceneManager.width/this.sceneManager.height,0.1,10000);
        this.camera.position.set(0,0,1000);
        let pGeo = new THREE.PlaneBufferGeometry(100,100);
        let pMat = new THREE.MeshBasicMaterial({color:0xffffff*Math.random()});
        this.testPlane = new THREE.Mesh(pGeo,pMat);


        let bgGeo = new THREE.PlaneBufferGeometry(this.sceneManager.width,this.sceneManager.height);
        let bgMat = new THREE.MeshBasicMaterial({color:0xffffff*Math.random()});
        let bgmesh = new THREE.Mesh(bgGeo,bgMat);
        bgmesh.position.set(0,0,-0);

        this.scene.add(bgmesh)
        this.scene.add(this.testPlane);

        this.time.autoStart = true;

        this.scene.rotateX(-0.001);
        this.scene.rotateY(-0.0001);

        this.sceneManager.setDebugCameraPosition(new THREE.Vector3(0,0,1000));
    }

    update()
    {

        // if(this.sceneManager.getDebugMode())
        // {
        //     this.sceneManager.desableDebugMode();
        // }


        this.testPlane.position.set(
            Math.sin(this.time.getElapsedTime()*0.8)* 500,
            Math.cos(this.time.getElapsedTime())* 500,
            0,
        )

    }




}