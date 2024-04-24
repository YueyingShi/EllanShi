<script lang="ts">
	import H5 from '$lib/components/atoms/headings/H5.svelte';
	export let title: string = '';
	export let description: string = '';
	export let bg_url: string =
		'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg';
</script>

<div
	class="project-card relative group h-56 bg-slate-500 transition-all duration-300 overflow-hidden hover:rounded-[160px]"
	style="background-image:url({bg_url}); background-size: cover;background-position: center"
/>
<div class="py-3">
	<p class="text-lg font-semibold">{title}</p>
	<p class="text-base text-slate-600">{description}</p>
</div>
