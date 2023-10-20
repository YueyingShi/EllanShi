<script lang="ts">
	export let selected = true;
</script>

<button
	on:click
	type="button"
	class="rounded-md px-2.5 py-1.5 text-sm font-semibold
    {selected
		? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
		: 'text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'}"><slot /></button
>
