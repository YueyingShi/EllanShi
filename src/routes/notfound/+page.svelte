<script>
	import Button from '$lib/components/atoms/button/Button.svelte';
	import H2 from '$lib/components/atoms/headings/H2.svelte';
</script>

<div class=" max-w-6xl min-h-[80vh] mx-auto flex flex-col justify-center gap-8">
	<div class="max-w-2xl flex flex-col gap-2">
		<span style="font-size:72px;">&#128532;</span>
		<H2>Project Not Found</H2>
		<p>
			Sorry, the page you are looking for is not exist. <br />
		</p>
	</div>
	<a href="/">
		<Button>Home Page</Button>
	</a>
</div>
