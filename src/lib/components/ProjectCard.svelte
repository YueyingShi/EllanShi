<script lang="ts">
	import H5 from '$lib/components/atoms/headings/H5.svelte';
	export let index = 1;
	export let title: string = '';
	export let description: string = '';
	export let bg_url: string =
		'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg';
</script>

<div
	class="project-card rounded-md h-56 p-4 bg-slate-500 text-transparent transition-transform hover:scale-[1.03] hover:shadow-lg hover:text-white"
	style="background-image:url({bg_url}); background-size: cover;background-position: center"
>
	<H5>{title}</H5>
	<p>{description}</p>
</div>

<style style="postcss">
	.project-card:hover {
		background-blend-mode: multiply;
	}
</style>
