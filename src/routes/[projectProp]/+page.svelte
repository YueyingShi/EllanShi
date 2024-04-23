<script lang="ts">
	/** @type {import('./$types').PageData} */
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';
	let projects: any = [];

	import BestRoommate from '$lib/projects/BestRoommate.svelte';
	import WithU from '$lib/projects/WithU.svelte';
	import H3 from '$lib/components/atoms/headings/H3.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import TOC from '$lib/components/TOC.svelte';

	import Rasch from '$lib/projects/Rasch.svelte';
	import EDucate from '$lib/projects/EDucate.svelte';
	import YIUI from '$lib/projects/YIUI.svelte';
	import H2 from '$lib/components/atoms/headings/H2.svelte';
	import Button from '$lib/components/atoms/button/Button.svelte';
	import { Icon } from 'svelte-hero-icons';
	import { page } from '$app/stores';

	let current_project: any;
	let components: { [key: string]: any } = { Rasch, EDucate, YIUI, WithU };
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
	<Banner>
		<h1 class="text-xl md:text-4xl w-2/3 font-medium">{current_project?.title}</h1>
		<p class="text-xl md:text-2xl w-2/3 font-medium text-slate-300">
			{current_project?.description}
		</p>
	</Banner>
	<!-- here is the general background information block -->

	<div class="max-w-6xl my-6 px-4 mx-auto">
		<div class=" mt-8 mb-16 grid gap-4 lg:grid-cols-2">
			<div class="flex flex-col gap-2 text-gray-700">
				<H3>Background</H3>
				<div class="flex gap-2">
					<p class="text-slate-400 w-24 flex-none">Date</p>
					<p class="flex-1">{current_project?.date}</p>
				</div>
				<div class="flex gap-2">
					<p class="text-slate-400 w-24 flex-none">Location</p>
					<p class="flex-1">{current_project?.location}</p>
				</div>
				<div class="flex gap-2">
					<p class="text-slate-400 w-24 flex-none">Project</p>
					<p class="flex-1">{current_project?.project ?? '--'}</p>
				</div>
				<div class="flex gap-2">
					<p class="text-slate-400 w-24 flex-none">Team</p>
					<p class="flex-1">{current_project?.team ?? '--'}</p>
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<H3>Brief</H3>
				<p class="text-gray-700">{current_project?.introduction ?? '--'}</p>
				<!-- {#if current_project?.introduction}
					{#each current_project.introduction as p}
						<p class="text-gray-700">{p}</p>
					{/each}
				{/if} -->
			</div>
		</div>
		<div class="flex gap-12">
			<TOC
				chapters={current_project.content ?? [
					'Problem Define',
					'Research',
					'Solutions',
					'Conclusion'
				]}
			/>
			<svelte:component this={components[current_project.content_component ?? 'WithU']} />
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
