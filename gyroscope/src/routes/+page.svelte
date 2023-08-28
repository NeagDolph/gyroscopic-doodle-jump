<script>
	import Panel from "./panel.svelte";
	import DebugData from "./components/debug_data.svelte";

</script>

<svelte:head>
    <title>Gyroscope Demo</title>
    <meta name="description" content="WebRTC Gyroscope Demo"/>
</svelte:head>

<div>
    <DebugData enabled={true}/>
    <Panel/>
</div>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }
</style>
