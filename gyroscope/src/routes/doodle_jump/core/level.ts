import {ExtendedMesh, ExtendedObject3D, Scene3D, THREE} from "enable3d";
import {createUniverse, Universe} from "necst";
import {DebugDisplay} from "../ui/DebugDisplay";
import type {ComponentMap, SystemList} from "../$types";
import {Vec3} from "./vec3";
import {createPlayer} from "../entities/createPlayer";
import {createInputBroadcasterSystem} from "../systems/createInputBroadcasterSystem";
import {createCameraDirectorSystem} from "../systems/createCameraDirectorSystem";
import {createPlatformGenerator} from "../entities/createPlatformGenerator";
import {getGameConfig} from "./config";
import {createShadowUpdaterSystem} from "../systems/createShadowUpdaterSystem";
import {createPersistenceSystem} from "../systems/createPersistenceSystem";
import {Color, Mesh, MeshBasicMaterial, PlaneGeometry, Texture, TextureLoader, Vector3} from "three";
import {game, gamePaused} from "../../store/gameStore";
import {loadModel} from "./loader";
import { toast } from '@zerodevx/svelte-toast'

export type Assets = {
    playerModel: Mesh,
    boostTexture: Texture,
    platformTexture: Texture,
    backgroundTexture: Texture
}

class GameLevel extends Scene3D {
    public universe: Universe<ComponentMap, SystemList>;
    public directionalLight: THREE.DirectionalLight | undefined;
    public ambientLight: THREE.AmbientLight | undefined;
    public hemisphereLight: THREE.HemisphereLight | undefined;
    public wall: Mesh;
    private deletionQueue: (string | ExtendedObject3D)[] = [];

    private lastPausedState: boolean;
    private gamePaused: boolean;
    private playerMotion: Vector3;
    private pausedTime: number;

    private textureLoader: TextureLoader;

    private backgroundTexture: Texture;
    private boostTexture: Texture;
    private platformTexture: Texture;
    private playerModel: Mesh;
    private stopped: boolean = false;
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
                this.renderer.setAnimationLoop(() => {this._update()});
            }
        });

        this.textureLoader = new THREE.TextureLoader();

        this.lastPausedState = false;
        this.gamePaused = false;

        game.set(this);
    }


    async preload() {
        this.backgroundTexture = await this.textureLoader.loadAsync("/textures/background.jpg");
        this.boostTexture = await this.textureLoader.loadAsync("/textures/boost.jpg");
        this.platformTexture = await this.textureLoader.loadAsync("/textures/platform.jpg");
        this.playerModel = await loadModel('/models/doodle_jump.glb');

        this.assets = {
            boostTexture: this.boostTexture,
            platformTexture: this.platformTexture,
            backgroundTexture: this.backgroundTexture,
            playerModel: this.playerModel
        }


        this.scene.background = this.assets.backgroundTexture;
        this.setBackground(this.scene, 7000, 3346);
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
        this.renderer.setPixelRatio(window.devicePixelRatio);
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
        } = await this.warpSpeed("-orbitControls", "-camera", "-lookAtCenter", "-fog", "-sky", "-lights");
        ground!.userData[platformTag] = true;
        // this.directionalLight = lights?.directionalLight;
        // this.hemisphereLight = lights?.hemisphereLight;

        this.ambientLight = new THREE.AmbientLight(new Color(0xffffff), 1);

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
        DebugDisplay.update("fps", Math.floor(1000 / delta));

        this.universe.update();

        for (const obj of this.deletionQueue) {
            if (typeof obj === "string") {
                this.universe.destroyEntity(obj);
                console.log("deleted entity:", obj);
            } else {
                this.destroy(obj);
                console.log("deleted object:", obj.name);
            }
        }
        this.deletionQueue = [];


        // const platformTag = getGameConfig("OBJECT.TAG.PLATFORM", false);
        // const platformCount = this.scene.children.filter(obj => {
        //     return !!obj.userData[platformTag];
        // }).length;
        // DebugDisplay.update("platform_count", platformCount);
        // const collectableCount = this.physics.rigidBodies.filter(body => {
        //     return body.name.startsWith("CollectableSensor_");
        // }).length;
        // DebugDisplay.update("collectable_count", collectableCount);
    }

    public deleteEntity(uuid: string, ...attachedObjects: ExtendedObject3D[]) {
        this.deletionQueue.push(uuid, ...attachedObjects);
    }

    private setBackground(scene, backgroundImageWidth, backgroundImageHeight) {
        var windowSize = function (withScrollBar) {
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

            scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0;
            scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2;

            scene.background.repeat.x = factor > 1 ? 1 / factor : 1;
            scene.background.repeat.y = factor > 1 ? 1 : factor;
        }
    }

    private createWalls() {
        const at = new Vec3(6, 0, 0);

        const geometry = new THREE.BoxGeometry(1, 50, 50);
        const material = new THREE.MeshBasicMaterial({ color: 0xFF0000 }); // Make it invisible

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
