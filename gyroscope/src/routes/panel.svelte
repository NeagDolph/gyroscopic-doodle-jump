<script>
	import {initiateConnection, connectSession, generateSessionId} from "./connection.ts"
	import {initGyroscope} from "./gyroscope.ts";
	import {initWebgl, setRotation} from "./model.ts";
	import {onMount, tick} from 'svelte';
	import {initDoodleJump} from "./doodle_jump/main";
	import {setBetaRotation} from "./movementStore";
	import Stats from "./components/gyroscope_stats.svelte";
	import LoadingIcon from "./components/loading_icon.svelte";
	import CodePrompt from "./components/code_prompt.svelte";
	import {controlsPaused, gamePaused, game, score} from "./store/gameStore";
	import {phoneOrientation} from "./store/gyroscopeStore";
	import {toast} from '@zerodevx/svelte-toast';
	import PauseChip from "./components/pause_chip.svelte";
	import Score from "./components/score.svelte";
	import GameEnd from "./components/game_end.svelte";

	const connectionTypes = {
		0: "Idle",
		1: "Waiting for Connection...",
		2: "Establishing Connection...",
		3: "Connected!"
	}
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

	let doodleJumpInitiated = false;
	let controlsInitiated = false;
	let connectionStatus = 0;

	let peerConnection;
	let sessionId;
	let dataChannel;

	let gameEnded = false;

	let codePromptEnabled = false;

	let gyroData;

	let promptComponent;


	let connectionState = ConnectionState.Idle;
	let connectionType = ConnectionType.Unknown;

	function getAccel() {
		if (!DeviceMotionEvent || !DeviceMotionEvent.requestPermission) {
			return;
		}

		DeviceMotionEvent.requestPermission().then(response => {
			if (response === 'granted') {
				console.log("accelerometer permission granted");
				// Do stuff here
			}

			if (response === 'denied') {
				alert("You have denied gyroscope permission")
			}
		});
	}

	async function connect(code) {
		connectionType = ConnectionType.Connector;
		getAccel();
		sessionId = code.trim().toLowerCase();

		connectionState = ConnectionState.Connecting;
		connectSession(sessionId, connectionSuccess).then((p) => {
			peerConnection = p;
		})
	}

	async function init() {
		connectionType = ConnectionType.Initiator;

		sessionId = generateSessionId();

		const {connection} = await initiateConnection(sessionId, connectionSuccess);
		connectionState = ConnectionState.Connecting;
		connectionStatus = 1;

		peerConnection = connection;
	}

	function connectionSuccess(sendChannel) {
		connectionState = ConnectionState.Connected;
		connectionStatus = 3;
		dataChannel = sendChannel;

		dataChannel.onmessage = receiveMessage;
		dataChannel.onclose = disconnect;

		toast.push(`Connected to ${connectionType === ConnectionType.Initiator ? "Controller" : "Game"}`, {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(72,187,120,0.9)',
				'--toastBarBackground': '#2F855A'
			}
		})

		if (connectionType === ConnectionType.Initiator) {
			initDoodleJump();
			gamePaused.set(false);
		}

		initGyroscope(sendChannel);
	}

	function receiveMessage(event) {
		gyroData = JSON.parse(event.data);

		if (gyroData.disconnected) {
			disconnect();
			return;
		}

		controlsPaused.set(gyroData.paused)

		if ($controlsPaused) {
			setBetaRotation(0, 0, undefined);
			return;
		}

		setBetaRotation(gyroData.beta, gyroData.gamma, gyroData.orientation);
	}


	$: connected = connectionType !== ConnectionType.Unknown && connectionState === ConnectionState.Connected;
	$: connectedInitiator = connected && connectionType === ConnectionType.Initiator;
	$: connectedConnector = connected && connectionType === ConnectionType.Connector;


	function toggleControlsPause() {
		if (!$controlsPaused) {
			dataChannel.send(JSON.stringify({alpha: 0, beta: 0, gamma: 0, orientation: undefined}));
		}

		controlsPaused.set(!$controlsPaused);
	}

	function toggleGamePause() {
		if (connected) {
			gamePaused.set(!$gamePaused)
		}
	}


	function onKeyDown(e) {
		switch (e.keyCode) {
			case 27: // ESC button
				e.preventDefault();
				toggleGamePause();
				break;
		}
	}

	function preDisconnect() {
		connectionType = ConnectionType.Unknown;
		connectionState = ConnectionState.Idle;
		controlsInitiated = false;
		gameEnded = false;
		phoneOrientation.set(undefined);
		connectionStatus = 0;
		controlsPaused.set(false);
	}

	function disconnect() {
		if (connectionState === ConnectionState.Idle && connectionType === ConnectionType.Unknown) {
			return;
		}

		if (dataChannel.readyState === "open") dataChannel.send("{\"disconnected\": true}")

		preDisconnect();

		dataChannel.close();
		peerConnection.close();
		$game.stop();
		document.body.querySelector("canvas").remove();
		toast.push('Disconnected from session', {
			theme: {
				'--toastColor': 'mintcream',
				'--toastBackground': 'rgba(255,93,93,0.9)',
				'--toastBarBackground': '#d92020'
			}
		})
	}

	onMount(() => {
		// Attach an event listener to listen for the custom event
		document.addEventListener("disconnected", function (event) {
			disconnect();
		});

		document.addEventListener("connectionState", function (event) {
			connectionStatus = event.detail.message;
		});

		document.addEventListener("game_end", function (event) {
			$game.stop();

			gameEnded = true;
		});

		document.addEventListener("noOffers", function (event) {
			preDisconnect();
			toast.push('Invalid Session: ' + event.detail.message, {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(255,93,93,0.9)',
					'--toastBarBackground': '#d92020'
				}
			})
		});
	});

	function enteredCode(e) {
		codePromptEnabled = false;
		promptComponent.unfocusInput()

		connect(e.detail);
	}

	async function openCodePrompt() {
		codePromptEnabled = true;
		promptComponent.focusInput();
	}

	function closeCodePrompt() {
		codePromptEnabled = false;
	}


	$: invalidOrienatation = ($phoneOrientation === undefined || $phoneOrientation === 180 || $phoneOrientation === 0)

	// Initiate Controls if orientation is unpaused for connector
	$: {
		if (!invalidOrienatation) {
			controlsInitiated = true;
		}
	}

	$: {
		if (invalidOrienatation && $controlsPaused) {
			controlsInitiated = false;
		}
	}

	function restartGame() {
		gameEnded = false;
		score.set(0)

		document.body.querySelector("canvas").remove();

		initDoodleJump();
    }

</script>

<svelte:window on:keydown={onKeyDown}/>


<PauseChip enabled={connectionType === ConnectionType.Initiator} connected={connected}/>
<Score enabled={connectionType === ConnectionType.Initiator}/>
<GameEnd enabled={gameEnded} on:restart={restartGame}/>
<div class="container" class:hidden={!$gamePaused && connectedInitiator}>
    <div class="panel-container">
        {#if !connectedConnector}
            <p class="title">Gyroscrope controlled Doodle Jump Demo</p>

            {#if connectionStatus >= 1}
                <div class="row-container">
                    {#if connectionStatus <= 2}
                        <LoadingIcon/>
                    {/if}
                    <p class="connection_status">{connectionTypes[connectionStatus]}</p>
                </div>
            {:else}
                <p class="subtitle">Connect or initiate a session</p>
            {/if}

            <div class="row-container">
                {#if connectionType === ConnectionType.Initiator}
                    <p class="code">Code: <span class="session_id">{sessionId}</span></p>
                {/if}
            </div>

            <div id="app"
                 class:hidden={connectionType !== ConnectionType.Initiator}></div>

            <Stats enabled={false} gyroData={gyroData}/>

            <div class="row-container">
                {#if connectionType === ConnectionType.Connector && connectionState === ConnectionState.Connected}
                    <button on:click={toggleControlsPause}
                            class="controls button-color-black">{$controlsPaused ? "Resume Controls" : "Pause Controls"}</button>
                {/if}
            </div>

            <div class="row-container"
                 class:hidden={connectionType === ConnectionType.Initiator && connectionState === ConnectionState.Connected}>

                <button on:click={init} class="controls button-blue">Initiate</button>
                <button on:click={openCodePrompt} class="controls button-green">Connect</button>
            </div>

        {:else}
            {#if invalidOrienatation && !controlsInitiated}
                <p class="rotate_phone_message">Rotate Phone to activate tilt controls</p>

                <div class="row-container">
                    <img class="rotate_icon" src="/icons/rotate_phone.svg" alt="Rotate Phone Icon"/>
                </div>
            {:else}
                <div class="row-container">
                    {#if connectionType === ConnectionType.Connector && connectionState === ConnectionState.Connected}
                        <button on:click={toggleControlsPause}
                                class="controls button-color-black">{$controlsPaused ? "Resume Controls" : "Pause Controls"}</button>
                    {/if}
                </div>
            {/if}
        {/if}

        {#if connected}
            <div class="row-container">
                <button on:click={disconnect} class="controls button-black">Disconnect</button>
            </div>
        {/if}

    </div>
</div>
<CodePrompt bind:this={promptComponent} enabled={codePromptEnabled} on:entered_code={enteredCode}
            on:close={closeCodePrompt}/>

<style>
    .session_id {
        font-weight: 600;
        letter-spacing: 3px;
    }

    .connection_status {
        font-size: 18px;
        margin-left: 8px;
        color: #6582e5;
        height: 30px;
        text-wrap: none;
        font-weight: 600;
    }

    .rotate_phone_message {
        font-size: 22px;
        color: rgb(94, 86, 86);
        text-align: center;
    }

    .rotate_icon {
        max-width: 300px;
    }

    .container {
        position: fixed;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .panel-container {
        padding: 16px 36px;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, .45);
        backdrop-filter: blur(5px);
    }

    .hidden {
        display: none;
    }

    .title {
        font-size: 35px;
        color: black;
        text-align: center;
    }

    .subtitle {
        font-size: 18px;
        color: rgb(94, 86, 86);
        text-align: center;
    }

    .code {
        font-size: 22px;
        text-align: center;
        padding: 8px 20px;
        color: white;
        background-color: coral;
        border-radius: 999px;
    }

    .row-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 20px 0;
        align-items: center;
    }

    .controls {
        margin: 8px;
        outline: none;
        border: none;
        padding: 16px 40px;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        text-wrap: nowrap;
        color: white;
        font-weight: 600;
    }

    .button-green {
        background: rgb(75 201 109);
    }

    .button-blue {
        background: rgb(69 136 225);
    }

    .button-black {
        background: black;
    }

    .button-color-black {
        color: black;
    }

    @media screen and (max-width: 768px) {
        .panel-container {
            padding: 16px 8px;
        }
    }


</style>
