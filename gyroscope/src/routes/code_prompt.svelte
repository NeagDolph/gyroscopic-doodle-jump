<script>
	import {createEventDispatcher, tick} from "svelte";
	import {fade} from 'svelte/transition';

	export let enabled = false;

	let code = '';
	let inputEl;
	let inputValue;

	export async function focusInput() {
		await tick();
		inputValue = ""
		inputEl.value = "";
		code = "";
		inputEl.focus();
	}

	export async function unfocusInput() {
		inputEl.blur();
	}

	const dispatch = createEventDispatcher();

	function handleInput(value) {
		if (value.length <= 7) {
			code = value;
		}
		if (value.length === 7) {
			dispatch('entered_code', code);
		}
	}
</script>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .overlay.enabled {
    }

    .modal {
        background: white;
        padding: 1em 2em;
        border-radius: 0.3em;
        min-width: 300px;
    }

    input[type="tel"] {
        opacity: 0;
        position: absolute;
        pointer-events: none;
    }

    .code-view {
        display: flex;
        justify-content: start;
        align-items: end;
        height: 50px;
    }

    .code-digit {
        font-size: 2em;
        border-bottom: 2px solid #000;
        width: 0.8em;
        margin: 0 8px;
        font-family: "Montserrat", "Fira Mono", serif;
        text-align: center;
    }

    p {
        font-size: 20px;
        color: #6582e5;
        font-weight: 600;
        margin: 0 0 10px 0;
    }
</style>

{#if enabled}
    <div class={enabled ? 'overlay enabled' : 'overlay'}>
        <div class="modal" on:click={focusInput} in:fade out:fade>
            <p>Enter Session ID</p>
            <div class="code-view">
                {#each [0, 1, 2, 3, 4, 5, 6] as i}
                    <div class="code-digit">{code[i] || ''}</div>
                {/each}
            </div>
            <input
                    bind:this={inputEl}
                    type="tel"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    on:input={(e) => handleInput(e.target.value)}
                    bind:value={inputValue}
            />
        </div>
    </div>

{/if}
