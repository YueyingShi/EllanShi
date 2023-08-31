<script lang="ts">
	import sustainability from '$lib/json/sustainability.json';
	import MainTable from './MainTable.svelte';
</script>

<!-- the table  -->
<div class="h-[100vh] w-full flex">
	<div class="flex-none hidden bg-blue-500 h-full lg:block lg:w-72">
		<div class="">sidebar</div>
	</div>
	<MainTable />
</div>
