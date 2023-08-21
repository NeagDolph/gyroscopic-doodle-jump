let betaRotation: number = 0;

export function setBetaRotation(rot: number, gamma: number) {
    if (gamma > 1 && Math.abs(rot) > 110) {
        betaRotation = rot > 0 ? 180 - rot : (-180 - rot);
        return;
    }

    betaRotation = rot;
}

export function getBetaRotation(): number {
    return betaRotation;
}
