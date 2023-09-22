import type {ExtendedObject3D} from "enable3d";
import type {Vec3} from "./core/vec3";
import type {Material, NormalBufferAttributes} from "three";
import type {Texture} from "three";
import type {Mesh} from "three";
import type {BufferGeometry} from "three";

export type InputReceiver = {
    keyboard: string[];
    mouse: {
        buttons: {
            left: boolean
            right: boolean
        }
        wheelDelta: number
        x: number
        y: number
    };
}

export type Assets = {
    playerModel: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]> | Texture,
    boostTexture: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]> | Texture,
    platformTexture: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]> | Texture,
    backgroundTexture: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]> | Texture,
    breakableTexture: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]> | Texture
}

export type PlatformMaterialsType = {
    breakableTexture: Material
    boostTexture: Material
    platformTexture: Material
}


export type PlatformTexturesType = {
    breakableTexture: Texture
    boostTexture: Texture
    platformTexture: Texture
}

export type ComponentMap = {
    physicsObject: InstanceType<typeof ExtendedObject3D>
    collisionSensor: {
        active: boolean
        obj: InstanceType<typeof ExtendedObject3D>
    }
    dummy: {
        random: number
    }
    inputReceiver: InputReceiver
    player: {
        altitude: number
        isOnPlatform: boolean
        isOnBoostPlatform: boolean
        starsCollected: number
        fallen: boolean
        isOnBreakablePlatform: boolean
    }
    cameraDirector: {
        position: Vec3
    }
    platform: PlatformType & {
        originalX: number
        movementDelay: number
        platformSpeed: number
    }
    platformGenerator: {
        maxAltitude: number
        lastPlatformX: number
    }
    collectable: {
        type: "star"
        pickup: boolean
    }
}

export type SystemList = [
    "debugCubeColourSystem",
    "inputBroadcasterSystem",
    "playerSystem",
    "cameraDirectorSystem",
    "platformGeneratorSystem",
    "platformSystem",
    "collectableSystem",
    "shadowUpdaterSystem",
    "persistenceSystem"
]

export type PlatformType = {
    oscillating: boolean
    breakable: boolean
    boost: boolean
}
