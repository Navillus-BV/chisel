<script lang="ts">
	import Label from '../lib/Label.svelte';
	import Switch from '../lib/Switch.svelte';

	export let checked = false;
	export let label: string;
</script>

<div>
	<Label flip>
		<span>{label}</span>
		<Switch bind:checked />
	</Label>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		gap: 0.5em;
		margin: 1em 0;
	}
	div :global(.switch) {
		all: unset;
		width: 42px;
		height: 25px;
		background-color: rgba(0, 0, 0, 0.44);
		border-radius: 9999px;
		position: relative;
		box-shadow: 0 2px 10px #303030;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	div :global(.switch:focus) {
		box-shadow: 0 0 0 2px black;
	}
	div :global(.switch[aria-checked='true']) {
		background-color: black;
	}
	div :global(.switch span) {
		display: block;
		width: 21px;
		height: 21px;
		background-color: white;
		border-radius: 9999px;
		box-shadow: 0 2px 2px #303030;
		transition: transform 100ms;
		transform: translateX(2px);
		will-change: transform;
	}
	div :global(.switch[aria-checked='true'] span) {
		transform: translateX(19px);
	}
</style>
