import {GameLevel} from "../core/level";
import {getGameConfig} from "../core/config";
import {isInRange, ascendingProbability, takeChance, descendingProbability} from "../utils";
import type {PlatformTexturesType, PlatformType} from "../$types";
import {Vec3} from "../core/vec3";
import {createPlatform} from "./createPlatform";
import {createCollectable} from "./createCollectable";
import {TextureLoader} from "three";

export function createPlatformGenerator(level: GameLevel) {
    const oscChance = getGameConfig("PLATFORM.GENERATION.OSCILLATING", true);
    const brChance = getGameConfig("PLATFORM.GENERATION.BREAKING", true);
    const boostChance = getGameConfig("PLATFORM.GENERATION.BOOST", true);
    const maxHSpace = getGameConfig("PLATFORM.GENERATION.MAX_HORIZONTAL_SPACE", true);
    const maxVSpace = getGameConfig("PLATFORM.GENERATION.MAX_VERTICAL_SPACE", true);
    const minRelDistance = getGameConfig("PLATFORM.GENERATION.MIN_RELATIVE_DISTANCE", true);
    const relMaxAlt = getGameConfig("PLATFORM.GENERATION.RELATIVE_MAX_ALTITUDE", true);
    const collectableChance = getGameConfig("COLLECTABLE.GENERATION.CHANCE", true);

    const platformTexture = level.assets.platformTexture;
    const boostTexture = level.assets.boostTexture;
    const breakableTexture = level.assets.breakableTexture;

    const textures: PlatformTexturesType = {
        platformTexture: platformTexture,
        boostTexture: boostTexture,
        breakableTexture: breakableTexture
    }

    let platformNumber: number = 0;

    // Boolean that determines if the last row of platforms contained a boost platform
    let lastHadBoost: boolean;

    const halfMaxHSpace = maxHSpace / 2;

    const uuid = level.universe.createEntity();
    level.universe.attachComponent(uuid, "platformGenerator", {
        lastPlatformX: 0,
        maxAltitude: 0
    });


    level.universe.registerSystem("platformGeneratorSystem", ({createView}) => {
        let playerAltitude: number | null = null;

        for (const {player} of createView("player")) {
            playerAltitude = player.altitude;
        }

        for (const {platformGenerator} of createView("platformGenerator")) {
            if (
                !playerAltitude ||
                playerAltitude + relMaxAlt < platformGenerator.maxAltitude
            ) {
                return;
            }

            // increase generation altitude
            platformGenerator.maxAltitude += maxVSpace;


            // Chance to generate a second platform
            let generatePlatform2: boolean = Math.random() > 0.55 && platformNumber > 1;

            // keep generating, until x is out of a specified range,
            // to prevent platforms generating right above each other
            let platformX: number;
            do {
                platformX = Math.random() * maxHSpace - halfMaxHSpace;
            } while (isInRange(platformX, [
                platformGenerator.lastPlatformX - minRelDistance,
                platformGenerator.lastPlatformX + minRelDistance
            ]));
            platformGenerator.lastPlatformX = platformX;

            // decide on second platform type
            let platformType2: PlatformType = {
                oscillating: false,
                breakable: false,
                boost: false
            };

            // decide on platform type
            const platformType: PlatformType = {
                oscillating: takeChance(ascendingProbability(platformNumber)),
                boost: takeChance(descendingProbability(platformNumber))
            };

            const platform2Breakable = takeChance(ascendingProbability(platformNumber));

            const breakableValid = !platform2Breakable && generatePlatform2

            // Will not be breakable if the last section did not have a boost
            platformType.breakable = takeChance(ascendingProbability(platformNumber)) && (lastHadBoost || breakableValid) && !platformType.boost;

            // generate the platform
            const platformVector = new Vec3(platformX, platformGenerator.maxAltitude, 0);

            createPlatform(level, platformVector, platformType, textures, platformNumber);

            if (generatePlatform2) {
                // decide on second platform type
                platformType2 = {
                    oscillating: takeChance(ascendingProbability(platformNumber)),
                    boost: takeChance(descendingProbability(platformNumber))
                };


                platformType2.breakable = platform2Breakable && !platformType2.boost;


                platformGenerator.maxAltitude += (Math.random() * 3) - 2;

                // Generate second platform a minimum distance (specified distance from bottom platform / 2) from the first platform
                let platformX2: number;
                let minSecondPlatDist = minRelDistance * 2;

                do {
                    platformX2 = Math.random() * maxHSpace - halfMaxHSpace;
                } while (isInRange(platformX2, [
                    platformX - minSecondPlatDist,
                    platformX + minSecondPlatDist
                ]));


                const platformVector2 = new Vec3(platformX2, platformGenerator.maxAltitude, 0);

                createPlatform(level, platformVector2, platformType2, textures, platformNumber);
            }

            // // generate a star by chance if platform is not oscillating
            // if (takeChance(collectableChance) && !platformType.oscillating) {
            //     platformVector.y++;
            //     createCollectable(level, platformVector);
            // }

            lastHadBoost = platformType.boost || platformType2.boost

            platformNumber++;
        }
    });
}
