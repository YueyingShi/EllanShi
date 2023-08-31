<script>
	import data from '$lib/json/projectdata.json';
</script>

<div id="banner" class="h-36 bg-slate-100">banner here</div>
<div id="projects" class="my-4 gap-2 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
	{#each data.projects as project}
		<div class="project w-full bg-slate-200">
			<p class="text-xl font-semibold">{project.name}</p>
			<p>{project.short_description}</p>
		</div>
	{/each}
</div>
