import type {GameLevel} from "../core/level";
import type {EntitySystem} from "necst";
import type {ComponentMap, SystemList} from "../$types";

export function createShadowUpdaterSystem(
    level: GameLevel
): EntitySystem<ComponentMap, SystemList> {
    return ({createView}) => {
        for (const {physicsObject} of createView("player", "physicsObject")) {
            if (level.directionalLight) {
                // level.directionalLight.position.x = physicsObject.position.x + 100;
                // level.directionalLight.position.y = physicsObject.position.x + 200;
                // level.directionalLight.position.z = physicsObject.position.x + 50;
                // level.directionalLight.target = physicsObject;
            }
        }
    };
}
