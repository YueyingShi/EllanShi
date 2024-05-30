<script lang="ts">
	import Overview from './Overview.svelte';

	/** @type {import('./$types').PageData} */
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';
	let projects: any = [];
	import Banner from '$lib/components/Banner.svelte';
	import TOC from '$lib/components/TOC.svelte';
	import H2 from '$lib/components/atoms/headings/H2.svelte';
	import Button from '$lib/components/atoms/button/Button.svelte';

	import EClass from '$lib/projects/EClass.svelte';
	import FoodTinder from '$lib/projects/FoodTinder.svelte';
	import Rasch from '$lib/projects/Rasch.svelte';
	import Rasch2 from '$lib/projects/Rasch2.svelte';

	import Roommate from '$lib/projects/Roommate.svelte';
	import WayFinding from '$lib/projects/WayFinding.svelte';
	import WithU from '$lib/projects/WithU.svelte';
	import YIUI from '$lib/projects/YIUI.svelte';
	import Sugar from '$lib/projects/Sugar.svelte';
	import USVote from '$lib/projects/USVote.svelte';
	import Glow from '$lib/projects/Glow.svelte';

	let components: any = {
		Rasch,
		Rasch2,
		WithU,
		Roommate,
		YIUI,
		WayFinding,
		EClass,
		FoodTinder,
		Sugar,
		USVote,
		Glow
	};
	import { page } from '$app/stores';

	let current_project: any;

	async function getAllProjects() {
		try {
			const { data } = await supabase.from('projects').select();
			projects = data;
		} catch (err) {
			console.log(err);
		}
	}
	onMount(async () => {
		await getAllProjects();
		current_project = projects.find((e) => e.prop === $page.params.projectProp);
	});
</script>

{#if current_project?.content_component}
	<Banner imageUrl={current_project.cover_image ?? ''}>
		<h1 class="text-xl md:text-4xl w-2/3 font-medium">{current_project?.title}</h1>
		<p class="text-xl md:text-2xl w-2/3 font-medium opacity-50 hover:opacity-75">
			{current_project?.description}
		</p>
	</Banner>
	<!-- here is the general background information block -->

	<div class="max-w-6xl my-6 px-4 mx-auto">
		<Overview {current_project} />
		<div class="flex gap-12">
			<div class="hidden lg:block">
				<TOC chapters={current_project.content ?? []} />
			</div>
			<!-- <svelte:component this={components[current_project.content_component ?? 'WithU']} /> -->
			<svelte:component this={components[current_project.content_component]} />
		</div>
	</div>
{:else}
	<div class=" max-w-6xl min-h-[80vh] mx-auto flex flex-col justify-center gap-8">
		<div class="max-w-2xl flex flex-col gap-2">
			<span style="font-size:72px;">&#128532;</span>
			<H2>Project Not Found</H2>
			<p>
				Sorry, the project you are looking for is not exist. <br /> Please have a look on other projects
				in the list.
			</p>
		</div>
		<a href="/">
			<Button>Other Projects</Button>
		</a>
	</div>
{/if}
