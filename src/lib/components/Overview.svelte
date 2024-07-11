<script lang="ts">
	import H3 from '$lib/components/atoms/headings/H3.svelte';
	export let current_project: any = [];
</script>

<div class="flex flex-col gap-2 text-gray-700">
	<div class="flex gap-2">
		<p class="text-slate-400 w-24 flex-none">Role</p>
		<p class="flex-1">{current_project?.role ?? '--'}</p>
	</div>
	<div class="flex gap-2">
		<p class="text-slate-400 w-24 flex-none">Start date</p>
		<p class="flex-1">{current_project?.date}</p>
	</div>
	<div class="flex gap-2">
		<p class="text-slate-400 w-24 flex-none">Scope</p>
		<p class="flex-1">{current_project?.keywords ?? '--'}</p>
	</div>

	<div class="flex gap-2">
		<p class="text-slate-400 w-24 flex-none">Brief</p>
		<p class="flex-1">{current_project?.introduction ?? '--'}</p>
	</div>
</div>
