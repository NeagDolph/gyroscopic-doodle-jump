<script>
	import {initiateConnection, connectSession} from "./connection.ts"
	import {initGyroscope, queueReset} from "./gyroscope.ts";
	import {initWebgl, setRotation} from "./model.ts";
	import {onMount} from 'svelte';
	import {initDoodleJump} from "./doodle_jump/main";

	let doodleJumpInitiated = false;

	let peerConnection;
	let sessionId;
	let dataChannel;
	let canvas;

	let gyroData;

	const ConnectionState = {
		Idle: 0,
		Connecting: 1,
		Connected: 2,
	}

	const ConnectionType = {
		Unknown: 0,
		Initiator: 1,
		Connector: 2,
	}

	// let connectionState = ConnectionState.Idle;
	// let connectionType = ConnectionType.Unknown;

	let connectionState = ConnectionState.Connected;
	let connectionType = ConnectionType.Initiator;

	function getAccel() {
		if (!DeviceMotionEvent || !DeviceMotionEvent.requestPermission) {
			return;
		}

		DeviceMotionEvent.requestPermission().then(response => {
			if (response === 'granted') {
				console.log("accelerometer permission granted");
				// Do stuff here
			}
		});
	}

	async function connect() {
		connectionType = ConnectionType.Connector;
		getAccel();
		sessionId = prompt('Enter session code:').trim().toLowerCase();

		connectionState = ConnectionState.Connecting;
		connectSession(sessionId, connectionSuccess).then((p) => {
			peerConnection = p;
		})
	}

	async function init() {
		connectionType = ConnectionType.Initiator;

		const {id, connection} = await initiateConnection(connectionSuccess);
		connectionState = ConnectionState.Connecting;

		sessionId = id;
		peerConnection = connection;
	}

	function connectionSuccess(sendChannel) {
		connectionState = ConnectionState.Connected;
		dataChannel = sendChannel;

		dataChannel.onmessage = receiveMessage;

		if (!doodleJumpInitiated && connectionType === ConnectionType.Initiator) {
			initDoodleJump();
			doodleJumpInitiated = true;
		}

		initGyroscope(sendChannel);
	}

	function receiveMessage(event) {
		gyroData = JSON.parse(event.data);

		setRotation(gyroData.alpha, gyroData.beta, gyroData.gamma, gyroData.reset, gyroData.orientation)
	}

	onMount(() => {
		// initWebgl(canvas);
        initDoodleJump()

	})


</script>

<svelte:head>
    <title>Gyroscope Demo</title>
    <meta name="description" content="WebRTC Gyroscope Demo"/>
</svelte:head>

<section>

    <h1 class:hidden={connectionType === ConnectionType.Initiator && connectionState === ConnectionState.Connected}>
        Gyroscope<br/>

        Connect or initiate a session<br>

        Connection: {Object.keys(ConnectionState)[connectionState]}<br/>

        {#if sessionId !== undefined}
            <br/>
            Session ID: {sessionId}
        {/if}
    </h1>


    <div id="app"
         class:hidden={connectionType !== ConnectionType.Initiator || connectionState !== ConnectionState.Connected}></div>
    <div id="debug"></div>

    <!--    <canvas bind:this={canvas} id="canvas3d" class={gyroData === undefined && "hidden"} width="100%" height="400"-->
    <!--            style="height: 400px; width: 100%"></canvas>-->

    {#if gyroData !== undefined && false}
        <h2>
            alpha: {Math.round(10 * gyroData.alpha) / 10},<br/>
            beta: {Math.round(10 * gyroData.beta) / 10},<br/>
            gamma: {Math.round(10 * gyroData.gamma) / 10},<br/>
            orientation: {gyroData.orientation}
        </h2>
    {/if}

    {#if connectionType === ConnectionType.Connector && connectionState === ConnectionState.Connected}
        <button on:click={queueReset} class="controls">Reset Rotation</button>
    {/if}

    <div class="center" class:hidden={connectionType === ConnectionType.Initiator && connectionState === ConnectionState.Connected}>
        <button on:click={connect} class="controls">Connect</button>
        <button on:click={init} class="controls" style="text-wrap: nowrap">Initiate connection</button>
    </div>
</section>

<style>
    .center {
        width: 100%;
        justify-content: center;
        display: flex;
    }

    #app {
        position: fixed;
        top: 0;
        left: 0;
    }

    .hidden {
        display: none;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    button.send {
        width: 100px;
        height: 40px;
        margin: 8px;
        border-radius: 8px;
        text-align: center;
        background: black;
        color: white;
        font-family: "Roboto Thin", monospace;
        font-weight: bolder;
    }

    button.controls {
        width: 200px;
        height: 80px;
        margin: 16px;
        padding: 8px;
        text-align: center;
        background: black;
        color: white;
        font-family: "Roboto Thin", monospace;
        font-weight: bolder;
        border-radius: 8px;
    }
</style>
