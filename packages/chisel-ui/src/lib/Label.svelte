<script lang="ts" context="module">
	export const LABEL_CONTEXT = {};

	export interface LabelContext {
		labelledBy: string;
		bind(id: string): void;
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { uuid } from './id';

	export let id: string = uuid();
	export let flip = false;

	let htmlFor: string | undefined = undefined;

	setContext<LabelContext>(LABEL_CONTEXT, {
		labelledBy: id,
		bind: (id: string) => (htmlFor = id)
	});
</script>

{#if !flip}<slot name="component" />{/if}
<label {id} for={htmlFor} on:click|trusted><slot /></label>
{#if flip}<slot name="component" />{/if}

<style>
	label {
		margin: 0 0 0 0.5em;
	}
</style>
