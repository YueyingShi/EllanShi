<script lang="ts">
	export let selected = true;
</script>

<button
	on:click
	type="button"
	class="rounded-full px-4 pt-1 pb-1.5 font-medium
    {selected
		? 'bg-slate-700 text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700'
		: 'text-gray-900 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-slate-300'}"
	><slot /></button
>
