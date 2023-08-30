import { writable } from 'svelte/store';

export const gamePaused = writable<boolean>(false);
export const controlsPaused = writable<boolean>(false);
export const game = writable<any>();
export const score = writable<number>(0);
