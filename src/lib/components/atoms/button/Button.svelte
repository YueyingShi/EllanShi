<script lang="ts">
	export let outline = true;
</script>

<button
	on:click
	type="button"
	class=" px-3 py-2 font-semibold
    {outline
		? 'border-2 border-slate-700 text-slate-900 transition-all hover:bg-slate-700 hover:text-white active:border-0 active:bg-slate-300 '
		: 'bg-slate-600 text-white shadow-sm hover:bg-slate-500 '}"><slot /></button
>
