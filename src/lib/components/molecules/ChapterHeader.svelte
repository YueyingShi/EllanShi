<script lang="ts">
	import H2 from '../atoms/types/H2.svelte';

	export let bg_title: String = '';
	export let href: any = '#';
	export let extraClass = '';
	export let id = '';
</script>

<div class="w-full {extraClass} title" {id}>
	<a {href} class="relative flex flex-col items-center">
		<H2><slot /></H2>
	</a>
</div>

<style lang="postcss">
	.title {
		scroll-margin-top: 120px;
	}
</style>
