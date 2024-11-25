<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { tick } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ScrollToTopButton from '$lib/components/atoms/button/ScrollToTopButton.svelte';
	import { Analytics } from '@vercel/analytics/next';
	let loading = true;

	async function loadData() {
		// Wait for the component to render
		await tick();
		// Set loading to false
		loading = false;
	}
	loadData();
</script>

{#if loading}
	<div>Loading...</div>
{:else}
	<body class="min-h-[100vh] flex flex-col">
		<Navbar />
		<slot />
		<div class="mt-auto">
			<Footer />
		</div>
		<ScrollToTopButton />
		<Analytics />
	</body>
{/if}

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.slate.50);
	}
</style>
