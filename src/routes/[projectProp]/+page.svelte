<script>
	/** @type {import('./$types').PageData} */
	import projects from '$lib/json/projects.json';
	import H1 from '$lib/components/atoms/headings/H1.svelte';
	import H4 from '$lib/components/atoms/headings/H4.svelte';
	import BestRoommate from './BestRoommate.svelte';
	import WithU from './WithU.svelte';
	export let data;
	let current_project = projects.find((e) => e.prop === data.prop);
</script>

<div id="banner" class="flex flex-col items-center justify-center lg:h-[30vh] bg-slate-200">
	<H1>{current_project?.name}</H1>
	<div>{current_project?.short_description}</div>
	<div>here should be some budgets for the field</div>
</div>
<!-- here is the general background information block -->

<div class="max-w-5xl my-6 mx-auto gap-2 sm:grid sm:grid-cols-2 sm:gap-4">
	<div>
		<H4>Background</H4>
		<p>
		When
		</p>
		<p>{current_project.}</p>
	</div>
	<div>
		<H4>Brief</H4>
		{#if current_project?.introduction}
			{#each current_project.introduction as p}
				<p>{p}</p>
			{/each}
		{/if}
	</div>
</div>

<div class="max-w-5xl my-6 mx-auto">
	<svelte:component
		this={current_project?.prop == 'with-u'
			? WithU
			: current_project?.prop == 'best-roommate'
			? BestRoommate
			: WithU}
	/>
</div>
