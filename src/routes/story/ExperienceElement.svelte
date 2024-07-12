<script lang="ts">
	import H4 from '$lib/components/atoms/types/H4.svelte';
	export let title: string = '';
	export let subtitle: string = '';
	export let description: string = '';
</script>

<div>
	<p class="font-medium">{title}</p>
	<p class="opacity-50 backdrop:pb-1">{subtitle}</p>
	<p>
		{description}
	</p>
</div>
