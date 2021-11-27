<script lang="ts">
	import CheckIcon from './icons/CheckIcon.svelte';
	import Checkbox from '../lib/Checkbox.svelte';
	import Label from '../lib/Label.svelte';

	export let checked = false;
	export let label: string;
</script>

<div>
	<Label>
		<Checkbox slot="component" bind:checked>
			<CheckIcon />
		</Checkbox>
		<span>{label}</span>
	</Label>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		gap: 0.5em;
		margin: 1em 0;
	}
	div :global(.checkbox) {
		background-color: white;
		width: 25px;
		height: 25px;
		border-radius: 4px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 10px #303030;
	}
	div :global(.checkbox:hover) {
		background-color: #cecece;
	}
	div :global(.checkbox:focus) {
		box-shadow: 0 0 0 2px black;
	}
	span {
		line-height: 25px;
	}
</style>
