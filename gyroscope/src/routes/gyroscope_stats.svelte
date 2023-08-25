<script>
    export let gyroData;
	export let enabled;
</script>

{#if gyroData !== undefined && enabled}
    <h2>
        alpha: {Math.round(10 * gyroData.alpha) / 10},<br/>
        beta: {Math.round(10 * gyroData.beta) / 10},<br/>
        gamma: {Math.round(10 * gyroData.gamma) / 10},<br/>
        orientation: {gyroData.orientation}
    </h2>
{/if}
