export function lerp(a: number, b: number, t: number) {
    return a * (1.0 - t) + (b * t);
}

export function isInRange(x: number, range: [number, number]): boolean {
    return range[0] < x && x < range[1];
}

export function takeChance(chance: number) {
    return Math.random() <= chance;
}

export function ascendingProbability(level: number): number {
    const a: number = 0.05;
    const b: number = 0.6;
    const k: number = 0.0638;
    const x_0: number = 30.93;

    return a + (b - a) / (1 + Math.exp(-k * (level - x_0)));
}

export function descendingProbability(level: number): number {
    const a: number = 0.3;
    const b: number = 0.05;
    const k: number = 0.0438;
    const x_0: number = 30.93;

    return a + (b - a) / (1 + Math.exp(-k * (level - x_0)));
}
