# 3D Doodle Jump 🐸

**Control Doodle Jump in 3D using a mobile gyroscope!**
> Dive into the exciting world of 3D Doodle Jump and control your character using the gyroscope of your mobile device.

[**🚀 Play it now!**](https://webrtc-a3965.web.app/)

## 📝 Table of Contents
- [Prerequisites](#prerequisites)
- [How to Play](#how-to-play)
- [Tech Stack](#tech-stack)
- [How it Works](#how-it-works)
    - [WebRTC Connection Process](#webrtc-connection-process)
- [Installation](#installation)
- [Credits](#credits)
- [Contribution](#contribution)


## Prerequisites
- Two devices (One must be a device with gyroscope capabilities).
- Both devices should be on the same internet connection.

## How to Play
1. Click **Initiate** on the viewing device (host). You should see a 6-digit code pop up.
2. Click **Connect** on the gyroscopic device (client).
3. Enter the 6-digit code from the viewing device onto the gyroscopic device.
4. Turn your device to landscape mode to enable controls.

## How it Works
### Tech Stack
- **Firebase**: For web hosting.
- **Firestore**: For WebRTC signaling.
- **SvelteKit**: Front-end functionality.
- **THREE.js & [Enable3D](https://enable3d.io/)**: 3D rendering, world-building, and physics.

The game uses the same SvelteKit page for both host and client. The client initiates a WebRTC connection using Firestore for signaling. Once connected, the host renders the game and the client sends gyroscope data upon switching to landscape mode.

#### WebRTC Connection Process
1. **Initialization**: Set up Firebase and Firestore for signaling.
2. **Host Operations**: Generate a `sessionId` and establish RTCPeerConnection. Store the offer in Firestore.
3. **Client Operations**: Connect using `sessionId`, retrieve the host's offer, and respond.
4. **ICE Candidate Exchange**: Candidates are exchanged via Firestore.
5. **Data Channel**: Direct communication over the data channel.

## Installation
To set up the project locally:
1. Clone the repository and navigate to the project directory:
```bash
cd gyroscope
```
2. Install the dependencies:
```bash
npm i
```
3. (Optional) For Firebase hosting:
    - Follow the [Firebase hosting quickstart guide](https://firebase.google.com/docs/hosting/quickstart) to connect Firebase to your project.
    - Deploy the project:
```bash
firebase deploy
```

## Credits
The code for the Doodle Jump functionality was adapted from [klevcsoo/doodle-jump-web](https://github.com/klevcsoo/doodle-jump-web).

## Contribution
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
