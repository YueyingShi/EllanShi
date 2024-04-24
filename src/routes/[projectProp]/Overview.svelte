<script lang="ts">
	import H3 from '$lib/components/atoms/headings/H3.svelte';
	export let current_project: any = [];
</script>

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
			<p class="text-slate-400 w-24 flex-none">My Role</p>
			<p class="flex-1">{current_project?.role ?? '--'}</p>
		</div>
	</div>
	<div class="flex flex-col gap-2">
		<H3>Brief</H3>
		<p class="text-gray-700">{current_project?.introduction ?? '--'}</p>
	</div>
</div>
