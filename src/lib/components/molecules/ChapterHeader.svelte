<script lang="ts">
	export let title: String;
	export let bg_title: String;
	export let href: any = '#';
	export let extraClass = '';
</script>

<div class=" h-20 w-full mt-8 {extraClass}">
	<a {href} class="relative">
		<p class="w-full font-semibold italic text-7xl text-center text-slate-200">
			{bg_title.toUpperCase()}
		</p>

		<p class="absolute top-6 w-full text-center text-2xl font-medium">{title}</p>
	</a>
</div>
