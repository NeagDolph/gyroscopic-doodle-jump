<script>
	import {controlsPaused, gamePaused} from "../store/gameStore";
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let enabled = true;
	export let connected;


	let flyTransition = { delay: 0, duration: 300, x: 100, y: 0, opacity: 0, easing: quintOut };

</script>

{#if enabled}
    <div class="info_container">
        {#if connected}
            <div class="chip green" transition:fly={flyTransition}>Connected</div>
        {/if}

        {#if $controlsPaused}
            <div class="chip blue" transition:fly={flyTransition}>Controls Paused</div>
        {/if}

        {#if $gamePaused}
            <div class="chip red" transition:fly={flyTransition}>Game Paused</div>
        {/if}
    </div>
{/if}

<style>
    .info_container {
        display: flex;
        flex-direction: row;
        gap: 8px;
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    .chip {
        border-radius: 999px;
        padding: 3px 10px;
        font-family: "Montserrat", "Fira Mono", serif;
        font-size: 16px;
        font-weight: 500;
    }

    .red {
        background: #f6d7d791;
        color: #c40000;
        border: solid 1px #c40000;
    }

    .blue {
        background: #d9ddf4;
        color: #4247f5;
        border: solid 1px #4247f5;
    }

    .green {
        background: #acf0aa91;
        color: #16a00b;
        border: solid 1px #16a00b;
    }


</style>
