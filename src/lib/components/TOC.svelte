<script lang="ts">
	export let chapters: string[] = [];
</script>

<div class="sticky top-20 w-40">
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
