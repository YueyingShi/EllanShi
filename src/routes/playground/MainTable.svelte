<script lang="ts">
	import sustainability from '$lib/json/sustainability.json';
</script>

<div class="flex-1 overflow-auto">
	<div class="inline-block min-w-full align-middle">
		<!-- the table  -->
		<!-- table header  -->
		<div class="absolute top-0 z-20 bg-white">operation</div>
		<div class="sticky top-10 z-10 min-w-full text-sm">
			<div
				class="flex gap-6 border-b border-gray-300 bg-white bg-opacity-75 font-semibold text-gray-900 backdrop-blur backdrop-filter py-3.5 sm:px-6 lg:px-8"
			>
				<div class="w-48">ID</div>
				<div class="w-96">Project Name</div>
				<div class="w-48">Assessor(s)</div>
				<div class="w-48">Office</div>
				<div class="w-48">Certification</div>
				<div class="w-48">Level</div>
				<div class="w-48 text-right">Floor Area(m2)</div>
				<div class="w-48">Status</div>
			</div>
		</div>
		<!-- table body  -->
		<div class="min-w-full text-sm">
			{#each sustainability as project}
				<div class="flex gap-6 border-b border-gray-200 text-gray-800 py-4 sm:px-6 lg:px-8">
					<div class="w-48">
						{project.project_id ? project.project_id : '--'}
					</div>
					<div class="w-96 font-medium">
						{project.project_name ? project.project_name : '--'}
					</div>
					<div class="w-48">
						{project.assessor ? project.assessor : '--'}
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
						{project.area_m2 ? project.area_m2.toFixed(2).toLocaleString() : '--'}
					</div>
					<div class="w-48">
						{project.status}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
