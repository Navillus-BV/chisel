<script>
	import Checkbox from '../examples/Checkbox.svelte';
	import Image from '../examples/Image.svelte';
	import Switch from '../examples/Switch.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form>
	<Switch label="Airplane mode" />

	<Checkbox label="Accept terms and conditions." />

	<div style="width: 300px; border-radius: 6px; overflow: hidden; box-shadow: 0 2px 10px #303030;">
		<Image
			src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
			alt="Landscape photo by Tobias Tullius"
		/>
	</div>
</form>

<style>
	:global(.switch) {
		all: unset;
		width: 42px;
		height: 25px;
		background-color: rgba(0, 0, 0, 0.44);
		border-radius: 9999px;
		position: relative;
		box-shadow: 0 2px 10px #303030;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	:global(.switch:focus) {
		box-shadow: 0 0 0 2px black;
	}
	:global(.switch[aria-checked='true']) {
		background-color: black;
	}
	:global(.switch span) {
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
	:global(.switch[aria-checked='true'] span) {
		transform: translateX(19px);
	}
</style>
