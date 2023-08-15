export async function initGyroscope() {

}

// Function to check gyroscope support and start streaming data
async function streamGyroscopeData(peerConnection: RTCPeerConnection) {
    // Check if Gyroscope API is supported
    if ('Gyroscope' in window) {
        try {
            // Initialize gyroscope sensor
            // @ts-ignore
            const gyroscope = new window.Gyroscope({ frequency: 60 }); // 60 readings per second

            // Gyroscope data event listener
            gyroscope.onreading = () => {
                const gyroscopeData = {
                    x: gyroscope.x,
                    y: gyroscope.y,
                    z: gyroscope.z
                };
                sendDataOverRTC(peerConnection, gyroscopeData);
            };

            // Start the gyroscope
            gyroscope.start();
        } catch (error) {
            console.error("Error accessing the Gyroscope sensor:", error);
        }
    } else {
        console.log("Gyroscope not supported on this device");
    }
}


function sendDataOverRTC(peerConnection: RTCPeerConnection, data: any) {
    const dataChannel = peerConnection.createDataChannel("gyroscopeDataChannel");

    dataChannel.onopen = () => {
        dataChannel.send(JSON.stringify(data));
    };
}
