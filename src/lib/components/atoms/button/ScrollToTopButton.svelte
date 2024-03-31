<!-- ScrollToTop.svelte -->
<script>
	import { onMount } from 'svelte';
	import { Icon, ArrowUp } from 'svelte-hero-icons';

	onMount(() => {
		const scrollToTop = () => {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		};

		document.getElementById('scrollToTopButton')?.addEventListener('click', scrollToTop);
	});
</script>

<button
	id="scrollToTopButton"
	class="fixed bottom-6 right-6 bg-slate-700 hover:bg-slate-500 p-3 rounded-full text-white"
>
	<Icon src={ArrowUp} size="24" mini /></button
>
