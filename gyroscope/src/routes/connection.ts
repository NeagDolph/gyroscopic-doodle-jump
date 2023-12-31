import {initializeApp} from 'firebase/app';
import {getFirestore, doc, collection, setDoc, addDoc, onSnapshot, getDocs} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-lWI0enx-tUq9naICdFLJ4UouaaV-qNU",
    authDomain: "webrtc-a3965.firebaseapp.com",
    projectId: "webrtc-a3965",
    storageBucket: "webrtc-a3965.appspot.com",
    messagingSenderId: "24290566023",
    appId: "1:24290566023:web:3b4a1666defcb2bc253d22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// Create a new session
export async function initiateConnection(sessionId, callback: (sendChannel: RTCDataChannel) => void) {
    const sessionRef = doc(db, 'sessions', sessionId);
    await setDoc(sessionRef, {});

    const peerConnection = setupPeerConnection(sessionRef);

    setupDataChannel(peerConnection, callback);

    await createAndSetOffer(peerConnection, sessionRef);

    console.log("Listening for answers")

    listenForAnswers(sessionRef, peerConnection);

    return {connection: peerConnection};
}


// Connect to an existing session
export async function connectSession(sessionId: string, callback: (sendChannel: RTCDataChannel) => void) {
    const sessionRef = doc(db, 'sessions', sessionId);

    const peerConnection = await connectToExistingSession(sessionId, sessionRef);

    if (peerConnection === null) return;

    setupDataChannelListener(peerConnection, callback);

    return peerConnection
}

export function generateSessionId() {
    let num = "";

    for (let i = 0; i < 6; i++) {
        num += Math.floor(Math.random() * 10);
    }

    return num;
}

// Set up peer connection and its listeners
function setupPeerConnection(sessionRef: any): RTCPeerConnection {
    const configuration = {
        iceTransportPolicy: 'relay',
        iceServers: [{
            urls: [ "stun:us-turn7.xirsys.com" ]
        }, {
            username: "9cvlv-U4JLTqNreSz2GbI2EtEmQvUksmaZJBZTG6D7ImeIaPODHApC0hnjVhPhFrAAAAAGT0A9BqZWJ1cw==",
            credential: "cb932f02-4a0d-11ee-89c8-0242ac140004",
            urls: [
                "turn:us-turn7.xirsys.com:80?transport=tcp",
                "turn:us-turn7.xirsys.com:3478?transport=tcp",
                "turn:us-turn7.xirsys.com:443?transport=tcp",
                "turn:us-turn7.xirsys.com:5349?transport=tcp"
            ]
        }]
    };
    const peerConnection = new RTCPeerConnection(configuration);

    peerConnection.oniceconnectionstatechange = () => {
        console.log(`ICE connection state: ${peerConnection.iceConnectionState}`);
        if (peerConnection.iceConnectionState === 'disconnected' ||
            peerConnection.iceConnectionState === 'failed' ||
            peerConnection.iceConnectionState === 'closed') {
            console.log('ICE Connection was lost. Terminating connection.');

            const event = new CustomEvent("disconnected");
            document.dispatchEvent(event);
        }
    };

    peerConnection.onconnectionstatechange = () => {
        console.log(`Connection state: ${peerConnection.connectionState}`);

        if (peerConnection.connectionState === 'disconnected' ||
            peerConnection.connectionState === 'failed' ||
            peerConnection.connectionState === 'closed') {
            console.log('Connection was lost. Terminating connection.');

            const event = new CustomEvent("disconnected");
            document.dispatchEvent(event);
        }
    };

    peerConnection.onicecandidate = (event) => {
        console.log("EVENT", event)
        if (event.candidate) {
            if (event.candidate.protocol !== 'tcp') {
                console.warn('UDP candidate detected. Ignoring.');
                return;
            }

            console.log("Ice candidates sent");

            // @ts-ignore
            addDoc(collection(sessionRef, 'ice-candidates'), event.candidate.toJSON());
        }
    };

    return peerConnection;
}

// Set up data channel for sending messages
function setupDataChannel(peerConnection: RTCPeerConnection, callback: (sendChannel: RTCDataChannel) => void) {
    const sendChannel = peerConnection.createDataChannel("sendChannel");
    sendChannel.onopen = (e) => {
        console.log("Channel Opened", e);
        callback(sendChannel)
    };
}

// Create an offer and set it as local description
async function createAndSetOffer(peerConnection: RTCPeerConnection, sessionRef: any) {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    console.log('Offer created:', offer);
    console.log('Local description set:', peerConnection.localDescription);

    const roomWithOffer = {
        offer: {
            type: offer.type,
            sdp: offer.sdp
        }
    };

    await addDoc(collection(sessionRef, 'offers'), roomWithOffer);
}

// Listen for answers to the created session
function listenForAnswers(sessionRef: any, peerConnection: RTCPeerConnection) {
    onSnapshot(collection(sessionRef, 'answers'), (snapshot) => {
        snapshot.docChanges().forEach(async (change) => {
            if (change.type === 'added') {
                // @ts-ignore
                const description: RTCSessionDescriptionInit = change.doc.data();
                const answer = new RTCSessionDescription(description);
                console.log('Answer received:', answer);

                await peerConnection.setRemoteDescription(answer);
                console.log('Remote description set:', peerConnection.remoteDescription)

                const event = new CustomEvent("connectionState", {detail: {message: 2}});
                document.dispatchEvent(event);
            }
        });
    });
}

// Connect to an existing session by its ID
async function connectToExistingSession(sessionId: string, sessionRef: any): Promise<RTCPeerConnection | null> {
    console.log('Connecting to session:', sessionId);

    const offersSnapshot = await getDocs(collection(sessionRef, 'offers'));

    if (offersSnapshot.empty) {
        console.log("No RTC offers available");
        const event = new CustomEvent("noOffers", {detail: {message: sessionId}});
        document.dispatchEvent(event);

        return null;
    }

    const event = new CustomEvent("connectionState", {detail: {message: 2}});
    document.dispatchEvent(event);

    const offerData = offersSnapshot.docs[0].data();

    const offer = new RTCSessionDescription(offerData.offer);

    console.log('Offer received:', offer);

    const configuration = {iceServers: [{urls: 'stun:stun.ekiga.net'}]};
    const peerConnection: RTCPeerConnection = new RTCPeerConnection(configuration);

    peerConnection.oniceconnectionstatechange = () => {
        console.log(`ICE connection state: ${peerConnection.iceConnectionState}`);
    };

    await peerConnection.setRemoteDescription(offer);
    console.log('Remote description set:', peerConnection.remoteDescription);

    const answer = await peerConnection.createAnswer();
    console.log('Answer created:', answer);

    await peerConnection.setLocalDescription(answer);
    console.log('Local description set:', peerConnection.localDescription);

    onSnapshot(collection(sessionRef, 'ice-candidates'), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
                console.log("Ice candidates received");
                const iceCandidate = new RTCIceCandidate(change.doc.data());
                peerConnection.addIceCandidate(iceCandidate).catch(console.error);
            }
        });
    });

    // @ts-ignore
    await addDoc(collection(sessionRef, 'answers'), peerConnection.localDescription.toJSON());

    return peerConnection;
}

// Listen for incoming data channels
function setupDataChannelListener(peerConnection: RTCPeerConnection, callback: (sendChannel: RTCDataChannel) => void) {
    peerConnection.ondatachannel = (event) => {
        const dataChannel = event.channel;
        console.log('Data channel received:', dataChannel);

        dataChannel.onopen = () => {
            console.log('Data channel is open!');
            callback(dataChannel);
        };
    };
}
