<script lang="ts">
	export let title = '';
</script>

<div class="flex flex-col">
	<dt class="text-base font-semibold leading-7 text-gray-900">
		<div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
			<slot name="icon" />
		</div>
		{title}
	</dt>
	<dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
		<p class="flex-auto">
			<slot name="description" />
		</p>
	</dd>
</div>
