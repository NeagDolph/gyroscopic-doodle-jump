<script>
	import {score} from "../store/gameStore";
	import {createEventDispatcher} from "svelte";
	import {fade} from 'svelte/transition';

	export let enabled;

	const dispatch = createEventDispatcher();

	function restartGame() {
		dispatch("restart");
	}
</script>

{#if enabled}
    <div class="container" in:fade={{ duration: 800 }}>
        <div class="game-end-container">
            <div class="text-row game-end">You died!</div>
            <div class="row-center">
                <div class="text-row score">Score: {$score}</div>
            </div>
            <div class="row-center">
                <button class="controls button-green" on:click={restartGame}>Restart Game</button>
            </div>
        </div>
    </div>
{/if}

<style>
    .row-center {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8px 0;
    }

    .button-green {
        background: rgb(98, 217, 131);
        color: white;
    }

    .controls {
        margin: 8px;
        outline: none;
        border: none;
        padding: 14px 30px;
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        text-wrap: nowrap;
        font-weight: 600;
        font-size: 20px;
    }

    .text-row {
        text-align: center;
        width: 100%;
    }

    .game-end {
        font-size: 45px;
        color: #ff6666;
        font-family: 'Montserrat', 'Fira Mono', serif;
        font-weight: 600;
    }

    .score {
        font-size: 25px;
        border-radius: 999px;
        padding: 5px 20px;
        width: auto;
        font-family: "Montserrat", "Fira Mono", serif;
        font-weight: 500;
        color: white;
        background: coral;
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

    .game-end-container {
        padding: 25px 50px;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, .75);
        backdrop-filter: blur(5px);
    }

</style>
