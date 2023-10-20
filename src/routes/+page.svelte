<script>
	import projects from '$lib/json/projects.json';
</script>

<div id="banner" class="h-36 bg-slate-100">banner here</div>
<div id="projects" class="my-4 gap-2 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
	{#each projects as project}
		<a href="/{project?.prop ? project.prop : 'notfound'}">
			<div class="project w-full bg-slate-200">
				<p class="text-xl font-semibold">{project.name}</p>
				<p>{project.short_description}</p>
			</div>
		</a>
	{/each}
</div>
