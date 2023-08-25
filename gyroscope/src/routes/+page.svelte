<script>
	import Panel from "./panel.svelte";
	import {debugContent} from "./store/debugStore";

</script>

<svelte:head>
    <title>Gyroscope Demo</title>
    <meta name="description" content="WebRTC Gyroscope Demo"/>
</svelte:head>

<div>
    {#if $debugContent !== undefined}
        <div id="debug">{$debugContent}</div>
    {/if}
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
