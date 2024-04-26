<script lang="ts">
	import H4 from '$lib/components/atoms/headings/H4.svelte';
	export let title: string = '';
	export let subtitle: string = '';
	export let description: string = '';
</script>

<div>
	<p class="font-medium">{title}</p>
	<p class="text-slute-600">{subtitle}</p>
	<p>
		{description}
	</p>
</div>
