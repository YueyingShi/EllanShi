<script>
	export let id = '';
</script>

<h2 class="mt-2 text-3xl font-medium leading-tight text-blue-500" {id}>
	<slot />
</h2>

<style>
	h2 {
		scroll-margin-top: 120px;
	}
</style>
