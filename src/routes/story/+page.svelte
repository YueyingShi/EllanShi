<script>
	import Banner from '$lib/components/Banner.svelte';
	import H1 from '$lib/components/atoms/headings/H1.svelte';
	import H3 from '$lib/components/atoms/headings/H3.svelte';
	import { Icon, ArrowUp, AdjustmentsHorizontal, Funnel } from 'svelte-hero-icons';
</script>

<Banner>
	<div class="flex gap-4 pb-2">
		<H1>The story of</H1>
		<img src="/ellan_sign.png" class="h-full w-auto" alt="Ellan sign" />
	</div>
	<div class="text-lg md:text-xl">A little bit more about me</div>
</Banner>
<!-- here is the general background information block -->

<div class="max-w-6xl my-6 mx-auto gap-2 sm:grid sm:grid-cols-2 sm:gap-4">
	<div>
		<Icon src={AdjustmentsHorizontal} mini />
		<Icon src={Funnel} solid />
	</div>
	<div>
		<H3>Brief</H3>
	</div>
</div>
