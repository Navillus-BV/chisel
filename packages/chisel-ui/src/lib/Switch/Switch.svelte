<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import { LABEL_CONTEXT, LabelContext } from '../Label';
	import { uuid } from '../id';

	export let checked = false;
	export let value = 'on';
	export let required: boolean | undefined = undefined;
	export let disabled = false;
	export let id: string | undefined = uuid();

	let className = 'switch';
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
	role="switch"
	{id}
	aria-checked={checked}
	aria-required={required}
	aria-labelledby={context?.labelledBy}
	on:click={onClick}
	{disabled}
	{value}
>
	<span />
</button>

<input class="sr-only" type="checkbox" aria-hidden tabindex="-1" bind:checked />

<style>
	:where(button) {
		all: unset;
	}
</style>
