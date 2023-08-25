let betaRotation: number = 0;

type Orientation = 90 | -90 | undefined | 0;

export function setBetaRotation(rot: number, gamma: number, orientation: Orientation) {
    let tempRotation

    // Protection for gimbal lock in case phone is tilted backwards
    if (gamma > 1 && Math.abs(rot) > 110) {
        tempRotation = rot > 0 ? 180 - rot : (-180 - rot);
    } else {
        tempRotation = rot;
    }

    // In case phone is rotated to other side
    betaRotation = orientation === -90 ? -tempRotation : tempRotation;
}

export function getBetaRotation(): number {
    return betaRotation;
}
