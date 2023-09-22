import "./style.css";
import {PhysicsLoader, Project, THREE} from "enable3d";
import {GameLevel} from "./core/level";
import {loadGameConfig} from "./core/config";
import {toast} from "@zerodevx/svelte-toast";
import {setLoadingBarID} from "../store/gameStore";


export function initDoodleJump() {
    const id = toast.push('Loading game, please wait...', {
        duration: 100, // Each progress change takes 300ms
        initial: 0,
        next: 0,
        dismissable: false
    })

    setLoadingBarID(id);


    fetch("/config/game.cfg").then(value => value.text()).then(cfgContent => {
        // game config loading
        loadGameConfig(cfgContent);

        // project loader
        const config = {
            scenes: [GameLevel],
            antialias: false,
            anisotropy: 1,
        };
        PhysicsLoader('/lib/ammo', () => new Project(config));
    });
}
