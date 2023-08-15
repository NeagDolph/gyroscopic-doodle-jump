import { initializeApp } from 'firebase/app';
import { getFirestore, doc, collection, setDoc, addDoc, onSnapshot, getDocs } from 'firebase/firestore';

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
export async function initiateConnection(callback: (sendChannel: RTCDataChannel) => void) {
    const sessionId = generateSessionId();
    const sessionRef = doc(db, 'sessions', sessionId);
    await setDoc(sessionRef, {});

    const peerConnection = setupPeerConnection(sessionRef);
    setupDataChannel(peerConnection, callback);

    await createAndSetOffer(peerConnection, sessionRef);

    listenForAnswers(sessionRef, peerConnection);

    return {connection: peerConnection, id: sessionId};
}


// Connect to an existing session
export async function connectSession(sessionId: string, callback: (sendChannel: RTCDataChannel) => void) {
    const sessionRef = doc(db, 'sessions', sessionId);

    const peerConnection = await connectToExistingSession(sessionId, sessionRef);

    setupDataChannelListener(peerConnection, callback);

    return peerConnection
}

// Generate a session ID
function generateSessionId() {
    return Math.random().toString(36).substring(2, 6);
}

// Set up peer connection and its listeners
function setupPeerConnection(sessionRef: any): RTCPeerConnection {
    const configuration = { iceServers: [{ urls: 'stun:stun.ekiga.net' }] };
    const peerConnection = new RTCPeerConnection(configuration);

    peerConnection.oniceconnectionstatechange = () => {
        console.log(`ICE connection state: ${peerConnection.iceConnectionState}`);
    };

    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            console.log("Ice candidates sent");
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
    sendChannel.onclose = (e) => {
        console.log("Channel Close", e);
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
                console.log('Remote description set:', peerConnection.remoteDescription);
            }
        });
    });
}

// Connect to an existing session by its ID
async function connectToExistingSession(sessionId: string, sessionRef: any) {
    console.log('Connecting to session:', sessionId);

    const offersSnapshot = await getDocs(collection(sessionRef, 'offers'));
    const offerData = offersSnapshot.docs[0].data();
    const offer = new RTCSessionDescription(offerData.offer);

    console.log('Offer received:', offer);

    const configuration = { iceServers: [{ urls: 'stun:stun.ekiga.net' }] };
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
