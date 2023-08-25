import { writable } from 'svelte/store';

export const gamePaused = writable<boolean>(false);
export const game = writable<any>();
