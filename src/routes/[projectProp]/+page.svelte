<script>
	/** @type {import('./$types').PageData} */
	import projects from '$lib/json/projects.json';
	import BestRoommate from './BestRoommate.svelte';
	import WithU from './WithU.svelte';
	export let data;
	let current_project = projects.find((e) => e.prop === data.prop);
</script>

<div id="banner" class="flex flex-col items-center justify-center lg:h-[30vh] bg-slate-200">
	<h1 class="text-3xl">{current_project?.name}</h1>
	<div>{current_project?.short_description}</div>
	<div>here should be some budgets for the field</div>
</div>
<!-- here is the general background information block -->

<div class="max-w-5xl my-6 mx-auto gap-2 sm:grid sm:grid-cols-2 sm:gap-4">
	<div>
		<p>Background</p>
	</div>
	<div>
		<p>Introduction</p>
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
