<script lang="ts">
	import ChartBar from '$lib/components/ChartBar.svelte';
	import Cog6 from '$lib/components/svgs/Cog6.svelte';
	import QuarterCircle from '$lib/components/svgs/QuarterCircle.svelte';
	import Table from '$lib/components/svgs/Table.svelte';
	import sustainability from '$lib/json/sustainability.json';
	import MainTable from './MainTable.svelte';
</script>

<!-- the table  -->
<div class="flex h-[100vh] w-[100vw] overflow-clip">
	<div
		class="flex-none hidden h-full bg-blue-600 text-white lg:py-4 lg:flex lg:flex-col lg:items-center lg:w-14 lg:gap-6 border-r border-blue-300"
	>
		<div class=" h-12 w-10 p-1.5 mb-2"><QuarterCircle /></div>
		<div class=" h-10 w-10 p-2 hover:bg-blue-500 rounded"><Table /></div>
		<div class=" h-10 w-10 p-2 hover:bg-blue-500 rounded"><ChartBar /></div>
		<div class=" h-10 w-10 p-2 hover:bg-blue-500 rounded"><Cog6 /></div>
	</div>
	<div
		class="flex-none hidden h-full bg-white text-gray-500 font-medium lg:px-4 lg:py-4 lg:flex lg:flex-col lg:w-64 lg:gap-2 border-r border-slate-300"
	>
		<p class="text-lg font-medium text-gray-900 mb-4 flex-wrap">
			Sustainability Reference Database
		</p>
		{#each ['Project information', 'Team', 'Building General information', 'Finance', 'Energy Modeling'] as database}
			<div
				class="w-full p-2 text-sm hover:bg-slate-100 {database === 'Project information'
					? 'bg-slate-200 text-gray-900'
					: ''} rounded"
			>
				{database}
			</div>
		{/each}
	</div>

	<MainTable />
</div>
