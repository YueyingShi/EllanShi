<script lang="ts">
	export let selected = true;
</script>

<button
	on:click
	type="button"
	class="rounded-full px-4 pt-1 pb-1.5 font-medium
    {selected
		? 'bg-slate-600 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
		: 'text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-slate-200'}"
	><slot /></button
>
