<script>
	import {score} from "../store/gameStore";

	export let enabled = true;
</script>

{#if enabled}
    <div class="info_container">
        <div class="chip">{$score}</div>
    </div>
{/if}

<style>
    .info_container {
        display: flex;
        flex-direction: row;
        gap: 8px;
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    .chip {
        border-radius: 999px;
        padding: 5px 10px;
        font-family: "Montserrat", "Fira Mono", serif;
        font-size: 20px;
        font-weight: 500;
        color: black;
        background: mintcream;
    }
</style>
