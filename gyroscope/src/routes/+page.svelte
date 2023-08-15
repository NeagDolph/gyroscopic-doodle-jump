<script lang="ts">
    import {initiateConnection, connectSession} from "./connection.ts"

    let peerConnection;
    let sessionId;
    let dataChannel;

    let connectionState = ConnectionState.Idle;

    enum ConnectionState {
        Connected,
        Connecting,
        Idle,
    }

    function getAccel(){
        if (!DeviceMotionEvent || !DeviceMotionEvent.requestPermission) {
            return;
        }

        DeviceMotionEvent.requestPermission().then(response => {
            if (response == 'granted') {
                console.log("accelerometer permission granted");
                // Do stuff here
            }
        });
    }


    async function connect() {
        getAccel();


        sessionId = prompt('Enter session code:');

        connectionState = ConnectionState.Connecting;
        peerConnection = await connectSession(sessionId, connectionSuccess);
    }

    async function init() {
        const {id, connection} = await initiateConnection(connectionSuccess);
        connectionState = ConnectionState.Connecting;

        sessionId = id;
        peerConnection = connection;
    }

    function connectionSuccess(sendChannel: RTCDataChannel) {
        connectionState = ConnectionState.Connected;
        dataChannel = sendChannel;

        dataChannel.onmessage = receiveMessage;
    }

    let messages = []

    let messageInputValue;

    function sendMessage() {
        dataChannel.send(messageInputValue);


        console.log("Sent:", messageInputValue)

        const newMessage = {
            self: true,
            message: messageInputValue + ""
        }

        messages[messages.length] = newMessage;

        messageInputValue = "";
    }

    function receiveMessage(event: MessageEvent) {
        console.log("Received:", event.data)

        const newMessage = {
            self: false,
            message: event.data + ""
        }


        messages[messages.length] = newMessage;
    }



</script>

<svelte:head>
    <title>Gyroscope Demo</title>
    <meta name="description" content="WebRTC Gyroscope Demo"/>
</svelte:head>

<section>
    <h1>
        Gyroscope<br/>

        Connect or initiate a session

        {#if sessionId !== undefined}
            <br/>
            Session ID: {sessionId}
        {/if}
    </h1>

    <button on:click={connect} class="controls">Connect</button>
    <button on:click={init} class="controls">Initiate connection</button>

    {#if connectionState === ConnectionState.Connected}
        <div id="chatArea">
            <div id="messages">
                {#each messages as {message, self}}
                    <div>
                        {self ? "Sent" : "Received"}: {message}
                    </div>
                {/each}
            </div>
            <input type="text" id="messageInput" bind:value={messageInputValue}/>
            <button id="sendMessage" on:click={sendMessage} class="send">Send</button>
        </div>
    {/if}
</section>

<style>
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
