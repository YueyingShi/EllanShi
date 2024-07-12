<script lang="ts">
	import H5 from '../atoms/types/H5.svelte';

	export let title = '';
</script>

<div class="w-full py-2.5 justify-start items-start gap-4 inline-flex">
	<div class="w-40 flex-col justify-start items-start gap-1 inline-flex">
		<div class="p-3 bg-blue-600 rounded-lg justify-start items-center inline-flex">
			<slot class=" relative" name="icon" />
		</div>

		<H5>
			{title}
		</H5>
	</div>
	<div class="grow shrink basis-0">
		<slot name="text" />
	</div>
</div>
