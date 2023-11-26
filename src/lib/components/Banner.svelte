<script lang="ts">
</script>

<div id="banner" class="w-full min-h-[520px] h-[50vh] lg:h-96 bg-slate-100 justify-center">
	<div class=" flex flex-col-reverse lg:flex-row px-4 gap-2 lg:gap-8 max-w-6xl mx-auto">
		<div
			class="flex-1 flex flex-col text-center items-center lg:items-start lg:text-left justify-center"
		>
			<slot />
		</div>
		<div class="flex lg:flex-1 lg:py-4 h-96">
			<slot name="pic" />
		</div>
	</div>
</div>
