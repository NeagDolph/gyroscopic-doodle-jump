import {ExtendedObject3D, Scene3D, THREE} from "enable3d";
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
import {Mesh, MeshBasicMaterial, PlaneGeometry, Texture} from "three";

class GameLevel extends Scene3D {
    public universe: Universe<ComponentMap, SystemList>;
    public directionalLight: THREE.DirectionalLight | undefined;
    public hemisphereLight: THREE.HemisphereLight | undefined;
    private deletionQueue: (string | ExtendedObject3D)[] = [];
    private backgroundTexture: Texture;



    constructor() {
        super({key: "GameScene", enableXR: false});
        this.universe = createUniverse<ComponentMap, SystemList>();
        this.backgroundTexture = new THREE.TextureLoader().load("/textures/background.png");
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
        } = await this.warpSpeed("-orbitControls", "-camera", "-lookAtCenter", "-sky", "-fog", "-grid");
        ground!.userData[platformTag] = true;
        this.directionalLight = lights?.directionalLight;
        this.hemisphereLight = lights?.hemisphereLight;

        // set up background
        this.scene.background = this.backgroundTexture;
        this.setBackground(this.scene, 1673, 936);


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

        // const factor = 1;
        // this.scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0;
        // this.scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2;
        //
        // this.scene.background.repeat.x = factor > 1 ? 1 / factor : 1;
        // this.scene.background.repeat.y = factor > 1 ? 1 : factor;

        createPlatformGenerator(this);
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

        const platformTag = getGameConfig("OBJECT.TAG.PLATFORM", false);
        const platformCount = this.scene.children.filter(obj => {
            return !!obj.userData[platformTag];
        }).length;
        DebugDisplay.update("platform_count", platformCount);
        const collectableCount = this.physics.rigidBodies.filter(body => {
            return body.name.startsWith("CollectableSensor_");
        }).length;
        DebugDisplay.update("collectable_count", collectableCount);
    }

    public deleteEntity(uuid: string, ...attachedObjects: ExtendedObject3D[]) {
        this.deletionQueue.push(uuid, ...attachedObjects);
    }

    private setBackground(scene, backgroundImageWidth, backgroundImageHeight) {
        var windowSize = function(withScrollBar) {
            var wid = 0;
            var hei = 0;
            if (typeof window.innerWidth != "undefined") {
                wid = window.innerWidth;
                hei = window.innerHeight;
            }
            else {
                if (document.documentElement.clientWidth == 0) {
                    wid = document.body.clientWidth;
                    hei = document.body.clientHeight;
                }
                else {
                    wid = document.documentElement.clientWidth;
                    hei = document.documentElement.clientHeight;
                }
            }
            return { width: wid - (withScrollBar ? (wid - document.body.offsetWidth + 1) : 0), height: hei };
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
}

export {GameLevel};
