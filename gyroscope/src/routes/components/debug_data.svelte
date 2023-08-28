<script>
	import {debugContent} from "../store/debugStore";

	export let enabled = true;
</script>

{#if enabled && $debugContent !== undefined}
    <div id="debug">{$debugContent}</div>
{/if}
