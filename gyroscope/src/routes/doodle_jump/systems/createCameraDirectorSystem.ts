import {EntitySystem} from "necst";
import type {ComponentMap, SystemList} from "../$types";
import {Vec3} from "../core/vec3";
import {GameLevel} from "../core/level";
import {getGameConfig} from "../core/config";
import {THREE} from "enable3d";

export function createCameraDirectorSystem(
    level: GameLevel
): EntitySystem<ComponentMap, SystemList> {
    const camMovementAlpha = getGameConfig("CAMERA.MOVEMENT.LERP.ALPHA", true);
    const camRotationAlpha = getGameConfig("CAMERA.ROTATION.LERP.ALPHA", true);
    const cameraZOffset = getGameConfig("CAMERA.Z.OFFSET", true);
    const cameraYOffset = getGameConfig("CAMERA.Y.OFFSET", true);

    return ({createView}) => {
        const view = createView("cameraDirector");
        const vectors: Vec3[] = [];

        for (const {cameraDirector} of view) {
            vectors.push(cameraDirector.position);
        }

        if (vectors.length <= 0) return;

        // calculating centre of polygon enclosed by the camera directors
        const sumX = vectors.map(({x}) => x).reduce((a, b) => a + b);
        const sumY = vectors.map(({y}) => y).reduce((a, b) => a + b);
        const sumZ = vectors.map(({z}) => z).reduce((a, b) => a + b);
        const len = vectors.length;
        const currentY = level.camera.position.y + cameraYOffset;
        const targetVec = new Vec3(
            sumX / len, Math.max(currentY, sumY / len), sumZ / len
        );

        // using linear interpolation to calculate new camera position
        const newCamPos = new Vec3(
            0, targetVec.y - cameraYOffset, targetVec.z + cameraZOffset
        );

        level.camera.position.lerp(newCamPos, camMovementAlpha);
        // using linear interpolation to calculate new camera quaternion
        const originalQuat = level.camera.quaternion.clone(); // storing original quaternion
        // level.camera.lookAt(targetVec); // precalculating new one
        // const desiredQuat = level.camera.quaternion.clone(); // storing that
        // level.camera.quaternion.copy(originalQuat); // restoring original
        // level.camera.quaternion.slerp(desiredQuat, camRotationAlpha); // blending
    };
}
