<script lang="ts">
	/** @type {import('./$types').PageData} */
	import projects from '$lib/json/projects.json';
	import H1 from '$lib/components/atoms/headings/H1.svelte';
	import H4 from '$lib/components/atoms/headings/H4.svelte';
	import BestRoommate from '$lib/projects/BestRoommate.svelte';
	import WithU from '$lib/projects/WithU.svelte';
	import H3 from '$lib/components/atoms/headings/H3.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import Rasch from '$lib/projects/Rasch.svelte';
	import EDucate from '$lib/projects/EDucate.svelte';
	import YIUI from '$lib/projects/YIUI.svelte';
	import H2 from '$lib/components/atoms/headings/H2.svelte';
	import Button from '$lib/components/atoms/button/Button.svelte';
	import { Icon } from 'svelte-hero-icons';
	export let data;
	let current_project = projects.find((e) => e.prop === data.prop);
	let components: { [key: string]: any } = { Rasch, EDucate, YIUI, WithU };
</script>

{#if current_project?.component}
	<Banner>
		<H1>{current_project?.name}</H1>
		<div>{current_project?.short_description}</div>
		<div>here should be some budgets for the field</div>
	</Banner>
	<!-- here is the general background information block -->

	<div class="max-w-6xl my-6 px-4 mx-auto">
		<div class=" mt-8 mb-16 grid gap-4 lg:grid-cols-2">
			<div class="flex flex-col gap-2">
				<H3>Background</H3>
				<div class="flex gap-2">
					<p class="text-slate-800 w-1/3 flex-none">When</p>
					<p class="flex-1">{current_project?.background?.Date}</p>
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<H3>Brief</H3>
				{#if current_project?.introduction}
					{#each current_project.introduction as p}
						<p>{p}</p>
					{/each}
				{/if}
			</div>
		</div>

		<svelte:component
			this={components[current_project.component ? current_project.component : 'WithU']}
		/>
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
