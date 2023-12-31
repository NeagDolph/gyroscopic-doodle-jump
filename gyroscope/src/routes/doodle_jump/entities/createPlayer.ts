import type {GameLevel} from "../core/level";
import {Vec3} from "../core/vec3";
import {ExtendedMesh, ExtendedObject3D, THREE} from "enable3d";
import {createInputReceiver} from "../core/input";
import {lerp} from "../utils";
import type {EntitySystem} from "necst";
import type {ComponentMap, SystemList} from "../$types";
import {getGameConfig} from "../core/config";
import {Mesh} from "three";
import {gamePaused, score} from "../../store/gameStore";
import {toast} from '@zerodevx/svelte-toast';
import {rotation} from "../../store/gyroscopeStore";
import {Euler, Vector3} from "three";

export function createPlayer(level: GameLevel, at: Vec3) {
    const playerName = getGameConfig("OBJECT.NAME.PLAYER", false);
    const jumpSensorName = getGameConfig("OBJECT.NAME.PLAYER_JUMP_SENSOR", false);
    const starsKey = getGameConfig("STORAGE.KEY.STARS", false);

    // @ts-ignore
    const mesh: Mesh = level.assets.playerModel;

    // const geometry = new THREE.CapsuleGeometry(.5, 1);
    //
    //
    // const material = new THREE.MeshLambertMaterial({
    //     color: 0xffff00
    // });
    //
    // const mesh: Mesh = new Mesh(geometry, material);

    mesh.scale.set(0.45, 0.45, 0.45);
    mesh.position.set(0, -1, -0.1)
    mesh.rotateY(-0.4);

    // const mesh = new ExtendedMesh(geometry, material);

    mesh.castShadow = mesh.receiveShadow = true;

    const object3D = new ExtendedObject3D();
    object3D.add(mesh);
    at.y++;
    object3D.position.copy(at);
    object3D.name = playerName;

    const item = level.physics.add.existing(object3D, {
        shape: "convexMesh",
        mass: 90,
        collisionFlags: 4
    });
    level.add.existing(object3D);
    object3D.body.setLinearFactor(1, 1, 0);
    object3D.body.setAngularFactor(0, 0, 0);
    object3D.body.setFriction(0);

    const sensor = new ExtendedObject3D();
    sensor.name = jumpSensorName;
    level.physics.add.existing(sensor, {
        shape: "box",
        width: .8,
        height: 0.4,
        depth: .8,
        collisionFlags: 4,
        mass: 1e-8
    });
    level.physics.add.constraints.fixed(sensor.body, object3D.body, true);

    const uuid = level.universe.createEntity();
    level.universe.attachComponent(uuid, "player", {
        altitude: 0,
        isOnPlatform: false,
        isOnBoostPlatform: false,
        isOnBreakablePlatform: false,
        starsCollected: parseInt(localStorage.getItem(starsKey) ?? "0"),
        fallen: false
    });
    level.universe.attachComponent(uuid, "inputReceiver", createInputReceiver());
    level.universe.attachComponent(uuid, "physicsObject", object3D);
    level.universe.attachComponent(uuid, "collisionSensor", {active: false, obj: sensor});
    level.universe.attachComponent(uuid, "cameraDirector", {
        position: Vec3.fromVec(object3D.position)
    });

    level.universe.registerSystem("playerSystem", createPlayerSystem(level));
}

function createPlayerSystem(level: GameLevel): EntitySystem<ComponentMap, SystemList> {
    const playerSpeed = getGameConfig("PLAYER.MOVEMENT.SPEED", true);
    const playerAcceleration = getGameConfig("PLAYER.MOVEMENT.ACCELERATION", true);
    const playerJumpVelocity = getGameConfig("PLAYER.JUMP.VELOCITY", true);
    const platformBoostMult = getGameConfig("PLATFORM.BOOST.MULTIPLIER", true);
    const pickupCommand = getGameConfig("COMMAND.COLLECTABLE.PICKUP", false);
    const platformTag = getGameConfig("OBJECT.TAG.PLATFORM", false);
    const boostPlatformTag = getGameConfig("OBJECT.TAG.BOOST_PLATFORM", false);
    const breakablePlatformTag = getGameConfig("OBJECT.TAG.BREAKABLE_PLATFORM", false);
    const maxVSpace = getGameConfig("PLATFORM.GENERATION.MAX_VERTICAL_SPACE", true);
    const maxAltitudeKey = getGameConfig("STORAGE.KEY.MAX_ALTITUDE", false);
    const starsKey = getGameConfig("STORAGE.KEY.STARS", false);

    let paused = false;
    // gamePaused.subscribe(v => paused = v);

    let betaRotation: number;
    rotation.subscribe(v => betaRotation = v);

    return ({createView, handleCommand}) => {
        const view = createView(
            "player", "inputReceiver", "physicsObject",
            "collisionSensor", "cameraDirector"
        );
        for (const {
            inputReceiver, physicsObject, collisionSensor, player, cameraDirector
        } of view) {

            if (player.fallen) {
                continue;
            }

            // activating jump sensor if it hasn't been already
            if (!collisionSensor.active) {
                // noinspection TypeScriptValidateJSTypes
                collisionSensor.obj.body.on.collision((platform, event) => {
                    if (["start", "collision"].includes(event)) {
                        if (platform.userData[breakablePlatformTag] && physicsObject.body.velocity.y <= 0) {
                            player.isOnBoostPlatform = true;
                            platform.body.setCollisionFlags(4);
                            // platform.body.setGravity(0, -9.81, 0)
                            // platform.body.applyForceY(-5)
                            platform.body.needUpdate = true;
                            // platform.body.refresh();
                        } else {
                            player.isOnPlatform = !!(
                                platform.userData[platformTag]
                            );
                            player.isOnBoostPlatform = !!(
                                platform.userData[boostPlatformTag]
                            );
                        }
                    } else {
                        player.isOnPlatform = player.isOnBoostPlatform = player.isOnBreakablePlatform = false;
                    }

                });
                collisionSensor.active = true;
            }

            // calculating horizontal movement
            // const horizontalMovement = (
            //     Number(inputReceiver.keyboard.includes("ArrowLeft")) * -1 +
            //     Number(inputReceiver.keyboard.includes("ArrowRight"))
            // );

            const horizontalMovement = betaRotation / 30;


            const xVel = lerp(
                physicsObject.body.velocity.x, playerSpeed * horizontalMovement,
                playerAcceleration
            );

            physicsObject.body.setVelocityX(xVel);

            // jumping if close to ground and falling
            // if not
            // save and end game if player has fallen down too far
            if (player.isOnPlatform && physicsObject.body.velocity.y <= 0 && !player.isOnBreakablePlatform) {

                if (player.isOnBoostPlatform) {
                    // physicsObject.body.setRotation(0, 0, -1);
                    physicsObject.rotation.set(0, 0, -1)
                    // physicsObject.body.rotation.z = 0;
                    console.log(player, physicsObject, physicsObject.body)

                    physicsObject.body.setVelocityY(
                        playerJumpVelocity * platformBoostMult
                    );

                    physicsObject.body.setDamping(0, 0.8455)
                    // physicsObject.setRotationFromAxisAngle(new Vector3(0, 0, 1), 0);
                    // physicsObject.setRotationFromEuler(new Euler(0, 0, 1))

                    physicsObject.body.setAngularVelocityZ(
                        (playerJumpVelocity / 2) * platformBoostMult
                    );


                } else {
                    physicsObject.body.setVelocityY(playerJumpVelocity);
                }

            } else if (physicsObject.position.y < player.altitude - maxVSpace * 1.8) {
                const event = new CustomEvent("game_end");
                document.dispatchEvent(event);
            }

            // updating camera director position
            cameraDirector.position.copy(physicsObject.position);

            // setting player altitude
            player.altitude = Math.max(
                player.altitude, Math.floor(physicsObject.position.y)
            );

            // handling collectable pickup
            handleCommand(pickupCommand, () => {
                player.starsCollected++;
            });

            // printing to debug display
            score.set(player.altitude);
        }
    };
}
