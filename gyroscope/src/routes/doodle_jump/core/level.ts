import {ExtendedMesh, ExtendedObject3D, Scene3D, THREE} from "enable3d";
import {createUniverse} from "necst";
import type {Universe} from "necst";
import type {ComponentMap, SystemList, Assets} from "../$types";
import {Vec3} from "./vec3";
import {createPlayer} from "../entities/createPlayer";
import {createInputBroadcasterSystem} from "../systems/createInputBroadcasterSystem";
import {createCameraDirectorSystem} from "../systems/createCameraDirectorSystem";
import {createPlatformGenerator} from "../entities/createPlatformGenerator";
import {getGameConfig} from "./config";
import {createShadowUpdaterSystem} from "../systems/createShadowUpdaterSystem";
import {createPersistenceSystem} from "../systems/createPersistenceSystem";
import {
    Color,
    LoadingManager,
    Mesh,
    MeshBasicMaterial,
    PlaneGeometry,
    Scene,
    Texture,
    TextureLoader,
    Vector3
} from "three";
import {game, gamePaused, getLoadingBarID} from "../../store/gameStore";
import {toast} from '@zerodevx/svelte-toast'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader";

class GameLevel extends Scene3D {
    public universe: Universe<ComponentMap, SystemList>;
    public directionalLight: THREE.DirectionalLight | undefined;
    public ambientLight: THREE.AmbientLight | undefined;
    public hemisphereLight: THREE.HemisphereLight | undefined;
    public wall: Mesh | undefined;
    private deletionQueue: (string | ExtendedObject3D)[] = [];

    private lastPausedState: boolean;
    private gamePaused: boolean;

    private textureLoader: TextureLoader;

    private backgroundTexture: Texture | undefined;
    private boostTexture: Texture | undefined;
    private breakableTexture: Texture | undefined;
    private platformTexture: Texture | undefined;
    private playerModel: Mesh | undefined;
    private stopped: boolean = false;
    private readonly loadingManager: LoadingManager;
    private readonly gltfLoader: GLTFLoader;

    // @ts-ignore
    public assets: Assets;


    constructor() {
        super({key: "GameScene", enableXR: false});
        this.universe = createUniverse<ComponentMap, SystemList>();

        const unsub = gamePaused.subscribe(v => {
            this.gamePaused = v

            if (this.gamePaused) {
                this.stopped = true;
                this.renderer.setAnimationLoop(null);
            }

            if (!this.gamePaused && this.stopped) {
                this.renderer.setAnimationLoop(() => { // @ts-ignore
                    this._update()
                });
            }
        });

        this.loadingManager = new THREE.LoadingManager();
        this.loadingManager.onProgress = function (item, loaded, total) {
            toast.set(getLoadingBarID(), {next: (loaded / total)})
        };

        this.textureLoader = new THREE.TextureLoader(this.loadingManager);
        this.gltfLoader = new GLTFLoader(this.loadingManager);

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath( '/draco/' );
        this.gltfLoader.setDRACOLoader( dracoLoader );

        this.lastPausedState = false;
        this.gamePaused = false;

        game.set(this);
    }

    private loadModel(path: string): Promise<Mesh> {
        return new Promise((res, rej) => {
            this.gltfLoader.load(path, function (gltf: any) {
                res(gltf.scene)
            }, undefined, function (error: ErrorEvent) {
                console.error(error);
                rej()
            });
        })
    }

    async preload() {
        // Create an array of promises
        const promises = [
            this.textureLoader.loadAsync("/textures/background.jpg"),
            this.textureLoader.loadAsync("/textures/boost.jpg"),
            this.textureLoader.loadAsync("/textures/breakable.jpg"),
            this.textureLoader.loadAsync("/textures/platform.jpg"),
            this.loadModel('/models/doodle_jump_compressed.glb')
        ];

        // Await all promises to resolve
        const [backgroundTexture, boostTexture, breakableTexture, platformTexture, playerModel] = await Promise.all(promises);

        // Store assets
        this.assets = {
            backgroundTexture,
            boostTexture,
            breakableTexture,
            platformTexture,
            playerModel
        };

        // Update scene
        if (this.assets.backgroundTexture instanceof Texture) {
            this.scene.background = this.assets.backgroundTexture;
            this.setBackground(this.scene, 7000, 3346);
        }
    }

    public async init() {
        const platformTag = getGameConfig("OBJECT.TAG.PLATFORM", false);
        const cameraZOffset = getGameConfig("CAMERA.Z.OFFSET", true);

        // setup render size and resolution
        console.table({
            ["pixel_ratio"]: window.devicePixelRatio,
            ["max_anisotropy"]: this.renderer.capabilities.getMaxAnisotropy(),
            ["is_webgl_2"]: this.renderer.capabilities.isWebGL2
        });
        this.renderer.setPixelRatio(1);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => {
            if (this.camera instanceof THREE.PerspectiveCamera) {
                (this.camera as THREE.PerspectiveCamera).aspect = (
                    window.innerWidth / window.innerHeight
                );
            }
            this.camera.updateProjectionMatrix();
            this.camera.position.setZ(cameraZOffset)
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // set up scene (light, ground, grid, sky)
        const {
            ground, lights
        } = await this.warpSpeed("-orbitControls", "-camera", "-lookAtCenter", "-fog", "-sky", "-light");
        ground!.userData[platformTag] = true;

        this.ambientLight = new THREE.AmbientLight(new Color(0xffffff), 1.6);

        this.scene.add(this.ambientLight);

        // this.hemisphereLight = lights?.hemisphereLight;

        // set up background

        // console.log("assets", this.assets)
        // this.scene.background = this.assets.backgroundTexture;
        // this.setBackground(this.scene, 7000, 3346);


        // enable physics debug if running locally or with console command
        // this.physics.debug!.enable();
        (window as any)["enablePhysicsDebug"] = () => this.physics.debug!.enable();
        (window as any)["disablePhysicsDebug"] = () => this.physics.debug!.disable();
    }

    public async create() {
        this.universe.registerSystem(
            "inputBroadcasterSystem", createInputBroadcasterSystem()
        );
        this.universe.registerSystem(
            "cameraDirectorSystem", createCameraDirectorSystem(this)
        );
        this.universe.registerSystem(
            "shadowUpdaterSystem", createShadowUpdaterSystem(this)
        );
        this.universe.registerSystem(
            "persistenceSystem", createPersistenceSystem()
        );
        this.universe.scheduleSystem("persistenceSystem", 5, "seconds");

        createPlatformGenerator(this);

        // this.createWalls()

        createPlayer(this, new Vec3());
    }

    public update(_time: number, delta: number) {
        this.universe.update();

        for (const obj of this.deletionQueue) {
            if (typeof obj === "string") {
                this.universe.destroyEntity(obj);
                console.log("deleted entity:", obj);
            } else {
                if (obj.body) {
                    this.destroy(obj);
                    console.log("deleted object:", obj.name);
                }
            }
        }
        this.deletionQueue = [];
    }

    public deleteEntity(uuid: string, ...attachedObjects: ExtendedObject3D[]) {
        console.log("Scene polycount:", this.renderer.info.render.triangles)
        console.log("Active Drawcalls:", this.renderer.info.render.calls)
        console.log("Textures in Memory", this.renderer.info.memory.textures)
        console.log("Geometries in Memory", this.renderer.info.memory.geometries)
        this.deletionQueue.push(uuid, ...attachedObjects);
    }

    private setBackground(scene: Scene, backgroundImageWidth: number, backgroundImageHeight: number) {
        var windowSize = function (withScrollBar: boolean) {
            var wid = 0;
            var hei = 0;
            if (typeof window.innerWidth != "undefined") {
                wid = window.innerWidth;
                hei = window.innerHeight;
            } else {
                if (document.documentElement.clientWidth == 0) {
                    wid = document.body.clientWidth;
                    hei = document.body.clientHeight;
                } else {
                    wid = document.documentElement.clientWidth;
                    hei = document.documentElement.clientHeight;
                }
            }
            return {width: wid - (withScrollBar ? (wid - document.body.offsetWidth + 1) : 0), height: hei};
        };

        if (scene.background) {

            var size = windowSize(true);
            var factor = ((backgroundImageWidth / 2) / (backgroundImageHeight / 2)) / (size.width / size.height);

            if (!(scene.background instanceof Color)) {
                scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0;
                scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2;

                scene.background.repeat.x = factor > 1 ? 1 / factor : 1;
                scene.background.repeat.y = factor > 1 ? 1 : factor;
            }
        }
    }

    private createWalls() {
        const at = new Vec3(6, 0, 0);

        const geometry = new THREE.BoxGeometry(1, 50, 50);
        const material = new THREE.MeshBasicMaterial({color: 0xFF0000}); // Make it invisible

        // Create an ExtendedMesh and an ExtendedObject3D to contain it
        const mesh = new THREE.Mesh(geometry, material);
        const object3D = new ExtendedObject3D();
        object3D.add(mesh);
        object3D.position.copy(at);

        this.wall = object3D;

        // Add physics to the object. Set collisionFlags to 1 for static.
        this.physics.add.existing(object3D, {
            shape: "box",
            width: 0.1,
            height: 100,
            depth: 20,
            collisionFlags: 1
        });

        // Add the object to the level
        this.add.existing(object3D);
    }
}

export {GameLevel};
