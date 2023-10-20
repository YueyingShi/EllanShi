<script lang="ts">
	export let title: string = '';
	export let description: string = '';
</script>

<div class="rounded-md w-full h-48 p-4 bg-slate-200 hover:shadow-lg">
	<p class="text-xl font-semibold">{title}</p>
	<p>{description}</p>
</div>
