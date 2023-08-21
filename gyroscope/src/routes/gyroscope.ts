let reset = false;

export async function initGyroscope(dataChannel: RTCDataChannel) {
    await streamGyroscopeData(dataChannel);
}

export function queueReset() {
    reset = true;
}

function getOrientation() {
    if (screen && screen.orientation) {
        return screen.orientation.type;
    }

    if (window.orientation) {
        return window.orientation
    }
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
                    orientation: getOrientation(),
                    reset: reset
                }

                if (reset) reset = false;

                dataChannel.send(JSON.stringify(data));
            }, true);

        } catch (error) {
            console.error("Error accessing the Gyroscope sensor:", error);
        }
}
