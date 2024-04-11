<script>
	import Button from '$lib/components/atoms/button/Button.svelte';
	import H2 from '$lib/components/atoms/headings/H2.svelte';
</script>

<div class="max-w-6xl mx-auto flex flex-col items-center mt-24 gap-4">
	<div class="max-w-2xl flex flex-col gap-2">
		<H2>Project DataBase</H2>
	</div>
	<!-- <div class="flex gap-4">
		<a href="/data">
			<Button>All Projects</Button>
		</a>
		<a href="/data/new">
			<Button>New Project</Button>
		</a>
	</div> -->
	<slot />
</div>
