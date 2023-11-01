<script lang="ts">
	import H3 from '$lib/components/atoms/headings/H3.svelte';
	import H4 from '$lib/components/atoms/headings/H4.svelte';
	import H5 from '$lib/components/atoms/headings/H5.svelte';
	import postcss from 'postcss';

	export let title: string = '';
	export let description: string = '';
	export let bg_url: string = '';
</script>

<div
	class="project-card rounded-md w-full h-48 p-4 bg-slate-500 text-transparent hover:shadow-lg hover:text-white"
>
	<H5>{title}</H5>
	<p>{description}</p>
</div>

<style style="postcss">
	.project-card {
		background-image: url('https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8');
		background-size: cover;
	}
	.project-card:hover {
		background-blend-mode: multiply;
	}
</style>
