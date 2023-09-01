<script lang="ts">
	import QuarterCircle from '$lib/components/svgs/QuarterCircle.svelte';
	import sustainability from '$lib/json/sustainability.json';
	import MainTable from './MainTable.svelte';
</script>

<!-- the table  -->
<div class="flex h-[100vh] w-[100vw] overflow-clip">
	<div
		class="flex-none hidden h-full bg-blue-500 text-white lg:py-4 lg:flex lg:flex-col lg:items-center lg:w-12 lg:gap-4 border-r border-blue-300"
	>
		<div class=" p-1 h-10 w-10"><QuarterCircle /></div>
	</div>
	<div
		class="flex-none hidden h-full bg-blue-500 text-white lg:px-4 lg:py-4 lg:flex lg:flex-col lg:w-64 lg:gap-2 border-r border-blue-300"
	>
		<p class="text-lg font-medium mb-4 flex-wrap">
			Sustainability <br /> Reference <br /> Database
		</p>
		{#each ['Project information', 'Team', 'Building General information', 'Finance', 'Energy Modeling'] as database}
			<div
				class="w-full p-2 hover:bg-blue-400 {database === 'Project information'
					? 'bg-blue-600'
					: ''} rounded"
			>
				{database}
			</div>
		{/each}
	</div>
	<MainTable />
</div>
