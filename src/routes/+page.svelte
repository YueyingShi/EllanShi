<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	import Button from '$lib/components/atoms/button/Button.svelte';
	import projects from '$lib/json/projects.json';
	import H1 from '$lib/components/atoms/headings/H1.svelte';
	import H3 from '$lib/components/atoms/headings/H3.svelte';
	import H4 from '$lib/components/atoms/headings/H4.svelte';
	let selected: string = 'All';
	let categories = ['All', 'UX Design', 'Data Analysis', 'Communication Design'];
</script>

<div id="banner" class="h-64 bg-slate-100 flex justify-center">
	<div class="px-4 w-full max-w-6xl my-auto">
		<H1>Hi, here is Ellan Shi</H1>
		<p class="text-lg md:text-xl">UX Designer / researcher</p>
	</div>
</div>
<div class="flex flex-col items-center mx-auto my-6 px-4 w-full max-w-6xl">
	<div class="flex flex-wrap gap-4">
		{#each categories as category}
			<Button
				selected={selected === category}
				on:click={() => {
					selected = category;
				}}
			>
				{category}
			</Button>
		{/each}
	</div>
	<div
		id="projects"
		class=" my-4 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
	>
		{#each projects as project}
			{#if selected === 'All'}
				<a href="/{project?.prop ? project.prop : 'notfound'}">
					<ProjectCard title={project.name} description={project.short_description} />
				</a>
			{:else}
				<div class={project.keywords?.includes(selected) ? '' : 'hidden'}>
					<a href="/{project?.prop ? project.prop : 'notfound'}">
						<ProjectCard title={project.name} description={project.short_description} />
					</a>
				</div>
			{/if}
		{/each}
	</div>
</div>
