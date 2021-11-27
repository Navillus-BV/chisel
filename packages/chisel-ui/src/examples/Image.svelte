<script lang="ts">
	import AspectRatio from '../lib/AspectRatio.svelte';

	export let src: string;
	export let alt: string;
</script>

<AspectRatio ratio={16 / 9}>
	<img {src} {alt} />
</AspectRatio>

<style>
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
