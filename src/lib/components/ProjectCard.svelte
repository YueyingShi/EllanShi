<script lang="ts">
	import H5 from '$lib/components/atoms/headings/H5.svelte';
	export let title: string = '';
	export let description: string = '';
	export let bg_url: string =
		'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg';
</script>

<div
	class="project-card relative group rounded-sm h-56 bg-slate-500 transition-transform hover:scale-[1.03] hover:shadow-lg overflow-hidden"
	style="background-image:url({bg_url}); background-size: cover;background-position: center"
>
	<div
		class=" p-4 absolute bottom-0 group-hover:hidden w-full h-12 text-white"
		style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.7));"
	>
		<p>{title}</p>
	</div>
	<div class="p-4 h-full text-transparent group-hover:text-white flex flex-col gap-1 justify-end">
		<H5>{title}</H5>
		<p class="text-sm group-hover:text-slate-100 leading-4">{description}</p>
	</div>
</div>

<style style="postcss">
	.project-card:hover {
		background-blend-mode: multiply;
	}
</style>
