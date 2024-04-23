<script lang="ts">
	export let bg_title: String = '';
	export let href: any = '#';
	export let extraClass = '';
</script>

<div class=" h-20 w-full mt-8 {extraClass}">
	<a {href} class="relative flex flex-col items-center">
		<p class="w-full font-semibold italic text-7xl text-center text-slate-200">
			{bg_title.toUpperCase()}
		</p>

		<p class="absolute top-6 min-w-[240px] text-center text-2xl font-medium"><slot /></p>
	</a>
</div>
