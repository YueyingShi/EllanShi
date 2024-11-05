<script lang="ts">
	import ChoroplethMap from '$lib/components/molecules/charts/ChoroplethMap.svelte';
	import { onMount } from 'svelte';
	let yearindex = 0;
	let years = [2004, 2008, 2012, 2016, 2020];
</script>

<div class="bg-gray-100">
	<h1 class="text-2xl text-center p-4">
		{years[yearindex]} GENERAL ELECTION VOTES CAST BY PARTY Choropleth Map
	</h1>
	<ChoroplethMap currentyear={years[yearindex]} />
</div>

<div class="flex justify-center mt-4">
	<input
		type="range"
		bind:value={yearindex}
		min="0"
		max={years.length - 1}
		step="1"
		class="slider"
	/>
	<div class="ml-2 text-lg">{years[yearindex]}</div>
</div>
