<script lang="ts">
	let y: number = 0;
</script>

<svelte:window bind:scrollY={y} />
<div class=" {y > 20 ? 'bg-white' : ''} fixed flex w-full p-2">
	<div class="flex-1">
		<a href="/">
			<img class="h-6 w-6" src="/favicon.png" alt="" />
		</a>
	</div>
	<div class="flex-none space-x-2">
		<a href="/">Works</a>
		<a href="/">About Me</a>
	</div>
</div>

<style>
</style>
