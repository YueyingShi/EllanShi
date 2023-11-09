<script lang="ts">
	import banner from '$lib/components/Banner.svelte';

	import ProjectCard from '$lib/components/ProjectCard.svelte';

	import Button from '$lib/components/atoms/button/Button.svelte';
	import projects from '$lib/json/projects.json';
	import H1 from '$lib/components/atoms/headings/H1.svelte';
	import H3 from '$lib/components/atoms/headings/H3.svelte';
	import H4 from '$lib/components/atoms/headings/H4.svelte';
	import FilterBadge from '$lib/components/atoms/FilterBadge.svelte';
	import Banner from '$lib/components/Banner.svelte';
	let selected: string = 'All';
	let categories = ['All', 'Design', 'Research', 'Data', 'Development'];
	import { fade } from 'svelte/transition';
	import { tick } from 'svelte';
	let loading = true;

	async function loadData() {
		// Wait for the component to render
		await tick();
		// Set loading to false
		loading = false;
		console.log('loaded');
	}
	loadData();
</script>

<Banner>
	<div class="flex gap-4 pb-2">
		<div class="hidden lg:block">
			<H1>Hi, here is</H1>
		</div>
		<img src="/ellan_sign.png" class="h-full w-auto" alt="Ellan sign" />
	</div>
	<p class="text-lg md:text-xl">UX Designer /Researcher/ Web Developer</p>
</Banner>

<div class="flex flex-col items-center mx-auto my-6 px-4 w-full max-w-6xl">
	<div class="flex flex-wrap gap-2">
		{#each categories as category}
			<FilterBadge
				selected={selected === category}
				on:click={() => {
					selected = category;
				}}
			>
				{category}
			</FilterBadge>
		{/each}
	</div>

	<div id="projects" class=" my-4 w-full gap-4 grid lg:grid-cols-2 xl:grid-cols-3">
		{#each projects as project, i}
			{#if selected === 'All'}
				{#if loading}
					'projects'
				{:else}
					<div transition:fade={{ delay: i * 100, duration: 300 }}>
						<a href="/{project?.prop ? project.prop : 'notfound'}">
							<ProjectCard title={project.name} description={project.short_description} index={i} />
						</a>
					</div>
				{/if}
			{:else}
				<div class="{project.keywords?.includes(selected) ? '' : 'hidden'} ">
					<a href="/{project?.prop ? project.prop : 'notfound'}">
						<ProjectCard title={project.name} description={project.short_description} index={i} />
					</a>
				</div>
			{/if}
		{/each}
	</div>
</div>
