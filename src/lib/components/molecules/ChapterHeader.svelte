<script lang="ts">
	export let title: String;
	export let bg_title: String;
</script>

<div class="relative h-20 w-96 my-4">
	<p class="w-full font-bold text-6xl text-center text-slate-200">{bg_title.toUpperCase()}</p>
	<p class="absolute top-4 w-full text-center text-2xl font-medium">{title}</p>
</div>
