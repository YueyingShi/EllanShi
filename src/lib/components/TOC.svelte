<script lang="ts">
	export let chapters = '';
	chapters = JSON.parse(chapters);
	let windowY = 0;

	// Function to handle scroll and center target in viewport
	function scrollToChapter(id: string) {
		const target = document.getElementById(id);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}
</script>

<svelte:window bind:scrollY={windowY} />

<div
	class="  {windowY > 420
		? `lg:opacity-100`
		: ``}  opacity-0 fixed top-24 left-16 w-40 transition-all duration-200"
>
	<div class="w-full flex flex-col gap-4 list-none">
		{#if chapters}
			{#each chapters as chapter}
				<a
					href="#{chapter}"
					on:click|preventDefault={() => scrollToChapter(chapter)}
					class="list-item text-slate-400 hover:text-slate-800"
				>
					{chapter}
				</a>
			{/each}
		{/if}
	</div>
</div>

<style lang="postcss">
	p {
		color: theme(colors.slate.600);
	}
</style>
