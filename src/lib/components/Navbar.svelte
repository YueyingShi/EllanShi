<script lang="ts">
	let y: number = 0;
	import { page } from '$app/stores';
	let basic = 'font-semibold pb-1 border-gray-600 hover:border-b-2 opacity-50 hover:opacity-75';
	let active = 'border-b-2  border-gray-600 opacity-100';
</script>

<svelte:window bind:scrollY={y} />
<div
	class=" {y > 20 ? 'bg-white shadow-lg ' : 'bg-transparent'} transition-all fixed w-full py-3 z-10"
>
	<div class=" flex px-4 max-w-6xl mx-auto">
		<div class="flex-1">
			<a href="/">
				<img
					class="{$page.route.id === '/' || $page.route.id === '/story'
						? 'hidden'
						: 'block'} h-6 w-auto"
					src="/ellanSign.svg"
					alt=""
				/>
			</a>
		</div>
		<div class="flex-none flex gap-4">
			<a href="/"><p class="{basic} {$page.route.id === '/' ? active : ' '}">Works</p></a>
			<a href="/story"
				><p class="{basic} {$page.route.id?.includes('story') ? active : ''}">My-Story</p></a
			>
		</div>
	</div>
</div>

<style>
</style>
