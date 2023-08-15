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
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


document.getElementById('createSession').addEventListener('click', async () => {
	const sessionId = Math.random().toString(36).substring(2, 6);
	const sessionRef = db.collection('sessions').doc(sessionId);
	await sessionRef.set({});

	const configuration = { iceServers: [{ urls: 'stun:stun.ekiga.net' }] };
	const peerConnection = new RTCPeerConnection(configuration);

	peerConnection.oniceconnectionstatechange = () => {
		console.log(`ICE connection state: ${peerConnection.iceConnectionState}`);
	};

	peerConnection.onicecandidate = (event) => {
		if (event.candidate) {
			console.log("Ice candidates sent");
			sessionRef.collection('ice-candidates').add(event.candidate.toJSON());
		}
	};

	const sendChannel = peerConnection.createDataChannel("sendChannel");
	sendChannel.onopen = function (e) {
		console.log("Channel Opened", e);
		setupChat(sendChannel); // Set up chat here
	};
	sendChannel.onclose = function (e) {
		console.log("Channel Close", e);
	};


	// Create Offer
	const offer = await peerConnection.createOffer();
	await peerConnection.setLocalDescription(offer);
	console.log('Offer created:', offer);
	console.log('Local description set:', peerConnection.localDescription);

	const roomWithOffer = {
		offer: {
			type: offer.type,
			sdp: offer.sdp
		}
	}

	await sessionRef.collection('offers').add(roomWithOffer);


	sessionRef.collection('answers').onSnapshot(async (snapshot) => {
		snapshot.docChanges().forEach(async (change) => {
			if (change.type === 'added') {
				const answer = new RTCSessionDescription(change.doc.data());
				console.log('Answer received:', answer);

				await peerConnection.setRemoteDescription(answer);
				console.log('Remote description set:', peerConnection.remoteDescription);

				document.getElementById('chatArea').style.display = 'block'; // Show chat area
			}
		});
	});



	document.getElementById('sessionCode').innerText = `Session Code: ${sessionId}`;
});


document.getElementById('connect').addEventListener('click', async () => {
	const sessionId = prompt('Enter session code:');
	const sessionRef = db.collection('sessions').doc(sessionId);

	console.log('Connecting to session:', sessionId);

	const offersSnapshot = await sessionRef.collection('offers').get();
	const offerData = offersSnapshot.docs[0].data();
	console.log("EEEE", offerData.offer)
	const offer = new RTCSessionDescription(offerData.offer);

	console.log('Offer received:', offer);

	const configuration = { iceServers: [{ urls: 'stun:stun.ekiga.net' }] };
	const peerConnection = new RTCPeerConnection(configuration);

	peerConnection.oniceconnectionstatechange = () => {
		console.log(`ICE connection state: ${peerConnection.iceConnectionState}`);
	};

	await peerConnection.setRemoteDescription(offer);
	console.log('Remote description set:', peerConnection.remoteDescription);

	const answer = await peerConnection.createAnswer();
	console.log('Answer created:', answer);

	await peerConnection.setLocalDescription(answer);
	console.log('Local description set:', peerConnection.localDescription);

	sessionRef.collection('ice-candidates').onSnapshot((snapshot) => {
		snapshot.docChanges().forEach((change) => {
			if (change.type === 'added') {
				console.log("Ice candidates received");
				const iceCandidate = new RTCIceCandidate(change.doc.data());
				peerConnection.addIceCandidate(iceCandidate).catch(console.error);
			}
		});
	});


	// Event Handler for Data Channel
	peerConnection.ondatachannel = (event) => {
		const dataChannel = event.channel;
		console.log('Data channel received:', dataChannel);

		dataChannel.onopen = () => {
			console.log('Data channel is open!');
			setupChat(dataChannel); // Same function as before
		};
	};

	await sessionRef.collection('answers').add(peerConnection.localDescription.toJSON());

	document.getElementById('chatArea').style.display = 'block'; // Show chat area
});


function setupChat(dataChannel) {
	dataChannel.onmessage = (event) => {
		console.log('Message received:', event.data);
		document.getElementById('messages').innerText += `Received: ${event.data}\n`;
	};

	document.getElementById('sendMessage').addEventListener('click', () => {
		const message = document.getElementById('messageInput').value;
		console.log('Sending message:', message);
		dataChannel.send(message);
		document.getElementById('messages').innerText += `Sent: ${message}\n`;
		document.getElementById('messageInput').value = '';
	});
}
