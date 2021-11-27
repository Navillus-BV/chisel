<script lang="ts">
	export let ratio = 1 / 1;
</script>

<div style="--ratio: {ratio};">
	<slot />
</div>

<style>
	@supports not (aspect-ratio: 1) {
		div {
			position: relative;
			width: 100%;
			padding-bottom: calc(100% / var(--ratio, 1));
		}

		div > :global(*) {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
		}
	}

	@supports (aspect-ratio: 1) {
		div > :global(*) {
			display: block;
			aspect-ratio: var(--ratio);
		}
	}
</style>
