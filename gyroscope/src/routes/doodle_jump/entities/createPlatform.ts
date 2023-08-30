import {GameLevel} from "../core/level";
import {Vec3} from "../core/vec3";
import type {PlatformTexturesType, PlatformType} from "../$types";
import {getGameConfig} from "../core/config";
import {Mesh, Texture} from "three";
import {ExtendedMesh, ExtendedObject3D, THREE} from "enable3d";
import {RoundedBoxGeometry} from "three/examples/jsm/geometries/RoundedBoxGeometry";
import {ascendingProbability} from "../utils";

export function createPlatform(level: GameLevel, at: Vec3, type: PlatformType, texture: PlatformTexturesType, platformNumber: number) {
    const platformOscDistance = getGameConfig("PLATFORM.OSCILLATION.DISTANCE", true);
    const platformOscVelocity = getGameConfig("PLATFORM.OSCILLATION.VELOCITY", true);
    const platformTag = getGameConfig("OBJECT.TAG.PLATFORM", false);
    const boostPlatformTag = getGameConfig("OBJECT.TAG.BOOST_PLATFORM", false);
    const breakablePlatformTag = getGameConfig("OBJECT.TAG.BREAKABLE_PLATFORM", false);
    const maxVSpace = getGameConfig("PLATFORM.GENERATION.MAX_VERTICAL_SPACE", true);

    const geometry = new RoundedBoxGeometry(1.5, .4, 0.5, 6, 0.5);

    const material = new THREE.MeshPhongMaterial();

    const mesh = new ExtendedMesh(geometry, material);
    // mesh.position.setY(0.4)

    const object3D = new ExtendedObject3D();
    object3D.add(mesh);
    object3D.position.copy(at);

    if (platformNumber === 0) {
        object3D.position.setX(4.5)
        type.oscillating = false;
        type.boost = false;
        type.breakable = false;
    }


    if (type.breakable) {
        material.map = texture.breakableTexture;
    } else if (type.boost) {
        material.map = texture.boostTexture;
    } else {
        material.map = texture.platformTexture;
    }

    level.physics.add.existing(object3D, {
        shape: "box",
        width: 1.5,
        height: .4,
        depth: 0.5,
        // x: at.x,
        // y: at.y,
        // z: at.z,
        collisionFlags: ((type.oscillating || type.breakable) && platformNumber > 0 ? 2 : 1),
        breakable: type.breakable
    })

    level.add.existing(object3D);

    object3D.userData[platformTag] = true;
    object3D.userData[boostPlatformTag] = type.boost;
    object3D.userData[breakablePlatformTag] = type.breakable;

    object3D.receiveShadow = false;
    object3D.castShadow = false;

    const uuid = level.universe.createEntity();
    level.universe.attachComponent(uuid, "physicsObject", object3D);

    const platformSpeed = Math.random() + ascendingProbability(platformNumber);

    level.universe.attachComponent(uuid, "platform", {
        ...type, originalX: at.x, movementDelay: Math.random() * 10, platformSpeed: platformSpeed
    });

    level.universe.registerSystem("platformSystem", ({createView}, time) => {
        let playerAltitude: number | null = null;
        for (const {player} of createView("player")) {
            playerAltitude = player.altitude;
        }

        const view = createView("platform", "physicsObject");
        for (const {platform, physicsObject, uuid} of view) {
            if (
                playerAltitude &&
                physicsObject.position.y < playerAltitude - maxVSpace * 3
            ) {
                level.deleteEntity(uuid, physicsObject);
            }

            if (!platform.oscillating) {
                continue;
            }

            const alpha = Math.sin(time * platformOscVelocity * platform.platformSpeed + platform.movementDelay);
            physicsObject.position.x = platform.originalX + (platformOscDistance * alpha);
            if (physicsObject.body) physicsObject.body.needUpdate = true;
        }
    });
}
