<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';
	import { user } from '$lib/stores.js';
	let projects: any = [];

	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import FilterBadge from '$lib/components/atoms/FilterBadge.svelte';
	import Banner from '$lib/components/Banner.svelte';
	let selected: string = 'All';
	let categories = ['All', 'Design', 'Research', 'Data', 'Development'];
	import { fade } from 'svelte/transition';

	function sortProject() {
		projects.sort((a: any, b: any) => {
			return a.id - b.id;
		});
	}
	async function getAllProjects() {
		try {
			const { data } = await supabase.from('projects').select();
			projects = data;
			sortProject();
		} catch (err) {
			console.log(err);
		}
	}
	onMount(async () => {
		await getAllProjects();
	});
	$: console.log(projects);
</script>

<Banner>
	<img src="/ellanSign.svg" class="h-12 pb-1 md:h-16 inline" alt="Ellan sign" />
	<h1 class="text-xl md:text-3xl w-2/3 font-medium">
		A full-stack UX designer who believes in a data-driven approach.
	</h1>
	<h2 class="text-xl md:text-3xl w-2/3 opacity-25 hover:opacity-50 font-medium">
		With a comprehensive skill set that includes psychology, user research, and web development, my
		goal is to translate digital world into a compelling and user-friendly story.
	</h2>
</Banner>

<!-- projects  -->

<div class="flex flex-col items-center mx-auto py-8 px-4 w-full min-h-full max-w-6xl">
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

	<div id="projects" class="flex-1 mt-4 w-full gap-x-4 gap-y-8 grid xl:grid-cols-2">
		{#each projects as project, i}
			<div
				class={selected === 'All' ? ' ' : project.keywords?.includes(selected) ? '' : 'hidden'}
				transition:fade={{ delay: i * 100, duration: 300 }}
			>
				<a href="/{project?.prop ? project.prop : 'notfound'}">
					<ProjectCard
						title={project.title}
						description={project.description}
						bg_url={project.cover_image}
					/>
				</a>
			</div>
		{/each}
	</div>
</div>
