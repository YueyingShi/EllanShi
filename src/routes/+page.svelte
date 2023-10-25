<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	import Button from '$lib/components/atoms/button/Button.svelte';
	import projects from '$lib/json/projects.json';
	let selected: string = 'All';
	let categories = ['All', 'UX Design', 'UX Research', 'Communication Design'];
</script>

<div id="banner" class="h-36 bg-slate-100"><p class="p-4">Banner here</p></div>
<div class="flex flex-col items-center my-6">
	<div class="flex gap-4">
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
		class="my-4 flex flex-col gap-2 md:space-x-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
