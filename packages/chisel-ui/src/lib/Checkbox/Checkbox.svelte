<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import { LABEL_CONTEXT, LabelContext } from '../Label';
	import { uuid } from '../id';

	export let checked = false;
	export let id = uuid();
	export let value = 'on';
	export let disabled = false;
	export let required = false;

	let className = 'checkbox';
	export { className as class };

	const context = getContext<LabelContext>(LABEL_CONTEXT);
	$: context?.bind(id);

	const dispatch = createEventDispatcher<{ change: boolean; click: Event }>();

	function onClick(event: Event) {
		checked = !checked;
		dispatch('click', event);
	}

	$: dispatch('change', checked);
</script>

<button
	class={className}
	type="button"
	role="checkbox"
	{id}
	aria-checked={checked}
	aria-required={required}
	aria-labelledby={context?.labelledBy}
	on:click={onClick}
	{disabled}
	{value}
>
	{#if checked}
		<slot />
	{/if}
</button>

<input type="checkbox" class="sr-only" aria-hidden tabindex="-1" {value} bind:checked />

<style>
	:where(button) {
		all: unset;
	}
</style>
