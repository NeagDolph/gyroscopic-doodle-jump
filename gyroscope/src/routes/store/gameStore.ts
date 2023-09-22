import { writable } from 'svelte/store';

export const gamePaused = writable<boolean>(false);
export const controlsPaused = writable<boolean>(false);
export const game = writable<any>();
export const score = writable<number>(0);

let loadingBarID: any;

export function getLoadingBarID(): any {
    return loadingBarID;
}

export function setLoadingBarID(id: any) {
    loadingBarID = id
}
