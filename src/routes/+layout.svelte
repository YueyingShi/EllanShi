<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { tick } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	let loading = true;

	async function loadData() {
		// Wait for the component to render
		await tick();
		// Set loading to false
		loading = false;
		console.log('loaded');
	}
	loadData();
</script>

{#if loading}
	<div>Loading...</div>
{:else}
	<header />

	<Navbar />
	<slot />
	<Footer />
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.50);
	}
</style>
