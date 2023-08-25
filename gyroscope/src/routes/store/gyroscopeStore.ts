import { writable } from 'svelte/store';

export type StandardOrientation = undefined | -90 | 0 | 180;

export const phoneOrientation = writable<StandardOrientation>(undefined);

