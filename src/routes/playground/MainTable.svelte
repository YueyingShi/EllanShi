<script lang="ts">
	import sustainability from '$lib/json/sustainability.json';
</script>

<!-- the table  -->
<div class="flex-1 overflow-x-auto bg-slate-200 h-full">
	<!-- horizontal scroll  -->
	<div class="relative h-full">
		<!-- table header  -->
		<div class="absolute bg-white h-12 flex font-semibold px-4">
			<div class="w-48">id</div>
			<div class="w-96">project_name</div>
			<div class="w-48">assessor</div>
			<div class="w-48">office</div>
			<div class="w-48">certification</div>
			<div class="w-48">level</div>
			<div class="w-48 text-right">area (m2)</div>
			<div class="w-48">status</div>
		</div>
		<!-- table body  -->
		<div class="block overflow-y-scroll h-full px-4">
			{#each sustainability as project}
				<div class="flex">
					<div class="w-48">
						{project.project_id ? project.project_id : '--'}
					</div>
					<div class="w-96">
						{project.project_name}
					</div>
					<div class="w-48">
						{project.assessor}
					</div>
					<div class="w-48">
						{project.office}
					</div>
					<div class="w-48">
						{project.certification}
					</div>
					<div class="w-48">
						{project.level}
					</div>
					<div class="w-48 text-right">
						{project.area_m2?.toFixed(2).toLocaleString()}
					</div>
					<div class="w-48">
						{project.status}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
