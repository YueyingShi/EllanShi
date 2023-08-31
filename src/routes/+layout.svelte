<script>
	import '../app.css';
</script>

<header />
<slot />
<footer />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.50);
	}
</style>
