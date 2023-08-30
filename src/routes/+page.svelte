<script>
	let projects = ['with you', 'best roommate', 'yiui 7', 'best receipt', 'educate'];
</script>

<div id="banner" class="h-36 bg-gray-100">banner here</div>
<div id="projects" class="gap-2 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
	{#each projects as project}
		<div class="project w-full bg-gray-200">
			<p>{project}</p>
		</div>
	{/each}
</div>
