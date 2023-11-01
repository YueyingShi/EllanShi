<script lang="ts">
	let y: number = 0;
	import { page } from '$app/stores';
	let basic = 'font-semibold pb-1 hover:border-b-2 hover:border-gray-400 hover:text-gray-600';
	let active = 'border-b-2 border-gray-700';
</script>

<svelte:window bind:scrollY={y} />
<div class=" {y > 20 ? 'bg-white' : ''} fixed w-full py-3">
	<div class=" flex px-4 max-w-6xl mx-auto">
		<div class="flex-1">
			<a href="/">
				<img class="h-6 w-6" src="/favicon.png" alt="" />
			</a>
		</div>
		<div class="flex-none flex gap-4">
			<a href="/"><p class="{basic} {$page.params ? active : ' '}">Works</p></a>
			<a href="/"><p class="{basic} {$page.params ? '' : active}">My-Story</p></a>
		</div>
	</div>
</div>

<style>
</style>
