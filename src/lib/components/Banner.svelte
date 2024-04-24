<script lang="ts">
	export let imageUrl: string =
		'https://images.unsplash.com/photo-1600172454520-134a542a2255?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<div
	id="banner"
	class="flex flex-col w-full min-h-[50vh] lg:h-96 overflow-hidden bg-slate-100 justify-center items-center"
>
	{#if imageUrl}
		<img class="w-full object-cover blur-md opacity-30" src={imageUrl} alt="Banner" />
	{/if}

	<div
		class="absolute w-full h-full flex flex-col-reverse lg:flex-row items-center p-4 gap-4 lg:gap-8 max-w-6xl mx-auto"
	>
		<div
			class="flex-1 h-full flex flex-col gap-4 items-center justify-center text-center lg:items-start lg:text-left"
		>
			<slot />
		</div>
		<slot name="pic" />
	</div>
</div>
