<script lang="ts">
</script>

<div id="banner" class="flex flex-col w-full min-h-[50vh] lg:min-h-96 bg-slate-100 justify-center">
	<div
		class="flex-1 w-full h-full flex flex-col-reverse lg:flex-row items-center p-4 gap-2 lg:gap-8 max-w-6xl mx-auto"
	>
		<div
			class="flex-1 h-full flex flex-col items-center justify-center text-center lg:items-start lg:text-left"
		>
			<slot />
		</div>
		<slot name="pic" />
	</div>
</div>
