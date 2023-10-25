<script>
	import Navbar from './Navbar.svelte';

	import '../app.css';
</script>

<header />

<Navbar />
<slot />
<footer />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.50);
	}
</style>
