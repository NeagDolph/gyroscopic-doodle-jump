import {phoneOrientation} from "./store/gyroscopeStore";

export type StandardOrientation = undefined | -90 | 0 | 180;

let reset = false;
let paused = false;
let orientation: StandardOrientation = undefined;

export function setControlsPaused(value: boolean) {
    paused = value;
}

export async function initGyroscope(dataChannel: RTCDataChannel) {
    initOrientationDetection();
    await streamGyroscopeData(dataChannel);

    phoneOrientation.subscribe(v => orientation = v);
}

function initOrientationDetection() {
    if (screen.orientation) {
        screen.orientation.addEventListener("change", function(e) {
            const tempOrientation = getOrientation();
            phoneOrientation.set(tempOrientation);
        });
    } else {
        window.addEventListener("orientationchange", function () {
            const tempOrientation = getOrientation();
            phoneOrientation.set(tempOrientation);
        });
    }
}

export function getOrientation(): StandardOrientation {
    let orientationNumber = null;

    // If screen.orientation is available
    if (screen && screen.orientation) {
        const orientationType = screen.orientation.type;
        switch (orientationType) {
            case 'portrait-primary':
                orientationNumber = 0;
                break;
            case 'landscape-primary':
                orientationNumber = undefined;
                break;
            case 'portrait-secondary':
                orientationNumber = 180;
                break;
            case 'landscape-secondary':
                orientationNumber = -90;
                break;
            default:
                orientationNumber = null;
        }
    }
    // If window.orientation is available
    else if (window.orientation !== undefined) {
        orientationNumber = window.orientation;

        if (orientationNumber === undefined) orientationNumber = 0;
    }

    return orientationNumber;
}


// Function to check gyroscope support and start streaming data
async function streamGyroscopeData(dataChannel: RTCDataChannel) {
    // Check if Gyroscope API is supported
    try {
        window.addEventListener('deviceorientation', (event) => {
            const data = {
                alpha: event.alpha,
                beta: event.beta,
                gamma: event.gamma,
                orientation: orientation,
                paused: paused,
            }

            dataChannel.send(JSON.stringify(data));
        }, true);

    } catch (error) {
        console.error("Error accessing the Gyroscope sensor:", error);
    }
}
