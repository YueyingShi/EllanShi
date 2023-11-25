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
	let loading = true;
	let showMore = false;

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
	<div class="flex gap-4 pb-2 align-bottom">
		<div class="">
			<H1>Hi, here is <img src="/ellanSign.svg" class="h-12 px-2 pb-1 inline" alt="Ellan sign" /></H1
			>
		</div>
	</div>
	<p class="text-lg md:text-xl">UX Designer /Researcher/ Web Developer</p>
</Banner>

<!-- projects  -->

<div class="flex         flex-col items-center mx-auto py-8 px-4 w-full max-w-6xl">
	<ChapterHeader title="My Works" bg_title="01" />
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

	<div id="projects" class=" mt-4 w-full gap-4 grid xl:grid-cols-2">
		{#each projects as project, i}
			{#if selected === 'All'}
				{#if loading}
					'projects'
				{:else}
					<div transition:fade={{ delay: i * 100, duration: 300 }}>
						<a
							href="/{project?.prop ? project.prop : 'notfound'}"
							class={!showMore && i > 5 ? 'hidden' : ''}
						>
							<ProjectCard
								title={project.name}
								description={project.short_description}
								index={i}
								bg_url={project.coverimage}
							/>
						</a>
					</div>
				{/if}
			{:else}
				<div class="{project.keywords?.includes(selected) ? '' : 'hidden'} transition-all">
					<a href="/{project?.prop ? project.prop : 'notfound'}">
						<ProjectCard
							title={project.name}
							description={project.short_description}
							index={i}
							bg_url={project.coverimage}
						/>
					</a>
				</div>
			{/if}
		{/each}
	</div>
	<Button on:click={() => (showMore = !showMore)}>{showMore ? 'Show Less' : 'Show More'}</Button>
</div>

<!-- about  -->
<div class="flex flex-col items-center mx-auto py-8 px-4 w-full max-w-6xl">
	<ChapterHeader title="About who I am" bg_title="02" />
	<div class="grid xl:grid-cols-2 gap-4">
		<div class="flex flex-col gap-8">
			<div class="flex flex-col gap-2">
				<H5>My Principle: Data-driven & User-centric</H5>
				<p>
					In the design world, I advocate for the integration of data-driven insights and
					user-centric strategies. Analyzing user feedback and behavior empowers designers to craft
					solutions that are not just visually appealing but also functionally effective, addressing
					real user challenges.
				</p>
			</div>
			<div class="flex flex-col gap-2">
				<H5>My Philosophy: Design Empowered by Tech</H5>
				<p>
					As a designer, I'm dedicated to unraveling technology's intricacies, not treating it as a
					black box. I firmly believe that a designer's ability to enhance user experiences thrives
					on a deep understanding of technology. Explaining a black box becomes challenging when
					you're in the dark about its inner workings.
				</p>
			</div>

			<div class="flex flex-col gap-2">
				<H5>My Ambition: Cross-media Cross-senses Interaction</H5>
				<p>
					I dedicate myself to crafting experiences that seamlessly blend the digital and human
					realms. My ambition is to create subtly impressive, cross-sensory encounters that
					captivate without overwhelming.
				</p>
			</div>

			<p>Let's redefine the boundaries of design!</p>

			<div>
				<Button>My Story</Button>
			</div>
		</div>
		<div class="bg-gray w-full h-full"><img src="/Ellan Shi.jpg" alt="signature" /></div>
	</div>
</div>
