<script>
	export let author = '';
</script>

<figure class="border-l border-indigo-600 pl-9">
	<blockquote class="font-semibold text-gray-900">
		<slot />
	</blockquote>
	<figcaption class="mt-6 flex gap-x-4">
		<div class="text-sm leading-6">
			{author}
		</div>
	</figcaption>
</figure>
