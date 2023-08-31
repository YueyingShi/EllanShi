<script>
	/** @type {import('./$types').PageData} */
	import projects from '$lib/json/projects.json';
	export let data;
	let current_project = projects.find((e) => e.id === data.Id);
</script>

<div id="banner" class="flex flex-col items-center justify-center lg:h-[30vh]">
	<h1 class="text-3xl">{current_project?.name}</h1>
	<div>{current_project?.short_description}</div>
</div>
<div class="gap-2 sm:grid sm:grid-cols-2 sm:gap-4">
	<div>
		<p>Background</p>
	</div>
	<div>
		<p>Introduction</p>
		{#if current_project?.introduction}
			{#each current_project.introduction as p}
				<p>{p}</p>
			{/each}
		{/if}
	</div>
</div>
