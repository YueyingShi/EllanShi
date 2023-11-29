<script>
	import H4 from '$lib/components/atoms/headings/H4.svelte';
	import H5 from '$lib/components/atoms/headings/H5.svelte';
	import ChapterHeader from '$lib/components/molecules/ChapterHeader.svelte';
</script>

<div class="flex flex-col gap-8 pr-40 text-lg pb-8">
	<slot />
</div>

<style lang="postcss">
	p {
		color: theme(colors.slate.600);
	}
</style>
