<script lang="ts">
	export let selected = true;
	export let outline = true;
</script>

<button
	on:click
	type="button"
	class=" px-3 py-2 font-semibold
    {outline
		? 'border-2 border-orange-500 text-orange-500 transition-all hover:bg-orange-500 hover:text-white active:border-0 active:bg-orange-300 '
		: 'bg-slate-600 text-white shadow-sm hover:bg-slate-500 '}"><slot /></button
>
