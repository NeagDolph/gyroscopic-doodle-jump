import type {EntitySystem} from "necst";
import type {ComponentMap, SystemList} from "../$types";
import {getGameConfig} from "../core/config";

export function createPersistenceSystem(): EntitySystem<ComponentMap, SystemList> {
    const maxAltitudeKey = getGameConfig("STORAGE.KEY.MAX_ALTITUDE", false);
    const starsKey = getGameConfig("STORAGE.KEY.STARS", false);

    return ({createView}) => {
        for (const {player} of createView("player")) {
            const savedMax = localStorage.getItem(maxAltitudeKey) ?? 0;
            if (player.altitude > savedMax) {
                localStorage.setItem(maxAltitudeKey, String(player.altitude));
            }
        }
    };
}
