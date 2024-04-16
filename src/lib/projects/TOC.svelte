<script lang="ts">
	export let chapters = [];
</script>

<div class="sticky top-0 h-64 w-40 pt-24">
	<div class=" w-full flex flex-col gap-4 list-none">
		{#each chapters as chapter}
			<a href="#{chapter}" class="list-item text-slate-400 hover:text-slate-800">{chapter}</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	p {
		color: theme(colors.slate.600);
	}
</style>
