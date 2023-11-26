<script>
	import Banner from '$lib/components/Banner.svelte';
	import H1 from '$lib/components/atoms/headings/H1.svelte';
	import H3 from '$lib/components/atoms/headings/H3.svelte';
	import { Icon, ArrowUp, AdjustmentsHorizontal, Funnel } from 'svelte-hero-icons';
</script>

<Banner>
	<H1>
		<span class=" mt-auto">Story of</span>
		<span>
			<img
				src="/ellanSign.svg"
				class="h-12 pb-1 mb:h-16 mb:pb-0.5 pl-4 inline"
				alt="Ellan sign"
			/></span
		>
	</H1>
	<div class="text-lg md:text-xl">Who I am, what I did and how I grew</div>
</Banner>
<!-- here is the general background information block -->

<div class="max-w-6xl my-6 mx-auto gap-2 sm:grid sm:grid-cols-2 sm:gap-4" />
