<script lang="ts">
	import banner from '$lib/components/Banner.svelte';

	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import H5 from '$lib/components/atoms/headings/H5.svelte';
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
	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';
	import ScrollToTopButton from '$lib/components/atoms/button/ScrollToTopButton.svelte';
	let loading = true;
	let showMore = false;
	let innerWidth = window.innerWidth;
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
	<img src="/ellanSign.svg" class="h-12 pb-1 md:h-16 inline" alt="Ellan sign" />
	<h1 class="text-xl md:text-3xl w-2/3 font-medium">
		A full-stack UX designer who believes in a data-driven approach.
	</h1>
	<h2 class="text-xl md:text-3xl w-2/3 text-slate-300 hover:text-slate-500 font-medium">
		With a comprehensive skill set that includes psychology, user research, and web development, my
		goal is to translate digital world into a compelling and user-friendly story.
	</h2>
	<!-- <svelte:fragment slot="pic">
		<div class="flex lg:flex-1 h-96">
			<img class="object-contain" src="/shake.gif" alt="" />
		</div></svelte:fragment
	> -->
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
			{#if loading}
				'projects'
			{:else}
				<div
					class={selected === 'All' ? ' ' : project.keywords?.includes(selected) ? '' : 'hidden'}
					transition:fade={{ delay: i * 100, duration: 300 }}
				>
					<a href="/{project?.prop ? project.prop : 'notfound'}">
						<ProjectCard
							title={project.name}
							description={project.short_description}
							bg_url={project.coverimage}
						/>
					</a>
				</div>
			{/if}
		{/each}
	</div>
</div>
